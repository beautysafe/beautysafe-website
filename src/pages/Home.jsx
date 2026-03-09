import React from 'react';
import Hero from '../components/landing/Hero';
import HowItWorks from '../components/landing/HowItWorks';
import Features from '../components/landing/Features';
import Categories from '../components/landing/Categories';
import DownloadCTA from '../components/landing/DownloadCTA';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white site-box mx-auto max-w-7xl rounded-3xl bg-white shadow-xl overflow-hidden">
      <Hero />
      <HowItWorks />
      <Features />
      <Categories />
      <DownloadCTA />
      <Footer />
    </div>
  );
}