import React from 'react';
import { LanguageProvider } from './components/lib/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import Header from './components/Header';

export default function Layout({ children, currentPageName }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
      <Header />
        {children}
      </div>
    </LanguageProvider>
  );
}