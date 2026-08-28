/* =========================================================
   components.js — Componentes reutilizaveis (cabecalho, rodape,
   cartoes de projeto/experiencia e canais de contato).
   Arquivo COMPARTILHADO entre os portfolios do grupo.
   Le PROFILE / PROJECTS / EXPERIENCES de data.js.
   ========================================================= */

/* ---------- Icones SVG inline (sem dependencia externa) ---------- */
const ICONS = {
  pin: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  mail: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  whatsapp: '<svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"/><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.02a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23a8.23 8.23 0 0 1 0 16.46z"/></svg>',
  linkedin: '<svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95C21.6 8.69 22 11.1 22 14.24V21h-4v-6.02c0-1.44-.03-3.29-2.05-3.29-2.06 0-2.37 1.56-2.37 3.18V21h-3.9V9z"/></svg>',
  github: '<svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>',
  link: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>',
  badge: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
  send: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4 20-7z"/></svg>',
};

/* Escapa texto vindo de data.js antes de injetar no HTML. */
function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

/* ---------- Cabecalho ---------- */
const NAV_ITEMS = [
  { href: 'index.html', page: 'about', key: 'navAbout' },
  { href: 'projetos.html', page: 'projects', key: 'navProjects' },
  { href: 'experiencias.html', page: 'experience', key: 'navExperience' },
  { href: 'contato.html', page: 'contact', key: 'navContact' },
];

function renderHeader() {
  const mount = document.getElementById('site-header');
  if (!mount) return;
  const current = document.body.dataset.page;

  mount.outerHTML = `
    <header class="site-header">
      <nav class="nav" aria-label="Menu principal">
        <a href="index.html" class="nav-brand">
          <span class="dot" aria-hidden="true"></span>
          <span>${esc(PROFILE.name)}</span>
        </a>

        <ul class="nav-links" id="nav-links">
          ${NAV_ITEMS.map((item) => `
            <li>
              <a href="${item.href}" data-page="${item.page}" data-i18n="${item.key}"
                 ${item.page === current ? 'aria-current="page"' : ''}></a>
            </li>`).join('')}
        </ul>

        <div class="nav-controls">
          <div class="lang-switch" role="group" aria-label="Idioma">
            <button type="button" class="lang-btn" data-lang="pt">PT</button>
            <button type="button" class="lang-btn" data-lang="en">EN</button>
          </div>
          <button type="button" class="icon-btn" id="theme-toggle" data-i18n-aria="themeToggle"></button>
          <button type="button" class="nav-toggle" id="nav-toggle" data-i18n-aria="navMenu"
                  aria-expanded="false" aria-controls="nav-links">&#9776;</button>
        </div>
      </nav>
    </header>`;
}

/* ---------- Rodape ---------- */
function renderFooter() {
  const mount = document.getElementById('site-footer');
  if (!mount) return;
  const c = PROFILE.contact;

  const social = [
    c.email ? `<a href="mailto:${esc(c.email)}" aria-label="E-mail">${ICONS.mail}</a>` : '',
    c.linkedin ? `<a href="${esc(c.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>` : '',
    c.github ? `<a href="${esc(c.github)}" target="_blank" rel="noopener" aria-label="GitHub">${ICONS.github}</a>` : '',
  ].join('');

  mount.outerHTML = `
    <footer class="site-footer">
      <div class="container footer-inner">
        <div>
          <p data-i18n="footerBuilt"></p>
          <p>&copy; ${new Date().getFullYear()} ${esc(PROFILE.name)}. <span data-i18n="footerRights"></span></p>
        </div>
        <div class="footer-social">${social}</div>
      </div>
    </footer>`;
}

/* ---------- Cartao de projeto (linha do tempo) ---------- */
function projectCard(project, lang) {
  const media = project.media
    ? `<img src="${esc(project.media)}" alt="${esc(project.name)}" loading="lazy">`
    : `<span>${t('mediaPlaceholder', lang)}</span>`;

  const repo = project.repo
    ? `<a href="${esc(project.repo)}" target="_blank" rel="noopener">${ICONS.github}<span>${t('projectRepo', lang)}</span></a>`
    : `<span class="placeholder-note">${t('projectRepoSoon', lang)}</span>`;

  const demo = project.demo
    ? `<a href="${esc(project.demo)}" target="_blank" rel="noopener">${ICONS.link}<span>${t('projectDemo', lang)}</span></a>`
    : '';

  return `
    <article class="timeline-item reveal">
      <div class="project-card">
        <div class="project-media">${media}</div>
        <div class="project-body">
          <span class="project-period">${esc(project.period)}</span>
          <h3>${esc(project.name)}</h3>
          <p>${esc(project.description[lang])}</p>
          <div class="chip-row">${project.tech.map((tech) => `<span class="chip">${esc(tech)}</span>`).join('')}</div>
          <div class="project-links">${repo}${demo}</div>
        </div>
      </div>
    </article>`;
}

/* ---------- Cartao de experiencia ---------- */
function experienceCard(exp, lang) {
  return `
    <article class="exp-card reveal">
      <div>
        <span class="exp-period">${esc(exp.period)}</span>
        <div class="exp-org">${esc(exp.org)}</div>
        ${exp.type ? `<div class="exp-type">${esc(exp.type[lang] || exp.type)}</div>` : ''}
      </div>
      <div>
        <div class="exp-role">${esc(exp.role[lang])}</div>
        <p>${esc(exp.description[lang])}</p>
      </div>
    </article>`;
}

/* ---------- Cartao de formacao academica ---------- */
function educationCard(item, lang) {
  return `
    <article class="exp-card reveal">
      <div>
        <span class="exp-period">${esc(item.period)}</span>
        <div class="exp-org">${esc(item.org)}</div>
      </div>
      <div>
        <div class="exp-role">${esc(item.course[lang])}</div>
        <p>${esc(item.description[lang])}</p>
      </div>
    </article>`;
}

/* ---------- Cartao de certificacao ---------- */
function certificationCard(cert, lang) {
  const link = cert.url
    ? `<a href="${esc(cert.url)}" target="_blank" rel="noopener">${ICONS.link}<span>${t('certView', lang)}</span></a>`
    : '';

  return `
    <article class="cert-card reveal">
      <span class="cert-icon" aria-hidden="true">${ICONS.badge}</span>
      <div class="cert-body">
        <h3>${esc(cert.name)}</h3>
        <div class="cert-issuer">${esc(cert.issuer)}</div>
        <div class="cert-date">${esc(cert.date[lang])}</div>
        ${cert.credentialId ? `<div class="cert-id">${t('certCredential', lang)}: <code>${esc(cert.credentialId)}</code></div>` : ''}
        ${link ? `<div class="project-links">${link}</div>` : ''}
      </div>
    </article>`;
}

/* ---------- Canais de contato ---------- */
function contactChannels(lang) {
  const c = PROFILE.contact;
  const items = [];

  if (c.email) {
    items.push({ icon: ICONS.mail, label: t('labelEmail', lang), value: c.email, href: `mailto:${c.email}` });
  }
  if (c.whatsapp) {
    items.push({
      icon: ICONS.whatsapp,
      label: t('labelWhatsapp', lang),
      value: formatPhone(c.whatsapp),
      href: `https://wa.me/${c.whatsapp.replace(/\D/g, '')}`,
    });
  }
  if (c.linkedin) {
    items.push({ icon: ICONS.linkedin, label: t('labelLinkedin', lang), value: shortUrl(c.linkedin), href: c.linkedin });
  }
  if (c.github) {
    items.push({ icon: ICONS.github, label: t('labelGithub', lang), value: shortUrl(c.github), href: c.github });
  }

  return items.map((item) => `
    <a class="contact-icon-link" href="${esc(item.href)}"
       ${item.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
      <span class="contact-icon" aria-hidden="true">${item.icon}</span>
      <span class="contact-meta">
        <span class="contact-label">${esc(item.label)}</span>
        <span class="contact-value">${esc(item.value)}</span>
      </span>
    </a>`).join('');
}

function shortUrl(url) {
  return String(url).replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
}

function formatPhone(raw) {
  const d = String(raw).replace(/\D/g, '');
  if (d.length === 13) return `+${d.slice(0, 2)} (${d.slice(2, 4)}) ${d.slice(4, 9)}-${d.slice(9)}`;
  if (d.length === 12) return `+${d.slice(0, 2)} (${d.slice(2, 4)}) ${d.slice(4, 8)}-${d.slice(8)}`;
  return `+${d}`;
}
