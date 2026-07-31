/* ==========================================================================
   Projects & Story-Driven Case Studies Module - Uday Pratap Raghav Portfolio
   ========================================================================== */

export const PROJECTS_DATA = [
  {
    id: 'clientflow',
    category: 'software',
    title: 'ClientFlow: CRM Management System',
    summary: 'A lightweight CRM I built using PHP and MySQL to replace spreadsheet tracking for client leads and follow-ups.',
    problem: 'Small businesses often struggle with managing client leads in messy spreadsheets, leading to lost contacts and missed follow-up dates.',
    whyIBuiltIt: 'I wanted to build a practical tool that solves real business disorganization while deepening my understanding of relational database design and session security.',
    myApproach: 'I used raw PHP and MySQL to construct a clean MVC structure with session management, parameterized queries, and Bootstrap forms.',
    role: 'Full Stack Developer & Database Architect',
    duration: '3 Weeks (Jan — Feb 2026)',
    techStack: ['PHP', 'MySQL', 'Bootstrap 5', 'JavaScript (ES6)', 'XAMPP'],
    features: [
      'Relational Database Schema for Clients & Contacts',
      'Lead Status Pipeline (New, Contacted, Qualified, Closed)',
      'Session-Based Auth & Password Hashing',
      'Search & Data Filtering Tables'
    ],
    challenges: 'Preventing SQL injection while allowing flexible multi-field searching, and managing form state across multi-step client entries.',
    architecture: 'MVC-inspired PHP directory layout separating database connection singletons, routing handlers, and Bootstrap view templates.',
    lessons: 'Taught me how to normalize relational database schemas, write indexed SQL queries, and implement defensive server-side validation.',
    futureImprovements: 'Add automated email reminders for upcoming follow-up dates and export capabilities for PDF client summaries.',
    image: './img/banner-clientflow.png',
    liveUrl: 'https://clientflow.free.nf/',
    githubUrl: 'https://github.com/raghavudayy/clientflow'
  },
  {
    id: 'newsboard',
    category: 'webdev',
    title: 'NewsBoard: Live News Article Portal',
    summary: 'A fast, clean news web app built with React 18 that fetches real-time articles from news APIs with category filters and search.',
    problem: 'Most news aggregation sites are overloaded with ads, popups, and heavy scripts that slow down reading on mobile devices.',
    whyIBuiltIt: 'I built NewsBoard to practice React component state management, custom hooks, and handling live REST API data cleanly.',
    myApproach: 'Used React 18 and Vite with a custom hook (useFetchNews) to handle API requests, loading states, and category filters smoothly.',
    role: 'Frontend Engineer & React Developer',
    duration: '2 Weeks (Dec 2025 — Jan 2026)',
    techStack: ['React 18', 'JavaScript (ES6+)', 'REST API', 'Vite', 'CSS Modules'],
    features: [
      'Real-Time News Fetching via REST Endpoints',
      'Instant Category Filtering (Tech, Business, Science, Sports)',
      'Debounced Search Input for Fast Filtering',
      'Fallback Image Handling for Missing Thumbnails'
    ],
    challenges: 'Managing API rate limits without breaking the UI and preventing layout shifts when news thumbnail images load asynchronously.',
    architecture: 'React Component Architecture using Custom Hooks (`useFetchNews`), Context API for global search state, and Vite bundling.',
    lessons: 'Improved my understanding of custom React hooks, asynchronous try/catch error handling, and Vite build configuration.',
    futureImprovements: 'Add bookmarking for offline reading using LocalStorage and custom user topic feeds.',
    image: './img/banner-newsboard.png',
    liveUrl: 'https://news-board-orcin.vercel.app/',
    githubUrl: 'https://github.com/raghavudayy/NewsBoard'
  },
  {
    id: 'sneakspot',
    category: 'branding',
    title: 'SneakSpot: Footwear E-Commerce Storefront',
    summary: 'An interactive footwear shop built with vanilla JavaScript, featuring a persistent shopping cart using browser LocalStorage.',
    problem: 'Many developer e-commerce projects rely heavily on third-party frameworks, hiding how core DOM manipulation and state persistence work under the hood.',
    whyIBuiltIt: 'I wanted to push my core JavaScript skills by building a full store frontend using pure HTML, CSS, and vanilla JS without extra libraries.',
    myApproach: 'Designed a modular JS structure separating cart state logic from DOM rendering, using LocalStorage to keep items in the cart even when refreshed.',
    role: 'Frontend Web Developer & UI Designer',
    duration: '2 Weeks (Nov — Dec 2025)',
    techStack: ['HTML5', 'CSS3 (Flexbox/Grid)', 'JavaScript (ES6)', 'Browser LocalStorage'],
    features: [
      'Shopping Cart State Saved in LocalStorage',
      'Product Filtering by Category & Price Range',
      'Live Price & Quantity Calculation',
      'Mobile-Friendly Touch Interface'
    ],
    challenges: 'Synchronizing cart state across open tabs and ensuring duplicate items updated quantities instead of creating duplicate entries.',
    architecture: 'Modular ES JavaScript pattern separating Cart Store logic, UI Renderer functions, and Event Listeners.',
    lessons: 'Strengthened my core DOM manipulation skills, event delegation patterns, and browser storage handling.',
    futureImprovements: 'Add user review ratings and a simulated multi-step checkout workflow.',
    image: './img/banner-sneakspot.png',
    liveUrl: 'https://sneak-spot.vercel.app/',
    githubUrl: 'https://github.com/raghavudayy/SneakSpot'
  },
  {
    id: 'memonest',
    category: 'software',
    title: 'MemoNest: Secure Personal Diary Platform',
    summary: 'A private digital diary web app where users can write, tag, search, and securely lock personal daily notes.',
    problem: 'People want a private space for personal notes without intrusive data collection or needing heavy desktop applications.',
    whyIBuiltIt: 'I built this to explore secure user session management, password encryption, and clean distraction-free UI design.',
    myApproach: 'Combined PHP session controls, password hashing, and MySQL database storage with a minimal, dark-mode focused writing layout.',
    role: 'Full Stack Web Developer',
    duration: '2 Weeks (Oct — Nov 2025)',
    techStack: ['PHP', 'MySQL', 'CSS3', 'JavaScript', 'XAMPP'],
    features: [
      'Secure User Registration & Auth',
      'Note Creation, Editing, & Deletion (CRUD)',
      'Category Tagging & Fast Search Filter',
      'Minimal Distraction-Free Reading Interface'
    ],
    challenges: 'Handling session timeouts gracefully so users don\'t lose unsaved drafts while keeping private notes auto-locked when inactive.',
    architecture: 'Clean PHP Architecture with parameterized SQL queries for security and lightweight CSS styling.',
    lessons: 'Taught me practical session security, database query safety, and building focus-oriented user interfaces.',
    futureImprovements: 'Add Markdown editing support and note export options.',
    image: './img/banner-memonest.png',
    liveUrl: 'https://memonest.infinityfreeapp.com',
    githubUrl: 'https://github.com/raghavudayy/MemoNest'
  },
  {
    id: 'daydrill',
    category: 'software',
    title: 'DayDrill: Productivity & Daily Planner',
    summary: 'A full-stack planner application for organizing daily schedules, tracking habits, and managing focus time.',
    problem: 'Juggling tasks across separate apps makes it hard to maintain a clear daily routine and monitor habit progress.',
    whyIBuiltIt: 'I created DayDrill to build a single dashboard that combines task management with habit tracking in one place.',
    myApproach: 'Developed a PHP backend paired with a MySQL relational database to store tasks, habit completions, and time logs.',
    role: 'Full Stack Web Developer',
    duration: '3 Weeks (Jan 2026)',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'Task Priority & Schedule Organization',
      'Daily Habit Tracker with Progress Indicators',
      'Focus Dashboard with Timer Tools',
      'Structured PHP & MySQL Data Backend'
    ],
    challenges: 'Structuring the database schema to handle recurring daily habits alongside non-recurring one-off tasks without duplicating rows.',
    architecture: 'Modular PHP backend with MySQL relational schema and responsive vanilla CSS/JS dashboard frontend.',
    lessons: 'Improved my ability to write complex SQL date queries and manage user session states across multiple pages.',
    futureImprovements: 'Add visual streak counters and monthly productivity summary charts.',
    image: './img/banner-daydrill.png',
    liveUrl: 'https://github.com/raghavudayy/DayDrill-Scheduler',
    githubUrl: 'https://github.com/raghavudayy/DayDrill-Scheduler'
  },
  {
    id: 'salespilot',
    category: 'software',
    title: 'SalesPilot CRM: Sales & Lead Management',
    summary: 'A multi-role CRM built with PHP and MySQL to manage customer leads, quotation generation, automated follow-ups, and team permissions.',
    problem: 'Growing sales teams struggle when lead assignments, quotes, and follow-up histories are scattered across separate communication channels.',
    whyIBuiltIt: 'I wanted to build a complete backend management portal with role-based permissions and transactional email workflows.',
    myApproach: 'Built a structured PHP application with MySQL relational tables, Bootstrap admin components, and PHPMailer integration.',
    role: 'Full Stack Developer & Systems Architect',
    duration: '4 Weeks (Dec 2025 — Jan 2026)',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'PHPMailer'],
    features: [
      'Lead Pipeline & Deal Status Tracking',
      'Customer Record History & Quotation Generator',
      'Role-Based Permissions (Admin vs Employee)',
      'Transactional Email Notifications via PHPMailer'
    ],
    challenges: 'Setting up granular access controls so sales reps only see their assigned leads while admins retain full system visibility.',
    architecture: 'Layered PHP CRM architecture with MySQL relational tables, Bootstrap UI components, and PHPMailer integration.',
    lessons: 'Deepened my knowledge of role-based authorization patterns, multi-table SQL joins, and PHPMailer SMTP setup.',
    futureImprovements: 'Add analytics graphs for monthly sales conversions and exportable CSV reports.',
    image: './img/banner-salespilot.png',
    liveUrl: 'https://github.com/raghavudayy/SalesPilot',
    githubUrl: 'https://github.com/raghavudayy/SalesPilot'
  },
  {
    id: 'streamtube',
    category: 'webdev',
    title: 'StreamTube: Video Streaming Platform',
    summary: 'A media streaming web app inspired by YouTube with channel management, video uploads, search, subscriptions, and watch history.',
    problem: 'Media web applications require careful backend data handling for video metadata, channel subscriptions, and playback controls.',
    whyIBuiltIt: 'I built StreamTube to challenge myself with media handling, relational database models for social interactions, and custom video controls.',
    myApproach: 'Used PHP for REST API endpoints and MySQL for user channels, video metadata, and playlists, paired with vanilla JS player controls.',
    role: 'Full Stack Web Developer',
    duration: '4 Weeks (Feb 2026)',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'User Channel Creation & Profile Settings',
      'Video Upload Handling & Custom Player Controls',
      'Search, Channel Subscriptions, & Watch History',
      'Responsive Dark/Light UI'
    ],
    challenges: 'Optimizing relational database queries when loading video details alongside subscriber counts, comments, and related videos.',
    architecture: 'PHP RESTful endpoints managing MySQL video/channel relations paired with asynchronous JavaScript media controls.',
    lessons: 'Learned how to model complex many-to-many database relationships and handle asynchronous media player events.',
    futureImprovements: 'Add video quality selectors and comment thread replies.',
    image: './img/banner-streamtubepng.png',
    liveUrl: 'https://github.com/raghavuday98/StreamTube',
    githubUrl: 'https://github.com/raghavuday98/StreamTube'
  }
];

export function initProjectsShowcase() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('project-modal');
  const modalClose = modal?.querySelector('.modal-close');

  // Category Filtering
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
      <div style="font-family:var(--font-mono); font-size:0.85rem; letter-spacing:0.12em; color:var(--text-muted); text-transform:uppercase; margin-bottom:8px;">CASE STUDY &amp; PROJECT STORY</div>
      <h3 class="modal-title">${project.title}</h3>
      <p class="modal-description">${project.summary}</p>
      
      <div class="case-study-details-grid">
        <div class="case-study-block">
          <h4>The Problem</h4>
          <p>${project.problem}</p>
        </div>
        <div class="case-study-block">
          <h4>Why I Built It</h4>
          <p>${project.whyIBuiltIt}</p>
        </div>
        <div class="case-study-block">
          <h4>My Approach</h4>
          <p>${project.myApproach}</p>
        </div>
        <div class="case-study-block">
          <h4>Challenges Faced</h4>
          <p>${project.challenges}</p>
        </div>
        <div class="case-study-block">
          <h4>What I Learned</h4>
          <p>${project.lessons}</p>
        </div>
        <div class="case-study-block">
          <h4>Future Improvements</h4>
          <p>${project.futureImprovements}</p>
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

