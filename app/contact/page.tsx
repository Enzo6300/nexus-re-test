"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Message trop court"),
});
type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  const onSubmit = async (data: FormData) => {
    setStatus(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const payload = await res.json();
    if (res.ok) {
      setStatus({ ok: true, msg: "Message envoyé ! Nous revenons vers vous rapidement." });
      reset();
    } else {
      setStatus({ ok: false, msg: payload?.error || "Envoi impossible pour le moment." });
    }
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)] blur-3xl" />
        <div className="absolute top-44 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-[var(--brand)]/12 blur-3xl" />
      </div>
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_-26px_rgba(15,23,42,0.65)] md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
                Contact
              </span>
              <h1 className="mt-6 text-3xl font-semibold font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-[var(--brand)] to-white/80 md:text-4xl">
                Parlons de vos enjeux
              </h1>
              <p className="mt-3 text-sm text-foreground/75 md:text-base">
                Dites-nous où vous en êtes : création d’un SOC augmenté, sécurisation d’agents IA,
                conformité à venir... Nous organisons un call de cadrage sous 24h ouvrées.
              </p>
              <div className="mt-6 grid gap-4 text-sm text-foreground/65">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[var(--brand)]" />
                  <span>contact@nexusai.example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[var(--brand)]" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-[var(--brand)]" />
                  <span>10 Rue de l’Innovation, 75010 Paris</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-[var(--brand)]" />
                  <span>Réponse garantie sous 24h ouvrées</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                  Nom complet
                </label>
                <input
                  className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/60"
                  placeholder="Votre nom"
                  {...register("name")}
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-foreground/50">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/60"
                  placeholder="votre.email@entreprise.com"
                  {...register("email")}
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/60"
                  placeholder="Décrivez votre projet, vos contraintes..."
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>
              <Button disabled={isSubmitting} type="submit" className="w-full">
                {isSubmitting ? "Envoi..." : "Envoyer"}
              </Button>
              {status && (
                <p className={`text-sm ${status.ok ? "text-emerald-400" : "text-red-400"}`}>
                  {status.msg}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-10 grid gap-6 rounded-3xl border border-white/10 bg-black/25 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              Zones couvertes
            </div>
            <p className="mt-2 text-sm text-foreground/70">
              Europe · Amérique du Nord · Moyen-Orient. Intervention en français et anglais.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">Collaborer</div>
            <p className="mt-2 text-sm text-foreground/70">
              CISO, SOC, équipes produit, labs IA : nous travaillons main dans la main pour intégrer
              nos solutions.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              Confidentialité
            </div>
            <p className="mt-2 text-sm text-foreground/70">
              Tous les échanges sont couverts par NDA et stockés de façon chiffrée.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

