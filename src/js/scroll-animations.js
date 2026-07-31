/* ==========================================================================
   Scroll & Parallax Animations Module - Uday Pratap Raghav Portfolio
   ========================================================================== */

export function initScrollAnimations() {
  // Reveal Text & Elements on Scroll
  const revealElements = document.querySelectorAll('.mxd-reveal, .line-mask, .service-item, .timeline-item');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => observer.observe(el));

  // Floating Image Parallax on Mouse move in Quote Section
  const quoteSection = document.querySelector('.statement-quote-section');
  const floatingImgs = document.querySelectorAll('.floating-img-card');

  if (quoteSection && floatingImgs.length > 0) {
    quoteSection.addEventListener('mousemove', (e) => {
      const rect = quoteSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      floatingImgs.forEach((img, index) => {
        const factor = (index + 1) * 20;
        img.style.transform = `translate3d(${x * factor}px, ${y * factor}px, 0) rotate(${x * 5}deg)`;
      });
    });
  }
}
