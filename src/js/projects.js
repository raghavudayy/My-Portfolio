/* ==========================================================================
   Projects & Story-Driven Case Studies Module - Uday Pratap Raghav Portfolio
   ========================================================================== */

export const PROJECTS_DATA = [
  {
    id: 'clientflow',
    category: 'software',
    title: 'ClientFlow: CRM Management System',
    summary: 'A streamlined Customer Relationship Management web application engineered for small businesses to track leads, client interactions, and sales pipelines.',
    problem: 'Small businesses often rely on chaotic spreadsheets that lead to missed client follow-ups, untracked communication history, and data duplication.',
    solution: 'Designed and developed a relational PHP/MySQL database system with clean CRUD workflows, role-based session authentication, and interactive lead status pipelines.',
    role: 'Full Stack Developer & Database Architect',
    duration: '3 Weeks (Jan — Feb 2026)',
    techStack: ['PHP', 'MySQL', 'Bootstrap 5', 'JavaScript (ES6)', 'XAMPP'],
    features: [
      'Relational Client & Contact Schema with Foreign Key Constraints',
      'Lead Status Pipeline (New, Contacted, Qualified, Closed)',
      'Secure Session Authentication & Password Hashing',
      'Exportable Client Reports & Dynamic Data Tables'
    ],
    challenges: 'Ensuring SQL injection prevention across complex search queries and managing state transitions between multi-step client onboarding forms.',
    architecture: 'MVC-inspired PHP directory layout separating database connection singletons, routing handlers, and Bootstrap view templates.',
    lessons: 'Deepened understanding of relational database normalization, index optimization for search queries, and defensive server-side data validation.',
    image: './img/banner-clientflow.png',
    liveUrl: 'https://clientflow.free.nf/',
    githubUrl: 'https://github.com/raghavudayy/clientflow'
  },
  {
    id: 'newsboard',
    category: 'webdev',
    title: 'NewsBoard: Live News Article Portal',
    summary: 'A fast, real-time web portal fetching and rendering live global news stories across multiple categories with responsive grid layouts.',
    problem: 'Traditional news aggregator sites are overloaded with heavy ad scripts, slow page load times, and poor mobile readability.',
    solution: 'Built a lightweight React 18 single-page application utilizing REST API integration, client-side caching, and responsive CSS Grid cards.',
    role: 'Frontend Engineer & React Developer',
    duration: '2 Weeks (Dec 2025 — Jan 2026)',
    techStack: ['React 18', 'JavaScript (ES6+)', 'REST API', 'Vite', 'CSS Modules'],
    features: [
      'Real-Time Live News Fetching via REST Endpoints',
      'Instant Category Filtering (Tech, Business, Science, Sports)',
      'Asynchronous Search with Debounce Input Handler',
      'Responsive Fluid Card Layout with Fallback Image Handling'
    ],
    challenges: 'Handling API rate limits gracefully and preventing layout shifts during dynamic image loading across mobile viewports.',
    architecture: 'React Component Architecture using Custom Hooks (`useFetchNews`), Context API for global search state, and Vite bundling.',
    lessons: 'Mastered React state management best practices, asynchronous API handling with try/catch resilience, and modern Vite build optimizations.',
    image: './img/banner-newsboard.png',
    liveUrl: 'https://news-board-orcin.vercel.app/',
    githubUrl: 'https://github.com/raghavudayy/NewsBoard'
  },
  {
    id: 'sneakspot',
    category: 'branding',
    title: 'SneakSpot: Footwear E-Commerce Storefront',
    summary: 'An interactive online footwear storefront featuring client-side cart management, size selection, dynamic price calculations, and product filtering.',
    problem: 'E-commerce demos often rely on heavy third-party UI libraries that slow down mobile performance and obscure core DOM manipulation fundamentals.',
    solution: 'Constructed a pure Vanilla JavaScript e-commerce application utilizing Browser LocalStorage for persistent shopping cart state.',
    role: 'Frontend Web Developer & UI Designer',
    duration: '2 Weeks (Nov — Dec 2025)',
    techStack: ['HTML5', 'CSS3 (Flexbox/Grid)', 'JavaScript (ES6)', 'Browser LocalStorage'],
    features: [
      'Persistent Shopping Cart State powered by LocalStorage',
      'Interactive Product Filtering by Category & Price Range',
      'Dynamic Item Count & Total Checkout Calculation',
      'Cross-Browser Tested Touch-Friendly Responsive UI'
    ],
    challenges: 'Synchronizing cart count across multiple browser tabs and preventing duplicate item entries when updating quantity.',
    architecture: 'Modular ES JavaScript pattern separating Cart Store logic, UI Renderer functions, and Event Listeners.',
    lessons: 'Solidified DOM manipulation efficiency, event delegation techniques, and browser storage state management.',
    image: './img/banner-sneakspot.png',
    liveUrl: 'https://sneak-spot.vercel.app/',
    githubUrl: 'https://github.com/raghavudayy/SneakSpot'
  },
  {
    id: 'memonest',
    category: 'software',
    title: 'MemoNest: Secure Personal Diary Platform',
    summary: 'A privacy-focused digital diary application allowing users to write, edit, tag, and organize encrypted personal notes securely.',
    problem: 'Users need a simple, private space to document daily logs without third-party data tracking or complicated desktop software.',
    solution: 'Developed a lightweight PHP application backed by MySQL user authentication, session security controls, and categorized note search.',
    role: 'Full Stack Web Developer',
    duration: '2 Weeks (Oct — Nov 2025)',
    techStack: ['PHP', 'MySQL', 'CSS3', 'JavaScript', 'XAMPP'],
    features: [
      'Encrypted User Registration & Authentication',
      'CRUD Note Operations with Timestamped Revisions',
      'Category Tagging & Keyword Search Filter',
      'Clean Focus-Friendly Reading Interface'
    ],
    challenges: 'Implementing robust session timeout handling to auto-lock sensitive notes after inactivity.',
    architecture: 'Clean PHP Architecture with parameterized SQL queries for security and lightweight CSS styling.',
    lessons: 'Gained practical expertise in session lifecycle security, user data protection, and minimal distraction-free UI design.',
    image: './img/banner-memonest.png',
    liveUrl: 'https://memonest.infinityfreeapp.com',
    githubUrl: 'https://github.com/raghavudayy/MemoNest'
  },
  {
    id: 'daydrill',
    category: 'software',
    title: 'DayDrill: Productivity & Daily Planner',
    summary: 'A productivity web application that helps users organize daily tasks, manage schedules, track habits, and stay focused with an intuitive dashboard designed to improve consistency and time management.',
    problem: 'Users struggle to stay organized across fragmented task apps and lack a unified dashboard for tracking daily schedules, habit progress, and focus time.',
    solution: 'Developed a PHP/MySQL productivity web app featuring task scheduling, dynamic habit tracking metrics, and custom priority workflows.',
    role: 'Full Stack Web Developer',
    duration: '3 Weeks (Jan 2026)',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'Intuitive Task Organization & Priority Scheduling',
      'Interactive Daily Habit Tracker with Progress Metrics',
      'Focus Mode & Dynamic Time Management Dashboard',
      'Relational Data Storage powered by PHP & MySQL'
    ],
    challenges: 'Designing an efficient database structure to handle recurring daily habits alongside one-time task schedules.',
    architecture: 'Modular PHP backend with MySQL relational schema and responsive vanilla CSS/JS dashboard frontend.',
    lessons: 'Enhanced skills in state tracking across user sessions and building time-bound database query filters.',
    image: './img/banner-daydrill.png',
    liveUrl: 'https://github.com/raghavudayy/DayDrill-Scheduler',
    githubUrl: 'https://github.com/raghavudayy/DayDrill-Scheduler'
  },
  {
    id: 'salespilot',
    category: 'software',
    title: 'SalesPilot CRM: Sales & Lead Management System',
    summary: 'A full-stack Customer Relationship Management (CRM) system built to streamline lead management, customer tracking, quotations, follow-ups, employee roles, and sales workflows through a secure admin dashboard.',
    problem: 'Growing sales teams face disorganization managing customer leads, tracking multi-stage quotation follow-ups, and controlling employee permissions.',
    solution: 'Built a comprehensive PHP/MySQL CRM featuring RBAC role permissions, automated email follow-ups via PHPMailer, quotation generators, and lead pipeline tracking.',
    role: 'Full Stack Developer & Systems Architect',
    duration: '4 Weeks (Dec 2025 — Jan 2026)',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'PHPMailer'],
    features: [
      'Lead Management & Interactive Sales Pipeline',
      'Customer Tracking, History & Quotation Generation',
      'Role-Based Employee Access Control & Secure Admin Portal',
      'Automated Email Notifications powered by PHPMailer'
    ],
    challenges: 'Implementing granular role-based permissions to ensure employees only access assigned customer leads and quotations.',
    architecture: 'Layered PHP CRM architecture with MySQL relational tables, Bootstrap UI components, and PHPMailer integration.',
    lessons: 'Mastered role-based authorization design, automated transactional email workflows, and complex SQL joins for sales reporting.',
    image: './img/banner-salespilot.png',
    liveUrl: 'https://github.com/raghavudayy/SalesPilot',
    githubUrl: 'https://github.com/raghavudayy/SalesPilot'
  },
  {
    id: 'streamtube',
    category: 'webdev',
    title: 'StreamTube: Video Streaming Platform',
    summary: 'A full-featured YouTube-inspired video streaming platform with user authentication, video uploads, search, subscriptions, playlists, watch history, and a responsive interface optimized for both desktop and mobile devices.',
    problem: 'Building media streaming platforms requires handling high-volume media metadata, asynchronous video uploads, user subscription channels, and seamless playback across devices.',
    solution: 'Engineered a full-stack media platform supporting chunked video uploads, channel subscriptions, playlist creation, user watch history tracking, and responsive video player UI.',
    role: 'Full Stack Web Developer',
    duration: '4 Weeks (Feb 2026)',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'User Authentication & Custom Channel Profiles',
      'Video Upload Management & Responsive Media Player',
      'Search, Playlists, Subscriptions & Watch History',
      'Mobile-Optimized Responsive Dark/Light UI'
    ],
    challenges: 'Optimizing media streaming playback and managing database relations for user subscriptions, history, and playlists efficiently.',
    architecture: 'PHP RESTful endpoints managing MySQL video/channel relations paired with asynchronous JavaScript media controls.',
    lessons: 'Gained extensive knowledge in media stream delivery, database relational modeling for user-generated content, and asynchronous search indexing.',
    image: './img/banner-streamtubepng.png',
    liveUrl: 'https://github.com/raghavuday98/StreamTube',
    githubUrl: 'https://github.com/raghavuday98/StreamTube'
  }
];

export function initProjectsShowcase() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('project-modal');
  const modalClose = modal?.querySelector('.modal-close');

  // Category Filtering (Dynamic recalculation of items)
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      const gridItems = document.querySelectorAll('.mxd-demo-grid__item');
      gridItems.forEach((item) => {
        const category = item.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          item.style.display = 'flex';
          setTimeout(() => (item.style.opacity = '1'), 50);
        } else {
          item.style.opacity = '0';
          setTimeout(() => (item.style.display = 'none'), 300);
        }
      });
    });
  });

  // Open Case Study Modal Trigger via Event Delegation
  document.addEventListener('click', (e) => {
    // Check if clicked element or its parent is a case study trigger
    const trigger = e.target.closest('.open-case-study-btn, .hero-project-card, .mxd-demo-grid__image');
    if (!trigger) return;

    const projectId = trigger.getAttribute('data-project-id') || trigger.closest('[data-project-id]')?.getAttribute('data-project-id');
    if (!projectId) return;

    e.preventDefault();
    const project = PROJECTS_DATA.find((p) => p.id === projectId);
    if (project) {
      openCaseStudyModal(project);
    }
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  function openCaseStudyModal(project) {
    if (!modal) return;

    const modalBody = modal.querySelector('.mxd-modal__content');
    if (!modalBody) return;

    modalBody.innerHTML = `
      <button class="modal-close" id="modal-close-dynamic" aria-label="Close Modal">&times;</button>
      <img src="${project.image}" alt="${project.title}" class="modal-img" />
      <div style="font-family:var(--font-mono); font-size:0.85rem; letter-spacing:0.12em; color:var(--text-muted); text-transform:uppercase; margin-bottom:8px;">CASE STUDY DETAILS</div>
      <h3 class="modal-title">${project.title}</h3>
      <p class="modal-description">${project.summary}</p>
      
      <div class="case-study-details-grid">
        <div class="case-study-block">
          <h4>Problem Statement</h4>
          <p>${project.problem}</p>
        </div>
        <div class="case-study-block">
          <h4>Engineering Solution</h4>
          <p>${project.solution}</p>
        </div>
        <div class="case-study-block">
          <h4>Architecture & Layout</h4>
          <p>${project.architecture}</p>
        </div>
        <div class="case-study-block">
          <h4>Key Challenges & Resolution</h4>
          <p>${project.challenges}</p>
        </div>
      </div>

      <div style="margin-top:24px;">
        <h4 style="font-family:var(--font-heading); font-size:1.1rem; margin-bottom:12px;">Key Features</h4>
        <ul style="list-style:none; padding:0; display:grid; grid-template-columns:1fr 1fr; gap:10px; font-family:var(--font-mono); font-size:0.85rem; color:var(--text-secondary);">
          ${project.features.map(f => `<li>✦ ${f}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-top:24px; display:flex; gap:8px; flex-wrap:wrap;">
        ${project.techStack.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>

      <div style="margin-top:32px; display:flex; gap:16px; flex-wrap:wrap;">
        <a href="${project.liveUrl}" target="_blank" class="scroll-explore">LAUNCH LIVE APP ↗</a>
        <a href="${project.githubUrl}" target="_blank" class="scroll-explore" style="background:transparent;">VIEW GITHUB REPO ↗</a>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    document.getElementById('modal-close-dynamic')?.addEventListener('click', closeModal);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}
