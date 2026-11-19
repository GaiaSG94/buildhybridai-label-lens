import {
  getGenerativeModel,
  InferenceMode,
  InferenceSource,
  type AI,
  type GenerativeModel,
} from 'firebase/ai';

/** An image ready for the model: base64 payload plus its MIME type. */
export interface ImagePart {
  data: string;
  mimeType: string;
}

export interface ModelAnswer {
  text: string;
  source: 'on_device' | 'in_cloud';
  latencyMs: number;
}

/** On-device first: the hybrid model falls back to the cloud if Nano is absent. */
export function createDeviceReader(ai: AI, cloudModel: string): GenerativeModel {
  return getGenerativeModel(ai, {
    mode: InferenceMode.PREFER_ON_DEVICE,
    onDeviceParams: {
      createOptions: { expectedInputs: [{ type: 'text' }, { type: 'image' }] },
    },
    inCloudParams: { model: cloudModel },
  });
}

/** Cloud-only model: the cross-check pass never runs on the device. */
export function createCloudReader(ai: AI, cloudModel: string): GenerativeModel {
  return getGenerativeModel(ai, {
    mode: InferenceMode.ONLY_IN_CLOUD,
    inCloudParams: { model: cloudModel },
  });
}

/** Send one image and one prompt; report where the answer actually ran. */
export async function generateWithImage(
  model: GenerativeModel,
  prompt: string,
  image: ImagePart,
): Promise<ModelAnswer> {
  const started = performance.now();
  const result = await model.generateContent([
    { type: 'text', text: prompt },
    { type: 'inlineData', inlineData: image },
  ]);
  const source = result.response.inferenceSource === InferenceSource.IN_CLOUD ? 'in_cloud' : 'on_device';
  return {
    text: result.response.text(),
    source,
    latencyMs: Math.round(performance.now() - started),
  };
}

/** Split a `data:image/jpeg;base64,…` URL into the inline payload. */
export function toImagePart(dataUrl: string): ImagePart {
  const match = /^data:(image\/[a-z+]+);base64,(.+)$/i.exec(dataUrl);
  if (!match) throw new Error('Not an image: expected a JPEG or PNG file.');
  return { mimeType: match[1], data: match[2] };
}

/** Read a File as a data URL (kept in memory only, never persisted). */
export function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('The image could not be read.'));
    reader.readAsDataURL(file);
  });
}
