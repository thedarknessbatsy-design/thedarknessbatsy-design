// Update year automatically
document.getElementById('year').textContent = new Date().getFullYear();

/* Fade-in On Scroll */
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(f => observer.observe(f));

/* Skill Bar Animation */
function animateSkills() {
  document.querySelectorAll('.fill').forEach(f => {
    const pct = f.getAttribute('data-pct');
    setTimeout(() => {
      f.style.width = pct + "%";
    }, 100);
  });
}

let done = false;

window.addEventListener("scroll", () => {
  let box = document.getElementById("skills");
  if (!done && box.getBoundingClientRect().top < window.innerHeight - 100) {
    animateSkills();
    done = true;
  }
});