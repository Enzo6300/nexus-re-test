import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export function createBrowserClient(): SupabaseClient | null {
  if (typeof window === "undefined") return null;
  
  // Récupération des variables d'environnement
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  // Vérification et logs en développement pour diagnostiquer
  if (process.env.NODE_ENV === "development") {
    if (!supabaseUrl) {
      console.error("❌ NEXT_PUBLIC_SUPABASE_URL est manquant");
    }
    if (!supabaseAnonKey) {
      console.error("❌ NEXT_PUBLIC_SUPABASE_ANON_KEY est manquant");
    }
    if (supabaseUrl && supabaseAnonKey) {
      console.log("✅ Variables Supabase configurées correctement");
    }
  }
  
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }
  
  return createClient(supabaseUrl, supabaseAnonKey);
}


