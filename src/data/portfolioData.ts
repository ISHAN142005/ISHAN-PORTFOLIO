export type ProjectCategory = 'All' | 'Full-Stack' | 'AI & Quant' | 'Systems & Games';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  categories: Exclude<ProjectCategory, 'All'>[];
  badge?: string;
  isPublic: boolean;
  repoUrl?: string;
  stack: string[];
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  architectureFlow: string[];
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: 'Terminal' | 'Layers' | 'Cpu' | 'Database';
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface AchievementItem {
  title: string;
  badge: string;
  organization: string;
  description: string;
  type: 'winner' | 'podium' | 'shortlist';
}

export interface LeadershipItem {
  role: string;
  organization: string;
  scope: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  verifyUrl?: string;
  credentialNote: string;
}

export const RESUME_URL = `${import.meta.env.BASE_URL}Ishan_Bohra_Resume.pdf`;

export const PERSONAL_INFO = {
  name: 'Ishan Bohra',
  initials: 'IB',
  role: 'Computer Science & Engineering Undergraduate',
  tagline: 'Full-Stack, Quantitative Systems & AI/ML Developer',
  headline:
    'Architecting zero-lookahead quantitative trading systems, scalable full-stack platforms, 3D scientific deep-learning pipelines, and high-performance systems software.',
  location: 'Gurugram, Haryana, India',
  phone: '+91 8290988121',
  phoneHref: 'tel:+918290988121',
  email: 'ishanbohra1414@gmail.com',
  emailHref: 'mailto:ishanbohra1414@gmail.com',
  links: {
    github: 'https://github.com/ISHAN142005',
    linkedin: 'https://www.linkedin.com/in/ishan-bohra-b23ba337b',
    leetcode: 'https://leetcode.com/u/ISHAN142005/',
    hackerrank: 'https://www.hackerrank.com/profile/ishan1414',
  },
};

export const HERO_METRICS = [
  {
    value: '9.53 / 10.0',
    label: 'University CGPA',
    sublabel: 'B.Tech CSE @ NorthCap University',
  },
  {
    value: '1st & 3rd',
    label: 'Xebia Hackathons',
    sublabel: 'Winner (Sem 1) & 2nd Runner-Up (Sem 2)',
  },
  {
    value: 'SIH 2026',
    label: 'Internal Shortlist',
    sublabel: 'SamudraVedh (PS26066) Ocean AI',
  },
  {
    value: '6+ Systems',
    label: 'Production & Research Builds',
    sublabel: 'Quant, Full-Stack, Deep Learning & C/C++',
  },
];

export const EDUCATION_DATA = {
  university: 'The NorthCap University, Gurugram',
  degree: 'B.Tech in Computer Science and Engineering',
  standing: '2nd Year Undergraduate • Expected Graduation: 2029',
  cgpa: '9.53 / 10.0',
  schoolScores: [
    { label: 'Class XII (Senior Secondary)', score: '88.0%' },
    { label: 'Class X (Secondary)', score: '92.17%' },
  ],
  courseworkFocus: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (C++ / Java)',
    'Database Management Systems (SQL)',
    'Operating Systems & Linux',
    'Supervised Machine Learning',
    'Quantitative Systems Architecture',
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    subtitle: 'Core systems, algorithmic problem solving & type-safe web engineering',
    iconName: 'Terminal',
    skills: [
      { name: 'Python', level: 'Intermediate', highlight: true },
      { name: 'TypeScript / JavaScript', level: 'Proficient', highlight: true },
      { name: 'C++', level: 'Beginner' },
      { name: 'C', level: 'Beginner' },
      { name: 'Java', level: 'Beginner' },
    ],
  },
  {
    title: 'Web & Frameworks',
    subtitle: 'Full-stack applications, modern APIs & interactive dashboards',
    iconName: 'Layers',
    skills: [
      { name: 'Next.js 16', highlight: true },
      { name: 'React 19', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'FastAPI', highlight: true },
      { name: 'Prisma ORM' },
      { name: 'NextAuth.js' },
      { name: 'Streamlit' },
    ],
  },
  {
    title: 'AI, Data & Systems Libraries',
    subtitle: 'Deep learning, scientific computing, columnar lakes & graphics engines',
    iconName: 'Cpu',
    skills: [
      { name: 'PyTorch', highlight: true },
      { name: 'NumPy & Pandas', highlight: true },
      { name: 'SciPy' },
      { name: 'Apache Arrow / Parquet', highlight: true },
      { name: 'Xarray' },
      { name: 'Three.js' },
      { name: 'SFML (C++)' },
      { name: 'GTK4 (C)' },
    ],
  },
  {
    title: 'Databases & Developer Tools',
    subtitle: 'Data querying, BI analytics, version control & native toolchains',
    iconName: 'Database',
    skills: [
      { name: 'SQL / MySQL', level: 'Beginner' },
      { name: 'Tableau', level: 'Beginner' },
      { name: 'Git & GitHub', highlight: true },
      { name: 'Linux', highlight: true },
      { name: 'VS Code' },
      { name: 'Android Studio / SDK' },
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'chronovect',
    title: 'Chronovect',
    subtitle: 'Quantitative Trading Research & Backtesting Engine',
    categories: ['AI & Quant'],
    badge: '213 Passing Tests • NSE Nifty 100',
    isPublic: false,
    stack: [
      'Python 3.10+',
      'FastAPI',
      'Apache Parquet / PyArrow',
      'NumPy',
      'Pandas',
      'Next.js / Streamlit',
      'Plotly',
      'Pytest',
    ],
    summary:
      'Modular Indian-market-first (NSE Nifty 100) quantitative backtesting and performance attribution platform engineered for institutional-grade research reproducibility.',
    highlights: [
      'Enforces strict zero look-ahead bias via deterministic next_open order execution and point-in-time signal alignment.',
      'Built a statutory Indian equity transaction cost engine modeling STT, NSE exchange turnover charges, SEBI fees, Stamp Duty, and GST.',
      'Engineered an automated market data quality audit gate backed by high-throughput columnar Apache Parquet lake storage.',
      'Validated across 213 passing Pytest suites covering execution mechanics, cost accounting, and attribution metrics.',
    ],
    metrics: [
      { label: 'Test Suite', value: '213 Passing' },
      { label: 'Universe', value: 'NSE Nifty 100' },
      { label: 'Execution', value: 'Zero Look-Ahead' },
    ],
    architectureFlow: [
      'Parquet Data Lake & Quality Audit Gate',
      'Point-in-Time Signal & Factor Engine',
      'Deterministic next_open Execution & Statutory Cost Engine',
      'FastAPI + Next.js / Streamlit Attribution Dashboard',
    ],
    accentColor: 'from-sky-500/20 via-blue-500/10 to-transparent',
  },
  {
    id: 'together',
    title: 'Together',
    subtitle: 'Multi-Campus Student Community Platform',
    categories: ['Full-Stack'],
    badge: '33+ Indian Universities',
    isPublic: false,
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Prisma ORM',
      'NextAuth.js',
    ],
    summary:
      'Independent full-stack web platform architected for students across 33+ Indian universities to eliminate campus communication fragmentation.',
    highlights: [
      'Designed multi-tenant university spaces with verified campus onboarding and role-aware community moderation.',
      'Built a zero-fee peer-to-peer student marketplace and dedicated club discussion hubs.',
      'Created an interactive 75% attendance rule simulator and exam countdown productivity suite tailored for Indian engineering curricula.',
    ],
    metrics: [
      { label: 'Campus Reach', value: '33+ Universities' },
      { label: 'Marketplace Fee', value: '0% Peer-to-Peer' },
      { label: 'Core Utility', value: '75% Attendance Sim' },
    ],
    architectureFlow: [
      'NextAuth.js Verified Campus Identity Layer',
      'Next.js 16 App Router + React 19 Server Actions',
      'Prisma ORM Multi-Campus Relational Schema',
      'Zero-Fee Marketplace, Club Hubs & Attendance Simulator',
    ],
    accentColor: 'from-blue-500/20 via-indigo-500/10 to-transparent',
  },
  {
    id: 'samudravedh',
    title: 'SamudraVedh',
    subtitle: '3D Ocean Subsurface Thermal Reconstruction (SIH 2026 — PS26066)',
    categories: ['AI & Quant'],
    badge: 'SIH 2026 Internal Round Cleared',
    isPublic: false,
    stack: [
      'Python',
      'PyTorch (U-Net)',
      'FastAPI',
      'Xarray',
      'Zarr',
      'NetCDF4',
      'React',
      'Three.js',
    ],
    summary:
      'AI/deep-learning framework built for Smart India Hackathon 2026 (Problem Statement PS26066) to reconstruct 3D subsurface ocean temperature profiles from satellite observations.',
    highlights: [
      'Trained a U-Net deep learning architecture reconstructing thermal profiles across 15 depth levels (0–1,000m) from Copernicus satellite surface fields.',
      'Optimized geospatial array pipelines with Xarray, Zarr, and NetCDF4 targeting sub-second CPU inference for cyclone heat potential tracking.',
      'Coupled FastAPI scientific endpoints with an interactive React + Three.js 3D volumetric ocean thermal visualizer.',
    ],
    metrics: [
      { label: 'Depth Horizon', value: '0–1,000m (15 Levels)' },
      { label: 'Inference Target', value: '< 1s CPU' },
      { label: 'Hackathon', value: 'SIH 2026 Shortlist' },
    ],
    architectureFlow: [
      'Copernicus Satellite NetCDF4 / Zarr Ingestion via Xarray',
      'PyTorch U-Net 15-Level Depth Reconstruction (<1s CPU)',
      'FastAPI Geospatial Inference Microservice',
      'React + Three.js 3D Volumetric Thermal Profile Viewer',
    ],
    accentColor: 'from-cyan-500/20 via-sky-500/10 to-transparent',
  },
  {
    id: 'the-rise-of-luminary',
    title: 'The Rise of Luminary',
    subtitle: '2D Game Architecture & Custom Combat Engine',
    categories: ['Systems & Games'],
    badge: '2nd Runner-Up • Xebia Hackathon',
    isPublic: true,
    repoUrl: 'https://github.com/ISHAN142005/THE-RISE-OF-LUMINARY',
    stack: ['C++', 'SFML', 'CMake', 'OOP', 'JSON Persistence'],
    summary:
      'Interactive 2D desktop RPG built from scratch in C++ and SFML using strict object-oriented design and a modular Finite State Machine architecture.',
    highlights: [
      'Engineered a clean Finite State Machine managing seamless transitions across Menu, Battle, Training, and Profile states.',
      'Implemented an elemental turn-based combat system with custom rendering pipeline, multi-layer parallax backgrounds, and particle systems.',
      'Built deterministic JSON save/load state persistence; awarded 2nd Runner-Up (3rd Place) in the 2nd-Semester Xebia Hackathon.',
    ],
    metrics: [
      { label: 'Architecture', value: 'Modular FSM' },
      { label: 'Recognition', value: '3rd Place Xebia' },
      { label: 'Engine', value: 'C++ & SFML' },
    ],
    architectureFlow: [
      'C++ Core Game Loop & Event Dispatcher',
      'Modular Finite State Machine (Menu / Battle / Training / Profile)',
      'Elemental Turn-Based Combat & Particle Renderer (SFML)',
      'Deterministic JSON Profile & Save Persistence',
    ],
    accentColor: 'from-sky-500/20 via-emerald-500/10 to-transparent',
  },
  {
    id: 'hangman-haunted-forest',
    title: 'GUI Hangman: Haunted Forest',
    subtitle: 'Native C/GTK4 Desktop & Firebase Web Application',
    categories: ['Systems & Games', 'Full-Stack'],
    badge: 'Dual Platform • Native C + Web',
    isPublic: true,
    repoUrl: 'https://github.com/ISHAN142005/Hangman-Haunted-Forest',
    stack: [
      'C',
      'GTK4',
      'GStreamer',
      'HTML5',
      'CSS3',
      'ES6 JavaScript',
      'Firebase',
    ],
    summary:
      'Horror-themed graphical Hangman survival game exploring event-driven native GUI architecture in C/GTK4 alongside a cloud-synced web edition.',
    highlights: [
      'Constructed an event-driven native Linux/desktop GUI in C and GTK4 with asynchronous GStreamer audio feedback and live event logging.',
      'Designed difficulty-scaled word banks, a high-pressure 60-second survival timer, and persistent local player profiles.',
      'Extended the experience to the browser using HTML5, CSS3, ES6 JavaScript, and Firebase for cross-device leaderboard persistence.',
    ],
    metrics: [
      { label: 'Native Stack', value: 'C + GTK4 + GStreamer' },
      { label: 'Survival Mode', value: '60s Timed Loops' },
      { label: 'Cloud Sync', value: 'Firebase Web' },
    ],
    architectureFlow: [
      'Native C + GTK4 Event-Driven Widget Hierarchy',
      '60-Second Survival Timer & Difficulty-Scaled Word Engine',
      'Asynchronous GStreamer Audio & Live Telemetry Logger',
      'HTML5/ES6 Web Port + Firebase Realtime Leaderboard',
    ],
    accentColor: 'from-blue-500/20 via-sky-500/10 to-transparent',
  },
  {
    id: 'royal-diwali',
    title: 'Royal Diwali',
    subtitle: 'Interactive Festive & Shri Ram Darbar Web Experience',
    categories: ['Full-Stack'],
    badge: '6-Stage Interactive Canvas & Audio',
    isPublic: false,
    stack: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'HTML5 Canvas',
      'Web Audio API',
    ],
    summary:
      'Immersive 6-stage interactive festive web application blending custom HTML5 Canvas particle physics, procedural Web Audio, and cultural storytelling.',
    highlights: [
      'Built an interactive Divine Shri Ram Darbar Darshan featuring clockwise hand-held Aarti motion tracking and ceremonial audio synthesis.',
      'Wrote a custom 60fps HTML5 Canvas fireworks physics engine alongside 4 animated SVG mystery gift boxes.',
      'Implemented personalized URL parameter greeting generation (?from=&to=) for instant social sharing.',
    ],
    metrics: [
      { label: 'Experience Flow', value: '6 Interactive Stages' },
      { label: 'Graphics', value: 'HTML5 Canvas + SVG' },
      { label: 'Personalization', value: 'Dynamic URL Params' },
    ],
    architectureFlow: [
      'Dynamic URL Parameter Parser (?from=&to=)',
      '6-Stage Framer Motion State Orchestrator',
      '60fps HTML5 Canvas Fireworks Physics & Web Audio Synthesizer',
      'Interactive Clockwise Aarti Tracking & SVG Gift Engine',
    ],
    accentColor: 'from-amber-500/15 via-sky-500/10 to-transparent',
  },
];

export const EXPERIENCE_DATA = [
  {
    role: 'Virtual Intern',
    company: 'Xebia IT Architects',
    duration: 'One-Week Virtual Internship',
    location: 'Gurugram / Remote',
    badge: 'Certificate of Appreciation',
    highlights: [
      'Completed intensive enterprise software engineering workflows, structured data analysis pipelines, and Business Intelligence (BI) dashboard training.',
      'Collaborated on practical problem-solving deliverables under industry mentorship and received a Certificate of Appreciation for excellence.',
    ],
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: 'Winner (1st Place) — First-Semester Hackathon',
    badge: '1st Place Winner',
    organization: 'Organized by Xebia',
    description:
      'Secured 1st Place among competing undergraduate teams in the First-Semester Hackathon organized by Xebia through rapid prototyping and technical execution.',
    type: 'winner',
  },
  {
    title: '2nd Runner-Up (3rd Place) — Second-Semester Hackathon',
    badge: '3rd Place Podium',
    organization: 'Organized by Xebia • The Rise of Luminary',
    description:
      'Awarded 2nd Runner-Up for engineering "The Rise of Luminary", an object-oriented 2D C++/SFML game with a custom Finite State Machine and elemental combat engine.',
    type: 'podium',
  },
  {
    title: 'Smart India Hackathon (SIH) 2026 Internal Round Shortlist',
    badge: 'SIH 2026 Shortlist',
    organization: 'Problem Statement PS26066 • SamudraVedh',
    description:
      'Cleared the competitive university internal selection round for SIH 2026 with SamudraVedh — a 3D ocean subsurface thermal reconstruction system using PyTorch U-Net and Copernicus satellite data.',
    type: 'shortlist',
  },
];

export const LEADERSHIP_DATA: LeadershipItem[] = [
  {
    role: 'Executive Secretary',
    organization: 'Optica Student Chapter, The NorthCap University',
    scope: 'Chapter Operations & Technical Events',
    description:
      'Spearheading student chapter operations, technical workshops, and cross-departmental optics & computing initiatives.',
  },
  {
    role: 'Technical Head',
    organization: 'CLOUD IoT Club, The NorthCap University',
    scope: 'Cloud & Systems Architecture',
    description:
      'Leading technical sessions, hands-on project mentorship, and system architecture tracks for student developers.',
  },
  {
    role: 'Secretary',
    organization: 'Brainstorming Club, The NorthCap University',
    scope: 'Ideation & Competitive Events',
    description:
      'Coordinating campus-wide problem-solving forums, ideation sprints, and student innovation challenges.',
  },
  {
    role: 'Class Representative & Hackathon Team Lead',
    organization: 'Department of CSE, The NorthCap University',
    scope: '60+ Peers • Hackathons & Design Day',
    description:
      'Representing a cohort of 60+ CSE undergraduates for academic coordination while leading multi-disciplinary engineering teams across Hackathons and University Design Day.',
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'Stanford Online & DeepLearning.AI (via Coursera)',
    date: 'Oct 2026',
    verifyUrl: 'https://coursera.org/verify/2JFMXNK53ZWU',
    credentialNote:
      'Verified Credential ID: 2JFMXNK53ZWU — Covers linear/logistic regression, gradient descent, regularization, and supervised learning foundations.',
  },
  {
    title: 'Introduction to AIML Using Google Cloud',
    issuer: 'Google Cloud Certification Training organized by Xebia',
    date: 'Nov 2025',
    credentialNote:
      'Certificate of Participation — Covered cloud-hosted AI/ML workflows, model training pipelines, and Google Cloud AI foundations.',
  },
];
