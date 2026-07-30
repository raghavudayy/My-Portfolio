/* ==========================================================================
   Navigation Overlay & Smooth Scroll Module - Uday Pratap Raghav Portfolio
   ========================================================================== */

export function initNavigation() {
  function closeMenu() {
    const hamburger = document.querySelector('.mxd-menu__hamburger') || document.getElementById('menu-toggle');
    const overlay = document.querySelector('.mxd-menu__overlay') || document.getElementById('menu-overlay');
    if (hamburger) {
      hamburger.classList.remove('active');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    if (overlay) {
      overlay.classList.remove('active');
      overlay.classList.remove('is-active');
    }
    document.body.style.overflow = '';
  }

  function openMenu() {
    const hamburger = document.querySelector('.mxd-menu__hamburger') || document.getElementById('menu-toggle');
    const overlay = document.querySelector('.mxd-menu__overlay') || document.getElementById('menu-overlay');
    if (hamburger) {
      hamburger.classList.add('active');
      hamburger.classList.add('is-active');
      hamburger.setAttribute('aria-expanded', 'true');
    }
    if (overlay) {
      overlay.classList.add('active');
      overlay.classList.add('is-active');
    }
    document.body.style.overflow = 'hidden';
  }

  let lastToggleTime = 0;
  function toggleMenuState() {
    const now = Date.now();
    if (now - lastToggleTime < 100) return;
    lastToggleTime = now;
    const currentOverlay = document.querySelector('.mxd-menu__overlay') || document.getElementById('menu-overlay');
    const isOpen = currentOverlay && (currentOverlay.classList.contains('active') || currentOverlay.classList.contains('is-active'));
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Directly attach toggle to the hamburger button - most reliable approach
  const hamburgerBtn = document.querySelector('.mxd-menu__hamburger') || document.getElementById('menu-toggle');
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleMenuState();
    });
  }

  // Delegated document listener for close button & menu links
  document.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('#menu-close-btn, .mxd-menu__close-btn');
    if (closeBtn) {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
      return;
    }

    const menuLink = e.target.closest('.main-menu__link, .submenu a, .mxd-header__link, .menu-close-trigger');
    if (menuLink) {
      const targetId = menuLink.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        closeMenu();
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          const headerHeight = 70;
          const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
          });
        }
      }
    }
  });

  // ESC key to close overlay
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  // Expose globally as a convenience reference
  if (typeof window !== 'undefined') {
    window.toggleMobileMenu = () => {
      toggleMenuState();
    };
  }
}
