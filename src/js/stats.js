/* ==========================================================================
   Statistics Count-Up Animation Module - Uday Pratap Raghav Portfolio
   ========================================================================== */

export function initStatsAnimation() {
  const statNumbers = document.querySelectorAll('.stat-number-val[data-target]');
  if (!statNumbers.length) return;

  const animateCount = (el) => {
    if (el.dataset.animated === 'true') return;
    el.dataset.animated = 'true';

    const targetStr = el.getAttribute('data-target');
    const target = parseFloat(targetStr);
    if (isNaN(target)) return;

    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const isDecimal = targetStr.includes('.');
    const decimals = isDecimal ? (targetStr.split('.')[1] || '').length : 0;

    const duration = 1400; // 1.4s smooth ease-out count
    const startTime = performance.now();

    const updateCounter = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easeOutCubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * target;

      el.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = `${prefix}${targetStr}${suffix}`;
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const checkAndAnimate = () => {
    statNumbers.forEach((num) => {
      if (num.dataset.animated === 'true') return;
      const rect = num.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight + 100 && rect.bottom >= -100) {
        animateCount(num);
      }
    });
  };

  // 1. Check immediately on init
  checkAndAnimate();

  // 2. Window scroll & resize listeners for fail-safe triggers
  window.addEventListener('scroll', checkAndAnimate, { passive: true });
  window.addEventListener('resize', checkAndAnimate, { passive: true });

  // 3. Intersection Observer as primary trigger
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px 100px 0px' });

    statNumbers.forEach((num) => {
      if (num.dataset.animated !== 'true') {
        observer.observe(num);
      }
    });
  }
}
