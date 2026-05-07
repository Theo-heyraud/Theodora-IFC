document.addEventListener('DOMContentLoaded', () => {
  const revealSections = document.querySelectorAll('.reveal-section');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      }
    });
  }, {
    threshold: 0.2
  });

  revealSections.forEach(section => {
    revealObserver.observe(section);
  });
});
