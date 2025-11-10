import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Github, Twitter, Linkedin } from 'lucide-react';

export default function AboutContact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#120c0a] via-[#0a0a0a] to-black">
      {/* drifting warm light */}
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -left-10 top-10 h-72 w-72 rotate-12 bg-gradient-to-b from-orange-400/15 to-rose-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 -rotate-12 bg-gradient-to-b from-orange-400/10 to-rose-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-2">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About</h2>
          <p className="mt-4 text-white/80">
            Klikdex is a collective of creators, engineers, and marketers driven by curiosity. We design with intent, build with precision, and ship with soul — bridging technology and art to shape meaningful experiences.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop"
              alt="Portrait"
              className="h-28 w-28 rounded-2xl object-cover ring-1 ring-white/10"
              style={{ boxShadow: '0 10px 50px rgba(251,146,60,0.25)' }}
            />
            <div>
              <p className="text-white font-medium">A team of explorers</p>
              <p className="text-white/70 text-sm">Reflections, ember highlights, and thoughtful craft.</p>
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          id="contact"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact</h2>
          <form onSubmit={(e)=>e.preventDefault()} className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div>
              <label className="text-sm text-white/80">Name</label>
              <input className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/30" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-white/80">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/30" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm text-white/80">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/30" placeholder="Tell us about your vision" />
            </div>
            <button className="relative w-full rounded-xl bg-gradient-to-r from-orange-500 to-rose-600 px-5 py-3 font-semibold text-white shadow-[0_0_30px_rgba(251,146,60,0.35)]">Send Message</button>
          </form>

          <div className="mt-6 space-y-3 text-white/80">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@klikdex.com</p>
            <p className="flex items-center gap-2"><Globe className="h-4 w-4" /> klikdex.com</p>
            <div className="flex gap-3 pt-2">
              <a href="#" aria-label="Twitter" className="rounded-full bg-white/10 p-2 text-white/80 transition hover:bg-white/20"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="rounded-full bg-white/10 p-2 text-white/80 transition hover:bg-white/20"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="GitHub" className="rounded-full bg-white/10 p-2 text-white/80 transition hover:bg-white/20"><Github className="h-4 w-4" /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
