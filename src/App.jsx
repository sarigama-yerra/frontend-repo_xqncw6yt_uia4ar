import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';

export default function App() {
  // Smooth scroll behavior
  useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style) return;
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top nav */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <a href="#top" className="font-semibold tracking-wide text-white">Flames Blue</a>
          <nav className="hidden items-center gap-6 text-white/80 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#" className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20">All Projects</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero />
        <Services />
        <Showcase />
        <AboutContact />
      </main>

      <Footer />
    </div>
  );
}
