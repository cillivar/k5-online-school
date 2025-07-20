import { auth } from "./firebase";
import { signInWithEmailAndPassword, signOut, UserCredential } from "firebase/auth";


export const login = (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = (): Promise<void> => {
  return signOut(auth);
};
