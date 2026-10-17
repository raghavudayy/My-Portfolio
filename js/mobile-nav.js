/**
 * Universal Mobile Navigation Drawer Controller
 * Handles mobile hamburger toggle, backdrop blur, keyboard accessibility, 5-link mobile menu,
 * and eliminates lingering focus/blue icon glitches on close.
 */
(function () {
  'use strict';

  function initMobileNav() {
    const rawButtons = document.querySelectorAll('.menu-button, .w-nav-button');
    if (!rawButtons.length) return;

    // Suppress Webflow's default nav overlay and accordion interference on mobile
    const navbars = document.querySelectorAll('.navbar.w-nav');
    navbars.forEach(nb => {
      nb.setAttribute('data-collapse', 'none');
    });

    const overlays = document.querySelectorAll('.w-nav-overlay');
    overlays.forEach(ov => {
      ov.style.display = 'none';
    });

    // Check or create custom mobile backdrop
    let backdrop = document.querySelector('.custom-mobile-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'custom-mobile-backdrop';
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.appendChild(backdrop);
    }

    // Identify mobile navigation menu
    const navMenu = document.querySelector('.nav-menu.w-nav-menu') || document.querySelector('.nav-menu');

    function updateActiveLink() {
      if (!navMenu) return;
      const rawPath = (window.location.pathname || '/').toLowerCase();
      const cleanPath = rawPath.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
      const allTopLinks = navMenu.querySelectorAll(':scope > a.w-nav-link, :scope > a');
      allTopLinks.forEach(link => {
        const href = (link.getAttribute('href') || '').toLowerCase().replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
        const isMatch = (cleanPath === '/' && href === '/') ||
                        (href !== '/' && (cleanPath === href || cleanPath.startsWith(href + '/')));
        if (isMatch) {
          link.classList.add('w--current');
          link.setAttribute('aria-current', 'page');
        } else {
          link.classList.remove('w--current');
          link.removeAttribute('aria-current');
        }
      });
    }

    function updateFooterActiveLink() {
      const footerNav = document.querySelector('.footer_menu_box');
      if (!footerNav) return;
      const rawPath = (window.location.pathname || '/').toLowerCase();
      const cleanPath = rawPath.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
      
      const footerLinks = footerNav.querySelectorAll('a.footer_menu_text');
      let matchedLink = null;
      
      footerLinks.forEach(link => {
        const href = (link.getAttribute('href') || '').toLowerCase().replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
        const isMatch = (cleanPath === '/' && href === '/') ||
                        (href !== '/' && (cleanPath === href || cleanPath.startsWith(href + '/')));
        if (isMatch) {
          matchedLink = link;
        }
        link.classList.remove('w--current');
        link.removeAttribute('aria-current');
        const dot = link.querySelector('.footer_active_dot');
        if (dot) dot.remove();
      });
      
      if (matchedLink) {
        matchedLink.classList.add('w--current');
        matchedLink.setAttribute('aria-current', 'page');
        const dot = document.createElement('span');
        dot.className = 'footer_active_dot';
        dot.setAttribute('aria-hidden', 'true');
        matchedLink.insertBefore(dot, matchedLink.firstChild);
      }
    }

    function alignMenu() {
      if (!navMenu) return;
      const navbarLayout = document.querySelector('.navbar_layout') || document.querySelector('.navbar');
      if (navbarLayout && window.innerWidth <= 991) {
        const rect = navbarLayout.getBoundingClientRect();
        navMenu.style.setProperty('left', Math.round(rect.left) + 'px', 'important');
        navMenu.style.setProperty('width', Math.round(rect.width) + 'px', 'important');
        navMenu.style.setProperty('max-width', Math.round(rect.width) + 'px', 'important');
        navMenu.style.setProperty('top', Math.round(rect.bottom + 10) + 'px', 'important');
        navMenu.style.setProperty('right', 'auto', 'important');
        navMenu.style.setProperty('box-sizing', 'border-box', 'important');
        navMenu.style.setProperty('margin', '0px', 'important');
      } else if (navMenu) {
        navMenu.style.removeProperty('left');
        navMenu.style.removeProperty('width');
        navMenu.style.removeProperty('max-width');
        navMenu.style.removeProperty('top');
        navMenu.style.removeProperty('right');
        navMenu.style.removeProperty('margin');
      }
    }

    // Update active link on load
    if (navMenu) {
      updateActiveLink();
      updateFooterActiveLink();
    }

    function openMenu(btn) {
      updateActiveLink();
      alignMenu();
      document.body.classList.add('mobile-nav-open');
      backdrop.classList.add('is-open');
      if (navMenu) {
        navMenu.classList.add('is-open');
      }
      btn.classList.add('is-active');
      btn.setAttribute('aria-expanded', 'true');

      if (window.lenis && typeof window.lenis.stop === 'function') {
        window.lenis.stop();
      }
    }

    function closeMenu() {
      document.body.classList.remove('mobile-nav-open');
      backdrop.classList.remove('is-open');
      if (navMenu) {
        navMenu.classList.remove('is-open');
      }

      // Reset all buttons and strip any focus/active/blue states
      const allButtons = document.querySelectorAll('.menu-button, .w-nav-button');
      allButtons.forEach(btn => {
        btn.classList.remove('is-active');
        btn.classList.remove('w--open');
        btn.setAttribute('aria-expanded', 'false');
        btn.blur();
      });

      if (document.activeElement && typeof document.activeElement.blur === 'function') {
        document.activeElement.blur();
      }

      if (window.lenis && typeof window.lenis.start === 'function') {
        window.lenis.start();
      }
    }

    function toggleMenu(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.stopImmediatePropagation) {
          e.stopImmediatePropagation();
        }
      }

      const isCurrentlyOpen = document.body.classList.contains('mobile-nav-open') ||
                             (navMenu && navMenu.classList.contains('is-open'));

      if (isCurrentlyOpen) {
        closeMenu();
      } else {
        openMenu(this);
      }

      // Ensure button never retains focus ring/color after tap
      this.blur();
    }

    // Replace buttons with clean clones to permanently remove any conflicting Webflow listeners
    rawButtons.forEach(btn => {
      // Disallow text selection which causes blue selection highlight
      btn.style.webkitUserSelect = 'none';
      btn.style.userSelect = 'none';

      const cleanBtn = btn.cloneNode(true);
      if (btn.parentNode) {
        btn.parentNode.replaceChild(cleanBtn, btn);
      }

      // Bind in capture phase so our handlers take precedence
      cleanBtn.addEventListener('click', toggleMenu, true);
      cleanBtn.addEventListener('touchend', function (e) {
        toggleMenu.call(this, e);
      }, { passive: false, capture: true });

      cleanBtn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleMenu.call(this, e);
        }
      }, true);
    });

    backdrop.onclick = function (e) {
      e.preventDefault();
      closeMenu();
    };

    // Close on any navigation link click
    if (navMenu) {
      const links = navMenu.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', function () {
          closeMenu();
        });
      });
    }

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('mobile-nav-open')) {
        closeMenu();
      }
    });

    // Re-align on resize or close on desktop resize
    window.addEventListener('resize', function () {
      if (window.innerWidth > 991 && document.body.classList.contains('mobile-nav-open')) {
        closeMenu();
      } else if (document.body.classList.contains('mobile-nav-open')) {
        alignMenu();
      }
    });

    window.addEventListener('orientationchange', function () {
      setTimeout(alignMenu, 100);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNav);
  } else {
    initMobileNav();
  }
})();
