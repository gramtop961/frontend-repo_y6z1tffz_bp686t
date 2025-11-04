import { useEffect, useState } from 'react';
import { Leaf, Sun, Moon, User } from 'lucide-react';

export default function Navbar({ dark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,box-shadow] ${
      scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
            <Leaf className="w-6 h-6" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white">AgriVision</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-neutral-700 dark:text-neutral-300">
          <a href="#features" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Features</a>
          <a href="#upload" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Upload</a>
          <a href="#library" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Library</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            {dark ? <Sun className="w-5 h-5 text-emerald-400" /> : <Moon className="w-5 h-5 text-emerald-600" />}
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors">
            <User className="w-4 h-4" />
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
}
