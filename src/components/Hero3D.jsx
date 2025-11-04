import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.7]);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* 3D Scene Layer */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        {!failed && (
          <Spline
            scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            style={{ width: '100%', height: '100%' }}
          />
        )}
        {/* Fallback background if Spline fails to load */}
        {failed && (
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.25),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.2),transparent_60%)]" />
        )}
      </motion.div>

      {/* Gradient overlay to improve contrast; pointer-events-none keeps 3D interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white dark:from-neutral-900/70 dark:via-neutral-900/30 dark:to-neutral-900" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
        >
          Grow smarter with
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400"> AgriVision</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-2xl text-lg text-neutral-700 dark:text-neutral-300"
        >
          Upload crop images, detect diseases, and get tailored treatments. Track outcomes and explore an open image library — all in one modern, green‑accented platform.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a href="#upload" className="px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-sm">
            Upload your crop
          </a>
          <a href="#features" className="px-5 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors text-neutral-900 dark:text-neutral-100">
            Explore features
          </a>
        </motion.div>

        {/* Subtle loading hint overlay while the 3D scene initializes */}
        {!loaded && !failed && (
          <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-600 dark:text-neutral-400">
            Initializing 3D scene…
          </div>
        )}
      </div>
    </section>
  );
}
