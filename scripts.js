// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Initialize Hero Carousel
// Initialize Hero Carousel
document.addEventListener('DOMContentLoaded', function() {
    const heroSwiper = new Swiper('.hero-carousel', {
        loop: true,
        autoplay: {
            delay: 3000, // 3 seconds
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'slide',
        speed: 1000,
        direction: 'horizontal', // Ensure horizontal sliding
        preventInteractionOnTransition: true
    });
    
    // Re-enable autoplay after user interaction
    heroSwiper.on('touchStart', function() {
        heroSwiper.autoplay.stop();
    });
    
    heroSwiper.on('touchEnd', function() {
        heroSwiper.autoplay.start();
    });
});
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.body-type, .testimonial, .service, .member');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    window.addEventListener('load', function() {
        const elements = document.querySelectorAll('.body-type, .testimonial, .service, .member');
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.5s ease';
        });
        
        animateOnScroll();
    });
    
    window.addEventListener('scroll', animateOnScroll);
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to your server
        // For now, we'll just show a confirmation message
        alert('Thank you for your message! We will contact you soon.');
        
        // Reset the form
        this.reset();
    });
}