import {
  Activity,
  AppWindow,
  Atom,
  BadgeCheck,
  BriefcaseBusiness,
  Braces,
  Building2,
  CalendarDays,
  Code2,
  Cpu,
  Database,
  Download,
  GraduationCap,
  GitBranch,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Newspaper,
  Rocket,
  Server,
  ShieldCheck,
  Sprout,
  Target,
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
  { id: 'experience', label: 'Experience' },
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
    id: 'projects-experience',
    index: '04',
    from: 'Projects',
    to: 'Experience',
    target: 'experience',
    command: 'experience.mapImpact(projects)',
    signal: 'proof',
  },
  {
    id: 'experience-insights',
    index: '05',
    from: 'Experience',
    to: 'Insights',
    target: 'insights',
    command: 'notes.extractEngineering()',
    signal: 'thinking',
  },
  {
    id: 'insights-terminal',
    index: '06',
    from: 'Insights',
    to: 'Terminal',
    target: 'terminal',
    command: 'terminal.enableQuickAccess()',
    signal: 'interactive',
  },
  {
    id: 'terminal-github',
    index: '07',
    from: 'Terminal',
    to: 'GitHub',
    target: 'github',
    command: 'github.fetchActivity()',
    signal: 'public work',
  },
  {
    id: 'github-contact',
    index: '08',
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
    media: [
      {
        label: 'Create Link',
        src: '/assets/projects/optimized/snaplink-create.jpg',
        alt: 'SnapLink create short URL screen with destination URL and custom alias input',
        description: 'Secure URL creation workflow with custom aliases and recent generated links.',
      },
      {
        label: 'Analytics',
        src: '/assets/projects/optimized/snaplink-dashboard.jpg',
        alt: 'SnapLink analytics dashboard showing URLs, clicks, activity, and top performing links',
        description: 'Private analytics dashboard with totals, averages, trends, and top performing links.',
      },
      {
        label: 'Library',
        src: '/assets/projects/optimized/snaplink-library.jpg',
        alt: 'SnapLink manage link library screen with search filters and link actions',
        description: 'Account-scoped link management with search, filters, QR access, and delete actions.',
      },
      {
        label: 'QR Share',
        src: '/assets/projects/optimized/snaplink-qr-modal.jpg',
        alt: 'SnapLink QR code share modal with copy and download actions',
        description: 'QR preview modal with copy, open, PNG download, and SVG download actions.',
      },
    ],
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
    media: [
      {
        label: 'Discover',
        src: '/assets/projects/optimized/instanews-discover.jpg',
        alt: 'InstaNews discover page with hero news carousel, navigation, weather card, and trending feed',
        description: 'Discovery surface with category navigation, hero carousel, and trending news rail.',
      },
      {
        label: 'Business',
        src: '/assets/projects/optimized/instanews-business.jpg',
        alt: 'InstaNews business category page with subcategory filters and live feed sidebar',
        description: 'Category view with business filters, article cards, and live feed timeline.',
      },
      {
        label: 'Saved',
        src: '/assets/projects/optimized/instanews-saved.jpg',
        alt: 'InstaNews saved articles page with bookmarked news cards',
        description: 'Saved articles workflow with bookmarked cards, read actions, and share controls.',
      },
    ],
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
      'An internship agriculture intelligence platform for satellite-based field monitoring, vegetation analysis, weather context, and decision-support workflows.',
    status: 'Private internship project',
    role: 'Product UI, satellite dashboard workflows, field analytics, and decision-support experience',
    preview: {
      title: 'Satellite field intelligence',
      subtitle: 'Field maps, NDVI trends, weather timing, AI cues, and task planning.',
      stats: ['NDVI', 'Field Maps', 'AI Cues'],
    },
    media: [
      {
        label: 'Map',
        src: '/assets/projects/optimized/agrivision-map.jpg',
        alt: 'AgriVision satellite field map with vegetation index overlay and field sidebar',
        description: 'Satellite workspace with field selection, vegetation index overlay, and map controls.',
      },
      {
        label: 'Analytics',
        src: '/assets/projects/optimized/agrivision-analytics.jpg',
        alt: 'AgriVision field analytics overview with recent pass, confidence, trend, and performance tabs',
        description: 'Field overview showing recent pass confidence, trend status, and analytics navigation.',
      },
      {
        label: 'Canopy',
        src: '/assets/projects/optimized/agrivision-canopy-soil.jpg',
        alt: 'AgriVision canopy health and soil profile dashboard with NDVI and moisture indicators',
        description: 'Canopy health, soil profile, moisture, cover, and field takeaway summaries.',
      },
      {
        label: 'Trends',
        src: '/assets/projects/optimized/agrivision-trends.jpg',
        alt: 'AgriVision spectral trends timeline with NDVI chart and baseline comparison',
        description: 'Spectral timeline for NDVI movement, baseline comparison, and pass history.',
      },
      {
        label: 'AI Cues',
        src: '/assets/projects/optimized/agrivision-ai-cues.jpg',
        alt: 'AgriVision agronomist AI panel with vegetation stress warning and recovery signal',
        description: 'Agronomist AI cues translating spectral patterns into field-ready recommendations.',
      },
      {
        label: 'Weather',
        src: '/assets/projects/optimized/agrivision-weather.jpg',
        alt: 'AgriVision weather and timing dashboard with field weather pulse',
        description: 'Weather timing view connecting local conditions with field operation windows.',
      },
      {
        label: 'Tasks',
        src: '/assets/projects/optimized/agrivision-task-planner.jpg',
        alt: 'AgriVision task planner with manual tasks, validations, and recent interventions',
        description: 'Follow-up task planner for validation imagery, moisture checks, and interventions.',
      },
    ],
    metrics: [
      { label: 'Domain', value: 'Satellite agriculture' },
      { label: 'Indexes', value: 'NDVI / NDMI / EVI' },
      { label: 'Workflow', value: 'AI cues + tasks' },
    ],
    caseStudy: {
      problem:
        'Satellite agriculture data can be difficult to act on when maps, vegetation indexes, weather, trends, and field follow-ups live in separate workflows.',
      solution:
        'Designed an integrated satellite lab experience with field selection, vegetation and moisture layers, NDVI trend analysis, weather timing, agronomist AI cues, and trackable task planning.',
      outcome:
        'The result is a domain-specific dashboard that turns remote-sensing signals into clearer field decisions, validation tasks, and monitoring workflows.',
    },
    features: [
      'Satellite field map with vegetation and moisture layers',
      'Field analytics dashboard with health, moisture, and growth signals',
      'Spectral timeline with NDVI, EVI, SAVI, and NDMI views',
      'Weather and timing module for field operation context',
      'Agronomist AI recommendations and task planner workflows',
    ],
    techStack: ['React.js', 'Python', 'MongoDB', 'REST APIs', 'Satellite Data', 'Geospatial UI'],
    highlights: [
      'Designed around real agriculture workflows including field selection, pass refresh, weather timing, and validation tasks.',
      'Transforms spectral signals into readable health, moisture, trend, and AI recommendation surfaces.',
      'Uses a product-style dashboard layout to make dense geospatial data easier to inspect and act on.',
    ],
    engineeringHighlights: [
      {
        title: 'Geospatial product surface',
        body: 'Satellite imagery, field polygons, layer controls, and side panels are arranged around field inspection rather than generic reporting.',
      },
      {
        title: 'Index-driven analytics',
        body: 'NDVI, NDMI, EVI, and SAVI views organize spectral signals into dashboard cards, timelines, comparison views, and status summaries.',
      },
      {
        title: 'Decision workflow',
        body: 'AI cues, weather context, and task planning connect analysis output with concrete follow-up actions for field operators.',
      },
    ],
    architecture: ['React Field Workspace', 'Map + Layer Controls', 'Satellite Index Processing', 'AI Recommendation Layer', 'Task + Field Data Store'],
    architectureNote:
      'Field geometry and satellite pass data are surfaced through the React workspace. Index processing feeds health, moisture, and trend views, while the recommendation layer converts signals into cues and task-planning actions for field operators.',
  },
];

export const experienceStats = [
  { label: 'Professional Context', value: '2+', icon: BriefcaseBusiness },
  { label: 'Product Domains', value: '3', icon: Target },
  { label: 'Primary Stack', value: 'MERN', icon: Layers3 },
  { label: 'Delivery Focus', value: 'UI + APIs', icon: Rocket },
];

export const experienceItems = [
  {
    id: 'mrsac-agrivision',
    role: 'Full-Stack Developer Intern',
    organization: 'MRSAC / AgriVision Satellite Lab',
    period: '2026',
    location: 'Maharashtra, India',
    type: 'Private internship project',
    icon: Building2,
    projectId: 'agrivision',
    summary:
      'Worked on an agriculture intelligence platform focused on satellite field monitoring, vegetation indexes, weather timing, AI cues, and task-oriented field workflows.',
    responsibilities: [
      'Designed product-style dashboard screens for field monitoring and operator workflows.',
      'Structured satellite map, analytics, trends, weather, and task-planning surfaces around real agriculture decisions.',
      'Connected frontend views with domain concepts such as NDVI, NDMI, EVI, SAVI, field passes, and validation tasks.',
    ],
    impact: [
      'Turned dense geospatial signals into clearer field-health summaries and action cues.',
      'Built recruiter-visible proof of domain UI, data visualization, and scalable dashboard thinking.',
    ],
    stack: ['React.js', 'Python', 'MongoDB', 'REST APIs', 'Satellite Data', 'Geospatial UI'],
    metrics: [
      { label: 'Domain', value: 'Agriculture Intelligence' },
      { label: 'Signals', value: 'NDVI / NDMI / EVI' },
      { label: 'Workflow', value: 'AI cues + tasks' },
    ],
  },
  {
    id: 'unisoft-intern',
    role: 'Instructor & Web Developer Intern',
    organization: 'Unisoft Technologies',
    period: 'Training + internship',
    location: 'India',
    type: 'Teaching and development',
    icon: GraduationCap,
    summary:
      'Supported learning and development work around programming fundamentals, frontend technologies, UI frameworks, and full-stack web concepts.',
    responsibilities: [
      'Guided learners through C/C++, HTML, CSS, JavaScript, and web development fundamentals.',
      'Explained practical frontend concepts including responsive layouts, UI frameworks, and component thinking.',
      'Strengthened communication, debugging, and mentoring skills while reinforcing engineering fundamentals.',
    ],
    impact: [
      'Built confidence explaining technical ideas clearly to different skill levels.',
      'Improved foundation-level programming, frontend, and full-stack communication skills.',
    ],
    stack: ['C', 'C++', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    metrics: [
      { label: 'Focus', value: 'Teaching + Web Dev' },
      { label: 'Concepts', value: 'Programming + UI' },
      { label: 'Strength', value: 'Communication' },
    ],
  },
  {
    id: 'project-engineering',
    role: 'Project-Based Full-Stack Developer',
    organization: 'Independent Builds',
    period: 'Portfolio projects',
    location: 'Remote / self-directed',
    type: 'Product engineering',
    icon: BadgeCheck,
    projectId: 'snaplink',
    summary:
      'Built production-oriented portfolio projects that demonstrate frontend UI quality, backend architecture, authentication, analytics, and API integration thinking.',
    responsibilities: [
      'Created SnapLink with SSR views, authentication, CSRF protection, rate limits, custom aliases, QR sharing, and MongoDB analytics.',
      'Built InstaNews around feed-first UI, category navigation, saved article workflows, and API/content integration planning.',
      'Organized portfolio project content as case studies with architecture flows, screenshots, and engineering highlights.',
    ],
    impact: [
      'Converted personal projects into case-study proof for recruiters and technical reviewers.',
      'Demonstrated full-stack product thinking across SaaS, content, and data-heavy domains.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'EJS', 'TypeScript'],
    metrics: [
      { label: 'Projects', value: 'SnapLink + InstaNews' },
      { label: 'Backend', value: 'Auth + APIs' },
      { label: 'Proof', value: 'Case studies' },
    ],
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
  help: ['projects', 'skills', 'experience', 'resume', 'github', 'contact'],
  projects: projects.map((project) => `${project.name} - ${project.type}`),
  skills: skillGroups.flatMap((group) => group.skills.map((skill) => skill.name)),
  experience: experienceItems.map((item) => `${item.role} - ${item.organization}`),
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

export const githubProofStats = [
  {
    label: 'Featured Builds',
    value: '3',
    detail: 'SnapLink, InstaNews, AgriVision',
    icon: Layers3,
  },
  {
    label: 'Full-Stack Surface',
    value: 'React + Node',
    detail: 'Frontend, backend, APIs, databases',
    icon: Workflow,
  },
  {
    label: 'Production Practices',
    value: 'Auth + APIs',
    detail: 'Sessions, CSRF, rate limits, CRUD flows',
    icon: ShieldCheck,
  },
  {
    label: 'Domain Range',
    value: 'SaaS + Data',
    detail: 'URL analytics, news feeds, agriculture intelligence',
    icon: Activity,
  },
];

export const githubLanguageStack = [
  { language: 'JavaScript', count: 8 },
  { language: 'React', count: 6 },
  { language: 'Node.js', count: 5 },
  { language: 'CSS', count: 5 },
  { language: 'Python', count: 3 },
];

export const topRepositories = [
  {
    name: 'SnapLink',
    language: 'JavaScript',
    type: 'SSR URL Shortener',
    status: 'Live Demo',
    activity: 'URL platform architecture',
    description:
      'Secure SSR URL shortener with authentication, analytics, QR sharing, custom aliases, and MongoDB-backed activity tracking.',
    stack: ['Node.js', 'Express.js', 'EJS', 'Bootstrap', 'MongoDB'],
    html_url: 'https://github.com/vishal-rathod-02/SnapLink',
  },
  {
    name: 'InstaNews',
    language: 'React',
    type: 'News Aggregation App',
    status: 'Repository',
    activity: 'Feed-driven UI system',
    description:
      'Modern news interface with category browsing, saved articles, reading surfaces, and API/feed integration planning.',
    stack: ['React.js', 'Node.js', 'TypeScript', 'API Integration'],
    html_url: 'https://github.com/vishal-rathod-02/Insta-News-App',
  },
  {
    name: 'AgriVision',
    language: 'Full Stack',
    type: 'Private Internship Project',
    status: 'Private',
    activity: 'Agriculture intelligence app',
    description:
      'Satellite agriculture dashboard with field maps, spectral indexes, weather timing, AI cues, and task planning workflows.',
    stack: ['React.js', 'Python', 'MongoDB', 'Satellite Data'],
  },
  {
    name: 'Portfolio',
    language: 'React',
    type: 'Developer Portfolio',
    status: 'Current Build',
    activity: 'Premium portfolio SPA',
    description:
      'Interactive software developer portfolio with case-study projects, GitHub dashboard, contact flows, and optimized media.',
    stack: ['React.js', 'Vite', 'Framer Motion', 'Custom CSS'],
    html_url: developer.links.github,
  },
];

export const contactAvailability = {
  label: 'Open to opportunities',
  title: 'Available for full-stack developer roles, internships, and production-focused web projects.',
  response: 'Usually responds within 24-48 hours.',
  focus: ['React interfaces', 'Node.js APIs', 'MongoDB systems', 'Responsive UI/UX'],
  preferred: 'React.js, Node.js, Express.js, MongoDB, JavaScript, Python',
};

export const contactIntents = [
  'Full-time role',
  'Internship opportunity',
  'Freelance project',
  'Technical collaboration',
];

export const contactMethods = [
  {
    label: 'Email',
    value: developer.email,
    href: `mailto:${developer.email}`,
    icon: Mail,
    purpose: 'Best for role discussions and project inquiries.',
    action: 'Send',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vishalrathod02',
    href: developer.links.linkedin,
    icon: BriefcaseBusiness,
    purpose: 'Professional profile, recruiter messages, and networking.',
    action: 'View',
  },
  {
    label: 'GitHub',
    value: 'github.com/vishal-rathod-02',
    href: developer.links.github,
    icon: GitBranch,
    purpose: 'Repositories, source code, and public development activity.',
    action: 'Open',
  },
  {
    label: 'Resume',
    value: 'Vishal_Rathod_Resume.pdf',
    href: developer.resumeUrl,
    icon: Download,
    purpose: 'Downloadable resume for screening and interview context.',
    action: 'Download',
  },
];
