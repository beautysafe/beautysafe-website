import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Database, Lock } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function Features() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Shield,
      title: t('features.items.science.title'),
      description: t('features.items.science.description'),
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: t('features.items.instant.title'),
      description: t('features.items.instant.description'),
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Database,
      title: t('features.items.database.title'),
      description: t('features.items.database.description'),
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Lock,
      title: t('features.items.privacy.title'),
      description: t('features.items.privacy.description'),
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}