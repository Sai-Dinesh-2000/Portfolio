// ===========================
// 📬 Contact Form Submission
// ===========================
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const response = document.getElementById('response');

  if (name && email && message) {
    response.style.color = 'green';
    response.textContent = `Thank you, ${name}! Your message has been received.`;

    // Clear form
    this.reset();
  } else {
    response.style.color = 'red';
    response.textContent = 'Please fill out all fields.';
  }
});

// ===========================
// 🌗 Dark Mode Toggle
// ===========================
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

if (toggleBtn) {
  // Load saved preference
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleBtn.textContent = '☀️ Light Mode';
  }

  // Toggle theme on click
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
      toggleBtn.textContent = '☀️ Light Mode';
      localStorage.setItem('theme', 'dark');
    } else {
      toggleBtn.textContent = '🌙 Dark Mode';
      localStorage.setItem('theme', 'light');
    }
  });
}
