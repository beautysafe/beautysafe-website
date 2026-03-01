import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../lib/LanguageContext';

type ApiProduct = {
  uid: number;
  name: string;
  validScore: number;
  ean: string;
  brand?: { id: number; name: string; totalProducts?: number };
  images?: { id: number; image: string; thumbnail: string }[];
  composition?: { id: number; name: string; officialName?: string; score?: number }[];
};

const API_BASE = 'https://api.beautysafe.online';

export default function Hero() {
  const { t } = useLanguage();

  const [isTryMode, setIsTryMode] = useState(false);
  const [ean, setEan] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<ApiProduct | null>(null);

  const isValidEan = useMemo(() => /^\d{8,14}$/.test(ean.trim()), [ean]);

  async function fetchByEan() {
    const value = ean.trim();
    if (!/^\d{8,14}$/.test(value)) {
      setError('EAN invalide. Entrez 8 à 14 chiffres.');
      return;
    }

    setLoading(true);
    setError(null);
    setProduct(null);

    try {
      const res = await fetch(`${API_BASE}/products/ean/${value}`, {
        method: 'GET',
        headers: { Accept: 'application/json' },
      });

      if (!res.ok) {
        // 404 typical if not found
        const msg =
          res.status === 404
            ? 'Produit introuvable pour ce code-barres.'
            : `Erreur API (${res.status})`;
        throw new Error(msg);
      }

      const data: ApiProduct = await res.json();
      setProduct(data);
    } catch (e: any) {
      setError(e?.message || 'Erreur lors de la requête.');
    } finally {
      setLoading(false);
    }
  }

  function openTryMode() {
    setIsTryMode(true);
    // optional: prefill sample
    // setEan('4005808222520');
  }

  function closeTryMode() {
    setIsTryMode(false);
    setEan('');
    setError(null);
    setProduct(null);
    setLoading(false);
  }

  return (
    <section className="relative overflow-hidden px-6 pb-32 md:pt-16 md:pb-40">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full">
              <Sparkles className="w-4 h-4 text-purple-700" />
              <span className="text-sm font-medium text-purple-800">{t('hero.badge')}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              {t('hero.title')}
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              {t('hero.description')}
            </p>

            {/* Buttons */}
            {!isTryMode ? (
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg shadow-purple-600/30 transition-all hover:shadow-xl hover:shadow-purple-600/40"
                >
                  {t('hero.downloadNow')}
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-2xl border-2 hover:bg-gray-50"
                  onClick={openTryMode}
                >
                  {t('hero.tryIt')}
                </Button>
              </div>
            ) : (
              <div className="rounded-2xl border bg-white/90 backdrop-blur-sm shadow-lg p-5 space-y-4 max-w-lg">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-semibold text-gray-900">{t('hero.tryIt')}</div>
                  <button
                    type="button"
                    onClick={closeTryMode}
                    className="text-sm text-gray-500 hover:text-gray-800"
                  >
                    Fermer
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    value={ean}
                    onChange={(e) => setEan(e.target.value)}
                    inputMode="numeric"
                    placeholder="Entrer un code-barres (EAN)"
                    className="w-full h-12 rounded-xl border px-4 outline-none focus:ring-2 focus:ring-purple-300"
                  />
                  <Button
                    className="h-12 rounded-xl"
                    onClick={fetchByEan}
                    disabled={loading || !isValidEan}
                  >
                    {loading ? 'Analyse...' : 'Analyser'}
                  </Button>
                </div>

                {error && (
                  <div className="text-sm text-red-600">{error}</div>
                )}

                {product && (
                  <div className="rounded-xl border bg-white p-4 space-y-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-xl bg-gray-50 overflow-hidden flex items-center justify-center">
                        {product.images?.[0]?.thumbnail ? (
                          <img
                            src={product.images[0].thumbnail}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-xs text-gray-400">No image</div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 truncate">
                          {product.name}
                        </div>                        
                        <div className="flex flex-row justify-between">
                          <div className="text-sm text-gray-600">
                            {product.brand?.name ?? '-'}
                          </div>
                          <div className="text-sm text-gray-600">
                            {product.validScore} /20
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          EAN: {product.ean}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-gray-900 mb-2">
                        Composition
                      </div>
                      <div className="max-h-56 overflow-auto rounded-xl border bg-gray-50 p-3">
                        <ul className="flex flex-wrap gap-2">
                          {(product.composition ?? []).map((c) => (
                            <li
                              key={c.id}
                              className="flex items-center rounded-lg bg-white px-2 py-1 border text-sm text-gray-800"
                            >
                              <span className="font-medium">{c.name ? c.name : c.officialName}</span>
                            </li>
                          ))}
                          {(product.composition ?? []).length === 0 && (
                            <li className="text-sm text-gray-500">Aucune composition disponible.</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                <div className="text-xs text-gray-500">
                  Exemple: 4005808222520
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Content - App Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-sm">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="src/assets/img/mockup2.png"
                  alt="App Mockup"
                  className="h-[75vh]"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium">{t('hero.animatedText.safe')} ✓</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="text-xs text-gray-600">{t('hero.animatedText.instantAnalysis')}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}