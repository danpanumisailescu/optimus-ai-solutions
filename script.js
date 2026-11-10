/* ==========================================================================
   OPTIMUS AI SOLUTIONS SRL - Main JavaScript
   Features: Bilingual Dictionary (EN / RO), Theme Toggle & Native Dialog
   ========================================================================== */

// 1. Translations Dictionary (Romanian & English)
const translations = {
  ro: {
    // Navigation
    nav_about: "Despre Noi",
    nav_app: "Examen Vânător",
    nav_features: "Beneficii",
    nav_contact: "Contact",

    // Hero
    hero_badge: "Dezvoltare Aplicații Mobile & Software",
    hero_title: "Inovație Tehnologică și Aplicații Smart pentru Utilizatori",
    hero_subtitle:
      "OPTIMUS AI SOLUTIONS SRL este o companie dedicată construirii de aplicații mobile performante, soluții bazate pe inteligență artificială și software utilitar.",
    hero_btn_app: "Descoperă Examen Vânător",
    hero_btn_about: "Află Despre Companie",

    // Hero Mockup & Examen Vanator Section
    mockup_badge: "Aplicație Mobilă",
    mockup_desc:
      "Aplicație mobilă educațională destinată pregătirii candidaților pentru obținerea permisului de vânătoare în România.",
    app_short_desc:
      "Aplicație mobilă educațională destinată pregătirii candidaților pentru obținerea permisului de vânătoare în România.",
    app_privacy_link: "Politica de Confidențialitate (Privacy Policy)",

    // About
    about_subtitle: "Cine Suntem",
    about_title: "OPTIMUS AI SOLUTIONS SRL",
    about_card1_title: "Dezvoltare Software General",
    about_card1_text:
      "Creăm aplicații software adaptate cerințelor moderne, punând accent pe viteză, securitate și o experiență de utilizare extrem de intuitivă.",
    about_card2_title: "Aplicații Mobile Mobile-First",
    about_card2_text:
      "Ne specializăm în aplicații Android și iOS orientate către rezolvarea de probleme specifice, oferind instrumente educaționale și de pregătire profesională.",
    about_card3_title: "Inteligență Artificială & Utilitare",
    about_card3_text:
      "Integrăm algoritmi inteligenți pentru optimizarea învățării, repetarea spațiată și generarea de analize statistice utile utilizatorilor noștri.",

    // Features
    feat_subtitle: "De Ce OPTIMUS AI SOLUTIONS?",
    feat_title: "Standarde de Calitate & Încredere",
    f_card1_title: "Garanția Calității",
    f_card1_text:
      "Toate aplicațiile noastre sunt verificate riguros pentru a oferi stabilitate maximă și securitate datelor utilizatorilor.",
    f_card2_title: "Actualizări Periodice",
    f_card2_text:
      "Actualizăm constant conținutul și codul aplicațiilor pentru a fi conforme cu ultimele cerințe și versiuni de sisteme de operare.",
    f_card3_title: "Suport Tehnic Dedicat",
    f_card3_text:
      "Echipa noastră răspunde prompt feedback-ului și solicitărilor de asistență din partea utilizatorilor.",

    // Contact
    contact_subtitle: "Contactează-ne",
    contact_title: "OPTIMUS AI SOLUTIONS SRL",
    contact_desc:
      "Dacă ai întrebări referitoare la aplicația Examen Vânător, sugestii de îmbunătățire sau dorești să colaborăm, nu ezita să ne trimiți un mesaj.",
    c_company_lbl: "Companie:",
    c_location_lbl: "Sediu:",
    c_email_lbl: "Email Suport:",

    // Footer & Legal
    footer_rights:
      "© 2026 OPTIMUS AI SOLUTIONS SRL. Toate drepturile rezervate.",
    footer_privacy: "Politica de Confidențialitate (Privacy Policy)",
    footer_terms: "Termeni și Condiții",

    terms_modal_title: "Termeni și Condiții de Utilizare",
    terms_p1:
      "Prin accesarea și utilizarea aplicațiilor dezvoltate de OPTIMUS AI SOLUTIONS SRL, inclusiv aplicația Examen Vânător, sunteți de acord să respectați acești Termeni și Condiții.",
    terms_p2:
      "Conținutul educațional furnizat are caracter de pregătire și învățare individuală. Utilizarea aplicației se face exclusiv pe propria răspundere a utilizatorului.",
    close_label: "Închide",
  },

  en: {
    // Navigation
    nav_about: "About Us",
    nav_app: "Examen Vânător",
    nav_features: "Features",
    nav_contact: "Contact",

    // Hero
    hero_badge: "Software & Mobile App Development",
    hero_title: "Technological Innovation & Smart User Applications",
    hero_subtitle:
      "OPTIMUS AI SOLUTIONS SRL is a software development company dedicated to crafting high-performance mobile apps, AI-assisted solutions, and general utility software designed to simplify everyday tasks.",
    hero_btn_app: "Discover Examen Vânător",
    hero_btn_about: "About Company",

    // Hero Mockup & Examen Vanator Section
    mockup_badge: "Mobile App",
    mockup_desc:
      "Educational mobile application designed to help candidates prepare for the hunting permit exam in Romania.",
    app_short_desc:
      "Educational mobile application designed to help candidates prepare for the hunting permit exam in Romania.",
    app_privacy_link: "Privacy Policy",

    // About
    about_subtitle: "Who We Are",
    about_title: "OPTIMUS AI SOLUTIONS SRL",
    about_card1_title: "General Software Engineering",
    about_card1_text:
      "We create software applications tailored to modern demands, focusing on speed, security, and exceptional user experience.",
    about_card2_title: "Mobile-First Applications",
    about_card2_text:
      "We specialize in targeted Android and iOS applications that solve specific problems, offering educational tools and exam prep solutions.",
    about_card3_title: "AI & Utility Tools",
    about_card3_text:
      "We integrate intelligent algorithms for learning optimization, spaced repetition, and analytical insights for our users.",

    // Features
    feat_subtitle: "Why OPTIMUS AI SOLUTIONS?",
    feat_title: "Quality Standards & User Trust",
    f_card1_title: "Quality Assurance",
    f_card1_text:
      "All our applications undergo rigorous testing to ensure maximum stability and data privacy.",
    f_card2_title: "Regular Updates",
    f_card2_text:
      "We continuously update app content and codebase to stay aligned with operating system updates.",
    f_card3_title: "Dedicated Support",
    f_card3_text:
      "Our team responds promptly to user inquiries and feature suggestions.",

    // Contact
    contact_subtitle: "Get in Touch",
    contact_title: "OPTIMUS AI SOLUTIONS SRL",
    contact_desc:
      "Have questions regarding the Examen Vânător app, feedback, or business partnership inquiries? Send us a message.",
    c_company_lbl: "Company:",
    c_location_lbl: "Location:",
    c_email_lbl: "Support Email:",

    // Footer & Legal
    footer_rights: "© 2026 OPTIMUS AI SOLUTIONS SRL. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",

    terms_modal_title: "Terms of Service",
    terms_p1:
      "By accessing and using applications developed by OPTIMUS AI SOLUTIONS SRL, including the Examen Vânător application, you agree to comply with these Terms of Service.",
    terms_p2:
      "The educational content provided is intended for individual study and preparation. Use of the application is solely at the user's own risk.",
    close_label: "Close",
  },
};

let currentLang = "ro";

document.addEventListener("DOMContentLoaded", () => {
  const langToggleBtn = document.getElementById("lang-toggle");
  const themeToggleBtn = document.getElementById("theme-toggle");
  const termsModal = document.getElementById("terms-modal");
  const openTermsBtn = document.getElementById("open-terms-btn");
  const closeTermsBtn = document.getElementById("close-terms-btn");

  // --- Theme Toggle Logic ---
  const savedTheme = localStorage.getItem("optimus_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  themeToggleBtn?.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("optimus_theme", newTheme);
  });

  // --- Language Switcher Logic ---
  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);
    const langLabel = document.getElementById("lang-label");
    if (langLabel) {
      langLabel.textContent = lang === "ro" ? "RO / EN" : "EN / RO";
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    if (closeTermsBtn && translations[lang]?.close_label) {
      closeTermsBtn.setAttribute("aria-label", translations[lang].close_label);
    }
  }

  langToggleBtn?.addEventListener("click", () => {
    const nextLang = currentLang === "ro" ? "en" : "ro";
    setLanguage(nextLang);
  });

  // --- Native Dialog Fallback for Invoker Commands & closedby="any" ---
  if (termsModal) {
    if (!("commandForElement" in HTMLButtonElement.prototype) && openTermsBtn) {
      openTermsBtn.addEventListener("click", () => {
        if (!termsModal.open) {
          termsModal.showModal();
        }
      });
    }

    if (!("closedBy" in HTMLDialogElement.prototype)) {
      const outside = (e, dialog) => {
        const r = dialog.getBoundingClientRect();
        return (
          e.clientX < r.left ||
          e.clientX > r.right ||
          e.clientY < r.top ||
          e.clientY > r.bottom
        );
      };
      let pressedOutside = false;
      termsModal.addEventListener("pointerdown", (e) => {
        pressedOutside = outside(e, termsModal);
      });
      termsModal.addEventListener("pointerup", (e) => {
        if (pressedOutside && outside(e, termsModal)) {
          termsModal.close();
        }
      });
    }
  }
});
