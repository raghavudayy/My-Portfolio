/* ==========================================================================
   Profile Configuration & Dynamic DOM Data Binding Module
   ========================================================================== */

export const PROFILE_DATA = {
  name: 'Uday Pratap Raghav',
  firstName: 'Uday',
  lastName: 'Raghav',
  fullNameUpper: 'UDAY PRATAP RAGHAV',
  title: 'Full Stack Web Developer',
  role: 'Software Developer Intern & Full Stack Web Engineer',
  company: 'Sunlite Systems Pvt. Ltd.',
  companyLocation: 'Vaishali, Ghaziabad, UP, India',
  internshipDuration: 'Feb 2026 — Present',
  education: 'BCA (2023–26) @ IIMT College of Management, Greater Noida',
  location: 'Bulandshahr, UP, India',
  collegeLocation: 'Greater Noida, UP, India',
  email: 'webdevuday@gmail.com',
  phone: '+91 9837765643',
  phoneRaw: '9837765643',
  github: 'https://github.com/raghavudayy',
  githubUsername: 'raghavudayy',
  linkedin: 'https://www.linkedin.com/in/raghavudayy',
  website: 'https://www.raghavudayy.in/',
  resumeUrl: './resume.html',
  avatar: './img/uday/uday.png'
};

export function initProfile() {
  // Bind dynamic text data to DOM elements with data-profile attribute
  document.querySelectorAll('[data-profile]').forEach((el) => {
    const key = el.getAttribute('data-profile');
    if (PROFILE_DATA[key] !== undefined) {
      if (el.hasAttribute('data-original')) {
        el.setAttribute('data-original', PROFILE_DATA[key]);
      }
      el.textContent = PROFILE_DATA[key];
    }
  });

  // Bind dynamic links/hrefs to DOM elements with data-profile-href attribute
  document.querySelectorAll('[data-profile-href]').forEach((el) => {
    const key = el.getAttribute('data-profile-href');
    if (key === 'email') {
      el.href = `mailto:${PROFILE_DATA.email}`;
    } else if (key === 'phone') {
      el.href = `tel:${PROFILE_DATA.phoneRaw}`;
    } else if (PROFILE_DATA[key]) {
      el.href = PROFILE_DATA[key];
    }
  });
}
