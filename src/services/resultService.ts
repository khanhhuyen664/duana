import { collection, doc, getDocs, getDoc, setDoc, query, where } from 'firebase/firestore';
import { db } from '../firebase';

export interface ExamResult {
  id: string; // usually candidateId
  fullName: string;
  phoneNumber: string;
  testId: string;
  status: string;
  objectiveScore: number;
  answers: Record<string, any>;
  writingGrades?: Record<string, any>;
  speakingFiles?: Record<string, any>;
  durationSeconds: number;
  tabViolations: number;
  startTime: string;
  endTime: string | null;
  createdAt: string;
}

const RESULTS_COLLECTION = 'results';

export async function getResults(): Promise<ExamResult[]> {
  try {
    const querySnapshot = await getDocs(collection(db, RESULTS_COLLECTION));
    const results: ExamResult[] = [];
    querySnapshot.forEach((docSnap) => {
      results.push({ id: docSnap.id, ...docSnap.data() } as ExamResult);
    });
    return results;
  } catch (error) {
    console.error('Error fetching results:', error);
    return [];
  }
}

export async function getResultByCandidateId(candidateId: string): Promise<ExamResult | null> {
  try {
    const docRef = doc(db, RESULTS_COLLECTION, candidateId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as ExamResult;
    }
  } catch (error) {
    console.error('Error fetching result:', error);
  }
  return null;
}

export async function saveResult(result: ExamResult): Promise<void> {
  const docRef = doc(db, RESULTS_COLLECTION, result.id);
  await setDoc(docRef, result);
}
