// Wait for the DOM to be fully loaded before running any script
document.addEventListener('DOMContentLoaded', () => {

  // --- Typewriter for tagline ---
  const taglineText = "Aspiring DevOps Engineer | Cloud & Automation Enthusiast";
  const taglineElement = document.getElementById("tagline");
  let index = 0;
  function typeWriter() {
    if (taglineElement && index < taglineText.length) {
      taglineElement.innerHTML += taglineText.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter(); // Start the typewriter effect

  // --- Scroll-to-top button --- 
  const scrollBtn = document.getElementById("scrollBtn");
  window.onscroll = () => {
    if (scrollBtn) {
      scrollBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
    }
  };
  if (scrollBtn) {
    scrollBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }

  // --- Dark mode toggle with localStorage ---
  const darkModeBtn = document.getElementById("darkModeBtn");
  const body = document.body;
  
  // Apply saved theme on page load
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }

  if (darkModeBtn) {
    darkModeBtn.onclick = () => {
      body.classList.toggle("dark-mode");
      // Save theme preference
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    };
  }

  // --- Smooth scroll for nav links ---
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetElement = document.querySelector(link.getAttribute('href'));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- General ScrollReveal animations ---
  ScrollReveal().reveal('.fade-in', {
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
  });
  
  // --- Skills animation (this is a separate function) ---
  function animateSkills() {
    document.querySelectorAll('.skill-bar').forEach(bar => {
      const skillTextElement = bar.closest('.skill').querySelector('span');
      if (skillTextElement) {
        const text = skillTextElement.textContent;
        const match = text.match(/\((\d+)%\)/);
        if (match && match[1]) {
          bar.style.width = match[1] + '%';
        }
      }
    });
  }

  // --- ScrollReveal trigger for the skills animation ---
  // This is the correct, re-enabled code block.
  ScrollReveal().reveal('#skills', {
    afterReveal: function (el) {
      animateSkills();
    }
  });

});
