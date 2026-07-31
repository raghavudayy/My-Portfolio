/* ==========================================================================
   Services Accordion Module - Azurio Web Developer Portfolio
   ========================================================================== */

export function initAccordions() {
  const serviceItems = document.querySelectorAll('.service-item');

  serviceItems.forEach((item) => {
    const header = item.querySelector('.service-header');
    if (header) {
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Collapse other accordion items
        serviceItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove('active');
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
  });
}
