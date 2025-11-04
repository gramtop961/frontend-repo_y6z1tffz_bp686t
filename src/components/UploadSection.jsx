import { useRef, useState } from 'react';
import { Image, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function UploadSection() {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [note, setNote] = useState('');

  const onSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <section id="upload" className="py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Upload your crop image</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">We will analyze your image and provide treatment recommendations. This demo showcases the interface — connect your backend to enable detection.</p>

            <div
              onClick={() => inputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={onDrop}
              className="mt-6 rounded-2xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-6 cursor-pointer hover:border-emerald-400/70 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Image className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">Drag & drop or click to upload</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">PNG, JPG up to 10MB</p>
                </div>
              </div>
              <input ref={inputRef} type="file" accept="image/*" onChange={onSelect} className="hidden" />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-neutral-800 dark:text-neutral-200">Notes (optional)</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="e.g., Found yellow spots last week after rainfall"
                className="mt-2 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-3 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                rows={3}
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition-colors">Analyze image</button>
              <button className="px-5 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">Save to history</button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Your data stays private and secure.
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
          >
            <div className="aspect-[4/3] w-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-8">
                  <Image className="mx-auto w-10 h-10 text-neutral-400" />
                  <p className="mt-3 text-neutral-600 dark:text-neutral-400">Preview will appear here</p>
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Detection & treatment</h3>
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">Once connected to the backend, you will get disease names and suggested organic and chemical remedies with prevention tips.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
