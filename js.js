// Smooth scroll, current year, simple reveal on scroll
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Current year
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if (el) el.textContent = y;

  // Simple reveal on scroll
  const reveals = document.querySelectorAll('.container, .project-card, .edu-item, .hero-inner');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(r => {
    r.setAttribute('data-reveal', '');
    io.observe(r);
  });
});