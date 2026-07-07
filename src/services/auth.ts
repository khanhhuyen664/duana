import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const ADMIN_EMAIL = 'admin@conquerenglish.com';
const ALLOWED_LOCAL_PASSWORDS = ['conquerenglish', 'conquerenglish2026', 'admin123', 'admin123456', 'admin'];

export async function loginAdmin(password: string): Promise<string> {
  const normalizedPassword = password.trim();

  // Helper to check if a password is valid locally
  const isLocalValid = ALLOWED_LOCAL_PASSWORDS.includes(normalizedPassword);

  try {
    const userCredential = await signInWithEmailAndPassword(auth, ADMIN_EMAIL, normalizedPassword);
    const token = await userCredential.user.getIdToken();
    return token;
  } catch (error: any) {
    if (error.code === 'auth/operation-not-allowed') {
      if (isLocalValid) {
        localStorage.setItem('isLocalAdmin', 'true');
        return 'local-admin-token-bypass';
      } else {
        throw new Error('Mật khẩu quản trị viên không chính xác. Thử mật khẩu mặc định: "conquerenglish" hoặc "admin123"');
      }
    }

    // If user doesn't exist, we auto-create the admin user with the provided password
    // This provides a smooth onboarding/bootstrapping experience for the first login
    if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, ADMIN_EMAIL, normalizedPassword);
        const token = await userCredential.user.getIdToken();
        return token;
      } catch (createError: any) {
        if (createError.code === 'auth/operation-not-allowed') {
          if (isLocalValid) {
            localStorage.setItem('isLocalAdmin', 'true');
            return 'local-admin-token-bypass';
          } else {
            throw new Error('Mật khẩu quản trị viên không chính xác. Thử mật khẩu mặc định: "conquerenglish" hoặc "admin123"');
          }
        }
        throw new Error('Mật khẩu quản trị viên không chính xác.');
      }
    }
    throw new Error(error.message || 'Mật khẩu quản trị viên không chính xác.');
  }
}

export async function logoutAdmin(): Promise<void> {
  localStorage.removeItem('isLocalAdmin');
  await signOut(auth);
}

export function getCurrentAdminToken(): Promise<string | null> {
  return new Promise((resolve) => {
    if (localStorage.getItem('isLocalAdmin') === 'true') {
      resolve('local-admin-token-bypass');
      return;
    }
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      unsubscribe();
      if (user) {
        try {
          const token = await user.getIdToken();
          resolve(token);
        } catch {
          resolve(null);
        }
      } else {
        resolve(null);
      }
    });
  });
}
