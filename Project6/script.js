document.addEventListener('DOMContentLoaded', function() {
    // Loader animation
    const loader = document.querySelector('.loader');
    
    // Hide loader after 1.5 seconds
    setTimeout(() => {
        loader.classList.add('hidden');
        
        // Initialize animations after loader is hidden
        initAnimations();
        initCarousels();
        initScrollEffects();
        initMobileMenu();
    }, 1500);
    
    function initAnimations() {
        // Simple animation observer
        const animateOnScroll = (elements, animation) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('aos-animate');
                    }
                });
            }, { threshold: 0.1 });
            
            elements.forEach(el => observer.observe(el));
        };
        
        // Animate all elements with data-aos attribute
        const animatedElements = document.querySelectorAll('[data-aos]');
        animateOnScroll(animatedElements);
    }
    
    function initCarousels() {
        // Template carousel
        const templateCarousel = document.querySelector('.template-carousel .carousel-container');
        const templateSlides = document.querySelectorAll('.template-slide');
        const templateDots = document.querySelectorAll('.carousel-dots .dot');
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        
        let currentSlide = 0;
        const slideCount = templateSlides.length;
        
        function updateCarousel() {
            templateCarousel.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update dots
            templateDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }
        
        // Next slide
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slideCount;
            updateCarousel();
        });
        
        // Previous slide
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            updateCarousel();
        });
        
        // Dot navigation
        templateDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });
        
        // Auto-rotate carousel
        let carouselInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % slideCount;
            updateCarousel();
        }, 5000);
        
        // Pause on hover
        templateCarousel.parentElement.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });
        
        templateCarousel.parentElement.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % slideCount;
                updateCarousel();
            }, 5000);
        });
        
        // Testimonial slider
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const testimonialDots = document.querySelectorAll('.slider-dots .dot');
        const testimonialPrev = document.querySelector('.slider-prev');
        const testimonialNext = document.querySelector('.slider-next');
        
        let currentTestimonial = 0;
        
        function updateTestimonialSlider() {
            testimonialSlides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentTestimonial);
            });
            
            testimonialDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentTestimonial);
            });
        }
        
        testimonialNext.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
            updateTestimonialSlider();
        });
        
        testimonialPrev.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonialSlides.length) % testimonialSlides.length;
            updateTestimonialSlider();
        });
        
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentTestimonial = index;
                updateTestimonialSlider();
            });
        });
    }
    
    function initScrollEffects() {
        // Header scroll effect
        const header = document.querySelector('.header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Floating cards animation
        const cards = document.querySelectorAll('.card');
        
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            
            cards.forEach((card, index) => {
                const speed = 0.1 * (index + 1);
                const yPos = scrollPosition * speed;
                
                if (index === 0) {
                    card.style.transform = `translateY(${yPos}px)`;
                } else if (index === 1) {
                    card.style.transform = `translateY(${-yPos}px) translateX(-${yPos * 0.5}px)`;
                } else {
                    card.style.transform = `translateY(${yPos * 0.5}px) translateX(${yPos * 0.3}px)`;
                }
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^=""]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const hamburger = document.querySelector('.hamburger');
                    if (hamburger.classList.contains('active')) {
                        hamburger.classList.remove('active');
                        document.querySelector('.nav-links').classList.remove('active');
                    }
                }
            });
        });
    }
    
    function initMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Floating card hover effects
    const floatingCards = document.querySelector('.floating-cards');
    const cardElements = document.querySelectorAll('.card');
    
    floatingCards.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        cardElements.forEach((card, index) => {
            const moveX = (x - centerX) * 0.05 * (index + 1);
            const moveY = (y - centerY) * 0.05 * (index + 1);
            
            if (index === 0) {
                card.style.transform = `translate(${moveX}px, ${moveY}px)`;
            } else if (index === 1) {
                card.style.transform = `translate(${-moveX * 0.7}px, ${-moveY * 0.7}px)`;
            } else {
                card.style.transform = `translate(${moveX * 0.5}px, ${-moveY * 0.5}px)`;
            }
        });
    });
    
    floatingCards.addEventListener('mouseleave', () => {
        cardElements.forEach(card => {
            card.style.transform = '';
        });
    });
    
    // Feature card hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.feature-icon');
            icon.style.transform = 'rotateY(180deg)';
            setTimeout(() => {
                icon.style.transform = 'rotateY(0deg)';
            }, 300);
        });
    });
});