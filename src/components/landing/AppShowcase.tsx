import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, History, Scan, Search, Home, User } from 'lucide-react';

export default function AppShowcase() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-900 to-emerald-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-emerald-400 mb-4">
            App Preview
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Beautiful & Intuitive Design
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A seamless experience that makes checking product safety a breeze
          </p>
        </motion.div>

        <div className="flex justify-center items-end gap-4 md:gap-8">
          {/* Left phone - Favorites */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:block"
          >
            <div className="w-[220px] h-[450px] bg-gray-800 rounded-[2rem] p-2 shadow-2xl transform -rotate-6">
              <div className="w-full h-full bg-white rounded-[1.75rem] overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Bookmark className="w-5 h-5 text-emerald-600" />
                    <span className="font-semibold text-gray-900">Favorites</span>
                  </div>
                  
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-rose-200 rounded-lg" />
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-20 mb-1" />
                        <div className="h-2 bg-gray-100 rounded w-14" />
                      </div>
                      <div className="px-2 py-1 bg-emerald-100 rounded-full">
                        <span className="text-[10px] text-emerald-700 font-medium">Safe</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center phone - Main scanner */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="w-[280px] md:w-[300px] h-[560px] md:h-[600px] bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-800 rounded-b-xl z-10" />
              <div className="w-full h-full bg-gradient-to-b from-emerald-50 to-white rounded-[2.25rem] overflow-hidden relative">
                <div className="p-5 pt-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-xs text-gray-500">Hello,</p>
                      <p className="font-semibold text-gray-900">Welcome back! 👋</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full" />
                  </div>

                  {/* Search */}
                  <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-3 mb-6 shadow-sm">
                    <Search className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-400">Search products...</span>
                  </div>

                  {/* Scan button */}
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 mb-6 text-white shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                        <Scan className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Scan Now</p>
                        <p className="text-sm text-emerald-100">Analyze any product</p>
                      </div>
                    </div>
                  </div>

                  {/* Recent */}
                  <p className="text-sm font-medium text-gray-700 mb-3">Recent Scans</p>
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-3 mb-2 shadow-sm">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">Product Name</p>
                        <p className="text-xs text-gray-500">Brand Name</p>
                      </div>
                      <div className="px-2 py-1 bg-emerald-100 rounded-full">
                        <span className="text-xs text-emerald-700 font-medium">Safe</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom nav */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4">
                  <div className="flex justify-between items-center">
                    <Home className="w-6 h-6 text-emerald-600" />
                    <div className="w-14 h-14 -mt-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Scan className="w-6 h-6 text-white" />
                    </div>
                    <User className="w-6 h-6 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right phone - History */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="w-[220px] h-[450px] bg-gray-800 rounded-[2rem] p-2 shadow-2xl transform rotate-6">
              <div className="w-full h-full bg-white rounded-[1.75rem] overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <History className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">History</span>
                  </div>
                  
                  <p className="text-xs text-gray-500 mb-2">Today</p>
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg" />
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-20 mb-1" />
                        <div className="h-2 bg-gray-100 rounded w-14" />
                      </div>
                    </div>
                  ))}
                  
                  <p className="text-xs text-gray-500 mb-2 mt-4">Yesterday</p>
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-lg" />
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-20 mb-1" />
                        <div className="h-2 bg-gray-100 rounded w-14" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}