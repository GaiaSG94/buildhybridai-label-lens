import type { AI } from 'firebase/ai';
import { buildCrossCheckPrompt, escalateKeys, type Escalation } from './core/escalate';
import { buildReading } from './core/merge';
import { parseModelOutput } from './core/parse';
import { buildReadingPrompt } from './core/prompt';
import type { LabelReading } from './core/types';
import { createCloudReader, createDeviceReader, generateWithImage, type ImagePart } from './models';

export interface ReadOptions {
  threshold: number;
  watched: readonly string[];
  cloudModel: string;
}

export interface ReadOutcome {
  reading: LabelReading;
  escalations: Escalation[];
  /** True when the on-device model was not available and the SDK used the cloud. */
  deviceFallback: boolean;
}

/**
 * One photo, two passes:
 *  1. the hybrid model (on device first) reads every field;
 *  2. only the fields it was unsure about are cross-checked by the cloud.
 */
export async function readLabel(ai: AI, image: ImagePart, options: ReadOptions): Promise<ReadOutcome> {
  const device = createDeviceReader(ai, options.cloudModel);
  const first = await generateWithImage(device, buildReadingPrompt(), image);
  const local = parseModelOutput(first.text);
  const escalations = escalateKeys(local, options.threshold, options.watched);

  let crossCheck = undefined;
  let cloudMs = 0;
  if (escalations.length > 0) {
    const cloud = createCloudReader(ai, options.cloudModel);
    const prompt = buildCrossCheckPrompt(
      escalations.map((item) => item.key),
      escalations,
      options.watched,
    );
    const second = await generateWithImage(cloud, prompt, image);
    crossCheck = parseModelOutput(second.text);
    cloudMs = second.latencyMs;
  }

  const reading = buildReading({
    local,
    crossCheck,
    deviceMs: first.latencyMs,
    cloudMs,
    deviceSource: first.source,
  });
  return { reading, escalations, deviceFallback: first.source === 'in_cloud' };
}
