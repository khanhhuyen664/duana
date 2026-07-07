import { ref, uploadBytes, getDownloadURL, uploadString } from 'firebase/storage';
import { storage } from '../firebase';

/**
 * Uploads a standard File or Blob object to Firebase Storage and returns its download URL.
 */
export async function uploadFile(fileOrBlob: File | Blob, path: string): Promise<string> {
  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, fileOrBlob);
  return getDownloadURL(snapshot.ref);
}

/**
 * Uploads a Base64 data string to Firebase Storage and returns its download URL.
 */
export async function uploadBase64(base64Data: string, path: string, contentType: string): Promise<string> {
  const storageRef = ref(storage, path);
  
  // Clean base64 string (remove data:audio/wav;base64, etc. prefix if present)
  const cleanBase64 = base64Data.replace(/^data:[^;]+;base64,/, '');
  
  const snapshot = await uploadString(storageRef, cleanBase64, 'base64', {
    contentType,
  });
  return getDownloadURL(snapshot.ref);
}
