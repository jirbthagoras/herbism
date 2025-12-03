"use client";

import { onUserChanged } from "@/services/authService";
import { findUser, User } from "@/services/userService";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: User | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // listen for Firebase auth changes
    const unsubscribe = onUserChanged(async (firebaseUser) => {
      if (firebaseUser) {
        setLoading(true);

        const activeUser = await findUser(firebaseUser.uid);
        console.log(activeUser);

        setUser(activeUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    console.log("User updated:", user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
