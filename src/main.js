/* ==========================================================================
   Main Application Entry Point - Uday Pratap Raghav Web Developer Portfolio
   ========================================================================== */

import '../styles/main.css';
import { initThemeSwitcher } from './js/theme.js';
import { initScrambleEffects } from './js/scramble.js';
import { initCustomCursor } from './js/cursor.js';
import { initNavigation } from './js/navigation.js';
import { initProjectsShowcase } from './js/projects.js';
import { initAccordions } from './js/accordions.js';
import { initContactForm } from './js/contact.js';
import { initScrollAnimations } from './js/scroll-animations.js';
import { initStatsAnimation } from './js/stats.js';

function initPageLoader() {
  const loader = document.getElementById('mxd-loader');
  const countEl = document.getElementById('mxd-loader-count');
  if (!loader) return;

  const duration = 240; // Fast 240ms load
  const startTime = performance.now();

  const dismissLoader = () => {
    loader.classList.add('hidden');
    loader.style.display = 'none';
  };

  loader.addEventListener('click', dismissLoader);

  const updateLoader = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const count = Math.floor(progress * 100);

    if (countEl) countEl.textContent = `${count}%`;

    if (progress < 1) {
      requestAnimationFrame(updateLoader);
    } else {
      if (countEl) countEl.textContent = '100%';
      dismissLoader();
    }
  };

  requestAnimationFrame(updateLoader);
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Page Loader Percentage Count-up
  initPageLoader();

  // Initialize Core Modules
  initThemeSwitcher();
  initCustomCursor();
  initNavigation();
  initScrambleEffects();
  initProjectsShowcase();
  initAccordions();
  initContactForm();
  initScrollAnimations();
  initStatsAnimation();

  console.log('Uday Pratap Raghav Web Developer Portfolio initialized successfully.');
});
