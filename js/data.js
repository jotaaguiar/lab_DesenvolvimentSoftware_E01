/* =========================================================
   data.js — CONTEUDO INDIVIDUAL
   ---------------------------------------------------------
   Aluno: Joao Paulo Aguiar Prado
   Fonte do conteudo: perfil do LinkedIn (linkedin.com/in/joaoaguiarprado)

   ESTE E O UNICO ARQUIVO QUE MUDA DE ALUNO PARA ALUNO.
   Todo o resto (HTML, CSS, i18n, components, main) e
   compartilhado pelo grupo, conforme permitido no enunciado.
   ========================================================= */

/* ---------------------------------------------------------
   1. PERFIL
   --------------------------------------------------------- */
const PROFILE = {
  name: 'João Paulo Aguiar Prado',
  initials: 'JP',

  // Se o arquivo nao existir, o site cai para as iniciais automaticamente.
  photo: 'assets/img/perfil.jpg',

  role: {
    pt: 'Data Engineer | Azure · Databricks · PySpark · Airflow',
    en: 'Data Engineer | Azure · Databricks · PySpark · Airflow',
  },

  location: 'Belo Horizonte, Minas Gerais — Brasil',

  about: {
    pt: 'Sou engenheiro de dados com experiência na construção, manutenção e evolução de data lakes em ambientes de nuvem, com foco em Azure (Data Lake, ADF, Fabric, Functions), AWS, Databricks e Unity Catalog. Atuo no desenvolvimento de arquiteturas de dados e na criação de pipelines escaláveis e eficientes para integração de sistemas, processos ETL/ELT, suporte a dashboards analíticos e operacionalização de modelos de machine learning. Tenho experiência sólida na manutenção e otimização de ambientes e pipelines, sempre buscando desempenho, segurança e governança, seguindo as boas práticas alinhadas à arquitetura medallion. No dia a dia, trabalho com SQL (T-SQL, MySQL, SQL Server), programação em PySpark, versionamento com Git e práticas de DevOps para automatizar e dar mais eficiência aos fluxos de dados. Também possuo experiência prática no uso do Airflow para orquestração de pipelines e em ambientes Docker. Curso Engenharia de Software na PUC Minas, onde também atuei como monitor de Banco de Dados e de Algoritmos e Estruturas de Dados.',
    en: 'I am a data engineer experienced in building, maintaining and evolving data lakes in cloud environments, focused on Azure (Data Lake, ADF, Fabric, Functions), AWS, Databricks and Unity Catalog. I work on data architecture and on building scalable, efficient pipelines for systems integration, ETL/ELT processes, analytical dashboard support and the operationalization of machine learning models. I have solid experience maintaining and optimizing environments and pipelines, always aiming for performance, security and governance, following best practices aligned with the medallion architecture. Day to day I work with SQL (T-SQL, MySQL, SQL Server), PySpark programming, version control with Git and DevOps practices to automate and streamline data flows. I also have hands-on experience with Airflow for pipeline orchestration and with Docker environments. I am studying Software Engineering at PUC Minas, where I also worked as a teaching assistant for Databases and for Algorithms and Data Structures.',
  },

  skills: [
    'Databricks', 'PySpark', 'Python', 'SQL', 'T-SQL', 'Apache Airflow',
    'Azure Data Factory', 'Azure Data Lake', 'Microsoft Fabric', 'AWS',
    'GCP / BigQuery', 'Unity Catalog', 'Terraform', 'Docker', 'Kubernetes',
    'Git', 'CI/CD',
  ],

  contact: {
    email: 'aguiarpradojoaopaulo@gmail.com',
    whatsapp: '', // TODO: formato 55DDDNNNNNNNNN (ex.: 5531999998888). Vazio = card do WhatsApp nao aparece.
    linkedin: 'https://www.linkedin.com/in/joaoaguiarprado/',
    github: 'https://github.com/jotaaguiar',
  },
};

/* ---------------------------------------------------------
   2. PROJETOS — ordem do MAIS ANTIGO para o MAIS RECENTE
   (a pagina renderiza exatamente nesta ordem na linha do tempo)
   --------------------------------------------------------- */
const PROJECTS = [
  {
    period: '2025',
    name: 'PedaLa',
    description: {
      pt: 'Plataforma de assinatura de bicicletas urbanas desenvolvida em grupo na faculdade. Front-end SPA em HTML, CSS e JavaScript puro consumindo uma API REST escrita em Spring Boot, com autenticação e planos de assinatura.',
      en: 'Urban bike subscription platform built as a college group project. Vanilla HTML, CSS and JavaScript SPA front-end consuming a Spring Boot REST API, with authentication and subscription plans.',
    },
    tech: ['HTML', 'CSS', 'JavaScript', 'Java 17', 'Spring Boot', 'Azure SQL'],
    repo: 'https://github.com/jotaaguiar/pedalando',
    demo: '',
    media: 'assets/img/pedala.png',
  },
  {
    period: '2025 — atual',
    name: 'Fluxo',
    description: {
      pt: 'Aplicativo pessoal de controle financeiro. Importa extratos em OFX e CSV, gera relatórios em PDF, permite categorias customizadas, comparação entre meses, organização por tags e acompanhamento de recorrências fixas.',
      en: 'Personal finance app. Imports OFX and CSV bank statements, generates PDF reports, supports custom categories, month-over-month comparison, tag-based organization and fixed recurring transactions.',
    },
    tech: ['React', 'Vite', 'TypeScript', 'TailwindCSS', 'Recharts', 'Node.js', 'Express', 'Prisma', 'Azure SQL'],
    repo: 'https://github.com/jotaaguiar/FolhaDeGastos',
    demo: '',
    media: 'assets/img/fluxo.png',
  },
  {
    period: '2026',
    name: 'PipeGround',
    description: {
      pt: 'Sistema interno de produção e operação para a Ruminas, fábrica de artefatos de borracha. Inclui planejamento completo de arquitetura, modelagem de banco portável (SQLite em desenvolvimento e Azure SQL em produção) e protótipo navegável de 12 telas, com dashboard, kanban de chão de fábrica e painel de TV.',
      en: 'Internal production and operations system for Ruminas, a rubber goods factory. Includes full architecture planning, a portable database model (SQLite in development, Azure SQL in production) and a 12-screen clickable prototype with a dashboard, a shop-floor kanban and a TV panel.',
    },
    tech: ['Node.js', 'Prisma', 'SQLite', 'Azure SQL', 'TypeScript', 'HTML', 'CSS'],
    repo: '', // TODO: link do repositorio (se publico)
    demo: '',
    media: 'assets/img/pipeground.png',
  },
  {
    period: '2026',
    name: 'Portfólio Profissional',
    description: {
      pt: 'Este próprio site: portfólio profissional bilíngue (PT/EN) com tema claro e escuro, linha do tempo dinâmica de projetos, formação, certificações e formulário de contato validado. Construído sem frameworks, com HTML, CSS e JavaScript puro, e publicado no GitHub Pages.',
      en: 'This very website: a bilingual (PT/EN) professional portfolio with light and dark themes, a dynamic project timeline, education, certifications and a validated contact form. Built with no frameworks, using plain HTML, CSS and JavaScript, and published on GitHub Pages.',
    },
    tech: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Git', 'GitHub Pages'],
    repo: 'https://github.com/jotaaguiar/lab_DesenvolvimentSoftware_E01',
    demo: 'https://jotaaguiar.github.io/lab_DesenvolvimentSoftware_E01/',
    media: 'assets/img/portfolio.png',
  },
];

/* ---------------------------------------------------------
   3. EXPERIENCIAS — ordem do MAIS ANTIGO para o MAIS RECENTE
   --------------------------------------------------------- */
const EXPERIENCES = [
  {
    period: 'mai 2022 — nov 2022',
    org: 'TORA',
    type: { pt: 'Estágio · Presencial · Contagem, MG', en: 'Internship · On-site · Contagem, MG' },
    role: { pt: 'Estagiário de TI', en: 'IT Intern' },
    description: {
      pt: 'Suporte a sistemas e aplicações corporativas: SAP (ERP), Protheus (departamento pessoal), Senior (controle de acesso), SIT (TMS) e SILT (WMS). Participação em projetos de construção e melhoria de rede física, lógica, Wi-Fi e telefonia VOIP, além de levantamento e desenho de processos para automação das atividades do negócio.',
      en: 'Support for corporate systems and applications: SAP (ERP), Protheus (HR), Senior (access control), SIT (TMS) and SILT (WMS). Took part in projects to build and improve physical, logical and Wi-Fi networks and VOIP telephony, as well as mapping and designing processes to automate business activities.',
    },
  },
  {
    period: 'ago 2022 — ago 2023',
    org: 'PUC Minas',
    type: { pt: 'Temporário · Presencial · Belo Horizonte, MG', en: 'Temporary · On-site · Belo Horizonte, MG' },
    role: { pt: 'Monitor de Algoritmos e Estruturas de Dados I', en: 'Teaching Assistant — Algorithms and Data Structures I' },
    description: {
      pt: 'Monitoria da disciplina de Algoritmos e Estruturas de Dados I, apoiando os alunos em exercícios, dúvidas de programação e preparação para avaliações.',
      en: 'Teaching assistant for Algorithms and Data Structures I, supporting students with exercises, programming questions and exam preparation.',
    },
  },
  {
    period: 'nov 2022 — abr 2023',
    org: 'Soma Logística e Locações',
    type: { pt: 'Tempo integral · Presencial · Contagem, MG', en: 'Full time · On-site · Contagem, MG' },
    role: { pt: 'Técnico de Suporte em TI', en: 'IT Support Technician' },
    description: {
      pt: 'Suporte aos sistemas intranet, Benner, pacote Office e Google Workspace, lançamento de notas fiscais, manutenção e montagem de computadores, manutenção e configuração de rede (access points e switches) e criação de documentação de processos de TI.',
      en: 'Support for intranet systems, Benner, Microsoft Office and Google Workspace, invoice entry, computer assembly and maintenance, network setup and maintenance (access points and switches), and writing IT process documentation.',
    },
  },
  {
    period: 'abr 2023 — mai 2025',
    org: 'ArcelorMittal Sistemas',
    type: { pt: 'Híbrido · Belo Horizonte, MG', en: 'Hybrid · Belo Horizonte, MG' },
    role: { pt: 'Data Engineer', en: 'Data Engineer' },
    description: {
      pt: 'Atuação na plataforma Azure (Data Lake e Data Factory) e Databricks, com Python e Spark. Modelagem de dados, criação e gestão de pipelines de ETL, preparação de bases para aplicação de algoritmos de machine learning, análise exploratória, CI/CD e sustentação de sistemas e pipelines de execução em ambientes de big data, sob metodologia Scrum/Kanban.',
      en: 'Worked on the Azure platform (Data Lake and Data Factory) and Databricks, with Python and Spark. Data modeling, building and managing ETL pipelines, preparing datasets for machine learning algorithms, exploratory data analysis, CI/CD and support of systems and execution pipelines in big data environments, under Scrum/Kanban.',
    },
  },
  {
    period: 'ago 2023 — jul 2024',
    org: 'PUC Minas',
    type: { pt: 'Temporário · Presencial · Belo Horizonte, MG', en: 'Temporary · On-site · Belo Horizonte, MG' },
    role: { pt: 'Monitor de Banco de Dados', en: 'Teaching Assistant — Databases' },
    description: {
      pt: 'Monitoria da disciplina de Banco de Dados, com apoio aos alunos em modelagem, consultas SQL e gerenciamento de dados.',
      en: 'Teaching assistant for the Databases course, supporting students with data modeling, SQL queries and data management.',
    },
  },
  {
    period: 'mai 2025 — nov 2025',
    org: 'dhauz',
    type: { pt: 'Remoto · Belo Horizonte, MG', en: 'Remote · Belo Horizonte, MG' },
    role: { pt: 'Data Engineer (Pleno)', en: 'Data Engineer (Mid-level)' },
    description: {
      pt: 'Desenvolvimento, sustentação e evolução de pipelines de dados em ambientes cloud híbridos (AWS e GCP), com foco em processamento distribuído, migração de workloads on-premises e modernização de arquiteturas analíticas. Pipelines em PySpark e Databricks, orquestração com Apache Airflow, infraestrutura como código com Terraform e ambientes containerizados com Docker e Kubernetes/EKS. Stack: AWS (S3, EC2, Lambda, Glue, Redshift, ECR, EKS), GCP, BigQuery, SQL, Git e CI/CD.',
      en: 'Development, support and evolution of data pipelines in hybrid cloud environments (AWS and GCP), focused on distributed processing, on-premises workload migration and the modernization of analytical architectures. Pipelines in PySpark and Databricks, orchestration with Apache Airflow, infrastructure as code with Terraform and containerized environments with Docker and Kubernetes/EKS. Stack: AWS (S3, EC2, Lambda, Glue, Redshift, ECR, EKS), GCP, BigQuery, SQL, Git and CI/CD.',
    },
  },
  {
    period: 'nov 2025 — atual',
    org: 'Guidance',
    type: { pt: 'Híbrido · Belo Horizonte, MG', en: 'Hybrid · Belo Horizonte, MG' },
    role: { pt: 'Data Engineer', en: 'Data Engineer' },
    description: {
      pt: 'Construção e manutenção de pipelines distribuídos no Databricks, aplicando a arquitetura medallion, integração com Unity Catalog e otimização de fluxos de dados em larga escala. Orquestração de pipelines complexos e automação de processos ETL/ELT com Airflow, pipelines de dados e armazenamento em Azure e AWS com foco em performance, escalabilidade, governança e segurança, além de CI/CD com Git e DevOps e condução de reuniões de levantamento de requisitos com clientes e stakeholders.',
      en: 'Building and maintaining distributed pipelines on Databricks, applying the medallion architecture, integrating with Unity Catalog and optimizing large-scale data flows. Orchestration of complex pipelines and automation of ETL/ELT processes with Airflow, data pipelines and storage on Azure and AWS focused on performance, scalability, governance and security, plus CI/CD with Git and DevOps and leading requirements-gathering meetings with clients and stakeholders.',
    },
  },
];

/* ---------------------------------------------------------
   4. FORMACAO ACADEMICA — do mais antigo para o mais recente
   --------------------------------------------------------- */
const EDUCATION = [
  {
    period: 'fev 2021 — jun 2021',
    org: 'DDQ Cursos',
    course: { pt: 'Photoshop', en: 'Photoshop' },
    description: {
      pt: 'Curso livre de edição e tratamento de imagens.',
      en: 'Short course on image editing and retouching.',
    },
  },
  {
    period: 'fev 2022 — dez 2027',
    org: 'PUC Minas',
    course: {
      pt: 'Bacharelado em Engenharia de Software',
      en: "Bachelor's degree in Software Engineering",
    },
    description: {
      pt: 'Formação com foco em modelagem de dados, programação, arquitetura e projeto de software. Monitor de Banco de Dados e de Algoritmos e Estruturas de Dados I durante a graduação.',
      en: 'Degree focused on data modeling, programming, architecture and software design. Teaching assistant for Databases and for Algorithms and Data Structures I during the course.',
    },
  },
];

/* ---------------------------------------------------------
   5. LICENCAS E CERTIFICADOS — do mais recente para o mais antigo
   --------------------------------------------------------- */
const CERTIFICATIONS = [
  {
    name: 'Data Engineer',
    issuer: 'DataCamp',
    date: { pt: 'mar 2026 · expira em mar 2028', en: 'Mar 2026 · expires Mar 2028' },
    credentialId: 'DE0011372839518',
    url: '',
  },
  {
    name: 'Semana Databricks / Agente Bricks',
    issuer: 'Engenharia de Dados Academy',
    date: { pt: 'out 2025', en: 'Oct 2025' },
    credentialId: 'd1e35b443bcd408b20ac7a2e542698cde3a9b48c',
    url: '',
  },
];

/* ---------------------------------------------------------
   6. FORMULARIO DE CONTATO
   ---------------------------------------------------------
   Deixe vazio para usar o fallback por mailto (ja funcional).
   Para receber as mensagens por e-mail sem back-end, crie um
   formulario gratuito em https://formspree.io e cole a URL aqui.
   --------------------------------------------------------- */
const CONTACT_FORM_ENDPOINT = ''; // TODO: endpoint do Formspree
