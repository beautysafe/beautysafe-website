import React from 'react';
import { Scan, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import logo from "../../assets/img/logo.png";

export default function Footer() {
  const { t } = useLanguage();
  const homePath = createPageUrl("Home"); 
  const sectionLinks = [
    { label: t('header.howItWorks'), hash: "how-it-works" },
    { label: t('header.features'), hash: "features" },
    { label: t('header.categories'), hash: "categories" },
    { label: t('header.download'), hash: "download" },
  ];
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              
              <div className="w-9 h-9 flex items-center justify-center shadow-md">
              <img src={logo} alt="BeautySafe Logo" className="" />
              </div>
              <span className="text-xl tracking-tight text-white group-hover:text-purple-700 transition-colors">
                Beaty Safe
              </span>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2 text-sm">
                {sectionLinks.map((item) => (
                <li><a
                  key={item.hash}
                  href={`${homePath}#${item.hash}`}
                  className="hover:text-green-400 transition-colors"
                >
                  {item.label}
                </a></li>
              ))}
             
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">{t('footer.links.about')}</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">{t('footer.links.blog')}</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">{t('footer.links.careers')}</a></li>
              <li><Link to={createPageUrl('Contact')} className="hover:text-green-400 transition-colors">{t('footer.links.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">{t('footer.links.help')}</a></li>
              <li><a href="/privacy-policy" className="hover:text-green-400 transition-colors">{t('footer.links.privacy')}</a></li>
              <li><a href="/privacy-policy" className="hover:text-green-400 transition-colors">{t('footer.links.terms')}</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">{t('footer.links.cookies')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            {t('footer.copyright')}
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}