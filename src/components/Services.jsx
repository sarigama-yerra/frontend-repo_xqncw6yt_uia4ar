import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Smartphone, Sparkles, PenTool } from 'lucide-react';

const services = [
  {
    title: 'Web Design & Development',
    icon: MonitorSmartphone,
    desc:
      'Premium websites and web apps with cinematic motion and accessible UX.',
  },
  {
    title: 'Mobile & Cross-Platform Apps',
    icon: Smartphone,
    desc: 'Crafted native-feel experiences for iOS, Android, and desktop.',
  },
  {
    title: 'Creative Marketing & Growth',
    icon: Sparkles,
    desc: 'Narratives that travel — performance-led campaigns with style.',
  },
  {
    title: 'Brand Design & Storytelling',
    icon: PenTool,
    desc: 'Purposeful identities, systems, and guidelines that resonate.',
  },
];

function GlassCard({ title, Icon, desc, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: i * 0.06 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]" style={{background:'linear-gradient(180deg, rgba(59,130,246,0.25), rgba(99,102,241,0.15), transparent)'}} />
      <div className="relative z-10">
        <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-sky-400/20 to-indigo-500/20 p-3 ring-1 ring-white/10">
          <Icon className="h-6 w-6 text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
      </div>
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(120px_120px_at_var(--x,50%)_var(--y,50%),rgba(56,189,248,0.15),transparent)]" />
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What we do</h2>
        <p className="mt-3 text-white/70">We blend strategy, craft, and technology to build brand-defining products.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <GlassCard key={s.title} title={s.title} Icon={s.icon} desc={s.desc} i={i} />)
        )}
      </div>
    </section>
  );
}
