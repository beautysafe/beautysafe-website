import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Header
    howItWorks: "How it works",
    features: "Features",
    categories: "Categories",
    download: "Download",
    contact: "Contact",
    // Hero
    tagline: "Smart Cosmetic Analysis",
    heroTitle1: "Know What's",
    heroTitle2: "In Your Products",
    heroDescription: "Scan any cosmetic product and instantly discover if it's safe for you. Make informed choices with science-backed analysis.",
    downloadNow: "Download Now",
    learnMore: "Learn More",
    productsScanned: "Products Scanned",
    happyUsers: "Happy Users",
    appRating: "App Rating",
    scanProduct: "Scan Product",
    pointCamera: "Point camera at barcode",
    safe: "Safe",
    instantAnalysis: "Instant Analysis",
    
    // How It Works
    howItWorks: "How It Works",
    howItWorksSubtitle: "Four simple steps to safer, smarter cosmetic choices",
    step1Title: "Scan Product",
    step1Desc: "Use your camera to scan the barcode or enter the product code manually",
    step2Title: "Get Analysis",
    step2Desc: "Instantly receive detailed product information and safety assessment",
    step3Title: "Safety Status",
    step3Desc: "See clear ratings: Safe, Risky, or Under Review with explanations",
    step4Title: "Save & Track",
    step4Desc: "Add favorites and keep track of your recently scanned products",
    
    // Features
    whyChoose: "Why Choose Our App",
    featuresSubtitle: "Powerful features designed to help you make informed decisions about your cosmetics",
    feature1Title: "Science-Backed Analysis",
    feature1Desc: "Our database contains thousands of ingredients with verified safety ratings from trusted sources",
    feature2Title: "Instant Results",
    feature2Desc: "Get comprehensive product analysis in seconds, not hours. No waiting, just answers",
    feature3Title: "Extensive Database",
    feature3Desc: "Access information on thousands of cosmetic products across all major categories",
    feature4Title: "Privacy First",
    feature4Desc: "Your scan history stays private. We never share your personal data with third parties",
    
    // Categories
    exploreCategories: "Explore by Category",
    categoriesSubtitle: "Browse through our extensive database organized by product type",
    hairCare: "Hair Care",
    skinCare: "Skin Care",
    bodyCare: "Body Care",
    sunCare: "Sun Care",
    babyCare: "Baby Care",
    makeup: "Makeup",
    products: "products",
    
    // Download CTA
    ctaTitle1: "Start Making Safer",
    ctaTitle2: "Beauty Choices Today",
    ctaSubtitle: "Join thousands of users who trust our app to help them choose safer cosmetic products",
    downloadOn: "Download on the",
    getItOn: "Get it on",
    appStore: "App Store",
    googlePlay: "Google Play",
    freeDownload: "Free to Download",
    noCard: "No Credit Card Required",
    regularUpdates: "Regular Updates",
    
    // Footer
    footerTagline: "Making cosmetic safety accessible to everyone, one scan at a time.",
    product: "Product",
    features: "Features",
    database: "Database",
    pricing: "Pricing",
    company: "Company",
    aboutUs: "About Us",
    blog: "Blog",
    careers: "Careers",
    contact: "Contact",
    support: "Support",
    helpCenter: "Help Center",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    allRights: "All rights reserved",
    
    // Contact Page
    contactTitle: "Get in Touch",
    contactSubtitle: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    yourName: "Your Name",
    yourEmail: "Your Email",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    contactInfo: "Contact Information",
    emailUs: "Email us at",
    callUs: "Call us at",
    visitUs: "Visit us at",
    address: "123 Beauty Street, Cosmetics City, CC 12345"
  },
  fr: {
    // Header
    howItWorks: "Comment ça marche",
    features: "Fonctionnalités",
    categories: "Catégories",
    download: "Télécharger",
    contact: "Contact",
    // Hero
    tagline: "Analyse Cosmétique Intelligente",
    heroTitle1: "Sachez Ce Qu'il Y A",
    heroTitle2: "Dans Vos Produits",
    heroDescription: "Scannez n'importe quel produit cosmétique et découvrez instantanément s'il est sûr pour vous. Faites des choix éclairés avec une analyse scientifique.",
    downloadNow: "Télécharger Maintenant",
    learnMore: "En Savoir Plus",
    productsScanned: "Produits Scannés",
    happyUsers: "Utilisateurs Satisfaits",
    appRating: "Note de l'App",
    scanProduct: "Scanner le Produit",
    pointCamera: "Pointez la caméra sur le code-barres",
    safe: "Sûr",
    instantAnalysis: "Analyse Instantanée",
    
    // How It Works
    howItWorks: "Comment Ça Marche",
    howItWorksSubtitle: "Quatre étapes simples pour des choix cosmétiques plus sûrs et plus intelligents",
    step1Title: "Scanner le Produit",
    step1Desc: "Utilisez votre caméra pour scanner le code-barres ou entrez le code produit manuellement",
    step2Title: "Obtenir l'Analyse",
    step2Desc: "Recevez instantanément des informations détaillées sur le produit et une évaluation de sécurité",
    step3Title: "Statut de Sécurité",
    step3Desc: "Consultez des évaluations claires : Sûr, Risqué ou En Cours d'Examen avec des explications",
    step4Title: "Sauvegarder et Suivre",
    step4Desc: "Ajoutez des favoris et gardez une trace de vos produits récemment scannés",
    
    // Features
    whyChoose: "Pourquoi Choisir Notre App",
    featuresSubtitle: "Des fonctionnalités puissantes pour vous aider à prendre des décisions éclairées sur vos cosmétiques",
    feature1Title: "Analyse Scientifique",
    feature1Desc: "Notre base de données contient des milliers d'ingrédients avec des évaluations de sécurité vérifiées provenant de sources fiables",
    feature2Title: "Résultats Instantanés",
    feature2Desc: "Obtenez une analyse complète du produit en quelques secondes, pas en heures. Pas d'attente, juste des réponses",
    feature3Title: "Base de Données Étendue",
    feature3Desc: "Accédez à des informations sur des milliers de produits cosmétiques dans toutes les catégories principales",
    feature4Title: "Confidentialité d'Abord",
    feature4Desc: "Votre historique de scan reste privé. Nous ne partageons jamais vos données personnelles avec des tiers",
    
    // Categories
    exploreCategories: "Explorer par Catégorie",
    categoriesSubtitle: "Parcourez notre vaste base de données organisée par type de produit",
    hairCare: "Soins Capillaires",
    skinCare: "Soins de la Peau",
    bodyCare: "Soins du Corps",
    sunCare: "Protection Solaire",
    babyCare: "Soins Bébé",
    makeup: "Maquillage",
    products: "produits",
    
    // Download CTA
    ctaTitle1: "Commencez à Faire des",
    ctaTitle2: "Choix de Beauté Plus Sûrs Aujourd'hui",
    ctaSubtitle: "Rejoignez des milliers d'utilisateurs qui font confiance à notre application pour choisir des produits cosmétiques plus sûrs",
    downloadOn: "Télécharger sur",
    getItOn: "Disponible sur",
    appStore: "App Store",
    googlePlay: "Google Play",
    freeDownload: "Téléchargement Gratuit",
    noCard: "Pas de Carte Bancaire Requise",
    regularUpdates: "Mises à Jour Régulières",
    
    // Footer
    footerTagline: "Rendre la sécurité cosmétique accessible à tous, un scan à la fois.",
    product: "Produit",
    features: "Fonctionnalités",
    database: "Base de Données",
    pricing: "Tarification",
    company: "Entreprise",
    aboutUs: "À Propos",
    blog: "Blog",
    careers: "Carrières",
    contact: "Contact",
    support: "Support",
    helpCenter: "Centre d'Aide",
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions d'Utilisation",
    cookiePolicy: "Politique des Cookies",
    allRights: "Tous droits réservés",
    
    // Contact Page
    contactTitle: "Contactez-Nous",
    contactSubtitle: "Vous avez des questions ? Nous serions ravis de vous entendre. Envoyez-nous un message et nous vous répondrons dès que possible.",
    yourName: "Votre Nom",
    yourEmail: "Votre Email",
    subject: "Sujet",
    message: "Message",
    sendMessage: "Envoyer le Message",
    sending: "Envoi...",
    contactInfo: "Informations de Contact",
    emailUs: "Écrivez-nous à",
    callUs: "Appelez-nous au",
    visitUs: "Visitez-nous à",
    address: "123 Rue de la Beauté, Ville Cosmétique, CC 12345"
  },
  ar: {
    // Hero
    tagline: "تحليل ذكي لمستحضرات التجميل",
    heroTitle1: "اعرف ما يوجد",
    heroTitle2: "في منتجاتك",
    heroDescription: "امسح أي منتج تجميلي واكتشف على الفور ما إذا كان آمنًا لك. اتخذ قرارات مستنيرة بتحليل علمي.",
    downloadNow: "حمل الآن",
    learnMore: "اعرف المزيد",
    productsScanned: "المنتجات الممسوحة",
    happyUsers: "المستخدمون السعداء",
    appRating: "تقييم التطبيق",
    scanProduct: "مسح المنتج",
    pointCamera: "وجه الكاميرا نحو الباركود",
    safe: "آمن",
    instantAnalysis: "تحليل فوري",
    
    // How It Works
    howItWorks: "كيف يعمل",
    howItWorksSubtitle: "أربع خطوات بسيطة لخيارات تجميل أكثر أمانًا وذكاءً",
    step1Title: "مسح المنتج",
    step1Desc: "استخدم الكاميرا لمسح الباركود أو أدخل رمز المنتج يدويًا",
    step2Title: "الحصول على التحليل",
    step2Desc: "احصل على الفور على معلومات مفصلة عن المنتج وتقييم السلامة",
    step3Title: "حالة السلامة",
    step3Desc: "شاهد تقييمات واضحة: آمن، محفوف بالمخاطر، أو قيد المراجعة مع شروحات",
    step4Title: "حفظ وتتبع",
    step4Desc: "أضف المفضلة وتتبع المنتجات التي قمت بمسحها مؤخرًا",
    
    // Features
    whyChoose: "لماذا تختار تطبيقنا",
    featuresSubtitle: "ميزات قوية مصممة لمساعدتك على اتخاذ قرارات مستنيرة حول مستحضرات التجميل الخاصة بك",
    feature1Title: "تحليل علمي",
    feature1Desc: "تحتوي قاعدة بياناتنا على آلاف المكونات مع تقييمات سلامة موثقة من مصادر موثوقة",
    feature2Title: "نتائج فورية",
    feature2Desc: "احصل على تحليل شامل للمنتج في ثوانٍ، وليس ساعات. لا انتظار، فقط إجابات",
    feature3Title: "قاعدة بيانات واسعة",
    feature3Desc: "الوصول إلى معلومات عن آلاف منتجات التجميل عبر جميع الفئات الرئيسية",
    feature4Title: "الخصوصية أولاً",
    feature4Desc: "يظل سجل المسح الخاص بك خاصًا. نحن لا نشارك بياناتك الشخصية مع أطراف ثالثة أبدًا",
    
    // Categories
    exploreCategories: "استكشف حسب الفئة",
    categoriesSubtitle: "تصفح قاعدة بياناتنا الشاملة المنظمة حسب نوع المنتج",
    hairCare: "العناية بالشعر",
    skinCare: "العناية بالبشرة",
    bodyCare: "العناية بالجسم",
    sunCare: "الحماية من الشمس",
    babyCare: "العناية بالطفل",
    makeup: "المكياج",
    products: "منتج",
    
    // Download CTA
    ctaTitle1: "ابدأ في اتخاذ",
    ctaTitle2: "خيارات جمال أكثر أمانًا اليوم",
    ctaSubtitle: "انضم إلى آلاف المستخدمين الذين يثقون بتطبيقنا لمساعدتهم في اختيار منتجات تجميل أكثر أمانًا",
    downloadOn: "حمل من",
    getItOn: "احصل عليه من",
    appStore: "آب ستور",
    googlePlay: "جوجل بلاي",
    freeDownload: "تحميل مجاني",
    noCard: "لا حاجة لبطاقة ائتمان",
    regularUpdates: "تحديثات منتظمة",
    
    // Footer
    footerTagline: "جعل سلامة مستحضرات التجميل في متناول الجميع، مسح واحد في كل مرة.",
    product: "المنتج",
    features: "الميزات",
    database: "قاعدة البيانات",
    pricing: "التسعير",
    company: "الشركة",
    aboutUs: "من نحن",
    blog: "المدونة",
    careers: "الوظائف",
    contact: "اتصل بنا",
    support: "الدعم",
    helpCenter: "مركز المساعدة",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    cookiePolicy: "سياسة ملفات تعريف الارتباط",
    allRights: "جميع الحقوق محفوظة",
    
    // Contact Page
    contactTitle: "تواصل معنا",
    contactSubtitle: "هل لديك أسئلة؟ نود أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن.",
    yourName: "اسمك",
    yourEmail: "بريدك الإلكتروني",
    subject: "الموضوع",
    message: "الرسالة",
    sendMessage: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    contactInfo: "معلومات الاتصال",
    emailUs: "راسلنا على",
    callUs: "اتصل بنا على",
    visitUs: "قم بزيارتنا في",
    address: "123 شارع الجمال، مدينة مستحضرات التجميل، CC 12345"
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    // Update document direction and lang attribute
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}