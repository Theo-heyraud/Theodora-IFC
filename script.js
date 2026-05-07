document.addEventListener('DOMContentLoaded', () => {
  const revealSections = document.querySelectorAll('.reveal-section');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        // observer.unobserve(entry.target); // Optional: stop observing once revealed
      }
    });
  }, {
    threshold: 0.25 // Trigger when 25% of the element is visible
  });

  revealSections.forEach(section => {
    revealObserver.observe(section);
  });

  // Mobile menu toggle (existing functionality)
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
  }
});
