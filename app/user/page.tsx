"use client";
import { useAuth } from "../../components/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "../../components/ui/Button";
import { ShieldCheck } from "lucide-react";

export default function UserPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return <div className="mx-auto max-w-2xl px-4 py-16">Chargement...</div>;
  }

  if (!user) return null;

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)] blur-3xl" />
      </div>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_55px_-24px_rgba(15,23,42,0.65)]">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
            <ShieldCheck size={18} className="text-[var(--brand)]" />
            <span>Espace client</span>
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-white/90">Mon profil</h1>
          <p className="mt-2 text-sm text-foreground/70">
            Retrouvez les informations liées à votre compte NexusAI Labs et vos accès aux plateformes
            sécurisées.
          </p>
          <div className="mt-6 grid gap-5 rounded-2xl border border-white/10 bg-black/25 p-5 text-sm text-foreground/70">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-foreground/50">Email</div>
              <div className="mt-1 font-medium text-white/90">{user.email}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-foreground/50">ID utilisateur</div>
              <div className="mt-1 font-mono text-xs text-foreground/65">{user.id}</div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.3em] text-foreground/50">
            <span>Accès : Sentinel360 · GuardRails Portal</span>
            <Button variant="outline" onClick={() => signOut()}>
              Se déconnecter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


