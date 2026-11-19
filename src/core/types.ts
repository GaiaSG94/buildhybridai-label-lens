/** Domain types for Label Lens. Pure, no Firebase, no DOM. */

/** Where the value was produced: on the device (LOCAL) or in the cloud (CLOUD). */
export type Provenance = 'local' | 'cloud';

/** Text fields and numeric fields (nutrition) do not parse the same way. */
export type FieldKind = 'text' | 'number';

/** A field as extracted by a model, before provenance is decided. */
export interface RawField {
  value: string;
  confidence: number;
  /** Why the on-device model was unsure (kept for the cloud cross-check note). */
  why?: string;
}

/** The raw output of one model pass, parsed but not merged yet. */
export interface RawReading {
  product: string;
  netWeight: string;
  fields: Record<string, RawField>;
}

/** A field of the final reading, with its provenance. */
export interface LabelField {
  key: string;
  label: string;
  category: string;
  kind: FieldKind;
  value: string;
  numeric: number | null;
  unit: string;
  confidence: number;
  provenance: Provenance;
  reason?: string;
  zone?: number;
}

/** A finished reading: one photo, one pass on device, one cross-check in the cloud. */
export interface LabelReading {
  id: string;
  productKey: string;
  productName: string;
  netWeight: string;
  readAt: number;
  fields: LabelField[];
  /** Canonical EU 14 allergens found in the "contains" field. */
  allergens: string[];
  /** Canonical EU 14 allergens found in the "may contain" field. */
  traces: string[];
  localCount: number;
  cloudCount: number;
  deviceMs: number;
  cloudMs: number;
  totalMs: number;
  /** Where the on-device pass actually ran (the SDK can fall back to the cloud). */
  deviceSource: 'on_device' | 'in_cloud';
}

/** A version of a label stored in Firestore (text only, never the photo). */
export interface StoredReading extends LabelReading {
  photoStored: false;
}
