import { auth } from "@/lib/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAdditionalUserInfo,
} from "@firebase/auth";
import { createProfile } from "./userService";

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const info = getAdditionalUserInfo(result);

    if (info?.isNewUser) {
      await createProfile(result.user.uid, result.user.email ?? "");
    }

    return { user: result.user, isNewUser: info?.isNewUser };
  } catch (err) {
    throw new Error(`Error happened: ${err}`);
  }
}

export async function register(email: string, password: string) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await createProfile(result.user.uid, email);
    return result;
  } catch (err) {
    throw new Error(`Error happened: ${err}`);
  }
}

export function login(email: string, password: string) {
  try {
    signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    throw new Error(`Error happened: ${err}`);
  }
}

export function logout() {
  return signOut(auth);
}

export function onUserChanged(callback: (user: any) => void) {
  return onAuthStateChanged(auth, callback);
}
