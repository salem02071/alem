// Smooth form handling (demo)
function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const button = form.querySelector('button[type="submit"]');
  const originalText = button.textContent;

  // Simple validation already handled by HTML5
  button.textContent = 'Sending...';
  button.disabled = true;

  // Simulate sending
  setTimeout(() => {
    button.textContent = 'Message sent ✓';
    button.style.background = '#34c759';

    form.reset();

    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '';
      button.disabled = false;
    }, 2500);
  }, 1200);
}

// Subtle nav background on scroll
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 1px 0 rgba(0,0,0,0.06)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
