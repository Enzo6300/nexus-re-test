"use client";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";
import { Globe2, HeartHandshake, Laptop, Lightbulb, Target, Users } from "lucide-react";

const jobs = [
  { title: "Security Engineer (IA/LLM)", location: "Remote EU", type: "CDI", id: "senior" },
  { title: "Machine Learning Engineer", location: "Paris / Remote", type: "CDI", id: "ml" },
  { title: "Product Designer", location: "Remote", type: "Freelance", id: "design" },
];

const values = [
  {
    title: "Impact client",
    desc: "Nous construisons des solutions qui améliorent réellement la posture de sécurité de nos clients.",
    icon: Target,
  },
  {
    title: "Responsabilité",
    desc: "Chaque décision produit est évaluée au prisme de l’éthique, de la conformité et de l’utilisateur final.",
    icon: HeartHandshake,
  },
  {
    title: "Apprentissage continu",
    desc: "Temps dédié à la recherche, conférences, lab interne et pair reviews systématiques.",
    icon: Lightbulb,
  },
];

const benefits = [
  "Budget formation 3 000€ / an",
  "Rémunération transparente & équitable",
  "Remote-first avec bureaux à Paris",
  "Offsites trimestriels en Europe",
];

const hiringProcess = [
  "Call découverte avec People / 30 min",
  "Étude de cas technique ou produit",
  "Rencontre équipe + culture fit",
  "Proposition & onboarding personnalisé",
];

export default function CareersPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.2),_transparent_60%)] blur-3xl" />
        <div className="absolute top-1/3 right-1/4 h-60 w-60 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
              Rejoindre NexusAI
            </span>
            <h1 className="mt-6 text-3xl font-semibold font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-[var(--brand)] to-white/80 md:text-4xl">
              Carrières
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-foreground/75 md:text-base">
              Rejoignez une équipe hybride IA + cybersécurité où recherche, produit et missions
              terrain s’entremêlent au quotidien. Impact réel, autonomie forte, vision long terme.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 px-6 py-5 text-sm text-foreground/70">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
              <Globe2 size={18} className="text-[var(--brand)]" />
              <span>Remote-first</span>
            </div>
            <p className="mt-3">
              Travail hybride flexible. Bureaux parisiens pour workshops, labs et moments de cohésion.
              Offsites trimestriels pour se retrouver IRL.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          {jobs.map((j, idx) => (
            <motion.div
              key={j.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 + idx * 0.08 }}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_45px_-20px_rgba(15,23,42,0.6)] md:flex-row md:items-center md:justify-between"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                  {j.type} · {j.location}
                </div>
                <div className="mt-2 text-lg font-semibold text-white/90">{j.title}</div>
                <p className="mt-2 text-sm text-foreground/65">
                  Squad dédiée, budget R&D, veille permanente. Vous créez des solutions utilisées par
                  des SOC et équipes produit exigeantes.
                </p>
              </div>
              <Button href="mailto:talent@nexusai.example.com" className="w-full px-6 md:w-auto">
                Postuler
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_55px_-22px_rgba(15,23,42,0.65)]">
            <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              Ce qui nous rassemble
            </div>
            <div className="mt-4 grid gap-6 sm:grid-cols-3">
              {values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 + idx * 0.08 }}
                  className="rounded-xl border border-white/10 bg-black/25 p-5 text-sm text-foreground/70"
                >
                  <value.icon size={20} className="text-[var(--brand)]" />
                  <div className="mt-2 text-base font-semibold text-white/90">{value.title}</div>
                  <p className="mt-1 text-xs text-foreground/60">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-foreground/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
                <Users size={18} className="text-[var(--brand)]" />
                <span>Avantages & pratiques</span>
              </div>
              <ul className="mt-3 space-y-2">
                {benefits.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--brand)]/12 to-transparent p-6 text-sm text-foreground/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_18px_55px_-24px_rgba(15,23,42,0.65)]">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
                <Laptop size={18} className="text-[var(--brand)]" />
                <span>Process de recrutement</span>
              </div>
              <ol className="mt-3 space-y-2">
                {hiringProcess.map((step, idx) => (
                  <li key={step}>
                    <span className="font-medium text-white/80">Étape {idx + 1}.</span> {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-black/20 via-[var(--brand)]/10 to-transparent p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_60px_-26px_rgba(15,23,42,0.65)] md:flex-row md:text-left"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              Candidature spontanée
            </div>
            <div className="mt-3 text-2xl font-semibold text-white/90">
              Vous ne voyez pas le rôle parfait ?
            </div>
            <p className="mt-2 text-sm text-foreground/65">
              Racontez-nous vos super-pouvoirs. Nous créons des rôles dès que nous rencontrons les bons
              talents.
            </p>
          </div>
          <Button href="mailto:talent@nexusai.example.com" className="px-6">
            Envoyer son profil
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

