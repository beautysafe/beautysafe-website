import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Scan, Menu, X } from "lucide-react";
import { createPageUrl } from "@/utils";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from './lib/LanguageContext';
import logo from "../assets/img/logo.png";
export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close drawer when route changes (including hash changes)
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const homePath = createPageUrl("Home"); // e.g. "/"
  const contactPath = createPageUrl("Contact");
  const { t } = useLanguage();

  const sectionLinks = [
    { label: t('header.howItWorks'), hash: "how-it-works" },
    { label: t('header.features'), hash: "features" },
    { label: t('header.categories'), hash: "categories" },
    { label: t('header.download'), hash: "download" },
  ];

  return (
    <header className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to={homePath} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md">
            <img src={logo} alt="BeautySafe Logo" className="w-7 h-7 rounded-lg" />
          </div>
          <span className="text-xl tracking-tight text-gray-900 group-hover:text-purple-700 transition-colors">
            Beaty Safe
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          {sectionLinks.map((item) => (
            <a
              key={item.hash}
              href={`${homePath}#${item.hash}`}
              className="hover:text-green-700 transition-colors"
            >
              {item.label}
            </a>
          ))}

          <Link to={contactPath} className="hover:text-green-700 transition-colors">
            Contact
          </Link>

          <LanguageSwitcher />
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-gray-50"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* Panel */}
          <aside className="absolute right-0 top-0 w-80 max-w-[85vw] bg-white shadow-xl border-l border-gray-100 p-6 h-[100vh]">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-gray-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-4 text-base font-medium text-gray-700">
              {sectionLinks.map((item) => (
                <a
                  key={item.hash}
                  href={`${homePath}#${item.hash}`}
                  className="py-2 hover:text-green-700 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <Link to={contactPath} className="hover:text-green-700 transition-colors">
                {t('header.contact')}
              </Link>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}