import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Clock, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

const safetyLevels = [
  {
    status: "Safe",
    icon: CheckCircle,
    color: "emerald",
    bgGradient: "from-emerald-500 to-green-600",
    lightBg: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700",
    description: "All ingredients are verified safe for regular use with no known health concerns"
  },
  {
    status: "Risky",
    icon: XCircle,
    color: "red",
    bgGradient: "from-red-500 to-rose-600",
    lightBg: "bg-red-50",
    borderColor: "border-red-200",
    textColor: "text-red-700",
    description: "Contains ingredients that may cause irritation or have potential health concerns"
  },
  {
    status: "Under Review",
    icon: HelpCircle,
    color: "amber",
    bgGradient: "from-amber-500 to-orange-600",
    lightBg: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
    description: "New or limited data available - proceed with caution and patch test first"
  }
];

export default function SafetyExplainer() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-sm font-medium text-emerald-700 mb-6">
              <Shield className="w-4 h-4" />
              Safety Ratings
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Understand What
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Goes On Your Skin
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our three-tier safety system makes it crystal clear whether a product is right for you. No confusing jargon—just straightforward answers backed by science.
            </p>

            <div className="space-y-4">
              {safetyLevels.map((level, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`${level.lightBg} ${level.borderColor} border rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${level.bgGradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <level.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className={`font-bold ${level.textColor} text-lg mb-1`}>
                        {level.status}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {level.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>

                {/* Product card */}
                <div className="bg-white rounded-2xl p-6 mb-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-rose-200 rounded-xl flex items-center justify-center">
                      <span className="text-3xl">🧴</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">Vitamin C Serum</h4>
                      <p className="text-sm text-gray-500 mb-3">Premium Skincare Co.</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 rounded-full">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-semibold text-emerald-700">Safe</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ingredients preview */}
                <div className="space-y-3">
                  <p className="text-gray-400 text-sm font-medium">Ingredient Analysis</p>
                  
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">Ascorbic Acid</p>
                      <p className="text-gray-400 text-xs">Vitamin C - Antioxidant</p>
                    </div>
                    <span className="text-emerald-400 text-xs font-medium">Safe</span>
                  </div>

                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">Hyaluronic Acid</p>
                      <p className="text-gray-400 text-xs">Hydration - Moisturizer</p>
                    </div>
                    <span className="text-emerald-400 text-xs font-medium">Safe</span>
                  </div>

                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                    <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">Phenoxyethanol</p>
                      <p className="text-gray-400 text-xs">Preservative</p>
                    </div>
                    <span className="text-amber-400 text-xs font-medium">Low Risk</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Overall Score</p>
                    <p className="text-2xl font-bold text-emerald-600">96%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}