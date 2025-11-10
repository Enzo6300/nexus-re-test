"use client";
import { motion } from "framer-motion";
import { BrainCircuit, ShieldHalf, Workflow } from "lucide-react";
import { Button } from "../components/ui/Button";

const features = [
  {
    title: "Threat Intelligence augmentée",
    desc: "Détection proactive des signaux faibles grâce à nos graphes de menaces et modèles génératifs.",
    icon: ShieldHalf,
  },
  {
    title: "Sécurité des modèles & guardrails",
    desc: "Tests d’intrusion, jailbreaking et politiques dynamiques pour protéger vos agents IA.",
    icon: BrainCircuit,
  },
  {
    title: "Orchestration & MLOps sécurisés",
    desc: "Pipelines traçables, chiffrement par défaut et observabilité temps réel pour vos modèles.",
    icon: Workflow,
  },
];

const metrics = [
  { label: "Clients sécurisés", value: "40+" },
  { label: "Incidents évités", value: "98%" },
  { label: "Temps de réponse", value: "<15 min" },
];

export default function Home() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)] blur-3xl" />
        <div className="absolute -top-24 right-1/3 h-64 w-64 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      </div>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 pt-24 pb-20 text-center sm:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70"
          >
            NexusAI Labs · Secure Intelligence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto mt-6 max-w-5xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-[var(--brand)] to-white/80"
          >
            Secure Intelligence for a Connected World
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-3xl text-pretty text-lg text-foreground/80"
          >
            Nous construisons des architectures IA sécurisées, des agents robustes et des mécanismes
            de défense avancés pour protéger vos opérations 24/7. Un accompagnement complet, de la
            stratégie à la mise en production.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="/services" variant="primary">
              Découvrir nos services
            </Button>
            <Button href="/contact" variant="outline">
              Parler à un expert
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.01] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_45px_-20px_rgba(15,23,42,0.6)] transition-all duration-150 hover:border-white/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand)]/15 text-[var(--brand)]">
                <feature.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-foreground/75">{feature.desc}</p>
              <span className="pointer-events-none mt-5 block h-px w-full bg-gradient-to-r from-transparent via-[var(--brand)]/35 to-transparent opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_24px_60px_-24px_rgba(15,23,42,0.6)]">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="font-display text-2xl font-semibold text-white/90">
                Une équipe hybride IA & cybersécurité
              </h2>
              <p className="mt-3 text-sm text-foreground/70">
                Auditeurs, chercheurs et ingénieurs travaillent ensemble pour cartographier vos
                risques, déployer des protections continues et monitorer la santé de vos modèles.
              </p>
            </div>
            <div className="grid w-full grid-cols-3 gap-4 md:w-auto">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 + idx * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-black/20 px-6 py-4 text-center"
                >
                  <div className="font-display text-xl font-semibold text-white">{metric.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-foreground/60">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
