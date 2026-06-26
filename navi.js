// Smooth scroll to section + active nav button highlight
function goTo(id, btn) {
  const el = document.getElementById(id);
  if (el) {
    const navHeight = document.querySelector('.nav').offsetHeight;
    const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }
  document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// Auto-highlight nav on scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  const buttons = document.querySelectorAll('.nav-links button');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = sections.indexOf(entry.target.id);
        buttons.forEach(b => b.classList.remove('active'));
        if (idx !== -1) buttons[idx].classList.add('active');
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});