import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-black via-[#071229] to-[#0b1f3b]">
      {/* rising particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 0.6, 0], y: [-10, -120] }}
            transition={{ duration: 6 + (i % 5), delay: i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 h-1 w-1 rounded-full bg-sky-400/60"
            style={{ left: `${(i * 37) % 100}%`, filter: 'blur(0.5px)' }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 text-center md:flex-row md:text-left">
        <div>
          <div className="text-lg font-semibold tracking-wide text-white">Flames Blue</div>
          <p className="text-white/60">© {new Date().getFullYear()} Klikdex — All rights reserved.</p>
        </div>
        <nav className="flex items-center gap-6 text-white/70">
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
          <a href="#" className="transition hover:text-white">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
