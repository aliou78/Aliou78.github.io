// ===================================
// PAGE LOADER
// ===================================
const pageLoader = document.getElementById('pageLoader');

window.addEventListener('load', () => {
    setTimeout(() => {
        pageLoader.classList.add('hidden');
    }, 1300);
});

// ===================================
// DARK MODE TOGGLE
// ===================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const htmlEl = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
htmlEl.setAttribute('data-theme', savedTheme);
themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('portfolio-theme', newTheme);
});

// ===================================
// NAVIGATION
// ===================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// PARTICLES (CANVAS)
// ===================================
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const PARTICLE_COUNT = 50;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '108, 99, 255' : '0, 245, 255';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width ||
            this.y < 0 || this.y > canvas.height) {
            this.reset();
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }
}

function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
                const opacity = (1 - dist / 120) * 0.15;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(108, 99, 255, ${opacity})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    drawConnections();
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// ===================================
// TYPING EFFECT
// ===================================
const typingEffect = () => {
    const subtitle = document.getElementById('typingTarget');
    if (!subtitle) return;

    const texts = [
        'Étudiant en Informatique – Analyse des Performances Digitales',
        'Développeur Web Front-End & Back-End',
        'Passionné par l\'IA & la Data Science',
        'En quête d\'innovation digitale 🚀'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    const type = () => {
        const fullText = texts[textIndex];

        if (isDeleting) {
            currentText = fullText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = fullText.substring(0, charIndex + 1);
            charIndex++;
        }

        subtitle.textContent = currentText;

        let typingSpeed = isDeleting ? 40 : 70;

        if (!isDeleting && charIndex === fullText.length) {
            typingSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 400;
        }

        setTimeout(type, typingSpeed);
    };

    setTimeout(type, 800);
};

// ===================================
// STAT COUNTERS ANIMATION
// ===================================
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10);
                const suffix = el.getAttribute('data-suffix') || '';
                const duration = 1800;
                const start = performance.now();

                const updateCounter = (currentTime) => {
                    const elapsed = currentTime - start;
                    const progress = Math.min(elapsed / duration, 1);
                    // Ease out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(eased * target);
                    el.textContent = current + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        el.textContent = target + suffix;
                    }
                };

                requestAnimationFrame(updateCounter);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
};

// ===================================
// SKILL BARS ANIMATION
// ===================================
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                setTimeout(() => {
                    entry.target.style.width = progress + '%';
                }, 200);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillBars.forEach(bar => observer.observe(bar));
};

// ===================================
// LANGUAGE BARS ANIMATION
// ===================================
const animateLanguageBars = () => {
    const languageBars = document.querySelectorAll('.language-progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level');
                setTimeout(() => {
                    entry.target.style.width = level + '%';
                }, 200);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    languageBars.forEach(bar => observer.observe(bar));
};

// ===================================
// SCROLL REVEAL
// ===================================
const revealElements = () => {
    const elements = document.querySelectorAll(
        '.skill-category, .project-card, .language-card, .timeline-item, .stat-item, .about-content, .contact-item'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
};

// ===================================
// SMOOTH SCROLL
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 75;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// ACTIVE NAV LINK
// ===================================
const setActiveNavLink = () => {
    const sections = document.querySelectorAll('section[id]');

    const update = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', update, { passive: true });
};

// ===================================
// FORM VALIDATION
// ===================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

const validators = {
    name: (val) => val.trim().length >= 2 ? '' : 'Veuillez entrer votre nom complet (min. 2 caractères).',
    email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? '' : 'Veuillez entrer un email valide.',
    subject: (val) => val.trim().length >= 3 ? '' : 'Le sujet doit contenir au moins 3 caractères.',
    message: (val) => val.trim().length >= 10 ? '' : 'Le message doit contenir au moins 10 caractères.',
};

function validateField(field) {
    const id = field.id;
    const error = validators[id] ? validators[id](field.value) : '';
    const errorEl = document.getElementById(id + 'Error');

    if (error) {
        field.classList.add('error');
        field.classList.remove('valid');
        if (errorEl) errorEl.textContent = error;
        return false;
    } else {
        field.classList.remove('error');
        field.classList.add('valid');
        if (errorEl) errorEl.textContent = '';
        return true;
    }
}

// Real-time validation on blur
['name', 'email', 'subject', 'message'].forEach(id => {
    const field = document.getElementById(id);
    if (!field) return;

    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
        if (field.classList.contains('error')) validateField(field);
    });
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fields = ['name', 'email', 'subject', 'message'].map(id => document.getElementById(id));
    const allValid = fields.every(field => validateField(field));

    if (!allValid) return;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:diallomamadoualiou7875@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoLink;

    // Show success
    formSuccess.classList.add('visible');
    contactForm.reset();

    // Remove valid states
    fields.forEach(f => { f.classList.remove('valid', 'error'); });

    setTimeout(() => formSuccess.classList.remove('visible'), 5000);
});

// ===================================
// INITIALIZE
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    typingEffect();
    animateSkillBars();
    animateLanguageBars();
    animateCounters();
    revealElements();
    setActiveNavLink();
});

// Prevent form resubmission on refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
