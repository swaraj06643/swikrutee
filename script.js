// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing effect for tagline
const tagline = document.getElementById('tagline');
const text = "Aspiring Developer | Passionate Learner";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        tagline.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Typing speed
    }
}
typeEffect();

// Fade-in effect on scroll
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));
