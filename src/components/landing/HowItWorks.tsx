import React from 'react';
import { motion } from 'framer-motion';
import { Scan, FileSearch, Shield, Heart } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: Scan,
      title: t('howItWorks.steps.scan.title'),
      description: t('howItWorks.steps.scan.description'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileSearch,
      title: t('howItWorks.steps.analyze.title'),
      description: t('howItWorks.steps.analyze.description'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: t('howItWorks.steps.safety.title'),
      description: t('howItWorks.steps.safety.description'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Heart,
      title: t('howItWorks.steps.track.title'),
      description: t('howItWorks.steps.track.description'),
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('howItWorks.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 h-full border border-gray-100 hover:border-gray-200 transition-all hover:shadow-xl">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}