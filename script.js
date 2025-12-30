/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ROMANTIC LOVE WEBSITE - JAVASCRIPT
   Smooth animations, scroll effects, interactive elements
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

// ━━━━━━━━━━━━━━━━ CONFIGURATION ━━━━━━━━━━━━━━━━
const CONFIG = {
    // Customize these texts
    heroText: "To the love of my life",
    letterText: `My dearest love,
    
    From the moment you walked into my life, everything changed. You brought color to my gray days, warmth to my cold nights, and meaning to every moment we share together.
    
    You are my safe place, my greatest adventure, and my home. With you, I've learned what it truly means to love and be loved. Every laugh we share, every dream we build, every quiet moment together—these are the treasures I hold closest to my heart.
    
    Thank you for being exactly who you are. Thank you for choosing me, for believing in us, and for making every day feel like a beautiful gift.
    
    I promise to love you through every season, to stand by your side through every challenge, and to celebrate every joy with you. You are my today and all of my tomorrows.`,
    
    // Animation settings
    particleCount: 30,
    typewriterSpeed: 80,
    letterTypewriterSpeed: 30
};

// ━━━━━━━━━━━━━━━━ INITIALIZATION ━━━━━━━━━━━━━━━━
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initTypewriter();
    initScrollAnimations();
    initSurprise();
    initLetterTypewriter();
    initImageLoading();
});

// ━━━━━━━━━━━━━━━━ FLOATING PARTICLES ━━━━━━━━━━━━━━━━
function initParticles() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        return; // Skip particle creation
    }
    
    const particlesContainer = document.getElementById('particles');
    
    for (let i = 0; i < CONFIG.particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random positioning
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random animation delay and duration
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    
    // Random size
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random shape (heart or circle)
    if (Math.random() > 0.7) {
        particle.innerHTML = '❤';
        particle.style.background = 'transparent';
        particle.style.fontSize = size + 'px';
        particle.style.color = getRandomColor();
    } else {
        particle.style.background = getRandomColor();
    }
    
    container.appendChild(particle);
}

function getRandomColor() {
    const colors = ['#FFB6C1', '#E6B8E6', '#FFDAB9', '#DDA0DD', '#FFE4E1', '#FF69B4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// ━━━━━━━━━━━━━━━━ TYPEWRITER EFFECT ━━━━━━━━━━━━━━━━
function initTypewriter() {
    const heroTextElement = document.getElementById('heroText');
    const text = CONFIG.heroText;
    let index = 0;
    
    function type() {
        if (index < text.length) {
            heroTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, CONFIG.typewriterSpeed);
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 1000);
}

// ━━━━━━━━━━━━━━━━ LETTER TYPEWRITER ━━━━━━━━━━━━━━━━
function initLetterTypewriter() {
    const letterElement = document.getElementById('letterText');
    const text = CONFIG.letterText;
    let index = 0;
    let hasStarted = false;
    
    function type() {
        if (index < text.length) {
            letterElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, CONFIG.letterTypewriterSpeed);
        }
    }
    
    // Observer to start typing when letter comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasStarted) {
                hasStarted = true;
                setTimeout(type, 500);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(letterElement);
}

// ━━━━━━━━━━━━━━━━ SCROLL ANIMATIONS ━━━━━━━━━━━━━━━━
function initScrollAnimations() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // Make all elements visible immediately
        const animatedElements = document.querySelectorAll('[data-animate], .section-title, .timeline-item, .reason-card, .memory-frame, .promise-card');
        animatedElements.forEach(el => el.classList.add('visible'));
        return;
    }
    
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));
    
    // Observe section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(el => observer.observe(el));
    
    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(el => observer.observe(el));
    
    // Observe reason cards with stagger effect
    const reasonCards = document.querySelectorAll('.reason-card');
    reasonCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe memory frames
    const memoryFrames = document.querySelectorAll('.memory-frame');
    memoryFrames.forEach((frame, index) => {
        frame.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(frame);
    });
    
    // Observe promise cards
    const promiseCards = document.querySelectorAll('.promise-card');
    promiseCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(card);
    });
    
    // Parallax effect for hero illustration (only if not reduced motion)
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const heroIllustration = document.querySelector('.hero-illustration');
                
                if (heroIllustration && scrolled < window.innerHeight) {
                    heroIllustration.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.3}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ━━━━━━━━━━━━━━━━ SURPRISE SECTION ━━━━━━━━━━━━━━━━
function initSurprise() {
    const lockedHeart = document.getElementById('lockedHeart');
    const surpriseMessage = document.getElementById('surpriseMessage');
    
    function unlockSurprise() {
        // Create heart burst animation
        createHeartBurst(lockedHeart);
        
        // Hide locked heart and show message
        setTimeout(() => {
            lockedHeart.style.display = 'none';
            surpriseMessage.classList.add('revealed');
        }, 800);
    }
    
    // Click event
    lockedHeart.addEventListener('click', unlockSurprise);
    
    // Keyboard support (Enter or Space)
    lockedHeart.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            unlockSurprise();
        }
    });
}

function createHeartBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Create multiple hearts bursting outward
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'fixed';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = '24px';
        heart.style.color = getRandomColor();
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.transition = 'all 1s ease-out';
        
        document.body.appendChild(heart);
        
        // Animate hearts outward
        setTimeout(() => {
            const angle = (i / 12) * Math.PI * 2;
            const distance = 150;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            heart.style.transform = `translate(${x}px, ${y}px) scale(2)`;
            heart.style.opacity = '0';
        }, 10);
        
        // Remove hearts after animation
        setTimeout(() => {
            heart.remove();
        }, 1100);
    }
}

// ━━━━━━━━━━━━━━━━ SMOOTH SCROLL FOR LINKS ━━━━━━━━━━━━━━━━
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

// ━━━━━━━━━━━━━━━━ HOVER EFFECTS FOR CARDS ━━━━━━━━━━━━━━━━
// Add subtle tilt effect on mouse move for cards
const cards = document.querySelectorAll('.reason-card, .promise-card, .polaroid');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ━━━━━━━━━━━━━━━━ CONSOLE MESSAGE ━━━━━━━━━━━━━━━━
console.log('%c❤️ Made with love ❤️', 'color: #FF69B4; font-size: 20px; font-weight: bold;');
console.log('%cCustomize this website by editing the CONFIG object in script.js', 'color: #DDA0DD; font-size: 14px;');

// ━━━━━━━━━━━━━━━━ IMAGE LOADING OPTIMIZATION ━━━━━━━━━━━━━━━━
function initImageLoading() {
    const images = document.querySelectorAll('.photo-placeholder img');
    
    images.forEach(img => {
        // Check if image loads successfully
        img.addEventListener('load', function() {
            this.style.display = 'block';
            this.parentElement.style.background = 'transparent';
            const placeholder = this.parentElement.querySelector('::before');
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        });
        
        // Handle image load errors
        img.addEventListener('error', function() {
            this.style.display = 'none';
            // Keep the gradient background and camera icon
        });
    });
}
