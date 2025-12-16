import { useState } from 'react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

type Post = {
  title: string;
  summary: string;
  date: string;
  content: string;
};

type Contact = {
  label: string;
  href: string;
};

type LocaleKey = 'br' | 'pt' | 'us' | 'es' | 'cn';

type LocaleContent = {
  countryLabel: string;
  badge: string;
  heroTitle: string;
  heroLede: string;
  ctaPrimary: string;
  ctaSecondary: string;
  aboutTitle: string;
  aboutHint: string;
  aboutBody: string;
  portfolioHint: string;
  blogEyebrow: string;
  blogTitle: string;
  blogSeeAll: string;
  readMore: string;
  contactTitle: string;
  contactBody: string;
  footerCredit: string;
  footerEmailLabel: string;
  email: string;
  dateLocale: string;
  projects: Project[];
  posts: Post[];
  contacts: Contact[];
  countryOptions: { value: LocaleKey; label: string }[];
};

const locales: Record<LocaleKey, LocaleContent> = {
  br: {
    countryLabel: 'País',
    badge: 'Desenvolvedora Full Stack (início de carreira)',
    heroTitle: 'Profissionalismo focado em clareza, perfeccionismo e entregas que funcionam.',
    heroLede:
      'Sou uma desenvolvedora full stack no início da carreira, com olhar sério, inspirador e bem-humorado. Curto equilibrar acessibilidade, performance e impacto social em tudo o que entrego.',
    ctaPrimary: 'Ver projetos',
    ctaSecondary: 'Vamos conversar sobre seu produto',
    aboutTitle: 'Objetiva, direta e presente',
    aboutHint: 'Acessibilidade • Performance • Impacto social',
    aboutBody:
      'Gosto de projetos enxutos que resolvem problemas reais. Minha combinação preferida é código limpo, decisões de UX claras e entregas frequentes. Estudo continuamente para reduzir fricção em experiências digitais e deixar times com menos retrabalho.',
    portfolioHint: 'Estudos, freelas e entregas reais',
    blogEyebrow: 'Blog',
    blogTitle: 'Carreira, UI/UX e aprendizados',
    blogSeeAll: 'Ver todos ↗',
    readMore: 'Ler →',
    contactTitle: 'Vamos conversar sobre seu produto',
    contactBody:
      'Me escreva sobre ideias, produtos ou freelas. Respondo rápido e trago propostas enxutas com foco em resultado.',
    footerCredit: 'Feito com React + Vite + TypeScript.',
    footerEmailLabel: 'Email',
    email: 'elenrebeca280@gmail.com',
    dateLocale: 'pt-BR',
    projects: [
      {
        title: 'SVMR — autoatendimento e caixa da loja',
        description:
          'Experiência unificada de autoatendimento que conecta o caixa físico à operação online, com autenticação segura e painéis de status em tempo real.',
        tags: ['Full stack', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
        link: 'https://github.com/rebecaelen/SVMR',
      },
      {
        title: 'Loja online sob medida',
        description:
          'E-commerce completo para uma empresa local, com catálogo administrável, checkout enxuto e foco em acessibilidade e velocidade.',
        tags: ['React', 'TypeScript', 'Vite', 'UX'],
      },
      {
        title: 'Estudos e freelas rápidos',
        description:
          'Landing pages e MVPs de validação entregues em ciclos curtos, priorizando clareza, testes básicos e handoff sem atrito.',
        tags: ['Prototipagem', 'UI/UX', 'A11y', 'Testing'],
      },
    ],
    posts: [
      {
        title: 'Carreira no early stage de full stack',
        summary: 'O que estou aprendendo ao equilibrar front, back e entregas rápidas para clientes reais.',
        date: '2025-12-05',
        content: 'No início da carreira full stack, descobri que a chave é não tentar ser especialista em tudo. Seu valor vem de entregar rápido e deixar código limpo para o próximo. Estudar tudo ao mesmo tempo é receita para burnout. Foco em um core tech (React pra mim) e aprofunde bem. Back-end vem natural depois. A melhor parte? Ver um cliente usando o que você construiu. Isso que te motiva a acordar pra codar todos os dias. Minhas dicas: 1) Git bom é tudo; 2) Testes salvam sua vida; 3) Comunique-se mais que codifique.',
      },
      {
        title: 'UI/UX sem fricção em produtos pequenos',
        summary: 'Padrões simples que deixam a jornada mais limpa e acessível mesmo com prazos curtos.',
        date: '2025-11-18',
        content: 'Muita gente pensa que bom design é complexo. Na minha experiência, é o oposto. Um botão bem posicionado, tipografia clara e contraste decente já resolvem 70% do problema. Sem fricção significa: usuário não fica perdido, encontra o que quer em 3 cliques, texto é lido sem esforço. Em projetos pequenos, você não tem orçamento pra design de 6 meses. Use componentes conhecidos, siga guidelines dos sistemas operacionais e teste com 5 pessoas reais. Elas vão te dizer se tá confuso. Acessibilidade não é extras—é obrigação. Alt em imagens, labels em inputs, keyboard navigation. Fácil, rápido, e seu usuário com deficiência agradece.',
      },
      {
        title: 'Performance e acessibilidade: dupla inseparável',
        summary: 'Checklist rápido que uso para manter páginas leves e inclusivas.',
        date: '2025-10-30',
        content: 'Performance e acessibilidade não são luxo—são respeito. Uma página lenta é inacessível pra quem tem internet fraca. Código inacessível exclui 1 em cada 4 pessoas. Checklist rápido: 1) Minify CSS/JS; 2) Lazy-load imagens; 3) Use WebP com fallback; 4) Comprima assets; 5) Cache agressivo. Acessibilidade: 1) Cores com contraste; 2) Nunca remova focus outline; 3) ARIA labels pra componentes custom; 4) Teste com screen reader; 5) Mobile-first sempre. Ferramentas que uso: Lighthouse, WAVE, axe DevTools. Gratuitas e salvam seu tempo. No final, é pura empatia. Você tá criando pra pessoas reais com conectividade real e necessidades reais.',
      },
    ],
    contacts: [
      { label: 'Email', href: 'mailto:elenrebeca280@gmail.com' },
      { label: 'GitHub', href: 'https://github.com/rebecaelens' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rebeca-rodrigues-a184b7288/' },
    ],
    countryOptions: [
      { value: 'br', label: 'Brasil' },
      { value: 'pt', label: 'Portugal' },
      { value: 'us', label: 'Estados Unidos' },
      { value: 'es', label: 'Espanha' },
      { value: 'cn', label: 'China' },
    ],
  },
  pt: {
    countryLabel: 'País',
    badge: 'Desenvolvedora Full Stack (início de carreira)',
    heroTitle: 'Profissionalismo focado em clareza, perfeccionismo e entregas que funcionam.',
    heroLede:
      'Sou uma desenvolvedora full stack no início da carreira, com olhar sério, inspirador e bem-humorado. Curto equilibrar acessibilidade, performance e impacto social em tudo o que entrego.',
    ctaPrimary: 'Ver projetos',
    ctaSecondary: 'Vamos conversar sobre o seu produto',
    aboutTitle: 'Objetiva, direta e presente',
    aboutHint: 'Acessibilidade • Performance • Impacto social',
    aboutBody:
      'Gosto de projetos enxutos que resolvem problemas reais. A minha combinação preferida é código limpo, decisões de UX claras e entregas frequentes. Estudo continuamente para reduzir fricção e evitar retrabalho.',
    portfolioHint: 'Estudos, freelas e entregas reais',
    blogEyebrow: 'Blog',
    blogTitle: 'Carreira, UI/UX e aprendizagens',
    blogSeeAll: 'Ver todos ↗',
    readMore: 'Ler →',
    contactTitle: 'Vamos conversar sobre o seu produto',
    contactBody:
      'Escreva-me sobre ideias, produtos ou freelas. Respondo rápido e trago propostas enxutas com foco em resultado.',
    footerCredit: 'Feito com React + Vite + TypeScript.',
    footerEmailLabel: 'Email',
    email: 'elenrebeca280@gmail.com',
    dateLocale: 'pt-PT',
    projects: [
      {
        title: 'SVMR — autoatendimento e caixa da loja',
        description:
          'Experiência unificada de autoatendimento que liga o caixa físico à operação online, com autenticação segura e painéis em tempo real.',
        tags: ['Full stack', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
        link: 'https://github.com/rebecaelen/SVMR',
      },
      {
        title: 'Loja online sob medida',
        description:
          'E-commerce completo com catálogo administrável e checkout rápido, pensado para acessibilidade e velocidade.',
        tags: ['React', 'TypeScript', 'Vite', 'UX'],
      },
      {
        title: 'Estudos e freelas rápidos',
        description:
          'Landing pages e MVPs de validação entregues em ciclos curtos, com clareza, testes básicos e handoff sem atrito.',
        tags: ['Prototipagem', 'UI/UX', 'A11y', 'Testing'],
      },
    ],
    posts: [
      {
        title: 'Carreira no early stage de full stack',
        summary: 'O que estou a aprender ao equilibrar front, back e entregas rápidas para clientes reais.',
        date: '2025-12-05',
        content: 'No início da carreira full stack, aprendi que a chave é não tentar ser expert em tudo. Seu valor vem de entregar rápido e deixar código limpo pro próximo. Estudar tudo ao mesmo tempo é receita para burnout. Foco num core tech (React pra mim) e aprofunde bem. Back-end vem natural depois. A melhor parte? Ver um cliente a usar o que construiu. Isso te motiva a acordar pra codar todos os dias. Minhas dicas: 1) Git bom é tudo; 2) Testes salvam a vida; 3) Comunique mais que codifique.',
      },
      {
        title: 'UI/UX sem fricção em produtos pequenos',
        summary: 'Padrões simples que deixam a jornada mais limpa e acessível mesmo com prazos curtos.',
        date: '2025-11-18',
        content: 'Muita gente pensa que bom design é complexo. Na experiência, é o oposto. Um botão bem posicionado, tipografia clara e contraste decente já resolvem 70% do problema. Sem fricção significa: utilizador não fica perdido, encontra o que quer em 3 cliques, texto é lido sem esforço. Em projetos pequenos, não há orçamento pra design de 6 meses. Use componentes conhecidos, siga guidelines e teste com 5 pessoas reais. Elas dirão se tá confuso. Acessibilidade não é extras—é obrigação. Alt em imagens, labels em inputs, keyboard navigation. Fácil, rápido, e seu utilizador com deficiência agradece.',
      },
      {
        title: 'Performance e acessibilidade: dupla inseparável',
        summary: 'Checklist breve que uso para manter páginas rápidas e inclusivas.',
        date: '2025-10-30',
        content: 'Performance e acessibilidade não são luxo—são respeito. Uma página lenta é inacessível pra quem tem internet fraca. Código inacessível exclui 1 em cada 4 pessoas. Checklist rápido: 1) Minify CSS/JS; 2) Lazy-load imagens; 3) Use WebP com fallback; 4) Comprima assets; 5) Cache agressivo. Acessibilidade: 1) Cores com contraste; 2) Nunca remova focus outline; 3) ARIA labels pra componentes custom; 4) Teste com screen reader; 5) Mobile-first sempre. Ferramentas: Lighthouse, WAVE, axe DevTools. Gratuitas e salvam tempo. No final, é pura empatia. Está a criar pra pessoas reais com conectividade real.',
      },
    ],
    contacts: [
      { label: 'Email', href: 'mailto:elenrebeca280@gmail.com' },
      { label: 'GitHub', href: 'https://github.com/rebecaelens' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rebeca-rodrigues-a184b7288/' },
    ],
    countryOptions: [
      { value: 'br', label: 'Brasil' },
      { value: 'pt', label: 'Portugal' },
      { value: 'us', label: 'Estados Unidos' },
      { value: 'es', label: 'Espanha' },
      { value: 'cn', label: 'China' },
    ],
  },
  us: {
    countryLabel: 'Country',
    badge: 'Full Stack Developer (early career)',
    heroTitle: 'Professional, detail-obsessed, and focused on shipping things that work.',
    heroLede:
      'I am an early-career full stack developer who balances accessibility, performance, and social impact with a serious, inspiring, and upbeat tone.',
    ctaPrimary: 'View projects',
    ctaSecondary: 'Let’s talk about your product',
    aboutTitle: 'Objective, direct, and present',
    aboutHint: 'Accessibility • Performance • Social impact',
    aboutBody:
      'I like lean projects that solve real problems. Clean code, clear UX decisions, and frequent delivery are my trio. I study constantly to reduce friction and keep teams from rework.',
    portfolioHint: 'Studies, freelance, and shipped work',
    blogEyebrow: 'Blog',
    blogTitle: 'Career, UI/UX, and learnings',
    blogSeeAll: 'See all ↗',
    readMore: 'Read →',
    contactTitle: 'Let’s talk about your product',
    contactBody:
      'Reach out about ideas, products, or freelance work. I respond fast with lean proposals focused on outcomes.',
    footerCredit: 'Built with React + Vite + TypeScript.',
    footerEmailLabel: 'Email',
    email: 'elenrebeca280@gmail.com',
    dateLocale: 'en-US',
    projects: [
      {
        title: 'SVMR — self-checkout and store POS',
        description:
          'Unified self-service experience tying the physical checkout to the online operation, with secure auth and real-time status boards.',
        tags: ['Full stack', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
        link: 'https://github.com/rebecaelen/SVMR',
      },
      {
        title: 'Tailored online store',
        description:
          'Full e-commerce for a local business with manageable catalog, fast checkout, and accessibility-first delivery.',
        tags: ['React', 'TypeScript', 'Vite', 'UX'],
      },
      {
        title: 'Quick studies and freelance drops',
        description:
          'Landing pages and MVPs delivered in short cycles, prioritizing clarity, basic testing, and smooth handoff.',
        tags: ['Prototyping', 'UI/UX', 'A11y', 'Testing'],
      },
    ],
    posts: [
      {
        title: 'Early-stage full stack career notes',
        summary: "What I'm learning balancing front, back, and fast delivery for real clients.",
        date: '2025-12-05',
        content: "Early in full stack, I learned the key is not trying to be an expert in everything. Your value comes from shipping fast and leaving clean code for the next person. Trying to master everything at once is burnout fuel. Pick a core tech (React for me) and go deep. Back-end comes naturally after. The best part? Seeing a real customer use what you built. That's what gets you coding every day. My tips: 1) Good Git discipline is everything; 2) Tests save your life; 3) Communicate more than you code.",
      },
      {
        title: 'Frictionless UI/UX for small products',
        summary: 'Simple patterns that keep journeys clean and accessible on tight timelines.',
        date: '2025-11-18',
        content: "Many think good design is complex. It's the opposite. A well-placed button, clear typography, and decent contrast solve 70% of it. Frictionless means: user doesn't get lost, finds what they want in 3 clicks, text reads effortlessly. On small projects, there's no budget for 6-month design cycles. Use known components, follow OS guidelines, test with 5 real people. They'll tell you if it's confusing. Accessibility isn't extras—it's mandatory. Alt text on images, labels on inputs, keyboard navigation. Easy, fast, and your user with disabilities appreciates it.",
      },
      {
        title: 'Performance and accessibility together',
        summary: 'A quick checklist I use to keep pages fast and inclusive.',
        date: '2025-10-30',
        content: "Performance and accessibility aren't luxury—they're respect. A slow page is inaccessible to someone on weak internet. Inaccessible code excludes 1 in 4 people. Quick checklist: 1) Minify CSS/JS; 2) Lazy-load images; 3) Use WebP with fallback; 4) Compress assets; 5) Aggressive caching. Accessibility: 1) Color contrast; 2) Never remove focus outline; 3) ARIA labels for custom components; 4) Test with screen reader; 5) Mobile-first always. Tools I use: Lighthouse, WAVE, axe DevTools. Free and save time. At the end, it's pure empathy. You're building for real people with real connectivity and real needs.",
      },
    ],
    contacts: [
      { label: 'Email', href: 'mailto:elenrebeca280@gmail.com' },
      { label: 'GitHub', href: 'https://github.com/rebecaelens' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rebeca-rodrigues-a184b7288/' },
    ],
    countryOptions: [
      { value: 'br', label: 'Brazil' },
      { value: 'pt', label: 'Portugal' },
      { value: 'us', label: 'United States' },
      { value: 'es', label: 'Spain' },
      { value: 'cn', label: 'China' },
    ],
  },
  es: {
    countryLabel: 'País',
    badge: 'Desarrolladora Full Stack (inicio de carrera)',
    heroTitle: 'Profesional, detallista y enfocada en entregar lo que funciona.',
    heroLede:
      'Soy una desarrolladora full stack al inicio de la carrera; equilibrio accesibilidad, rendimiento e impacto social con un tono serio, inspirador y buen humor.',
    ctaPrimary: 'Ver proyectos',
    ctaSecondary: 'Hablemos de tu producto',
    aboutTitle: 'Objetiva, directa y presente',
    aboutHint: 'Accesibilidad • Rendimiento • Impacto social',
    aboutBody:
      'Prefiero proyectos ajustados que resuelven problemas reales. Código limpio, decisiones de UX claras y entregas frecuentes son mi base. Estudio siempre para reducir fricción y evitar retrabajo.',
    portfolioHint: 'Estudios, freelance y entregas reales',
    blogEyebrow: 'Blog',
    blogTitle: 'Carrera, UI/UX y aprendizajes',
    blogSeeAll: 'Ver todos ↗',
    readMore: 'Leer →',
    contactTitle: 'Hablemos de tu producto',
    contactBody:
      'Escríbeme sobre ideas, productos o proyectos freelance. Respondo rápido con propuestas concisas y orientadas a resultados.',
    footerCredit: 'Hecho con React + Vite + TypeScript.',
    footerEmailLabel: 'Email',
    email: 'elenrebeca280@gmail.com',
    dateLocale: 'es-ES',
    projects: [
      {
        title: 'SVMR — autoservicio y caja de la tienda',
        description:
          'Experiencia unificada de autoservicio que conecta la caja física con la operación online, con autenticación segura y paneles en tiempo real.',
        tags: ['Full stack', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
        link: 'https://github.com/rebecaelen/SVMR',
      },
      {
        title: 'Tienda online a medida',
        description:
          'E-commerce completo para un negocio local, con catálogo editable, checkout rápido y foco en accesibilidad.',
        tags: ['React', 'TypeScript', 'Vite', 'UX'],
      },
      {
        title: 'Estudios y entregas exprés',
        description:
          'Landing pages y MVPs en ciclos cortos, priorizando claridad, tests básicos y handoff sin fricción.',
        tags: ['Prototipado', 'UI/UX', 'A11y', 'Testing'],
      },
    ],
    posts: [
      {
        title: 'Notas de carrera full stack en early stage',
        summary: 'Lo que aprendo al equilibrar front, back y entregas rápidas para clientes reales.',
        date: '2025-12-05',
        content: 'Temprano en full stack, aprendí que la clave es no intentar ser experto en todo. Tu valor viene de entregar rápido y dejar código limpio para el siguiente. Intentar dominar todo a la vez es receta para burnout. Elige un tech core (React para mí) y profundiza. El back-end viene natural después. Lo mejor? Ver a un cliente real usando lo que construiste. Eso te motiva a codear cada día. Mis tips: 1) Buena disciplina Git es todo; 2) Los tests salvan tu vida; 3) Comunica más de lo que codeas.',
      },
      {
        title: 'UI/UX sin fricción para productos pequeños',
        summary: 'Patrones simples que mantienen el recorrido limpio y accesible con plazos justos.',
        date: '2025-11-18',
        content: 'Muchos creen que buen diseño es complejo. Es lo opuesto. Un botón bien colocado, tipografía clara y contraste decente resuelven el 70%. Sin fricción significa: usuario no se pierde, encuentra lo que quiere en 3 clics, el texto se lee sin esfuerzo. En proyectos pequeños no hay presupuesto para 6 meses de diseño. Usa componentes conocidos, sigue guidelines y prueba con 5 personas reales. Te dirán si está confuso. Accesibilidad no es extras—es obligatoria. Alt en imágenes, labels en inputs, navegación keyboard. Fácil, rápido, y tu usuario con discapacidad agradece.',
      },
      {
        title: 'Performance y accesibilidad juntas',
        summary: 'Checklist breve que uso para mantener páginas rápidas e inclusivas.',
        date: '2025-10-30',
        content: 'Performance y accesibilidad no son lujo—son respeto. Una página lenta es inaccesible para quien tiene internet débil. Código inaccesible excluye a 1 de cada 4 personas. Checklist rápido: 1) Minify CSS/JS; 2) Lazy-load imágenes; 3) Usa WebP con fallback; 4) Comprime assets; 5) Caché agresivo. Accesibilidad: 1) Contraste color; 2) Nunca remuevas focus outline; 3) ARIA labels para componentes custom; 4) Prueba con screen reader; 5) Mobile-first siempre. Herramientas: Lighthouse, WAVE, axe DevTools. Gratis y ahorran tiempo. Al final, es pura empatía. Estás creando para gente real con conectividad real.',
      },
    ],
    contacts: [
      { label: 'Email', href: 'mailto:elenrebeca280@gmail.com' },
      { label: 'GitHub', href: 'https://github.com/rebecaelens' },
    ],
    countryOptions: [
      { value: 'br', label: 'Brasil' },
      { value: 'pt', label: 'Portugal' },
      { value: 'us', label: 'Estados Unidos' },
      { value: 'es', label: 'Espanha' },
      { value: 'cn', label: 'China' },
    ],
  },
  cn: {
    countryLabel: '国家',
    badge: '全栈开发者（职业初期）',
    heroTitle: '专业、细致，专注交付真正可用的产品。',
    heroLede:
      '我是一名职业初期的全栈开发者，严谨又带点幽默，关注无障碍、性能和社会影响，并在三者间取得平衡。',
    ctaPrimary: '查看项目',
    ctaSecondary: '聊聊你的产品',
    aboutTitle: '客观、直接、到位',
    aboutHint: '无障碍 • 性能 • 社会影响',
    aboutBody:
      '我喜欢精简且解决真实问题的项目。干净的代码、清晰的 UX 决策和频繁交付是基础。我持续学习以减少摩擦，避免返工。',
    portfolioHint: '学习项目、自由职业与交付案例',
    blogEyebrow: '博客',
    blogTitle: '职业、生涯、UI/UX 与学习',
    blogSeeAll: '查看全部 ↗',
    readMore: '阅读 →',
    contactTitle: '聊聊你的产品',
    contactBody:
      '欢迎交流想法、产品或自由职业合作。我会快速回复，给出精简且以结果为导向的方案。',
    footerCredit: '使用 React + Vite + TypeScript 构建。',
    footerEmailLabel: 'Email',
    email: 'elenrebeca280@gmail.com',
    dateLocale: 'zh-CN',
    projects: [
      {
        title: 'SVMR —— 自助与门店收银一体化',
        description:
          '统一的自助体验，将线下收银与线上运营相连，安全认证与实时状态面板齐备。',
        tags: ['全栈', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
        link: 'https://github.com/rebecaelen/SVMR',
      },
      {
        title: '定制化网上商店',
        description:
          '为本地企业打造的完整电商，支持管理型目录、快速结账，强调无障碍与速度。',
        tags: ['React', 'TypeScript', 'Vite', 'UX'],
      },
      {
        title: '快速学习与自由职业交付',
        description:
          '着重清晰度、基础测试与顺畅交接的落地页和 MVP，短周期迭代。',
        tags: ['原型设计', 'UI/UX', 'A11y', 'Testing'],
      },
    ],
    posts: [
      {
        title: '全栈早期职业笔记',
        summary: '在为真实客户快速交付时平衡前后端的体会。',
        date: '2025-12-05',
        content: '全栈初期，我学到的关键是别试图成为所有东西的专家。你的价值在于快速交付和留下干净代码。试图同时掌握一切是倦怠的处方。选一个核心技术（我选了 React）深入钻研。后端随之而来。最好的部分？看到真实用户使用你构建的东西。那是每天起来编码的动力。我的建议：1) 好的 Git 习惯是一切；2) 测试救你命；3) 沟通胜于编码。',
      },
      {
        title: '小型产品的无摩擦 UI/UX',
        summary: '在紧张周期里保持流程清晰和无障碍的简单模式。',
        date: '2025-11-18',
        content: '很多人认为好设计很复杂。事实相反。一个放置恰当的按钮、清晰的字体和不错的对比度解决了 70% 的问题。无摩擦意味着：用户不会迷失、在 3 次点击内找到所需、文字轻松阅读。小项目没有 6 个月设计的预算。用已知组件、遵循系统指南、用 5 个真实用户测试。他们会告诉你是否困惑。无障碍不是额外的—是必须的。图片 Alt、Input label、键盘导航。简单、快速，视障用户会感谢你。',
      },
      {
        title: '性能与无障碍并行',
        summary: '我常用的轻量清单，保持页面快速且包容。',
        date: '2025-10-30',
        content: '性能和无障碍不是奢侈品—是尊重。慢页面对网速弱的人是无障碍的。无障碍代码排除 1/4 的人口。快速清单：1) 压缩 CSS/JS；2) 图片懒加载；3) 用 WebP 加降级；4) 压缩资源；5) 激进缓存。无障碍：1) 色彩对比；2) 永不移除焦点框；3) 自定义组件的 ARIA；4) 用屏幕阅读器测试；5) 总是移动优先。工具：Lighthouse、WAVE、axe DevTools。免费且省时。最终，这是纯粹的同理心。你在为真实的人、真实的网络创建。',
      },
    ],
    contacts: [
      { label: 'Email', href: 'mailto:elenrebeca280@gmail.com' },
      { label: 'GitHub', href: 'https://github.com/rebecaelens' },
    ],
    countryOptions: [
      { value: 'br', label: '巴西' },
      { value: 'pt', label: '葡萄牙' },
      { value: 'us', label: '美国' },
      { value: 'es', label: '西班牙' },
      { value: 'cn', label: '中国' },
    ],
  },
};

function App() {
  const [lang, setLang] = useState<LocaleKey>('br');
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const locale = locales[lang];

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-top">
          <div className="pill">{locale.badge}</div>
          <div className="lang-switch">
            <label htmlFor="lang">{locale.countryLabel}</label>
            <select
              id="lang"
              name="lang"
              value={lang}
              onChange={(event) => setLang(event.target.value as LocaleKey)}
            >
              {locale.countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="hero-body">
          <div className="avatar" aria-hidden="true" />
          <div className="hero-copy">
            <h1>{locale.heroTitle}</h1>
            <p className="lede">{locale.heroLede}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projetos">{locale.ctaPrimary}</a>
              <a className="btn ghost" href={`mailto:${locale.email}`}>{locale.ctaSecondary}</a>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <section id="sobre" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Sobre</p>
              <h2>{locale.aboutTitle}</h2>
            </div>
            <span className="hint">{locale.aboutHint}</span>
          </div>
          <p className="muted">{locale.aboutBody}</p>
        </section>

        <section id="projetos" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Portfólio</p>
              <h2>Projetos em destaque</h2>
            </div>
            <span className="hint">{locale.portfolioHint}</span>
          </div>
          <div className="grid">
            {locale.projects.map((project) => (
              <article key={project.title} className="card">
                <div className="card-header">
                  <h3>{project.title}</h3>
                  {project.link && (
                    <a className="link" href={project.link}>
                      Ver mais ↗
                    </a>
                  )}
                </div>
                <p className="muted">{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="blog" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">{locale.blogEyebrow}</p>
              <h2>{locale.blogTitle}</h2>
            </div>
            <button className="blog-toggle" onClick={() => setSelectedPost(null)}>
              {selectedPost ? '← Voltar' : locale.blogSeeAll}
            </button>
          </div>
          {selectedPost ? (
            <div className="post-detail">
              {locale.posts.map((post) =>
                post.title === selectedPost ? (
                  <div key={post.title} className="post-content">
                    <p className="muted small">{new Date(post.date).toLocaleDateString(locale.dateLocale)}</p>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                  </div>
                ) : null,
              )}
            </div>
          ) : (
            <div className="list">
              {locale.posts.map((post) => (
                <article key={post.title} className="list-item">
                  <div>
                    <p className="muted small">{new Date(post.date).toLocaleDateString(locale.dateLocale)}</p>
                    <h3>{post.title}</h3>
                    <p className="muted">{post.summary}</p>
                  </div>
                  <button className="link-btn" onClick={() => setSelectedPost(post.title)}>
                    {locale.readMore}
                  </button>
                </article>
              ))}
            </div>
          )}
        </section>

        <section id="contato" className="section contact">
          <div>
            <p className="eyebrow">Contato</p>
            <a href={`mailto:${locale.email}`} className="contact-title-link">
              <h2>{locale.contactTitle}</h2>
            </a>
            <p className="muted">{locale.contactBody}</p>
          </div>
          <div className="contact-links">
            {locale.contacts.map((contact) => (
              <a key={contact.label} className="contact-pill" href={contact.href}>
                {contact.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>{locale.footerCredit}</span>
        <span>Un coup de dés jamais n'abolira le hasard — Mallarmé</span>
        <a className="link" href={`mailto:${locale.email}`}>
          {locale.email}
        </a>
      </footer>
    </div>
  );
}

export default App;
