/* ==========================================================================
   OPTIMUS AI SOLUTIONS SRL - Main JavaScript
   Features: Bilingual Dictionary (EN / RO), Theme Toggle, Interactive Quiz Demo, Modals
   ========================================================================== */

// 1. Translations Dictionary (Romanian & English)
const translations = {
  ro: {
    // Navigation
    nav_about: "Despre Noi",
    nav_app: "Examen Vânător",
    nav_demo: "Simulare Demo",
    nav_features: "Beneficii",
    nav_contact: "Contact",

    // Hero
    hero_badge: "Dezvoltare Aplicații Mobile & Software",
    hero_title: "Inovație Tehnologică și Aplicații Smart pentru Utilizatori",
    hero_subtitle: "OPTIMUS AI SOLUTIONS SRL este o companie dedicată construirii de aplicații mobile performante, soluții bazate pe inteligență artificială și software utilitar conceput pentru a simplifica viața de zi cu zi.",
    hero_btn_app: "Descoperă Examen Vânător",
    hero_btn_about: "Află Despre Companie",

    // Hero Mockup
    mockup_badge: "Aplicație Mobilă Activă",
    mockup_desc: "Grile oficiale, simulare examen vânătoare și mediu de învățare rapid pentru viitorii vânăători din România.",
    stat_official: "Grile Oficiale",
    stat_access: "Acces Oricând",
    stat_rating: "Scor Înalt",

    // About
    about_subtitle: "Cine Suntem",
    about_title: "OPTIMUS AI SOLUTIONS SRL",
    about_card1_title: "Dezvoltare Software General",
    about_card1_text: "Creăm aplicații software adaptate cerințelor moderne, punând accent pe viteză, securitate și o experiență de utilizare extrem de intuitivă.",
    about_card2_title: "Aplicații Mobile Mobile-First",
    about_card2_text: "Ne specializăm în aplicații Android și iOS orientate către rezolvarea de probleme specifice, oferind instrumente educaționale și de pregătire profesională.",
    about_card3_title: "Inteligență Artificială & Utilitare",
    about_card3_text: "Integrăm algoritmi inteligenți pentru optimizarea învățării, repetarea spațiată și generarea de analize statistice utile utilizatorilor noștri.",

    // Examen Vanator Article
    article_tag: "Aplicație Recomandată",
    article_title: "Examen Vânător - Ghidul Tău Complet Pentru Examenul de Vânătoare din România",
    article_lang: "Limba: Română",
    article_p1: "Pregătirea pentru examenul teoretic de obținere a permisului de vânătoare necesită un studiu riguros al legislației cinegetice, al biologiei speciilor de vânat, al regulilor de siguranță a armelor și munițiilor, precum și al principiilor de protecție a mediului. Aplicația Examen Vânător, dezvoltată de OPTIMUS AI SOLUTIONS SRL, a fost concepută ca un asistent digital complet pentru a sprijini candidații în obținerea succesului la examen.",
    article_h2_1: "Ce Oferă Aplicația Examen Vânător?",
    article_p2: "Aplicația noastră adună într-o interfață modernă și ușor de utilizat toate chestionarele oficiale actualizate, structurate pe domenii cheie de studiu. Utilizatorii pot parcurge grilele în modul de învățare cu explicații pas cu pas sau pot simula examenul real în condiții cronometrate.",
    
    f1_title: "Legislație Cinegetică",
    f1_desc: "Întrebări actualizate conform Legii vânătorii nr. 407/2006 și reglementărilor în vigoare.",
    f2_title: "Biologia Vânatului",
    f2_desc: "Identificarea speciilor de mamifere și păsări cinegetice, perioade de hunting și recunoaștere.",
    f3_title: "Arme și Balistică",
    f3_desc: "Reguli fundamentale de mânuire în siguranță a armelor de vânătoare, muniții și prim ajutor.",
    f4_title: "Analiză Greșeli & Progres",
    f4_desc: "Salvarea automată a întrebărilor greșite pentru o reluare eficientă și vizualizarea evoluției.",

    article_h2_2: "De Ce Să Alegi Examen Vânător?",
    li_1: "Interfață Curată fără Distrageri: Design conceput pentru o sesiune de studiu lungă fără oboseală vizuală.",
    li_2: "Mod de Simulare Realist: Examen cronometrat cu același număr de întrebări și prag de promovare ca la testul oficial.",
    li_3: "Funcționează Offline: Poți învăța oriunde, fără a fi nevoie de o conexiune permanentă la internet.",
    li_4: "Actualizări Constante: Menținem baza de date actualizată cu ultimele schimbări legislative.",

    // Quiz Demo
    demo_subtitle: "In-Browser Demo",
    demo_title: "Încearcă o Simulare Rapidă Examen Vânător",
    demo_desc: "Testează 3 întrebări de probă chiar acum pentru a vedea cum funcționează aplicația noastră.",
    quiz_next: "Următoarea Întrebare",

    // Features
    feat_subtitle: "De Ce OPTIMUS AI SOLUTIONS?",
    feat_title: "Standarde de Calitate & Încredere",
    f_card1_title: "Garanția Calității",
    f_card1_text: "Toate aplicațiile noastre sunt verificate riguros pentru a oferi stabilitate maximă și securitate datelor utilizatorilor.",
    f_card2_title: "Actualizări Periodice",
    f_card2_text: "Actualizăm constant conținutul și codul aplicațiilor pentru a fi conforme cu ultimele cerințe și versiuni de sisteme de operare.",
    f_card3_title: "Suport Tehnic Dedicat",
    f_card3_text: "Echipa noastră răspunde prompt feedback-ului și solicitărilor de asistență din partea utilizatorilor.",

    // Contact
    contact_subtitle: "Contactează-ne",
    contact_title: "OPTIMUS AI SOLUTIONS SRL",
    contact_desc: "Dacă ai întrebări referitoare la aplicația Examen Vânător, sugestii de îmbunătățire sau dorești să colaborăm, nu ezita să ne trimiți un mesaj.",
    c_company_lbl: "Companie:",
    c_location_lbl: "Sediu:",
    c_email_lbl: "Email Suport:",
    form_title: "Trimite un Mesaj",
    form_name: "Nume complet",
    form_email: "Adresă Email",
    form_message: "Mesaj",
    form_submit: "Trimite Mesajul",

    // Footer & Legal
    footer_rights: "© 2026 OPTIMUS AI SOLUTIONS SRL. Toate drepturile rezervate.",
    footer_privacy: "Politica de Confidențialitate (Privacy Policy)",
    footer_terms: "Termeni și Condiții",

    privacy_modal_title: "Politica de Confidențialitate - OPTIMUS AI SOLUTIONS SRL",
    terms_modal_title: "Termeni și Condiții de Utilizare"
  },

  en: {
    // Navigation
    nav_about: "About Us",
    nav_app: "Examen Vânător",
    nav_demo: "Interactive Demo",
    nav_features: "Features",
    nav_contact: "Contact",

    // Hero
    hero_badge: "Software & Mobile App Development",
    hero_title: "Technological Innovation & Smart User Applications",
    hero_subtitle: "OPTIMUS AI SOLUTIONS SRL is a software development company dedicated to crafting high-performance mobile apps, AI-assisted solutions, and general utility software designed to simplify everyday tasks.",
    hero_btn_app: "Discover Examen Vânător",
    hero_btn_about: "About Company",

    // Hero Mockup
    mockup_badge: "Live Mobile App",
    mockup_desc: "Official practice tests, simulated hunting exams, and rapid learning environment for future hunters in Romania.",
    stat_official: "Official Tests",
    stat_access: "Offline Access",
    stat_rating: "Top Rated",

    // About
    about_subtitle: "Who We Are",
    about_title: "OPTIMUS AI SOLUTIONS SRL",
    about_card1_title: "General Software Engineering",
    about_card1_text: "We create software applications tailored to modern demands, focusing on speed, security, and exceptional user experience.",
    about_card2_title: "Mobile-First Applications",
    about_card2_text: "We specialize in targeted Android and iOS applications that solve specific problems, offering educational tools and exam prep solutions.",
    about_card3_title: "AI & Utility Tools",
    about_card3_text: "We integrate intelligent algorithms for learning optimization, spaced repetition, and analytical insights for our users.",

    // Examen Vanator Article
    article_tag: "Featured Mobile App",
    article_title: "Examen Vânător - Your Complete Guide to the Romanian Hunting Exam",
    article_lang: "Language: Romanian / English Support",
    article_p1: "Preparing for the theoretical exam to obtain a hunting license requires rigorous study of hunting legislation, game species biology, firearm safety regulations, and environmental conservation principles. The Examen Vânător app, developed by OPTIMUS AI SOLUTIONS SRL, is designed as a complete digital companion to help candidates succeed in their official exam.",
    article_h2_1: "What Does the Examen Vânător App Offer?",
    article_p2: "Our application brings together all updated official questionnaires structured into key study domains within a modern, user-friendly interface. Users can study questions in learning mode with step-by-step guidance or simulate the real exam under timed conditions.",
    
    f1_title: "Hunting Legislation",
    f1_desc: "Updated questions compliant with Hunting Law no. 407/2006 and active regulations.",
    f2_title: "Game Species Biology",
    f2_desc: "Identification of mammals and game birds, hunting seasons, and habitat recognition.",
    f3_title: "Firearms & Ballistics",
    f3_desc: "Fundamental safety rules for handling hunting weapons, ammunition, and first aid.",
    f4_title: "Mistakes Analysis & Progress",
    f4_desc: "Automatic bookmarking of incorrectly answered questions for targeted revision.",

    article_h2_2: "Why Choose Examen Vânător?",
    li_1: "Clean Distraction-Free UI: Design built for extended study sessions without eye fatigue.",
    li_2: "Realistic Exam Simulator: Timed exam mode matching official passing scores and question counts.",
    li_3: "Full Offline Access: Study anywhere, anytime, without needing an active internet connection.",
    li_4: "Continuous Updates: Database kept up to date with the latest legislative changes.",

    // Quiz Demo
    demo_subtitle: "In-Browser Demo",
    demo_title: "Try a Quick Examen Vânător Quiz Simulation",
    demo_desc: "Test 3 sample questions right now to experience how our application works.",
    quiz_next: "Next Question",

    // Features
    feat_subtitle: "Why OPTIMUS AI SOLUTIONS?",
    feat_title: "Quality Standards & User Trust",
    f_card1_title: "Quality Assurance",
    f_card1_text: "All our applications undergo rigorous testing to ensure maximum stability and data privacy.",
    f_card2_title: "Regular Updates",
    f_card2_text: "We continuously update app content and codebase to stay aligned with operating system updates.",
    f_card3_title: "Dedicated Support",
    f_card3_text: "Our team responds promptly to user inquiries and feature suggestions.",

    // Contact
    contact_subtitle: "Get in Touch",
    contact_title: "OPTIMUS AI SOLUTIONS SRL",
    contact_desc: "Have questions regarding the Examen Vânător app, feedback, or business partnership inquiries? Send us a message.",
    c_company_lbl: "Company:",
    c_location_lbl: "Location:",
    c_email_lbl: "Support Email:",
    form_title: "Send a Message",
    form_name: "Full Name",
    form_email: "Email Address",
    form_message: "Message",
    form_submit: "Send Message",

    // Footer & Legal
    footer_rights: "© 2026 OPTIMUS AI SOLUTIONS SRL. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",

    privacy_modal_title: "Privacy Policy - OPTIMUS AI SOLUTIONS SRL",
    terms_modal_title: "Terms of Service"
  }
};

// 2. Quiz Questions Sample Data (Bilingual)
const quizData = {
  ro: [
    {
      category: "Legislație Cinegetică",
      question: "Care este vârsta minimă legală pentru a putea obține permisul de vânătoare în România?",
      options: ["16 ani", "18 ani", "21 de ani"],
      correct: 1 // 18 ani
    },
    {
      category: "Biologia Vânatului",
      question: "Care este perioada de gestație la cerbul comun (Cervus elaphus)?",
      options: ["Aproximativ 34-36 săptămâni (cca. 8 luni)", "Aproximativ 5 luni", "Aproximativ 12 luni"],
      correct: 0
    },
    {
      category: "Arme și Siguranță",
      question: "Cum trebuie transportată arma de vânătoare în autovehicul?",
      options: [
        "Încărcată și așezată pe bancheta din spate",
        "Neîncărcată, demontată sau pusă în husă specială sigilată",
        "Cu cartuș pe țeavă dar cu siguranța pusă"
      ],
      correct: 1
    }
  ],
  en: [
    {
      category: "Hunting Legislation",
      question: "What is the legal minimum age to obtain a hunting permit in Romania?",
      options: ["16 years old", "18 years old", "21 years old"],
      correct: 1 // 18 years old
    },
    {
      category: "Game Biology",
      question: "What is the gestation period for the Red Deer (Cervus elaphus)?",
      options: ["Approximately 34-36 weeks (approx. 8 months)", "Approximately 5 months", "Approximately 12 months"],
      correct: 0
    },
    {
      category: "Firearms & Safety",
      question: "How must a hunting firearm be transported in a motor vehicle?",
      options: [
        "Loaded and placed on the back seat",
        "Unloaded, disassembled or inside a dedicated locked/sealed case",
        "Loaded with safety catch engaged"
      ],
      correct: 1
    }
  ]
};

// Application State
let currentLang = 'ro';
let quizCurrentIndex = 0;
let quizScore = 0;

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  const langToggleBtn = document.getElementById('lang-toggle');
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  // Modals
  const privacyModal = document.getElementById('privacy-modal');
  const termsModal = document.getElementById('terms-modal');
  const openPrivacyLink = document.getElementById('open-privacy-link');
  const openTermsLink = document.getElementById('open-terms-link');
  const closePrivacyBtn = document.getElementById('close-privacy-btn');
  const closeTermsBtn = document.getElementById('close-terms-btn');

  // --- Theme Toggle Logic ---
  const savedTheme = localStorage.getItem('optimus_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('optimus_theme', newTheme);
  });

  // --- Language Switcher Logic ---
  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    const langLabel = document.getElementById('lang-label');
    if (langLabel) {
      langLabel.textContent = lang === 'ro' ? 'RO / EN' : 'EN / RO';
    }

    // Update all data-i18n elements
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Re-render Quiz Demo for current language
    renderQuizStep(quizCurrentIndex);
  }

  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'ro' ? 'en' : 'ro';
    setLanguage(nextLang);
  });

  // --- Interactive Quiz Demo Logic ---
  function renderQuizStep(index) {
    const questions = quizData[currentLang];
    if (index >= questions.length) {
      // Quiz Finished State
      renderQuizFinished();
      return;
    }

    const q = questions[index];
    const progressFill = document.getElementById('quiz-progress');
    const stepText = document.getElementById('quiz-step-text');
    const categoryBadge = document.getElementById('quiz-category');
    const questionText = document.getElementById('quiz-question-text');
    const optionsContainer = document.getElementById('quiz-options');
    const feedbackText = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('quiz-next-btn');

    if (progressFill) progressFill.style.width = `${((index + 1) / questions.length) * 100}%`;
    if (stepText) stepText.textContent = currentLang === 'ro' ? `Întrebarea ${index + 1} din ${questions.length}` : `Question ${index + 1} of ${questions.length}`;
    if (categoryBadge) categoryBadge.textContent = q.category;
    if (questionText) questionText.textContent = q.question;
    if (feedbackText) feedbackText.textContent = '';
    if (nextBtn) nextBtn.style.display = 'none';

    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      q.options.forEach((opt, optIndex) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span>${String.fromCharCode(65 + optIndex)}.</span> ${opt}`;
        btn.addEventListener('click', () => handleOptionSelect(optIndex, q.correct, btn));
        optionsContainer.appendChild(btn);
      });
    }
  }

  function handleOptionSelect(selectedIndex, correctIndex, btnElement) {
    const optionsContainer = document.getElementById('quiz-options');
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);

    const feedbackText = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('quiz-next-btn');

    if (selectedIndex === correctIndex) {
      btnElement.classList.add('correct');
      feedbackText.className = 'quiz-feedback success';
      feedbackText.textContent = currentLang === 'ro' ? 'Correct! Raspuns corect.' : 'Correct answer!';
      quizScore++;
    } else {
      btnElement.classList.add('wrong');
      buttons[correctIndex].classList.add('correct');
      feedbackText.className = 'quiz-feedback error';
      feedbackText.textContent = currentLang === 'ro' ? 'Incorect! Răspunsul corect a fost marcat cu verde.' : 'Incorrect! Correct answer highlighted in green.';
    }

    if (nextBtn) {
      nextBtn.style.display = 'inline-flex';
    }
  }

  function renderQuizFinished() {
    const quizCard = document.getElementById('quiz-card');
    const feedbackText = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('quiz-next-btn');

    if (quizCard) {
      quizCard.innerHTML = `
        <div style="text-align: center; padding: 20px;">
          <h3 style="font-size: 1.8rem; margin-bottom: 12px;">🎉 ${currentLang === 'ro' ? 'Felicitări!' : 'Congratulations!'}</h3>
          <p style="font-size: 1.1rem; color: var(--text-muted);">
            ${currentLang === 'ro' ? `Ai obținut scorul ${quizScore} din 3 în simularea demo.` : `You scored ${quizScore} out of 3 in the demo simulation.`}
          </p>
          <button id="quiz-restart-btn" class="btn btn-primary" style="margin-top: 20px;">
            ${currentLang === 'ro' ? 'Reia Simularea' : 'Retake Simulation'}
          </button>
        </div>
      `;

      document.getElementById('quiz-restart-btn')?.addEventListener('click', () => {
        quizCurrentIndex = 0;
        quizScore = 0;
        // Rebuild quiz structure
        location.hash = '#quiz-demo';
        location.reload();
      });
    }

    if (feedbackText) feedbackText.textContent = '';
    if (nextBtn) nextBtn.style.display = 'none';
  }

  const nextBtn = document.getElementById('quiz-next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      quizCurrentIndex++;
      renderQuizStep(quizCurrentIndex);
    });
  }

  // --- Modal Event Listeners ---
  openPrivacyLink?.addEventListener('click', (e) => {
    e.preventDefault();
    if (privacyModal) privacyModal.style.display = 'flex';
  });

  openTermsLink?.addEventListener('click', (e) => {
    e.preventDefault();
    if (termsModal) termsModal.style.display = 'flex';
  });

  closePrivacyBtn?.addEventListener('click', () => {
    if (privacyModal) privacyModal.style.display = 'none';
  });

  closeTermsBtn?.addEventListener('click', () => {
    if (termsModal) termsModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === privacyModal) privacyModal.style.display = 'none';
    if (e.target === termsModal) termsModal.style.display = 'none';
  });

  // Initialize Quiz
  renderQuizStep(0);
});
