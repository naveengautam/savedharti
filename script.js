const revealElements = document.querySelectorAll('.fade-in-up');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.16 }
);

revealElements.forEach((el) => observer.observe(el));

const orb = document.querySelector('.hero-orb');
window.addEventListener('pointermove', (event) => {
  if (!orb) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 14;
  const y = (event.clientY / window.innerHeight - 0.5) * 14;
  orb.style.transform = `translate(${x}px, ${y}px)`;
});
