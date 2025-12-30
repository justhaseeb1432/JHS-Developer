// BURGER MENU TOGGLE
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// SMOOTH SCROLL FOR LINKS
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

// FADE-IN ANIMATION ON SCROLL
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
});
