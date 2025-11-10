"use client";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { Session, User, type SupabaseClient } from "@supabase/supabase-js";
import { createBrowserClient } from "../lib/supabaseClient";
import { createContext, useContext } from "react";

type AuthContextValue = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue>({
  user: null,
  session: null,
  loading: true,
  async signInWithEmail() {},
  async signUpWithEmail() {},
  async signOut() {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const clientRef = useRef<SupabaseClient | null>(null);

  useEffect(() => {
    clientRef.current = createBrowserClient();
    if (!clientRef.current) {
      setLoading(false);
      return;
    }
    const init = async () => {
      const { data } = await clientRef.current!.auth.getSession();
      setSession(data.session ?? null);
      setUser(data.session?.user ?? null);
      setLoading(false);
    };
    init();
    const { data: sub } = clientRef.current.auth.onAuthStateChange((_e, s) => {
      setSession(s ?? null);
      setUser(s?.user ?? null);
    });
    return () => {
      sub.subscription.unsubscribe();
    };
  }, []);

  const ensureClient = () => {
    if (!clientRef.current) {
      throw new Error("Configuration Supabase manquante. Ajoutez les variables d’environnement.");
    }
    return clientRef.current;
  };

  const signInWithEmail = async (email: string, password: string) => {
    await ensureClient().auth.signInWithPassword({ email, password });
  };
  const signUpWithEmail = async (email: string, password: string) => {
    await ensureClient().auth.signUp({ email, password });
  };
  const signOut = async () => {
    await ensureClient().auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{ user, session, loading, signInWithEmail, signUpWithEmail, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

