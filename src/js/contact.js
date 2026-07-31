/* ==========================================================================
   Contact Form & WhatsApp Integration Module - Uday Pratap Raghav Portfolio
   ========================================================================== */

import { PROFILE_DATA } from './profile.js';

export function sendToWhatsapp() {
  const phoneNumber = PROFILE_DATA.phoneRaw || "9837765643"; 

  const nameEl = document.getElementById("name") || document.getElementById("user-name") || document.getElementById("Cname");
  const emailEl = document.getElementById("email") || document.getElementById("user-email") || document.getElementById("Cemail");
  const messageEl = document.getElementById("message") || document.getElementById("user-message") || document.getElementById("Cmessage");

  const name = nameEl ? nameEl.value.trim() : "";
  const email = emailEl ? emailEl.value.trim() : "";
  const message = messageEl ? messageEl.value.trim() : "";

  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting.");
    return false;
  }

  const textMessage = "Hello, I would like to submit my form details:%0a%0a"
      + "*Name:* " + encodeURIComponent(name) + "%0a"
      + "*Email:* " + encodeURIComponent(email) + "%0a"
      + "*Message:* " + encodeURIComponent(message);

  const whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + textMessage;

  window.open(whatsappUrl, '_blank').focus();
  return true;
}

export function sendSubToWhatsapp() {
  const phoneNumber = PROFILE_DATA.phoneRaw || "9837765643"; 

  const contactName = document.getElementById("Cname") ? document.getElementById("Cname").value.trim() : "";
  const contactPhone = document.getElementById("Cphone") ? document.getElementById("Cphone").value.trim() : "";
  const ContactEmail = document.getElementById("Cemail") ? document.getElementById("Cemail").value.trim() : "";
  const contactSubject = document.getElementById("Csubject") ? document.getElementById("Csubject").value.trim() : "";
  const contactMessage = document.getElementById("Cmessage") ? document.getElementById("Cmessage").value.trim() : "";

  if (!contactName || !contactPhone || !ContactEmail || !contactSubject || !contactMessage) {
    alert("Please fill out all fields before submitting.");
    return false;
  }

  const textSubjectMessage = "Hello, I would like to submit my form details:%0a%0a"
      + "*Name:* " + encodeURIComponent(contactName) + "%0a"
      + "*Phone:* " + encodeURIComponent(contactPhone) + "%0a"
      + "*Email:* " + encodeURIComponent(ContactEmail) + "%0a"
      + "*Subject:* " + encodeURIComponent(contactSubject) + "%0a"
      + "*Message:* " + encodeURIComponent(contactMessage);

  const whatsappSubUrl = "https://wa.me/" + phoneNumber + "?text=" + textSubjectMessage;

  window.open(whatsappSubUrl, '_blank').focus();
  return true;
}

// Expose globally on window for inline handlers
if (typeof window !== 'undefined') {
  window.sendToWhatsapp = sendToWhatsapp;
  window.sendSubToWhatsapp = sendSubToWhatsapp;
}

export function initContactForm() {
  const form = document.getElementById('contact-form');
  const copyBtn = document.getElementById('copy-email-btn');

  // Copy Email to Clipboard Interaction
  if (copyBtn) {
    const handleCopy = () => {
      const email = PROFILE_DATA.email || 'webdevuday@gmail.com';
      const emailVal = document.getElementById('email-value-text');
      const copyTag = document.getElementById('copy-status-tag');

      navigator.clipboard.writeText(email).then(() => {
        if (copyTag) {
          copyTag.textContent = '✓ COPIED!';
          copyTag.classList.add('copied');
        }
        if (emailVal) {
          emailVal.textContent = 'Copied to clipboard!';
        }

        showToast(`Email ${email} copied to clipboard!`);

        setTimeout(() => {
          if (copyTag) {
            copyTag.textContent = 'CLICK TO COPY';
            copyTag.classList.remove('copied');
          }
          if (emailVal) {
            emailVal.textContent = email;
          }
        }, 2500);
      }).catch(() => {
        showToast(`Direct Email: ${email}`);
      });
    };

    copyBtn.addEventListener('click', handleCopy);
    copyBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCopy();
      }
    });
  }

  // Form Submit Handler
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = sendToWhatsapp();
      if (success) {
        showToast('Opening WhatsApp to send your message...');
      }
    });
  }
}

export function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}
