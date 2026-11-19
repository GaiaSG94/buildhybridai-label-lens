import { getFirestore, addDoc, collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { toStoredReading } from '../core/history';
import type { LabelReading, StoredReading } from '../core/types';
import type { Services } from '../firebase';

const COLLECTION = 'labels';

const db = (services: Services) => getFirestore(services.app);

/** Save the extracted text of a reading. The photo is never part of it. */
export async function saveReading(services: Services, reading: LabelReading): Promise<void> {
  const stored = toStoredReading(reading);
  await addDoc(collection(db(services), COLLECTION), {
    ...stored,
    readAt: stored.readAt,
    savedAt: Date.now(),
  });
}

/** Most recent readings, newest first (limited: the history page is a gallery). */
export async function listReadings(services: Services, max = 40): Promise<LabelReading[]> {
  const snapshot = await getDocs(
    query(collection(db(services), COLLECTION), orderBy('readAt', 'desc'), limit(max)),
  );
  return snapshot.docs.map((doc) => {
    const data = doc.data() as StoredReading;
    return { ...data, id: doc.id };
  });
}
