import {
  AppWindow,
  Atom,
  Braces,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Mail,
  Newspaper,
  Server,
  ShieldCheck,
  Sprout,
  Workflow,
  Zap,
} from 'lucide-react';

export const developer = {
  name: 'Vishal Rathod',
  role: 'Full-Stack Developer',
  headline:
    'Building scalable and modern web applications using frontend and backend technologies.',
  status: 'Building modern full-stack applications',
  location: 'India',
  email: 'vishalrathod6547@gmail.com',
  resumeUrl: '/assets/Vishal_Rathod_Resume.pdf',
  profileImage: '/assets/MyProfile.jpg',
  githubUsername: 'vishal-rathod-02',
  links: {
    github: 'https://github.com/vishal-rathod-02',
    linkedin: 'https://www.linkedin.com/in/vishalrathod02',
  },
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'insights', label: 'Insights' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
];

export const sectionDividers = [
  {
    id: 'home-about',
    index: '01',
    from: 'Home',
    to: 'About',
    target: 'about',
    command: 'profile.loadContext()',
    signal: 'identity',
  },
  {
    id: 'about-skills',
    index: '02',
    from: 'About',
    to: 'Skills',
    target: 'skills',
    command: 'stack.mapCapabilities()',
    signal: 'capability',
  },
  {
    id: 'skills-projects',
    index: '03',
    from: 'Skills',
    to: 'Projects',
    target: 'projects',
    command: 'projects.connect(stack)',
    signal: 'execution',
  },
  {
    id: 'projects-insights',
    index: '04',
    from: 'Projects',
    to: 'Insights',
    target: 'insights',
    command: 'notes.extractEngineering()',
    signal: 'thinking',
  },
  {
    id: 'insights-terminal',
    index: '05',
    from: 'Insights',
    to: 'Terminal',
    target: 'terminal',
    command: 'terminal.enableQuickAccess()',
    signal: 'interactive',
  },
  {
    id: 'terminal-github',
    index: '06',
    from: 'Terminal',
    to: 'GitHub',
    target: 'github',
    command: 'github.fetchActivity()',
    signal: 'public work',
  },
  {
    id: 'github-contact',
    index: '07',
    from: 'GitHub',
    to: 'Contact',
    target: 'contact',
    command: 'contact.openChannel()',
    signal: 'connect',
  },
];

export const heroFocusItems = [
  {
    label: 'Frontend Systems',
    title: 'Interactive React interfaces',
    body: 'Component-driven UI, responsive layouts, smooth state transitions, and polished product surfaces.',
    command: 'render(<ProductExperience />)',
  },
  {
    label: 'Backend Architecture',
    title: 'Secure API and server flows',
    body: 'Express routes, sessions, middleware, rate limits, validation, and database-backed workflows.',
    command: 'api.compose({ auth, routes, data })',
  },
  {
    label: 'Data-Driven Products',
    title: 'Dashboards and analytics',
    body: 'MongoDB models, activity tracking, feed handling, and useful insights for real application behavior.',
    command: 'analytics.map(events).toDashboard()',
  },
];

export const heroMetrics = [
  { label: 'React UI', value: 'SPA', icon: AppWindow },
  { label: 'API Design', value: 'Express', icon: Server },
  { label: 'Data Layer', value: 'MongoDB', icon: Database },
];

export const heroConsoleLines = [
  'portfolio.boot({ mode: "premium" })',
  'stack.connect(["React", "Node", "MongoDB"])',
  'ship.focus("real-world usability")',
];

export const aboutHighlights = [
  {
    title: 'Frontend Development',
    body: 'React.js / Next.js / Tailwind CSS',
    icon: AppWindow,
  },
  {
    title: 'Backend Engineering',
    body: 'Node.js / Express.js / MongoDB',
    icon: Server,
  },
  {
    title: 'Programming',
    body: 'JavaScript / Python',
    icon: Braces,
  },
];

export const aboutStats = [
  { label: 'Projects Built', value: 10, suffix: '+' },
  { label: 'Technologies Used', value: 15, suffix: '+' },
  { label: 'Backend APIs', value: 6, suffix: '+' },
  { label: 'Responsive Systems', value: 100, suffix: '%' },
];

export const aboutStack = [
  { name: 'React', detail: 'UI systems', icon: Atom },
  { name: 'Node.js', detail: 'Runtime', icon: Server },
  { name: 'MongoDB', detail: 'Database', icon: Database },
  { name: 'Python', detail: 'Logic', icon: Cpu },
];

export const aboutCodeSnippet = [
  'const developer = {',
  '  role: "Full-Stack Developer",',
  '  focus: ["Frontend", "Backend", "Scalable Systems"],',
  '  mindset: "Clean UI, reliable APIs, real usability"',
  '};',
];

export const skillGroups = [
  {
    category: 'Frontend Frameworks',
    accent: 'mint',
    icon: Globe2,
    summary: 'Building component-driven interfaces for SPA, SSR, and dynamic product flows.',
    skills: [
      {
        name: 'React.js',
        mark: 'R',
        projects: 6,
        proficiency: 88,
        level: 'Strong',
        note: 'component systems, hooks, SPA architecture',
        focus: 'Interactive UI, reusable components, state-driven interfaces',
      },
      {
        name: 'Next.js',
        mark: 'N',
        projects: 2,
        proficiency: 68,
        level: 'Growing',
        note: 'SSR patterns and route organization',
        focus: 'Routing, SSR concepts, production frontend structure',
      },
      {
        name: 'Vue.js',
        mark: 'V',
        projects: 1,
        proficiency: 60,
        level: 'Exploring',
        note: 'reactive UI concepts and component structure',
        focus: 'Progressive frontend patterns, reusable views, reactive state',
      },
      {
        name: 'EJS',
        mark: 'EJ',
        projects: 1,
        proficiency: 70,
        level: 'Practical',
        note: 'server-rendered templates for Express apps',
        focus: 'SSR views, reusable partials, dashboard rendering',
      },
    ],
  },
  {
    category: 'UI & Styling',
    accent: 'cyan',
    icon: AppWindow,
    summary: 'Creating responsive layouts with polished visual systems and usable UI patterns.',
    skills: [
      {
        name: 'Tailwind CSS',
        mark: 'T',
        projects: 5,
        proficiency: 84,
        level: 'Strong',
        note: 'responsive utility-first styling',
        focus: 'Responsive layouts, polished UI systems, design tokens',
      },
      {
        name: 'Bootstrap',
        mark: 'B',
        projects: 2,
        proficiency: 78,
        level: 'Practical',
        note: 'production-ready UI components and responsive grids',
        focus: 'SSR dashboards, responsive cards, forms, utility styling',
      },
      {
        name: 'HTML5',
        mark: 'H5',
        projects: 8,
        proficiency: 88,
        level: 'Strong',
        note: 'semantic structure and accessible markup',
        focus: 'Clean document structure, forms, SEO-friendly content hierarchy',
      },
      {
        name: 'CSS3',
        mark: 'C3',
        projects: 8,
        proficiency: 86,
        level: 'Strong',
        note: 'responsive layouts, transitions, and modern styling',
        focus: 'Grid, flexbox, glassmorphism, animation, mobile-first UI',
      },
    ],
  },
  {
    category: 'Backend Engineering',
    accent: 'lime',
    icon: Server,
    summary: 'Designing API layers, middleware flows, authentication, and server logic.',
    skills: [
      {
        name: 'Node.js',
        mark: 'N',
        projects: 5,
        proficiency: 82,
        level: 'Strong',
        note: 'REST APIs and service logic',
        focus: 'Server runtime, request handling, backend workflows',
      },
      {
        name: 'Express.js',
        mark: 'E',
        projects: 5,
        proficiency: 84,
        level: 'Strong',
        note: 'routing, middleware, auth flows',
        focus: 'Routes, middleware, sessions, API structure, rate limiting',
      },
      {
        name: 'ASP.NET Web Forms',
        mark: 'ASP',
        projects: 1,
        proficiency: 62,
        level: 'Familiar',
        note: 'enterprise web application fundamentals',
        focus: 'Server controls, form workflows, database-backed pages',
      },
      {
        name: 'REST APIs',
        mark: 'API',
        projects: 5,
        proficiency: 82,
        level: 'Strong',
        note: 'resource routing and client-server contracts',
        focus: 'CRUD endpoints, API integration, request validation, response design',
      },
      {
        name: 'JWT Authentication',
        mark: 'JWT',
        projects: 3,
        proficiency: 74,
        level: 'Practical',
        note: 'token-based authentication workflows',
        focus: 'Protected routes, auth middleware, secure user sessions',
      },
    ],
  },
  {
    category: 'Database & Cache',
    accent: 'amber',
    icon: Database,
    summary: 'Modeling persistent data for dashboards, auth systems, analytics, and caching.',
    skills: [
      {
        name: 'MongoDB',
        mark: 'M',
        projects: 4,
        proficiency: 80,
        level: 'Strong',
        note: 'schema design and query modeling',
        focus: 'Collections, Mongoose models, dashboard queries, activity logs',
      },
      {
        name: 'SQL Server',
        mark: 'SQL',
        projects: 1,
        proficiency: 66,
        level: 'Practical',
        note: 'relational database fundamentals',
        focus: 'Tables, queries, relational data, database-backed applications',
      },
      {
        name: 'Redis',
        mark: 'RD',
        projects: 1,
        proficiency: 58,
        level: 'Exploring',
        note: 'caching and fast key-value access',
        focus: 'Cache strategy, session-friendly storage, performance improvement',
      },
      {
        name: 'Mongoose',
        mark: 'MG',
        projects: 4,
        proficiency: 78,
        level: 'Practical',
        note: 'MongoDB modeling for Node.js apps',
        focus: 'Schemas, validation, model methods, query helpers',
      },
    ],
  },
  {
    category: 'Programming Languages',
    accent: 'rose',
    icon: Code2,
    summary: 'Writing application logic, async flows, scripting, and problem-solving code.',
    skills: [
      {
        name: 'JavaScript (ES6+)',
        mark: 'JS',
        projects: 8,
        proficiency: 88,
        level: 'Strong',
        note: 'frontend, backend, async workflows',
        focus: 'DOM logic, React apps, Express APIs, async data handling',
      },
      {
        name: 'TypeScript',
        mark: 'TS',
        projects: 1,
        proficiency: 65,
        level: 'Growing',
        note: 'typed JavaScript for safer application logic',
        focus: 'Typed components, API models, maintainable frontend code',
      },
      {
        name: 'Python',
        mark: 'PY',
        projects: 3,
        proficiency: 72,
        level: 'Practical',
        note: 'automation and data-friendly tooling',
        focus: 'Scripting, backend logic, automation, data-oriented workflows',
      },
      {
        name: 'C',
        mark: 'C',
        projects: 2,
        proficiency: 65,
        level: 'Familiar',
        note: 'programming fundamentals and structured logic',
        focus: 'Control flow, memory basics, problem-solving foundations',
      },
      {
        name: 'C++',
        mark: 'C++',
        projects: 2,
        proficiency: 64,
        level: 'Familiar',
        note: 'object-oriented programming fundamentals',
        focus: 'Classes, functions, data structures, logic building',
      },
    ],
  },
  {
    category: 'Tools & Workflow',
    accent: 'mint',
    icon: GitBranch,
    summary: 'Using professional tooling for version control, API testing, and project delivery.',
    skills: [
      {
        name: 'Git',
        mark: 'G',
        projects: 10,
        proficiency: 82,
        level: 'Strong',
        note: 'branching and version control',
        focus: 'Commits, branching, code history, project organization',
      },
      {
        name: 'GitHub',
        mark: 'GH',
        projects: 10,
        proficiency: 82,
        level: 'Strong',
        note: 'repos, collaboration, project history',
        focus: 'Repository workflows, project publishing, portfolio visibility',
      },
      {
        name: 'Postman',
        mark: 'P',
        projects: 4,
        proficiency: 76,
        level: 'Practical',
        note: 'API testing and debugging',
        focus: 'Endpoint testing, auth checks, response debugging',
      },
      {
        name: 'VS Code',
        mark: 'VS',
        projects: 10,
        proficiency: 86,
        level: 'Strong',
        note: 'daily development environment',
        focus: 'Extensions, debugging, formatting, component and API workflows',
      },
      {
        name: 'Visual Studio 2022',
        mark: 'V22',
        projects: 1,
        proficiency: 62,
        level: 'Familiar',
        note: 'ASP.NET and enterprise project tooling',
        focus: 'Web Forms projects, database-connected development, debugging',
      },
    ],
  },
  {
    category: 'Architecture & Concepts',
    accent: 'cyan',
    icon: Workflow,
    summary: 'Applying engineering patterns that make applications maintainable and production-oriented.',
    skills: [
      {
        name: 'MVC Architecture',
        mark: 'MVC',
        projects: 4,
        proficiency: 76,
        level: 'Practical',
        note: 'separating models, views, controllers, and routes',
        focus: 'Clean folder structure, maintainable backend modules, clear ownership',
      },
      {
        name: 'CRUD Operations',
        mark: 'CRUD',
        projects: 6,
        proficiency: 84,
        level: 'Strong',
        note: 'real-world create, read, update, delete flows',
        focus: 'Forms, validation, database writes, dashboard management',
      },
      {
        name: 'API Integration',
        mark: 'INT',
        projects: 5,
        proficiency: 80,
        level: 'Practical',
        note: 'connecting frontends with backend and third-party data',
        focus: 'Fetch flows, response states, error handling, dynamic rendering',
      },
      {
        name: 'Database Management',
        mark: 'DB',
        projects: 5,
        proficiency: 76,
        level: 'Practical',
        note: 'organizing data models for application workflows',
        focus: 'Schemas, relationships, query planning, analytics-friendly records',
      },
      {
        name: 'Performance Optimization',
        mark: 'PERF',
        projects: 4,
        proficiency: 72,
        level: 'Practical',
        note: 'improving load, interaction, and server response behavior',
        focus: 'Lazy loading, optimized UI motion, efficient API and database usage',
      },
    ],
  },
];

export const skillDashboardStats = [
  { label: 'Core Categories', value: '7' },
  { label: 'Tracked Skills', value: '32' },
  { label: 'Project Usage', value: '10+' },
  { label: 'Primary Focus', value: 'Full Stack' },
];

export const projects = [
  {
    id: 'snaplink',
    name: 'SnapLink',
    type: 'SSR URL Shortener',
    image: '/assets/Snaplink.svg',
    icon: Zap,
    liveUrl: 'https://snaplink-uf6o.onrender.com/',
    sourceUrl: 'https://github.com/vishal-rathod-02/SnapLink',
    overview:
      'A modern server-side rendered URL shortener with account-scoped links, private analytics, secure form handling, and a premium Bootstrap-based dashboard.',
    status: 'Live production demo',
    role: 'Full-stack development, SSR architecture, authentication, analytics workflow',
    preview: {
      title: 'Private analytics dashboard',
      subtitle: 'Account-scoped links, clicks, activity timeline, and QR assets.',
      stats: ['SSR', 'Auth', 'Analytics'],
    },
    metrics: [
      { label: 'Security', value: 'CSRF + Rate limits' },
      { label: 'Analytics', value: 'Clicks + activity' },
      { label: 'Delivery', value: 'Express SSR' },
    ],
    caseStudy: {
      problem:
        'Short links need more than a redirect. Users need private ownership, duplicate handling, tracking, and a dashboard that stays fast without unnecessary frontend complexity.',
      solution:
        'Built a server-rendered Express application with session authentication, CSRF-protected forms, scoped link ownership, QR generation, custom aliases, and dashboard aggregation.',
      outcome:
        'The result is a production-oriented URL shortener with secure workflows, reusable link behavior, and analytics that communicate real user activity clearly.',
    },
    features: [
      'Session-based signup, login, and logout',
      'Account-scoped links and private analytics',
      'CSRF protection and route-level rate limiting',
      'Custom aliases and QR code downloads',
      'Click tracking with IP, user agent, referrer, and timestamps',
      '7-day activity trends, top URLs, and recent timeline',
    ],
    techStack: ['Node.js', 'Express.js', 'EJS', 'Bootstrap', 'MongoDB', 'Mongoose'],
    highlights: [
      'Uses Express SSR with EJS views for fast page delivery and clean authenticated dashboard flows.',
      'Reuses an existing default short URL when the same account submits the same original URL again.',
      'Tracks creation and visit activity for analytics, URL performance, and user behavior visibility.',
    ],
    engineeringHighlights: [
      {
        title: 'Secure form workflow',
        body: 'Session checks, CSRF protection, and rate limits protect sensitive auth and link creation routes.',
      },
      {
        title: 'Analytics data model',
        body: 'Creation and visit events are stored separately so the dashboard can show totals, trends, top URLs, and timelines.',
      },
      {
        title: 'SSR product experience',
        body: 'EJS views keep authenticated dashboards fast while Bootstrap provides a clean, responsive interface layer.',
      },
    ],
    architecture: ['EJS + Bootstrap SSR Views', 'Express Routes + Middleware', 'Auth + CSRF + Rate Limits', 'Mongoose Models', 'MongoDB'],
    architectureNote:
      'Authenticated users submit forms through CSRF-protected SSR routes. Express middleware handles sessions and rate limits, Mongoose persists link records and activity events, and dashboard views render aggregate analytics back to the user.',
  },
  {
    id: 'instanews',
    name: 'InstaNews',
    type: 'News Aggregation App',
    image: '/assets/InstaNews.svg',
    icon: Newspaper,
    sourceUrl: 'https://github.com/vishal-rathod-02/Insta-News-App',
    overview:
      'A modern news experience focused on organized feeds, quick scanning, and efficient content discovery.',
    status: 'Repository available',
    role: 'Frontend architecture, feed experience, API integration planning',
    preview: {
      title: 'Feed-first reading interface',
      subtitle: 'Designed for fast scanning, categories, saved items, and dense content browsing.',
      stats: ['Feeds', 'Filters', 'Reader UI'],
    },
    metrics: [
      { label: 'Content', value: 'RSS-ready' },
      { label: 'UI', value: 'Category views' },
      { label: 'State', value: 'Saved articles' },
    ],
    caseStudy: {
      problem:
        'News interfaces can become cluttered quickly. The challenge is organizing dynamic feed content so users can scan, filter, and open stories without cognitive overload.',
      solution:
        'Structured the app around reusable article cards, category-driven views, saved content states, and a feed service layer that can normalize incoming source data.',
      outcome:
        'The project demonstrates frontend composition, API integration thinking, and product-focused information layout for content-heavy applications.',
    },
    features: ['RSS/feed handling', 'Category filters', 'Saved articles', 'Clean reading UI'],
    techStack: ['React.js', 'Node.js', 'TypeScript', 'API Integration', 'JavaScript'],
    highlights: [
      'Built around reusable feed and article presentation components.',
      'Planned for resilient API fetching and loading states.',
      'Optimized layout for browsing dense information quickly.',
    ],
    engineeringHighlights: [
      {
        title: 'Content normalization',
        body: 'The feed layer is designed to prepare different article sources before rendering consistent UI components.',
      },
      {
        title: 'Reusable reader surface',
        body: 'Article cards, category views, and saved states can evolve without rewriting the entire page flow.',
      },
      {
        title: 'Information density',
        body: 'The layout focuses on quick scanning, readable hierarchy, and reduced visual noise for news browsing.',
      },
    ],
    architecture: ['React UI', 'Feed Service', 'API Adapter', 'Content Cache'],
    architectureNote:
      'The feed layer normalizes incoming content before the UI renders category views, saved lists, and compact article previews.',
  },
  {
    id: 'agrivision',
    name: 'AgriVision',
    type: 'Agriculture Intelligence System',
    image: '/assets/AgriVision.svg',
    icon: Sprout,
    overview:
      'An agriculture-focused platform concept for presenting crop, field, and decision-support insights through a modern interface.',
    status: 'In development',
    role: 'Product UI, domain workflow design, scalable route planning',
    preview: {
      title: 'Agriculture intelligence dashboard',
      subtitle: 'Field-aware visual summaries for crop and decision-support insights.',
      stats: ['Maps', 'Insights', 'Data UI'],
    },
    metrics: [
      { label: 'Domain', value: 'Agriculture' },
      { label: 'Focus', value: 'Decision support' },
      { label: 'System', value: 'API-ready' },
    ],
    caseStudy: {
      problem:
        'Agriculture tools need to communicate complex field and crop data in a way that remains useful for real operational decisions.',
      solution:
        'Designed a dashboard-first experience with data visualization, field-focused UI patterns, and an architecture that can connect analysis services to frontend views.',
      outcome:
        'The concept positions AgriVision as a scalable product surface for domain-specific insights rather than a generic dashboard clone.',
    },
    features: ['Insight dashboard', 'Data visualization', 'Field-focused UI', 'Scalable route structure'],
    techStack: ['React.js', 'Python', 'MongoDB', 'API Design'],
    highlights: [
      'Designed around domain-specific data rather than generic dashboards.',
      'Uses clear visual hierarchy for operational decision-making.',
      'Prepared for backend services that can evolve with data sources.',
    ],
    engineeringHighlights: [
      {
        title: 'Domain-first interface',
        body: 'The UI is structured around field and crop decisions, keeping the product closer to real user workflows.',
      },
      {
        title: 'Service-ready architecture',
        body: 'The frontend is prepared to receive analysis results from backend services as the system grows.',
      },
      {
        title: 'Dashboard hierarchy',
        body: 'Visual summaries, drill-down areas, and route planning keep dense agriculture data easier to interpret.',
      },
    ],
    architecture: ['Frontend Dashboard', 'API Gateway', 'Analysis Service', 'Database'],
    architectureNote:
      'Domain data flows into an analysis layer, then the frontend presents concise recommendations, visual summaries, and drill-down views.',
  },
];

export const insights = [
  {
    id: 'snaplink-ssr',
    title: 'Implementing SSR in SnapLink',
    project: 'SnapLink',
    projectTarget: 'projects',
    category: 'Architecture',
    tag: 'Frontend Architecture',
    level: 'Intermediate',
    impact: 'Faster first render and simpler authenticated page delivery.',
    stack: ['Express.js', 'EJS', 'Bootstrap', 'MongoDB'],
    body: 'Use EJS-rendered Express routes for authentication, link management, analytics dashboards, and clean server-delivered transitions.',
    problem: 'A URL shortener needs fast public redirects, authenticated dashboard views, and predictable form-driven workflows without overcomplicating the frontend.',
    approach: 'Keep user-facing pages server-rendered with EJS, centralize request handling in Express routes, and use middleware for sessions, CSRF, and rate limits.',
    implementation:
      'Public and authenticated routes are separated. Form submissions pass through security middleware before controller logic creates links, stores events, and renders dashboard views.',
    result:
      'SnapLink stays easy to deploy, loads quickly, and keeps the backend architecture visible and maintainable.',
    snippet: 'router.post("/links", csrf, rateLimit, requireAuth, linksController.create);',
    timeline: ['Define SSR routes', 'Add auth middleware', 'Persist link records', 'Render analytics views'],
    icon: Globe2,
  },
  {
    id: 'rss-feeds',
    title: 'Managing RSS feeds efficiently',
    project: 'InstaNews',
    projectTarget: 'projects',
    category: 'API Strategy',
    tag: 'API Strategy',
    level: 'Practical',
    impact: 'More stable UI rendering across inconsistent feed sources.',
    stack: ['React.js', 'API Integration', 'JavaScript'],
    body: 'Normalize feed responses at the service boundary so the UI can stay predictable even when source schemas differ.',
    problem: 'RSS and news sources can expose different response shapes, missing fields, and inconsistent metadata.',
    approach:
      'Treat feed parsing as a service boundary. Normalize title, source, date, image, category, and URL before the UI receives data.',
    implementation:
      'The UI consumes a single article shape, making filters, saved articles, and loading states simpler to maintain.',
    result:
      'The news interface becomes easier to expand because presentation components do not need source-specific conditionals.',
    snippet: 'const articles = feeds.map(normalizeArticle).filter(Boolean);',
    timeline: ['Fetch feeds', 'Normalize articles', 'Cache useful fields', 'Render category views'],
    icon: Newspaper,
  },
  {
    id: 'api-routes',
    title: 'Structuring scalable API routes',
    project: 'Full-stack apps',
    projectTarget: 'projects',
    category: 'Backend',
    tag: 'Backend Design',
    level: 'Intermediate',
    impact: 'Cleaner backend growth as features become more complex.',
    stack: ['Node.js', 'Express.js', 'MongoDB'],
    body: 'Keep route handlers thin, move business logic into services, and isolate database access inside model-oriented modules.',
    problem: 'Backend code becomes hard to maintain when routes directly handle validation, business logic, database operations, and response formatting.',
    approach:
      'Use routes for HTTP boundaries, controllers for request orchestration, services for business logic, and models for persistence.',
    implementation:
      'This structure keeps each layer focused and makes authentication, analytics, and validation easier to extend.',
    result:
      'Feature additions become safer because route files stay readable and backend responsibilities are separated.',
    snippet: 'router.use("/api/links", requireAuth, linkRoutes);',
    timeline: ['Group routes', 'Move logic to services', 'Isolate models', 'Add middleware guards'],
    icon: Server,
  },
  {
    id: 'auth-security',
    title: 'Authentication security practices',
    project: 'SnapLink',
    projectTarget: 'projects',
    category: 'Security',
    tag: 'Security',
    level: 'Important',
    impact: 'Better protection for user accounts and form-driven workflows.',
    stack: ['Sessions', 'CSRF', 'Rate Limiting', 'Validation'],
    body: 'Prefer HTTP-only token storage, input validation, rate limiting, and careful error responses for production-facing APIs.',
    problem: 'Authentication flows are common attack surfaces, especially when apps include signup, login, and form submissions.',
    approach:
      'Protect forms with CSRF tokens, limit sensitive routes, validate inputs, and avoid leaking detailed authentication errors.',
    implementation:
      'Signup, login, and link creation routes use route-level limits, session checks, and form protection before state changes occur.',
    result:
      'The app becomes more production-oriented and safer for real user workflows.',
    snippet: 'app.use(session(config)); app.use(csrfProtection);',
    timeline: ['Protect sessions', 'Add CSRF checks', 'Limit sensitive routes', 'Validate inputs'],
    icon: ShieldCheck,
  },
];

export const insightCategories = ['All', 'Architecture', 'API Strategy', 'Backend', 'Security'];

export const terminalCommands = {
  help: ['projects', 'skills', 'resume', 'github', 'contact'],
  projects: projects.map((project) => `${project.name} - ${project.type}`),
  skills: skillGroups.flatMap((group) => group.skills.map((skill) => skill.name)),
  resume: [`Resume: ${developer.resumeUrl}`],
  github: [`GitHub: ${developer.links.github}`],
  contact: [`Email: ${developer.email}`, `LinkedIn: ${developer.links.linkedin}`],
};

export const githubStats = [
  { label: 'Projects Built', value: '10+', icon: Layers3 },
  { label: 'Frontend Stack', value: 'React Ecosystem', icon: Globe2 },
  { label: 'Backend Focus', value: 'Node.js & Express', icon: Server },
  { label: 'Database', value: 'MongoDB', icon: Database },
];

export const topRepositories = [
  {
    name: 'SnapLink',
    language: 'JavaScript',
    activity: 'URL platform architecture',
    html_url: 'https://github.com/vishal-rathod-02/SnapLink',
  },
  {
    name: 'InstaNews',
    language: 'React',
    activity: 'Feed-driven UI system',
    html_url: 'https://github.com/vishal-rathod-02/Insta-News-App',
  },
  { name: 'AgriVision', language: 'Full Stack', activity: 'Agriculture intelligence app' },
];

export const contactMethods = [
  { label: 'Email', value: developer.email, href: `mailto:${developer.email}`, icon: Mail },
  { label: 'LinkedIn', value: 'linkedin.com/in/vishalrathod02', href: developer.links.linkedin, icon: Globe2 },
  { label: 'GitHub', value: 'github.com/vishal-rathod-02', href: developer.links.github, icon: GitBranch },
  { label: 'Resume', value: 'Vishal_Rathod_Resume.pdf', href: developer.resumeUrl, icon: Code2 },
];
