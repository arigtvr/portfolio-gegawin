// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation to skill bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0'; // Reset width to 0 before animating
                    setTimeout(() => {
                        bar.style.width = width; // Animate to original width
                    }, 100); // Small delay for effect
                });
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible
    
    document.querySelectorAll('.skill-category').forEach(section => {
        observer.observe(section);
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically handle form submission to a backend
            alert('Transmission received! I\'ll get back to you soon.'); // Cyberpunk alert message
            contactForm.reset();
        });
    }
    
    // Add scroll animation to elements (if you want more complex animations)
    // For a cyberpunk theme, you might add subtle transforms or opacity changes
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in'); // Add a class for CSS animations
            } else {
                // Optional: remove class if you want elements to re-animate on scroll back
                // entry.target.classList.remove('animate-in');
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible
    
    document.querySelectorAll('.project-card, .skill-category, .about-content, .contact-content').forEach(element => {
        scrollObserver.observe(element);
    });

    // Add data-text attribute for glitch effect
    document.querySelectorAll('.glitch').forEach(element => {
        element.setAttribute('data-text', element.textContent);
    });
});