import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const FloatingGlow = ({ delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    animate={{ opacity: 0.5, y: [0, -12, 0], scale: [1, 1.04, 1] }}
    transition={{ delay, duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    className={`pointer-events-none absolute blur-2xl ${className}`}
    style={{
      background:
        'radial-gradient(closest-side, rgba(255,95,31,0.35), rgba(234,88,12,0.18), rgba(0,0,0,0))',
      filter: 'saturate(140%)',
    }}
  />
);

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-[#120c0a]">
      {/* 3D Spline Scene as full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Warm vignette + edge glow to match klikdex vibe */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_10%,rgba(255,99,33,0.2),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      </div>

      {/* Floating warm glows (embers) */}
      <FloatingGlow delay={0.2} className="left-[8%] top-[22%] h-56 w-56" />
      <FloatingGlow delay={1.1} className="right-[10%] top-[38%] h-72 w-72" />
      <FloatingGlow delay={0.6} className="left-[35%] bottom-[15%] h-64 w-64" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-36 text-center md:pt-44">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-6xl md:text-7xl"
          style={{ textShadow: '0 0 30px rgba(255,115,55,0.25)' }}
        >
          We Create Digital Experiences That Inspire.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="mt-6 max-w-3xl text-balance text-lg leading-relaxed text-white/80 md:text-xl"
        >
          Klikdex helps brands move faster, design smarter, and grow beautifully.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="#services"
            className="relative inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-semibold text-white shadow-[0_0_30px_rgba(255,115,55,0.35)]"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,115,55,0.95), rgba(234,88,12,0.95))',
            }}
          >
            <span className="relative z-10">Start Your Vision</span>
            <span className="absolute inset-0 rounded-full bg-white/10 blur-xl transition duration-300 group-hover:blur-2xl" />
          </a>
        </motion.div>
      </div>

      {/* Subtle reflective floor in warm tone */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent" />
    </section>
  );
}
