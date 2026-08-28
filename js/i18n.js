/* =========================================================
   i18n.js — Textos de interface (PT/EN) + motor de traducao.
   Arquivo COMPARTILHADO entre os portfolios do grupo.
   Nao contem nenhuma informacao pessoal.
   ========================================================= */

const UI_STRINGS = {
  pt: {
    /* Navegacao */
    navAbout: 'Sobre Mim',
    navProjects: 'Projetos',
    navExperience: 'Experiências',
    navContact: 'Contato',
    navMenu: 'Abrir menu',

    /* Hero */
    heroEyebrow: 'Portfólio profissional',
    heroCta: 'Ver projetos',
    heroCtaSecondary: 'Falar comigo',

    /* Sobre Mim */
    aboutEyebrow: 'Sobre Mim',
    aboutTitle: 'Quem sou eu',
    aboutSubtitle: 'Formação, área de atuação, interesses e objetivos profissionais — em português e inglês.',
    aboutTitlePt: 'Português',
    aboutTitleEn: 'English',
    skillsTitle: 'Principais tecnologias',
    statsTitle: 'Em números',
    statProjects: 'Projetos no portfólio',
    statTech: 'Tecnologias dominadas',
    statExperience: 'Experiências registradas',

    /* Projetos */
    projectsEyebrow: 'Linha do tempo',
    projectsTitle: 'Projetos',
    projectsSubtitle: 'Do mais antigo ao mais recente — projetos pessoais, acadêmicos e profissionais.',
    projectRepo: 'Repositório',
    projectDemo: 'Ver demo',
    projectRepoSoon: 'Repositório em breve',
    mediaPlaceholder: 'Imagem/GIF do projeto em breve',

    /* Experiencias */
    experienceEyebrow: 'Trajetória',
    experienceTitle: 'Experiências',
    experienceSubtitle: 'Estágios, trabalhos, freelas, participações em projetos open source e eventos técnicos.',
    educationTitle: 'Formação acadêmica',
    certificationsTitle: 'Licenças e certificados',
    certCredential: 'Credencial',
    certView: 'Ver credencial',

    /* Contato */
    contactEyebrow: 'Vamos conversar',
    contactTitle: 'Contato',
    contactSubtitle: 'Envie uma mensagem pelo formulário ou fale diretamente por um dos canais abaixo.',
    contactChannels: 'Canais diretos',
    contactFormTitle: 'Envie uma mensagem',
    labelEmail: 'E-mail',
    labelWhatsapp: 'WhatsApp',
    labelLinkedin: 'LinkedIn',
    labelGithub: 'GitHub',
    formName: 'Nome',
    formEmail: 'E-mail',
    formMessage: 'Mensagem',
    formNamePlaceholder: 'Como você se chama?',
    formEmailPlaceholder: 'seu.email@exemplo.com',
    formMessagePlaceholder: 'Conte um pouco sobre o que você precisa...',
    formSubmit: 'Enviar mensagem',
    formSending: 'Enviando...',
    formSuccess: 'Mensagem enviada com sucesso. Obrigado pelo contato!',
    formErrorGeneric: 'Não foi possível enviar agora. Tente novamente ou use o e-mail direto.',
    formErrorRequired: 'Campo obrigatório.',
    formErrorEmail: 'Informe um e-mail válido.',
    formErrorMin: 'Escreva uma mensagem um pouco mais detalhada (mínimo de 10 caracteres).',
    formNote: 'Seus dados são usados apenas para responder ao contato.',

    /* Rodape */
    footerBuilt: 'Desenvolvido para o Laboratório de Projeto de Software — PUC Minas.',
    footerRights: 'Todos os direitos reservados.',
    themeToggle: 'Alternar tema',
  },

  en: {
    /* Navigation */
    navAbout: 'About Me',
    navProjects: 'Projects',
    navExperience: 'Experience',
    navContact: 'Contact',
    navMenu: 'Open menu',

    /* Hero */
    heroEyebrow: 'Professional portfolio',
    heroCta: 'View projects',
    heroCtaSecondary: 'Get in touch',

    /* About */
    aboutEyebrow: 'About Me',
    aboutTitle: 'Who I am',
    aboutSubtitle: 'Education, field of work, interests and professional goals — in Portuguese and English.',
    aboutTitlePt: 'Português',
    aboutTitleEn: 'English',
    skillsTitle: 'Core technologies',
    statsTitle: 'At a glance',
    statProjects: 'Projects in portfolio',
    statTech: 'Technologies mastered',
    statExperience: 'Recorded experiences',

    /* Projects */
    projectsEyebrow: 'Timeline',
    projectsTitle: 'Projects',
    projectsSubtitle: 'From oldest to newest — personal, academic and professional projects.',
    projectRepo: 'Repository',
    projectDemo: 'View demo',
    projectRepoSoon: 'Repository coming soon',
    mediaPlaceholder: 'Project image/GIF coming soon',

    /* Experience */
    experienceEyebrow: 'Journey',
    experienceTitle: 'Experience',
    experienceSubtitle: 'Internships, jobs, freelance work, open source contributions and tech events.',
    educationTitle: 'Education',
    certificationsTitle: 'Licenses & certifications',
    certCredential: 'Credential ID',
    certView: 'View credential',

    /* Contact */
    contactEyebrow: "Let's talk",
    contactTitle: 'Contact',
    contactSubtitle: 'Send a message through the form or reach out directly via one of the channels below.',
    contactChannels: 'Direct channels',
    contactFormTitle: 'Send a message',
    labelEmail: 'Email',
    labelWhatsapp: 'WhatsApp',
    labelLinkedin: 'LinkedIn',
    labelGithub: 'GitHub',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    formNamePlaceholder: 'What is your name?',
    formEmailPlaceholder: 'your.email@example.com',
    formMessagePlaceholder: 'Tell me a bit about what you need...',
    formSubmit: 'Send message',
    formSending: 'Sending...',
    formSuccess: 'Message sent successfully. Thanks for reaching out!',
    formErrorGeneric: 'Could not send right now. Please try again or use the direct email.',
    formErrorRequired: 'Required field.',
    formErrorEmail: 'Please enter a valid email.',
    formErrorMin: 'Please write a slightly longer message (at least 10 characters).',
    formNote: 'Your data is used only to reply to your message.',

    /* Footer */
    footerBuilt: 'Built for the Software Project Lab — PUC Minas.',
    footerRights: 'All rights reserved.',
    themeToggle: 'Toggle theme',
  },
};

const LANG_KEY = 'portfolio-lang';

function getLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === 'pt' || saved === 'en') return saved;
  return (navigator.language || 'pt').toLowerCase().startsWith('en') ? 'en' : 'pt';
}

function t(key, lang) {
  const l = lang || getLang();
  return (UI_STRINGS[l] && UI_STRINGS[l][key]) || UI_STRINGS.pt[key] || key;
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyLang(lang);
}

/* Traduz todo elemento com data-i18n / data-i18n-placeholder / data-i18n-aria
   e avisa o resto da pagina via evento 'langchange'. */
function applyLang(lang) {
  const strings = UI_STRINGS[lang] || UI_STRINGS.pt;
  document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (strings[key] !== undefined) el.textContent = strings[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (strings[key] !== undefined) el.setAttribute('placeholder', strings[key]);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (strings[key] !== undefined) el.setAttribute('aria-label', strings[key]);
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang, strings } }));
}
