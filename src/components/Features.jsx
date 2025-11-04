import { Upload, Brain, History, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Upload,
    title: 'Image Upload System',
    desc: 'Quickly upload clear pictures of your crops. We prepare them for accurate disease detection.',
    benefit: 'Simple and accessible for every farmer.',
  },
  {
    icon: Brain,
    title: 'Treatment Recommendations',
    desc: 'Receive disease‑specific guidance: organic options, targeted pesticides, and prevention tips.',
    benefit: 'Reduces losses and avoids improper chemical use.',
  },
  {
    icon: History,
    title: 'History & Tracking',
    desc: 'Keep a timeline of uploads, detected issues, and applied treatments across fields and crops.',
    benefit: 'See trends and measure what works over time.',
  },
  {
    icon: Database,
    title: 'Open Image Library',
    desc: 'Browse a transparent dataset of plant images to learn and contribute to the community.',
    benefit: 'Accelerates research and collaboration.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white dark:bg-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Built for modern agriculture</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">Powerful tools, clean design, and a green‑accented interface.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <f.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{f.desc}</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                Benefit: <span className="text-neutral-800 dark:text-neutral-200">{f.benefit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
