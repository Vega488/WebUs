document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    // Hide preloader after 2 seconds
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        
        // Initialize animations after preloader is hidden
        initAnimations();
        initContactForm();
        initFAQ();
        initLiveChat();
        initFloatingButtons();
        initMobileMenu();
    }, 2000);
    
    // Counter Animation
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    // Scroll Animations
    function initAnimations() {
        // Animate hero title lines
        const titleLines = document.querySelectorAll('.title-line');
        titleLines.forEach((line, index) => {
            line.style.opacity = '0';
            line.style.transform = 'translateY(30px)';
            line.style.transition = `opacity 0.8s ${index * 0.2}s, transform 0.8s ${index * 0.2}s`;
        });
        
        // Trigger animations after a short delay
        setTimeout(() => {
            titleLines.forEach(line => {
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
            });
            
            // Start counter animation
            animateCounters();
        }, 300);
        
        // Header scroll effect
        const header = document.querySelector('.header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Contact Form Submission
    function initContactForm() {
        const form = document.getElementById('contactForm');
        
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = form.elements['name'].value;
                const email = form.elements['email'].value;
                const subject = form.elements['subject'].value;
                const message = form.elements['message'].value;
                
                // Here you would typically send the form data to a server
                console.log('Form submitted:', { name, email, subject, message });
                
                // Show success message
                alert('Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.');
                form.reset();
            });
        }
    }
    
    // FAQ Accordion
    function initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
    }
    
    // Live Chat Toggle
    function initLiveChat() {
        const chatBtn = document.querySelector('.livechat-btn');
        const floatingChat = document.querySelector('.floating-chat');
        const chatPopup = document.querySelector('.live-chat-popup');
        const closeChat = document.querySelector('.close-chat');
        
        if (chatBtn && chatPopup) {
            chatBtn.addEventListener('click', () => {
                chatPopup.classList.add('active');
            });
        }
        
        if (floatingChat && chatPopup) {
            floatingChat.addEventListener('click', () => {
                chatPopup.classList.toggle('active');
            });
        }
        
        if (closeChat && chatPopup) {
            closeChat.addEventListener('click', () => {
                chatPopup.classList.remove('active');
            });
        }
    }
    
    // Floating Contact Buttons
    function initFloatingButtons() {
        const floatingBtns = document.querySelectorAll('.contact-btn');
        
        floatingBtns.forEach((btn, index) => {
            btn.style.transform = `translateY(${index * 10}px)`;
            
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const angleX = (y - centerY) / 10;
                const angleY = (centerX - x) / 10;
                
                btn.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(${index * 10}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = `translateY(${index * 10}px)`;
            });
        });
    }
    
    // Mobile Menu Toggle
    function initMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
        }
    }
});

// Particles.js Background
function initParticles() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#4361ee"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#4361ee",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
}
