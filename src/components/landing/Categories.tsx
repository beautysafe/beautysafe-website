import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

import dryHair from '../../assets/img/ctg/dry-hair.png';
import damagedHair from '../../assets/img/ctg/damaged-hair.png';
import coloredHair from '../../assets/img/ctg/colored-hair.png';
import curlyHair from '../../assets/img/ctg/curly.png';
import thinHair from '../../assets/img/ctg/thin-hair.png';
import oilyHair from '../../assets/img/ctg/oily-hair.png';
import hairLoss from '../../assets/img/ctg/hair-loss.png';
import dandruff from '../../assets/img/ctg/dandruff.png';

import acne from '../../assets/img/ctg/acne.png';
import cernes from '../../assets/img/ctg/cernes.png';
import eczema from '../../assets/img/ctg/eczema.png';
import oilySkin from '../../assets/img/ctg/oily-skin.png';
import blackheads from '../../assets/img/ctg/blackheads.png';
import pigmentation from '../../assets/img/ctg/pigmentation.png';
import enlarged from '../../assets/img/ctg/enlarged.png';

export default function Categories() {
  const { t } = useLanguage();

  const categories = [
    { image: dryHair, name: t('categories.items.dryHair') },
    { image: damagedHair, name: t('categories.items.damagedHair') },
    { image: coloredHair, name: t('categories.items.coloredHair') },
    { image: curlyHair, name: t('categories.items.curlyHair') },
    { image: thinHair, name: t('categories.items.fineHair') },
    { image: oilyHair, name: t('categories.items.oilyHair') },
    { image: hairLoss, name: t('categories.items.hairLoss') },
    { image: dandruff, name: t('categories.items.dandruff') },

    { image: acne, name: t('categories.items.acneSkin') },
    { image: cernes, name: t('categories.items.darkCirclesSkin') },
    { image: eczema, name: t('categories.items.eczemaSkin') },
    { image: oilySkin, name: t('categories.items.oilySkin') },
    { image: blackheads, name: t('categories.items.blackheadsSkin') },
    { image: pigmentation, name: t('categories.items.pigmentationSpotsSkin') },
    { image: enlarged, name: t('categories.items.enlargedPores') },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer"
            >
              <div className="rounded-3xl p-5 text-center bg-white border border-gray-100 shadow-sm transition-all group-hover:shadow-lg group-hover:border-gray-200">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-sm md:text-base font-semibold text-gray-900 leading-snug">
                  {category.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}