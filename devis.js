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

  // Form submission simulation
  const devisForm = document.getElementById('devis-form');
  if (devisForm) {
    devisForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Merci ! Votre demande de devis a été envoyée avec succès. Un conseiller vous contactera sous 24h.');
      devisForm.reset();
    });
  }
});
