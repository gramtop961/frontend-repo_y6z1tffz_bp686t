import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Features from './components/Features';
import UploadSection from './components/UploadSection';

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    // Persist theme preference
    const stored = localStorage.getItem('agrivision-theme');
    if (stored) setDark(stored === 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('agrivision-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        <Navbar dark={dark} onToggleTheme={() => setDark((d) => !d)} />
        <main className="pt-16">
          <Hero3D />
          <Features />
          <UploadSection />

          {/* Library preview */}
          <section id="library" className="py-20 bg-white dark:bg-neutral-900">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold">Open image library</h2>
                  <p className="mt-2 text-neutral-700 dark:text-neutral-300">A transparent dataset to browse and learn from. Community contributions welcome.</p>
                </div>
                <a href="#" className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">View all</a>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="group rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="aspect-video bg-gradient-to-br from-emerald-200/40 to-emerald-500/20 dark:from-emerald-500/10 dark:to-emerald-400/10" />
                    <div className="p-4">
                      <h3 className="font-semibold">Sample dataset #{i}</h3>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Leaf images with varying symptoms for model benchmarking.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} AgriVision. Grow smarter, sustainably.</p>
            <div className="flex gap-4 text-sm">
              <a href="#features" className="hover:text-emerald-600 dark:hover:text-emerald-400">Features</a>
              <a href="#upload" className="hover:text-emerald-600 dark:hover:text-emerald-400">Upload</a>
              <a href="#library" className="hover:text-emerald-600 dark:hover:text-emerald-400">Library</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
