import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Smartphone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../lib/LanguageContext';
import android from "../../assets/img/android.png";

export default function DownloadCTA() {
  const { t } = useLanguage();
  const handleDownload = () => {
    const ua = navigator.userAgent || navigator.vendor;
  
    const isAndroid = /android/i.test(ua);
  
    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.lemsainnovation.beautysafe";
    } else {
      window.location.href =
      "https://play.google.com/store/apps/details?id=com.lemsainnovation.beautysafe&hl=en-US&ah=G8SQohMCm10qGg-fpqGe1G_PF14";
    }
  };
  return (
    <section id="download" className="py-24 px-6 bg-gradient-to-br from-purple-600 via-purple-400 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {t('cta.title')}
            <span className="block">{t('cta.titleLine2')}</span>
          </h2>
          
          <p className="text-xl text-purple-50 max-w-2xl mx-auto leading-relaxed">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            {/* <Button 
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-7 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all group"
            >
              <Apple className="w-6 h-6 mr-2" />
              <div className="text-left">
                <div className="text-xs text-gray-600">{t('cta.appStore')}</div>
                <div className="font-bold">{t('cta.appStoreName')}</div>
              </div>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button 
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-7 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all group"
            >
              <Smartphone className="w-6 h-6 mr-2" />
              <div className="text-left">
                <div className="text-xs text-gray-600">{t('cta.playStore')}</div>
                <div className="font-bold">{t('cta.playStoreName')}</div>
              </div>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button> */}
            <img
                  src={android}
                  alt="Get it on Google Play"
                  onClick={handleDownload}
                  className="h-16 w-auto cursor-pointer transition-transform hover:scale-105"
                />
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 text-purple-50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              <span>{t('cta.badges.free')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              <span>{t('cta.badges.noCard')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              <span>{t('cta.badges.updates')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}