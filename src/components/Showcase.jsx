import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Aurora OS',
    tag: 'Design system & product website',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Nocturne Labs',
    tag: 'Brand, site and launch visuals',
    img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Vector X',
    tag: 'Mobile + web application',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Halo Play',
    tag: 'Interactive experience',
    img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
  },
];

function ProjectCard({ p, i }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: i * 0.06 }}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-end p-6">
        <div className="w-full">
          <div className="h-px w-0 bg-gradient-to-r from-sky-400 to-indigo-500 transition-all duration-500 group-hover:w-full" />
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-white/70">{p.tag}</p>
            </div>
            <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">View</div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -left-1/3 -top-1/3 h-40 w-40 rounded-full bg-sky-400/10 blur-2xl transition duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
    </motion.a>
  );
}

export default function Showcase() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Selected work</h2>
        <p className="mt-3 text-white/70">Cinematic, functional, and measurable digital products.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href="#contact" className="inline-block text-sky-300 transition hover:text-sky-200">
          <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">All Projects</span>
          <span className="ml-2 inline-block h-px w-16 align-middle bg-gradient-to-r from-sky-400 to-indigo-500" />
        </a>
      </div>
    </section>
  );
}
