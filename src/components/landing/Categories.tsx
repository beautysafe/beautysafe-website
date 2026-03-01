import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplet, Wind, Sun, Heart, Star } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function Categories() {
  const { t } = useLanguage();
  
  const categories = [
    {
      icon: Sparkles,
      name: t('categories.items.haircare.name'),
      count: t('categories.items.haircare.count'),
      color: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50'
    },
    {
      icon: Droplet,
      name: t('categories.items.skincare.name'),
      count: t('categories.items.skincare.count'),
      color: 'from-pink-500 to-pink-600',
      bg: 'bg-pink-50'
    },
    {
      icon: Wind,
      name: t('categories.items.bodycare.name'),
      count: t('categories.items.bodycare.count'),
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Sun,
      name: t('categories.items.suncare.name'),
      count: t('categories.items.suncare.count'),
      color: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-50'
    },
    {
      icon: Heart,
      name: t('categories.items.babycare.name'),
      count: t('categories.items.babycare.count'),
      color: 'from-green-500 to-green-600',
      bg: 'bg-green-50'
    },
    {
      icon: Star,
      name: t('categories.items.makeup.name'),
      count: t('categories.items.makeup.count'),
      color: 'from-indigo-500 to-indigo-600',
      bg: 'bg-indigo-50'
    }
  ];

  return (
    <section id="categories" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('categories.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('categories.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className={`${category.bg} rounded-3xl p-8 text-center transition-all group-hover:shadow-xl border border-transparent group-hover:border-gray-200`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}