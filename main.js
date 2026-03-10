/* =====================================================
   ZEAL GAME STUDIO — JAVASCRIPT
   ===================================================== */

/* --- THEME TOGGLE ------------------------------------- */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('zeal-theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('zeal-theme', next);
});

/* --- NAVBAR SCROLL ------------------------------------- */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

/* --- HAMBURGER MENU ----------------------------------- */
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksContainer.classList.toggle('open');
});

navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksContainer.classList.remove('open');
  });
});

/* --- PARTICLES ---------------------------------------- */
function createParticles() {
  const container = document.getElementById('particles');
  const colors = ['#8b5cf6', '#3b82f6', '#06b6d4', '#f97316', '#ec4899'];
  const count = 30;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 6 + 2;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const duration = Math.random() * 12 + 8;
    const delay = Math.random() * 8;
    particle.style.cssText = `
      width: ${size}px; height: ${size}px;
      background: ${color}; left: ${left}%;
      animation-duration: ${duration}s; animation-delay: ${delay}s;
      box-shadow: 0 0 ${size * 2}px ${color};
    `;
    container.appendChild(particle);
  }
}
createParticles();

/* --- STAT COUNTER ANIMATION --------------------------- */
function animateCounter(el, target, decimals = 0) {
  const duration = 2000;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    if (decimals > 0) {
      el.textContent = value.toFixed(decimals);
    } else if (target >= 1000000) {
      el.textContent = (value / 1000000).toFixed(1) + 'M+';
    } else if (target >= 1000) {
      el.textContent = Math.floor(value / 1000) + 'K+';
    } else {
      el.textContent = Math.floor(value) + '+';
    }
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

function checkStatsVisibility() {
  if (statsAnimated) return;
  const heroStats = document.querySelector('.hero-stats');
  if (!heroStats) return;
  const rect = heroStats.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    statsAnimated = true;
    statNumbers.forEach(el => {
      const target = parseFloat(el.getAttribute('data-target'));
      const decimals = el.getAttribute('data-target').includes('.') ? 1 : 0;
      animateCounter(el, target, decimals);
    });
  }
}
window.addEventListener('scroll', checkStatsVisibility);
setTimeout(checkStatsVisibility, 600);

/* --- SCROLL REVEAL ------------------------------------ */
const revealElements = document.querySelectorAll('.feature-card');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.getAttribute('data-delay') || 0);
      setTimeout(() => {
        entry.target.classList.add('visible');
        entry.target.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
      }, 0);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealElements.forEach(el => revealObserver.observe(el));

/* --- ZEAL QUEST PHONE CYCLING ------------------------- */
const questScreenshots = ['app_screenshot_1.png', 'app_screenshot_2.png', 'app_screenshot_3.png'];
let currentQuestShot = 0;
const phoneImg = document.getElementById('phoneImg');

function cycleQuestShot() {
  if (!phoneImg) return;
  phoneImg.classList.remove('active');
  setTimeout(() => {
    currentQuestShot = (currentQuestShot + 1) % questScreenshots.length;
    phoneImg.src = questScreenshots[currentQuestShot];
    phoneImg.classList.add('active');
  }, 400);
}
setInterval(cycleQuestShot, 3000);
phoneImg && phoneImg.classList.add('active');

/* --- ZEALSCAN PHONE CYCLING --------------------------- */
const zealscanSS = ['zealscan_screenshot_1.png', 'zealscan_screenshot_2.png', 'zealscan_screenshot_3.png'];
let currentZSShot = 0;
const zealscanPhoneImg = document.getElementById('zealscanPhoneImg');

function cycleZSShot() {
  if (!zealscanPhoneImg) return;
  zealscanPhoneImg.classList.remove('active');
  setTimeout(() => {
    currentZSShot = (currentZSShot + 1) % zealscanSS.length;
    zealscanPhoneImg.src = zealscanSS[currentZSShot];
    zealscanPhoneImg.classList.add('active');
  }, 400);
}
setInterval(cycleZSShot, 3500);
zealscanPhoneImg && zealscanPhoneImg.classList.add('active');

/* --- APP TAB SWITCHING -------------------------------- */
const appTabs = document.querySelectorAll('.app-tab');
const appPanels = document.querySelectorAll('.app-panel');

appTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    appTabs.forEach(t => t.classList.remove('active'));
    appPanels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const appId = tab.getAttribute('data-app');
    const panel = document.getElementById(appId === 'zeal-quest' ? 'panelZealQuest' : 'panelZealScan');
    if (panel) panel.classList.add('active');
  });
});

/* --- ZEAL QUEST CAROUSEL ------------------------------ */
const questGallery = document.getElementById('galleryQuest');
const questCards = questGallery ? questGallery.querySelectorAll('.screenshot-card') : [];
const questDots = questGallery ? questGallery.querySelectorAll('.dot') : [];
let currentQuestSlide = 0;

function goToQuestSlide(index) {
  if (!questCards.length) return;
  questCards.forEach(c => c.classList.remove('active'));
  questDots.forEach(d => d.classList.remove('active'));
  currentQuestSlide = (index + questCards.length) % questCards.length;
  questCards[currentQuestSlide].classList.add('active');
  if (questDots[currentQuestSlide]) questDots[currentQuestSlide].classList.add('active');
}

document.getElementById('carouselPrev')?.addEventListener('click', () => goToQuestSlide(currentQuestSlide - 1));
document.getElementById('carouselNext')?.addEventListener('click', () => goToQuestSlide(currentQuestSlide + 1));
questDots.forEach(dot => {
  dot.addEventListener('click', () => goToQuestSlide(parseInt(dot.getAttribute('data-dot'))));
});
questCards.forEach(card => {
  card.addEventListener('click', () => goToQuestSlide(parseInt(card.getAttribute('data-index'))));
});
setInterval(() => goToQuestSlide(currentQuestSlide + 1), 4000);

/* --- ZEALSCAN CAROUSEL -------------------------------- */
const scanGallery = document.getElementById('galleryScan');
const scanCards = scanGallery ? scanGallery.querySelectorAll('.screenshot-card') : [];
const scanDots = scanGallery ? scanGallery.querySelectorAll('.dot') : [];
let currentScanSlide = 0;

function goToScanSlide(index) {
  if (!scanCards.length) return;
  scanCards.forEach(c => c.classList.remove('active'));
  scanDots.forEach(d => d.classList.remove('active'));
  currentScanSlide = (index + scanCards.length) % scanCards.length;
  scanCards[currentScanSlide].classList.add('active');
  if (scanDots[currentScanSlide]) scanDots[currentScanSlide].classList.add('active');
}

document.getElementById('carouselPrevScan')?.addEventListener('click', () => goToScanSlide(currentScanSlide - 1));
document.getElementById('carouselNextScan')?.addEventListener('click', () => goToScanSlide(currentScanSlide + 1));
scanDots.forEach(dot => {
  dot.addEventListener('click', () => goToScanSlide(parseInt(dot.getAttribute('data-dot'))));
});
setInterval(() => goToScanSlide(currentScanSlide + 1), 4500);

/* --- SCREENSHOT GALLERY SELECTOR ---------------------- */
const ssSelBtns = document.querySelectorAll('.ss-sel-btn');
const galleryQuestEl = document.getElementById('galleryQuest');
const galleryScanEl = document.getElementById('galleryScan');

ssSelBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    ssSelBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (btn.getAttribute('data-gallery') === 'quest') {
      galleryQuestEl?.classList.remove('hidden');
      galleryScanEl?.classList.add('hidden');
    } else {
      galleryQuestEl?.classList.add('hidden');
      galleryScanEl?.classList.remove('hidden');
    }
  });
});

/* --- CONTACT FORM ------------------------------------- */
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');

function showToast(message, icon = '&#x2705;') {
  const toastIconEl = toast.querySelector('.toast-icon');
  if (toastIconEl) toastIconEl.textContent = icon;
  if (toastMsg) toastMsg.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = document.getElementById('submitContact');
  btn.innerHTML = '<span>Dang gui...</span>';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = '<span>Gui Tin Nhan</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 19-7z"/></svg>';
    btn.disabled = false;
    contactForm.reset();
    showToast('Tin nhan da duoc gui thanh cong! Chung toi se phan hoi som nhat.');
  }, 1800);
});

/* --- SMOOTH SCROLL ------------------------------------ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* --- STORE BUTTON NOTIFICATIONS ----------------------- */
['googlePlayBtn', 'appStoreBtn', 'ctaGoogleBtn', 'ctaAppleBtn'].forEach(id => {
  const btn = document.getElementById(id);
  btn?.addEventListener('click', (e) => {
    e.preventDefault();
    const isApple = id.toLowerCase().includes('apple');
    showToast(
      isApple ? 'Zeal Quest se som co tren App Store!' : 'Zeal Quest se som co tren Google Play!',
      isApple ? '&#x1F34E;' : '&#x1F7E2;'
    );
  });
});

['zsGooglePlayBtn', 'zsAppStoreBtn'].forEach(id => {
  const btn = document.getElementById(id);
  btn?.addEventListener('click', (e) => {
    e.preventDefault();
    const isApple = id.includes('App');
    showToast(
      isApple ? 'ZealScan se som co tren App Store!' : 'ZealScan se som co tren Google Play!',
      isApple ? '&#x1F34E;' : '&#x1F7E2;'
    );
  });
});

console.log('%c ZEAL GAME STUDIO', 'font-size:24px;font-weight:900;color:#8b5cf6;');
console.log('%cForge Your Legend!', 'font-size:14px;color:#3b82f6;');
console.log('%c ZealScan - Pokemon TCG & OCG Price Scanner', 'font-size:14px;color:#f59e0b;');
