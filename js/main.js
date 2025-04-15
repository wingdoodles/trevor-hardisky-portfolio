document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('toggle');
            
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
                        // Add active class to clicked button
                        btn.classList.add('active');
            
                        const filter = btn.getAttribute('data-filter');
                        
                        // Filter projects
                        projectCards.forEach(card => {
                            if (filter === 'all') {
                                card.style.display = 'block';
                            } else if (card.getAttribute('data-category') === filter) {
                                card.style.display = 'block';
                            } else {
                                card.style.display = 'none';
                            }
                            
                            // Add animation
                            setTimeout(() => {
                                card.classList.add('show');
                            }, 300);
                        });
                    });
                });
                
                // Form Submission
                const contactForm = document.getElementById('contactForm');
                if (contactForm) {
                    contactForm.addEventListener('submit', function(e) {
                        e.preventDefault();
                        
                        // Get form values
                        const name = document.getElementById('name').value;
                        const email = document.getElementById('email').value;
                        const subject = document.getElementById('subject').value;
                        const message = document.getElementById('message').value;
                        
                        // Basic validation
                        if (!name || !email || !subject || !message) {
                            alert('Please fill in all fields');
                            return;
                        }
                        
                        // Here you would typically send the form data to a server
                        // For now, we'll just show a success message
                        alert('Thank you for your message! I will get back to you soon.');
                        contactForm.reset();
                    });
                }
                
                // Smooth scrolling for anchor links
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function(e) {
                        e.preventDefault();
                        
                        const targetId = this.getAttribute('href');
                        if (targetId === '#') return;
                        
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            const headerHeight = document.querySelector('header').offsetHeight;
                            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                            
                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });
                        }
                    });
                });
                
                // Animation on scroll
                const animateOnScroll = () => {
                    const elements = document.querySelectorAll('.project-card, .skill-item, .about-image, .about-text, .contact-item');
                    
                    elements.forEach(element => {
                        const elementPosition = element.getBoundingClientRect().top;
                        const windowHeight = window.innerHeight;
                        
                        if (elementPosition < windowHeight - 100) {
                            element.classList.add('animate');
                        }
                    });
                };
                
                // Run animation check on load and scroll
                window.addEventListener('load', animateOnScroll);
                window.addEventListener('scroll', animateOnScroll);
                
                // Add CSS for animations
                const style = document.createElement('style');
                style.innerHTML = `
                    .project-card, .skill-item, .about-image, .about-text, .contact-item {
                        opacity: 0;
                        transform: translateY(30px);
                        transition: opacity 0.6s ease, transform 0.6s ease;
                    }
                    
                    .project-card.animate, .skill-item.animate, .about-image.animate, .about-text.animate, .contact-item.animate {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    
                    @keyframes navLinkFade {
                        from {
                            opacity: 0;
                            transform: translateX(50px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                    
                    .burger.toggle .line1 {
                        transform: rotate(-45deg) translate(-5px, 6px);
                    }
                    
                    .burger.toggle .line2 {
                        opacity: 0;
                    }
                    
                    .burger.toggle .line3 {
                        transform: rotate(45deg) translate(-5px, -6px);
                    }
                `;
                document.head.appendChild(style);
            });
            