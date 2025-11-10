"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Layers3, BookCheck } from "lucide-react";
import { Button } from "../../components/ui/Button";

const services = [
  {
    title: "Threat Intelligence par IA",
    desc: "Détection d’anomalies, corrélations multi-sources, scoring de risques avec LLM.",
    icon: RadarIcon,
  },
  {
    title: "Sécurité des LLM",
    desc: "Red teaming, guardrails, filtres, politiques et tests d’alignement.",
    icon: ShieldCheck,
  },
  {
    title: "MLOps Sécurisés",
    desc: "Pipelines versionnés, chiffrement, auditabilité, déploiements canari.",
    icon: Layers3,
  },
  {
    title: "Audit & Conformité",
    desc: "Évaluations techniques, politiques de sécurité, sensibilisation et formation.",
    icon: BookCheck,
  },
  {
    title: "Advisory & Architecture",
    desc: "Conception d’architectures zero-trust et sécurisation data/IA.",
    icon: Cpu,
  },
];

const playbook = [
  {
    title: "Discovery & Cartographie",
    desc: "Évaluation complète de la surface de risque, mapping des flux data et modèles.",
  },
  {
    title: "Design & Prototypage",
    desc: "Blueprint technique, PoC sécurisés, guardrails et politiques sur mesure.",
  },
  {
    title: "Déploiement & Run",
    desc: "Intégration CI/CD, observabilité, SOC/CSIRT, gouvernance continue.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)] blur-3xl" />
        <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--brand)]/12 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
              Offre NexusAI
            </span>
            <h1 className="mt-6 text-3xl font-semibold font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-[var(--brand)] to-white/80 md:text-4xl">
              Des solutions IA & cybersécurité intégrées
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-foreground/75 md:text-base">
              Des missions modulables pour sécuriser vos plateformes IA, de la détection à la réponse.
              Nos équipes travaillent en sprint avec vos CISO, MLE et product leaders.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-foreground/50">
              <span className="rounded-full border border-white/10 px-4 py-2">Zero-trust</span>
              <span className="rounded-full border border-white/10 px-4 py-2">LLM Security</span>
              <span className="rounded-full border border-white/10 px-4 py-2">SOC + IA</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_-28px_rgba(15,23,42,0.65)]"
          >
            <div className="text-sm uppercase tracking-[0.3em] text-foreground/60">Service clé</div>
            <h2 className="mt-4 text-xl font-semibold text-white">Sentinel360 Platform</h2>
            <p className="mt-3 text-sm text-foreground/70">
              Plateforme de threat intelligence augmentée : ingestion, corrélation d’événements,
              classification via LLM, plan de réponse automatisé.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/60">
              <li>• Dashboards temps réel + scoring de risques</li>
              <li>• Intégrations SIEM / EDR / Slack</li>
              <li>• Playbooks de remédiation orchestrés</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 + idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_45px_-20px_rgba(15,23,42,0.6)] transition hover:border-white/20"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--brand)]/12 text-[var(--brand)]">
                <service.icon size={20} />
              </div>
              <div className="mt-4 text-lg font-semibold text-white/90">{service.title}</div>
              <p className="mt-2 text-sm text-foreground/70">{service.desc}</p>
              <span className="pointer-events-none mt-4 block h-px w-full bg-gradient-to-r from-transparent via-[var(--brand)]/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 rounded-3xl border border-white/10 bg-black/25 p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white/90">Playbook d’accompagnement</h2>
            <p className="mt-3 text-sm text-foreground/70">
              Notre approche est structurée pour apporter des résultats visibles à chaque étape,
              alignée sur vos priorités métier et conformité.
            </p>
          </div>
          <div className="grid gap-4">
            {playbook.map((step, idx) => (
              <div
                key={step.title}
                className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-foreground/70"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--brand)]">
                  Étape {idx + 1}
                </div>
                <div className="mt-2 text-base font-semibold text-white/90">{step.title}</div>
                <p className="mt-1 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand)]/10 to-transparent p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_18px_55px_-24px_rgba(15,23,42,0.65)] md:flex-row md:text-left">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">Prêt à agir</div>
            <div className="mt-3 text-2xl font-semibold text-white/90">
              Co-designons votre feuille de route sécurisée
            </div>
            <p className="mt-2 text-sm text-foreground/65">
              Un workshop de 2 heures pour cadrer vos enjeux, définir priorités et quick wins.
            </p>
          </div>
          <Button href="/contact" className="px-6">
            Planifier un workshop
          </Button>
        </div>
      </div>
    </div>
  );
}

function RadarIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M12 20a8 8 0 1 0-8-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 16a4 4 0 1 0-4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12 20 4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

