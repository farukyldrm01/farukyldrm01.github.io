document.addEventListener('DOMContentLoaded', () => {

    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Play once
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll('section h2, .project-card, .about-content, .hero-content');

    animateElements.forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // Mobile Menu Toggle (Simplified)
    // Would go here if we added a burger menu button
});
