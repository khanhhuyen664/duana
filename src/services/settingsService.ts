import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';

export interface GlobalSettings {
  backgroundColor: string;
  logoUrl: string;
}

const DEFAULT_SETTINGS: GlobalSettings = {
  backgroundColor: '#002147',
  logoUrl: '',
};

export async function getGlobalSettings(): Promise<GlobalSettings> {
  const path = 'settings/global';
  try {
    const docRef = doc(db, 'settings', 'global');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as GlobalSettings;
    }
  } catch (error) {
    console.error('Error fetching global settings:', error);
    // If it's permission denied, handle it so the workspace/system knows
    if (error instanceof Error && (error.message.includes('permission') || error.message.includes('Permission'))) {
      handleFirestoreError(error, OperationType.GET, path);
    }
  }
  return DEFAULT_SETTINGS;
}

export async function updateGlobalSettings(settings: Partial<GlobalSettings>): Promise<GlobalSettings> {
  const path = 'settings/global';
  const docRef = doc(db, 'settings', 'global');
  const currentSettings = await getGlobalSettings();
  const updated = {
    ...currentSettings,
    ...settings,
  };
  try {
    await setDoc(docRef, updated);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
  return updated;
}
