import React, { useState } from 'react';
import { useLanguage } from './lib/LanguageContext';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// const languages = [
//   { code: 'en', name: 'English', flag: '🇬🇧' },
//   { code: 'fr', name: 'Français', flag: '🇫🇷' },
//   { code: 'ar', name: 'العربية', flag: '🇸🇦' }
// ];
const languages = [
  { code: 'en', name: 'English', flag: '' },
  { code: 'fr', name: 'Français', flag: '' },
  { code: 'ar', name: 'العربية', flag: '' }
];
export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const currentLang = languages.find(lang => lang.code === language);

  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl transition-all"
          >
            <Globe className="w-4 h-4 mr-2" />
            <span className="mr-1">{currentLang?.flag}</span>
            <span className="font-medium">{currentLang?.name}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`cursor-pointer ${language === lang.code ? 'bg-green-50' : ''}`}
            >
              <span className="mr-2 text-lg">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}