/* ==========================================================================
   Custom Cursor & Interactive Badges Module - Uday Pratap Raghav Web Developer Portfolio
   ========================================================================== */

export function initCustomCursor() {
  const cursor = document.querySelector('.mxd-cursor');
  const follower = document.querySelector('.mxd-cursor-follower');
  const badge = document.querySelector('.mxd-cursor-badge');

  if (!cursor || !follower) return;

  // Disable custom cursor on small screens and touch devices
  if ('ontouchstart' in window || window.innerWidth <= 1024) {
    cursor.style.display = 'none';
    follower.style.display = 'none';
    if (badge) badge.style.display = 'none';
    return;
  }
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;


  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    if (badge) {
      badge.style.left = `${mouseX}px`;
      badge.style.top = `${mouseY}px`;
    }
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hover triggers for interactive elements
  const hoverables = document.querySelectorAll('a, button, .active-cursor-permanent, .service-header, .copy-email-badge, .floating-img-card');
  hoverables.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '24px';
      cursor.style.height = '24px';
      follower.style.width = '64px';
      follower.style.height = '64px';
      follower.style.borderColor = 'var(--accent-cyan)';

      const cursorText = el.getAttribute('data-cursor-text');
      const badgeStyle = el.getAttribute('data-cursor-style');

      if (cursorText && badge) {
        badge.innerHTML = cursorText;
        badge.className = 'mxd-cursor-badge active';
        if (badgeStyle === 'blue') {
          badge.classList.add('badge-blue');
        }
      }
    });

    el.addEventListener('mouseleave', () => {
      cursor.style.width = '16px';
      cursor.style.height = '16px';
      follower.style.width = '44px';
      follower.style.height = '44px';
      follower.style.borderColor = 'var(--accent)';
      if (badge) {
        badge.classList.remove('active', 'badge-blue');
      }
    });
  });
}
