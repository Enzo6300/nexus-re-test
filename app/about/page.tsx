"use client";
import { motion } from "framer-motion";
import { Compass, ShieldCheck, Sparkles, Users2 } from "lucide-react";

const pillars = [
  {
    title: "Transparence radicale",
    desc: "Des recommandations traçables et des dashboards temps réel pour chaque mission.",
    icon: Compass,
  },
  {
    title: "Excellence technique",
    desc: "R&D interne, veille permanente et contributions open-source en IA/ML sécurité.",
    icon: Sparkles,
  },
  {
    title: "Responsabilité",
    desc: "Conformité, gouvernance et éthique IA intégrées à chaque étape produit.",
    icon: ShieldCheck,
  },
];

const timeline = [
  {
    year: "2024",
    title: "Création de NexusAI Labs",
    desc: "Experts IA + Red Team issus de scale-ups européennes.",
  },
  {
    year: "2025",
    title: "Lancement Sentinel360",
    desc: "Plateforme de threat intelligence augmentée déployée chez 15 clients.",
  },
  {
    year: "2026",
    title: "Expansion internationale",
    desc: "Outpost à Montréal et Singapour, partenariats SOC & CERT.",
  },
];

const team = [
  {
    name: "Jade Martin",
    role: "CEO & Co-fondatrice",
    bio: "Ancienne CISO chez une licorne fintech, spécialiste gouvernance IA.",
  },
  {
    name: "Malik Benyahia",
    role: "CTO",
    bio: "10 ans d’architecture ML, ex-DeepMind, passionné de sécurité distribuée.",
  },
  {
    name: "Yuna Park",
    role: "Head of Research",
    bio: "Docteure en NLP, dirige les programmes de red teaming & alignment.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.25),_transparent_60%)] blur-3xl" />
        <div className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-[var(--brand)]/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.01] p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_60px_-30px_rgba(15,23,42,0.7)] md:p-14"
        >
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
                ADN NexusAI
              </span>
              <h1 className="mt-6 text-3xl font-semibold font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-[var(--brand)] to-white/80 md:text-4xl">
                À propos de NexusAI Labs
              </h1>
              <p className="mt-4 text-sm text-foreground/75 md:text-base">
                Fondée à Paris, NexusAI Labs conçoit des solutions mêlant IA avancée et cybersécurité
                défensive. Notre mission est d’accélérer l’innovation des organisations tout en
                sécurisant chaque interaction data et modèle.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 px-6 py-5 text-sm text-foreground/70">
              <div className="flex items-center gap-3 text-white">
                <Users2 size={20} className="text-[var(--brand)]" />
                <span className="text-sm font-medium uppercase tracking-[0.2em]">
                  Manifesto
                </span>
              </div>
              <p className="mt-3 text-sm">
                Nous pensons que la prochaine génération d’IA doit être fiable, vérifiable et
                résiliente. C’est pourquoi nous designons nos solutions autour de trois piliers
                fondamentaux.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/60">
                <li>• Observabilité continue des comportements modèle</li>
                <li>• Sécurité by design, zero-trust et chiffrement natif</li>
                <li>• Gouvernance responsable et conformité réglementaire</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_45px_-20px_rgba(15,23,42,0.6)] transition hover:border-white/20"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--brand)]/12 text-[var(--brand)]">
                <pillar.icon size={20} />
              </div>
              <div className="mt-4 text-lg font-semibold text-white/90">{pillar.title}</div>
              <p className="mt-2 text-sm text-foreground/70">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl border border-white/10 bg-black/25 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <h2 className="text-2xl font-semibold text-white/90">Étapes clés</h2>
            <div className="mt-6 space-y-6 border-l border-dashed border-white/15 pl-6">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 + idx * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-6 top-1.5 h-3 w-3 rounded-full bg-[var(--brand)] shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                  <div className="text-sm uppercase tracking-[0.3em] text-foreground/60">
                    {item.year}
                  </div>
                  <div className="mt-1 text-base font-semibold text-white">{item.title}</div>
                  <p className="mt-1 text-sm text-foreground/65">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_45px_-20px_rgba(15,23,42,0.6)]">
            <h2 className="text-2xl font-semibold text-white/90">Équipe de direction</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {team.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 + idx * 0.08 }}
                  className="rounded-xl border border-white/10 bg-black/30 p-5"
                >
                  <div className="text-sm uppercase tracking-[0.2em] text-[var(--brand)]">
                    {member.role}
                  </div>
                  <div className="mt-2 text-lg font-medium text-white">{member.name}</div>
                  <p className="mt-2 text-sm text-foreground/65">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

