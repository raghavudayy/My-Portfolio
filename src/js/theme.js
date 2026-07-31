/* ==========================================================================
   Theme Switcher Module - Uday Pratap Raghav Portfolio
   ========================================================================== */

export function initThemeSwitcher() {
  const switcherBtn = document.getElementById('theme-toggle') || document.getElementById('color-switcher');
  
  // Default strictly to Light (White) theme unless user explicitly chose dark in localStorage
  const savedTheme = localStorage.getItem('azurio_theme');
  let currentTheme = savedTheme || 'light';
  applyTheme(currentTheme);

  if (switcherBtn) {
    switcherBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
      localStorage.setItem('azurio_theme', currentTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (switcherBtn) {
      switcherBtn.textContent = theme === 'dark' ? 'DAY / ☼' : 'NIGHT / ☾';
    }
  }
}
