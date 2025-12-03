import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export type User = {
  email: string;
  name?: string;
  username?: string;
  city?: string;
  isOnboarding?: boolean;
};

export const createProfile = async (uid: string, email: string) => {
  await setDoc(doc(db, "profiles", uid), {
    email,
    isOnboarding: true,
  });
};

export const findUser = async (uid: string) => {
  const userRef = doc(db, "profiles", uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) return null;

  return snap.data() as User;
};
