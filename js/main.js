/* =========================================================
   main.js — Inicializacao: tema, navegacao, renderizacao
   dinamica das secoes e formulario de contato.
   Arquivo COMPARTILHADO entre os portfolios do grupo.
   ========================================================= */

const THEME_KEY = 'portfolio-theme';

/* ---------- Tema claro/escuro ---------- */
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);

  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const toggle = document.getElementById('theme-toggle');
  if (toggle) toggle.textContent = theme === 'dark' ? '☀' : '☾';
}

/* ---------- Menu responsivo ---------- */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Dados que nao dependem do idioma ---------- */
function fillProfileBasics() {
  document.querySelectorAll('[data-profile="name"]').forEach((el) => (el.textContent = PROFILE.name));
  document.querySelectorAll('[data-profile="location"]').forEach((el) => (el.textContent = PROFILE.location));

  document.querySelectorAll('[data-profile="photo"]').forEach((el) => {
    el.textContent = PROFILE.initials;
    if (!PROFILE.photo) return;

    /* So troca as iniciais pela foto depois que ela carrega de verdade.
       Se o arquivo nao existir, o circulo verde com as iniciais fica. */
    const img = new Image();
    img.alt = PROFILE.name;
    img.addEventListener('load', () => {
      el.textContent = '';
      el.appendChild(img);
    });
    img.src = PROFILE.photo;
  });

  const pinSlot = document.querySelector('[data-icon="pin"]');
  if (pinSlot) pinSlot.innerHTML = ICONS.pin;

  document.title = document.title.replace('{{name}}', PROFILE.name);
}

/* ---------- Conteudo dependente do idioma ---------- */
function renderLangDependent(lang) {
  document.querySelectorAll('[data-profile="role"]').forEach((el) => (el.textContent = PROFILE.role[lang]));

  /* As duas versoes de "Sobre Mim" ficam sempre visiveis lado a lado,
     conforme exigido pelo enunciado (PT e EN). */
  const aboutPt = document.querySelector('[data-about="pt"]');
  const aboutEn = document.querySelector('[data-about="en"]');
  if (aboutPt) aboutPt.textContent = PROFILE.about.pt;
  if (aboutEn) aboutEn.textContent = PROFILE.about.en;

  const skillsWrap = document.querySelector('[data-skills]');
  if (skillsWrap) {
    skillsWrap.innerHTML = PROFILE.skills.map((s) => `<span class="chip">${esc(s)}</span>`).join('');
  }

  const projectsWrap = document.querySelector('[data-projects-list]');
  if (projectsWrap) {
    projectsWrap.innerHTML = PROJECTS.map((p) => projectCard(p, lang)).join('');
  }

  const expWrap = document.querySelector('[data-experiences-list]');
  if (expWrap) {
    expWrap.innerHTML = EXPERIENCES.map((e) => experienceCard(e, lang)).join('');
  }

  /* Formacao e certificacoes sao opcionais: se data.js nao declarar
     (ou declarar vazio), a secao inteira some, junto com o titulo. */
  renderOptionalSection('[data-education-list]', typeof EDUCATION !== 'undefined' ? EDUCATION : [],
    (item) => educationCard(item, lang));

  renderOptionalSection('[data-certifications-list]', typeof CERTIFICATIONS !== 'undefined' ? CERTIFICATIONS : [],
    (item) => certificationCard(item, lang));

  const channelsWrap = document.querySelector('[data-contact-channels]');
  if (channelsWrap) {
    channelsWrap.innerHTML = contactChannels(lang);
  }

  const statsWrap = document.querySelector('[data-stats]');
  if (statsWrap) {
    statsWrap.innerHTML = [
      { value: PROJECTS.length, label: t('statProjects', lang) },
      { value: PROFILE.skills.length, label: t('statTech', lang) },
      { value: EXPERIENCES.length, label: t('statExperience', lang) },
    ].map((s) => `
      <div class="stat">
        <div class="stat-value">${s.value}</div>
        <div class="stat-label">${esc(s.label)}</div>
      </div>`).join('');
  }

  initReveal();
}

/* Renderiza uma lista opcional; se estiver vazia, esconde tambem o
   titulo (.subhead) que vem imediatamente antes dela. */
function renderOptionalSection(selector, items, renderItem) {
  const wrap = document.querySelector(selector);
  if (!wrap) return;

  const heading = wrap.previousElementSibling;
  const hasItems = Array.isArray(items) && items.length > 0;

  wrap.hidden = !hasItems;
  if (heading && heading.classList.contains('subhead')) heading.hidden = !hasItems;
  if (!hasItems) {
    wrap.innerHTML = '';
    return;
  }

  wrap.innerHTML = items.map(renderItem).join('');
}

/* ---------- Animacao de entrada ----------
   Checagem por posicao (getBoundingClientRect) em vez de
   IntersectionObserver: o observer nao dispara em algumas
   situacoes (aba em segundo plano, pagina sem composicao) e o
   conteudo ficaria invisivel para sempre. Aqui o pior caso e
   perder a animacao, nunca o conteudo.
   ------------------------------------------------------------ */
let revealScheduled = false;

function revealInView() {
  revealScheduled = false;
  const margin = window.innerHeight * 0.92;
  document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
    if (el.getBoundingClientRect().top < margin) el.classList.add('visible');
  });
}

/* setTimeout em vez de requestAnimationFrame: rAF nao dispara em
   aba de segundo plano, e o conteudo ficaria invisivel ate a aba
   voltar ao foco. */
function scheduleReveal() {
  if (revealScheduled) return;
  revealScheduled = true;
  window.setTimeout(revealInView, 60);
}

function initReveal() {
  /* A classe so entra depois que o JS assume o controle: sem JS
     (ou com erro de script) o conteudo continua visivel. */
  document.documentElement.classList.add('reveal-ready');
  revealInView();

  if (initReveal.bound) return;
  initReveal.bound = true;
  window.addEventListener('scroll', scheduleReveal, { passive: true });
  window.addEventListener('resize', scheduleReveal, { passive: true });
}

/* ---------- Formulario de contato ---------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');
  const fields = {
    name: form.querySelector('#field-name'),
    email: form.querySelector('#field-email'),
    message: form.querySelector('#field-message'),
  };

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  function setError(field, message) {
    const wrapper = field.closest('.field');
    const slot = wrapper.querySelector('.field-error');
    slot.textContent = message;
    wrapper.setAttribute('data-invalid', message ? 'true' : 'false');
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
    return !message;
  }

  function validate(lang) {
    const name = fields.name.value.trim();
    const email = fields.email.value.trim();
    const message = fields.message.value.trim();

    const okName = setError(fields.name, name ? '' : t('formErrorRequired', lang));

    let emailError = '';
    if (!email) emailError = t('formErrorRequired', lang);
    else if (!isValidEmail(email)) emailError = t('formErrorEmail', lang);
    const okEmail = setError(fields.email, emailError);

    let messageError = '';
    if (!message) messageError = t('formErrorRequired', lang);
    else if (message.length < 10) messageError = t('formErrorMin', lang);
    const okMessage = setError(fields.message, messageError);

    return okName && okEmail && okMessage;
  }

  /* Revalida em tempo real apenas apos a primeira tentativa de envio. */
  let submitted = false;
  Object.values(fields).forEach((field) => {
    field.addEventListener('input', () => { if (submitted) validate(getLang()); });
  });

  /* Ao trocar de idioma, as mensagens de erro ja exibidas sao retraduzidas. */
  document.addEventListener('langchange', (evt) => {
    if (submitted) validate(evt.detail.lang);
  });

  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    submitted = true;
    const lang = getLang();
    if (!validate(lang)) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.textContent = t('formSending', lang);
    status.className = 'form-status';
    status.textContent = '';

    const payload = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      message: fields.message.value.trim(),
    };

    /* So usa o back-end se houver endpoint E chave de acesso. Sem a
       chave o servico recusaria a mensagem, entao e melhor cair direto
       no fallback por mailto. */
    const accessKey = typeof CONTACT_FORM_ACCESS_KEY !== 'undefined' ? CONTACT_FORM_ACCESS_KEY : '';
    const podeUsarBackend = Boolean(CONTACT_FORM_ENDPOINT && accessKey);

    try {
      if (podeUsarBackend) {
        /* Envio real: o back-end de formulario entrega a mensagem na
           caixa de entrada ligada a chave de acesso. */
        const body = {
          name: payload.name,
          email: payload.email,
          message: payload.message,
          subject: `Contato via portfólio — ${payload.name}`,
          from_name: 'Portfólio',
          /* Faz o "Responder" do cliente de e-mail ir direto para o
             visitante, e nao para o remetente do servico. */
          replyto: payload.email,
        };
        body.access_key = accessKey;

        const res = await fetch(CONTACT_FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(body),
        });

        /* Alguns servicos respondem HTTP 200 com {"success":"false"},
           entao o status HTTP sozinho nao basta para dizer que deu certo. */
        const data = await res.json().catch(() => null);
        const ok = res.ok && (!data || String(data.success) !== 'false');
        if (!ok) throw new Error((data && data.message) || 'request failed');

        status.textContent = t('formSuccess', lang);
      } else if (PROFILE.contact.email) {
        /* Sem back-end configurado: da para abrir o app de e-mail do
           visitante com a mensagem pronta, mas quem envia e ele. Nao
           afirmamos que a mensagem chegou, porque nao chegou ainda. */
        const subject = encodeURIComponent(`Contato via portfólio — ${payload.name}`);
        const body = encodeURIComponent(`${payload.message}\n\n--\n${payload.name} (${payload.email})`);
        window.location.href = `mailto:${PROFILE.contact.email}?subject=${subject}&body=${body}`;

        status.textContent = t('formMailtoOpened', lang);
      } else {
        /* Nem endpoint nem e-mail configurados em data.js. */
        throw new Error('no contact channel configured');
      }

      status.className = 'form-status success';
      form.reset();
      submitted = false;
      Object.values(fields).forEach((f) => setError(f, ''));
    } catch (err) {
      status.textContent = t('formErrorGeneric', lang);
      status.className = 'form-status error';
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHtml;
      applyLang(getLang());
    }
  });
}

/* ---------- Bootstrap (a ordem importa) ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();

  initTheme();
  initNav();
  fillProfileBasics();

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  applyLang(getLang());
  renderLangDependent(getLang());
  initContactForm();

  document.addEventListener('langchange', (evt) => renderLangDependent(evt.detail.lang));
});
