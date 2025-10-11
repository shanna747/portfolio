// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger icon
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active')
        ? 'rotate(45deg) translate(5px, 5px)'
        : 'none';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active')
        ? 'rotate(-45deg) translate(7px, -6px)'
        : 'none';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
        return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.timeline-item, .project-card, .hobby-card, .skill-category'
);

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
// Add active class to current section in navigation
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// // Parallax effect for hero section
// window.addEventListener('scroll', () => {
//     const hero = document.querySelector('.hero');
//     const scrolled = window.pageYOffset;
//     const parallaxSpeed = 0.5;

//     if (hero) {
//         hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
//     }
// });

// Skill tags hover effect - add random colors
const skillTags = document.querySelectorAll('.skill-tag');
const colors = [
    'linear-gradient(135deg, #667eea, #764ba2)',
    'linear-gradient(135deg, #f093fb, #f5576c)',
    'linear-gradient(135deg, #4facfe, #00f2fe)',
    'linear-gradient(135deg, #43e97b, #38f9d7)',
    'linear-gradient(135deg, #fa709a, #fee140)'
];

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        tag.style.background = randomColor;
        tag.style.color = 'white';
    });

    tag.addEventListener('mouseleave', () => {
        tag.style.background = '';
        tag.style.color = '';
    });
});

// Project card tilt effect (3D hover effect)
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Console message for developers
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cI see you\'re checking out the code. Feel free to reach out if you want to collaborate!', 'font-size: 14px; color: #666;');

// Performance monitoring
window.addEventListener('load', () => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd -
                    window.performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
});
// Clients Section - Spoke Visualization
// Create backdrop for popups
const backdrop = document.createElement('div');
backdrop.className = 'popup-backdrop';
document.body.appendChild(backdrop);

// Get all spokes and popups
const spokes = document.querySelectorAll('.spoke');
const popups = document.querySelectorAll('.client-popup');
const closeButtons = document.querySelectorAll('.popup-close');

// Add click handlers to spokes
spokes.forEach(spoke => {
    spoke.addEventListener('click', () => {
        const clientName = spoke.getAttribute('data-client');
        const popup = document.getElementById(`popup-${clientName}`);
        
        if (popup) {
            // Close any open popups
            popups.forEach(p => p.classList.remove('active'));
            
            // Open clicked popup
            popup.classList.add('active');
            backdrop.classList.add('active');
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close popup function
function closePopup() {
    popups.forEach(popup => popup.classList.remove('active'));
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
}

// Add click handlers to close buttons
closeButtons.forEach(button => {
    button.addEventListener('click', closePopup);
});

// Close popup when clicking backdrop
backdrop.addEventListener('click', closePopup);

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePopup();
    }
});

// Animate spokes on scroll into view
const spokeContainer = document.querySelector('.spoke-container');
if (spokeContainer) {
    const spokeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate spokes appearing
                const allSpokes = entry.target.querySelectorAll('.spoke');
                allSpokes.forEach((spoke, index) => {
                    setTimeout(() => {
                        spoke.style.opacity = '0';
                        spoke.style.transform = spoke.style.transform + ' scale(0.5)';
                        spoke.style.transition = 'all 0.5s ease';
                        
                        setTimeout(() => {
                            spoke.style.opacity = '1';
                            spoke.style.transform = spoke.style.transform.replace('scale(0.5)', 'scale(1)');
                        }, 50);
                    }, index * 150);
                });
            }
        });
    }, { threshold: 0.3 });
    
    spokeObserver.observe(spokeContainer);
}

// Add touch support for mobile
if ('ontouchstart' in window) {
    spokes.forEach(spoke => {
        spoke.addEventListener('touchstart', (e) => {
            e.preventDefault();
            spoke.click();
        });
    });
}
