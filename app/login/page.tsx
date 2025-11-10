"use client";
import { useAuth } from "../../components/AuthProvider";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { Shield, LockKeyhole } from "lucide-react";

const schema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "6 caractères minimum"),
});
type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const { signInWithEmail } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setError(null);
    try {
      await signInWithEmail(data.email, data.password);
    } catch (e: any) {
      setError(e?.message || "Échec de connexion");
    }
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)] blur-3xl" />
      </div>
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 md:flex-row md:items-start">
        <div className="w-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_55px_-24px_rgba(15,23,42,0.65)] md:w-1/2">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
            <Shield size={18} className="text-[var(--brand)]" />
            <span>Console client</span>
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-white/90">Connexion sécurisée</h1>
          <p className="mt-2 text-sm text-foreground/70">
            Accédez à vos dashboards Sentinel360, rapports d’audit et documents de gouvernance.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-foreground/60">
            <li>• Authentification sécurisée Supabase</li>
            <li>• Sessions chiffrées côté navigateur</li>
            <li>• Support 24/7 pour incidents critiques</li>
          </ul>
          <div className="mt-8 flex h-32 w-full items-center justify-center rounded-2xl border border-white/10 bg-black/25">
            <LockKeyhole size={40} className="text-[var(--brand)]" />
          </div>
        </div>

        <div className="w-full rounded-3xl border border-white/10 bg-black/30 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-foreground/50">Email</label>
              <input
                type="email"
                className="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-3 py-3 text-sm text-white placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/60"
                placeholder="votre.email@entreprise.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                Mot de passe
              </label>
              <input
                type="password"
                className="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-3 py-3 text-sm text-white placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/60"
                placeholder="••••••••"
                {...register("password")}
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-400">{errors.password.message}</p>
              )}
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <Button disabled={isSubmitting} type="submit" className="w-full">
              {isSubmitting ? "Connexion..." : "Se connecter"}
            </Button>
          </form>
          <p className="mt-6 text-sm text-foreground/70">
            Pas de compte ?{" "}
            <Link href="/signup" className="text-[var(--brand)] underline">
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

