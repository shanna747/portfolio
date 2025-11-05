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

// Floating Logos Animation
function initFloatingLogos() {
    const container = document.querySelector('.tech-logos-container');
    if (!container) {
        console.log('Container not found');
        return;
    }

    const logos = container.querySelectorAll('.floating-logo');
    console.log('Found', logos.length, 'logos');

    if (logos.length === 0) return;

    // Disable animation on mobile devices
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        console.log('Mobile device detected, disabling logo animation');
        // Reset logos to static positions
        logos.forEach(logo => {
            logo.style.position = 'relative';
            logo.style.left = 'auto';
            logo.style.top = 'auto';
        });
        return;
    }

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const logoSize = 80; // 5rem = 80px
    const minSpacing = 120; // Minimum 40px gap between logo edges (120px center-to-center)
    const padding = 20;
    const moveRange = 20; // Small drift range

    console.log('Container dimensions:', containerWidth, 'x', containerHeight);

    // Store base positions of all logos
    const logoData = [];

    // Check if a position overlaps with existing logos
    function isValidPosition(x, y, existingPositions) {
        for (let pos of existingPositions) {
            const distance = Math.sqrt(Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2));
            if (distance < minSpacing) {
                return false;
            }
        }
        return true;
    }

    // Find a random non-overlapping position
    function findRandomPosition(existingPositions) {
        let attempts = 0;
        const maxAttempts = 100;

        while (attempts < maxAttempts) {
            const x = padding + Math.random() * (containerWidth - logoSize - 2 * padding);
            const y = padding + Math.random() * (containerHeight - logoSize - 2 * padding);

            if (isValidPosition(x, y, existingPositions)) {
                return { x, y };
            }
            attempts++;
        }

        // Fallback: use grid position if random placement fails
        const gridIndex = existingPositions.length;
        const cols = 3;
        const rows = 5;
        const cellWidth = (containerWidth - 2 * padding) / cols;
        const cellHeight = (containerHeight - 2 * padding) / rows;
        const col = gridIndex % cols;
        const row = Math.floor(gridIndex / cols);

        return {
            x: padding + col * cellWidth + cellWidth / 2 - logoSize / 2,
            y: padding + row * cellHeight + cellHeight / 2 - logoSize / 2
        };
    }

    // Position all logos initially
    logos.forEach((logo, index) => {
        const position = findRandomPosition(logoData.map(d => d.base));

        logoData.push({
            element: logo,
            base: position,
            current: { ...position }
        });

        // Set initial position
        logo.style.left = position.x + 'px';
        logo.style.top = position.y + 'px';

        console.log(`Logo ${index} positioned at:`, position.x, position.y);
    });

    console.log('Floating logos initialized with', logoData.length, 'positions');

    // Initialize velocities for each logo
    logoData.forEach(data => {
        data.velocity = {
            x: (Math.random() - 0.5) * 0.5,
            y: (Math.random() - 0.5) * 0.5
        };
    });

    // Physics-based animation with collision detection
    function animate() {
        logoData.forEach((data, i) => {
            // Update position based on velocity
            let newX = data.current.x + data.velocity.x;
            let newY = data.current.y + data.velocity.y;

            // Bounce off container walls
            if (newX <= padding || newX >= containerWidth - logoSize - padding) {
                data.velocity.x *= -1;
                newX = Math.max(padding, Math.min(containerWidth - logoSize - padding, newX));
            }
            if (newY <= padding || newY >= containerHeight - logoSize - padding) {
                data.velocity.y *= -1;
                newY = Math.max(padding, Math.min(containerHeight - logoSize - padding, newY));
            }

            // Check collision with other logos
            logoData.forEach((other, j) => {
                if (i === j) return;

                const dx = newX - other.current.x;
                const dy = newY - other.current.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // If logos are colliding
                if (distance < minSpacing) {
                    // Calculate collision normal
                    const nx = dx / distance;
                    const ny = dy / distance;

                    // Separate logos to prevent overlap
                    const overlap = minSpacing - distance;
                    newX += nx * overlap * 0.5;
                    newY += ny * overlap * 0.5;

                    // Reflect velocity (bounce)
                    const dotProduct = data.velocity.x * nx + data.velocity.y * ny;
                    data.velocity.x -= 2 * dotProduct * nx;
                    data.velocity.y -= 2 * dotProduct * ny;

                    // Add some damping to reduce energy
                    data.velocity.x *= 0.8;
                    data.velocity.y *= 0.8;
                }
            });

            // Apply gentle pull back towards base position (like a spring)
            const toBaseX = data.base.x - newX;
            const toBaseY = data.base.y - newY;
            const distanceFromBase = Math.sqrt(toBaseX * toBaseX + toBaseY * toBaseY);

            if (distanceFromBase > moveRange) {
                // Pull back more strongly if too far from base
                data.velocity.x += toBaseX * 0.01;
                data.velocity.y += toBaseY * 0.01;
            } else {
                // Gentle drift back to base
                data.velocity.x += toBaseX * 0.002;
                data.velocity.y += toBaseY * 0.002;
            }

            // Add small random drift
            data.velocity.x += (Math.random() - 0.5) * 0.05;
            data.velocity.y += (Math.random() - 0.5) * 0.05;

            // Limit maximum velocity
            const maxVelocity = 1.5;
            const speed = Math.sqrt(data.velocity.x ** 2 + data.velocity.y ** 2);
            if (speed > maxVelocity) {
                data.velocity.x = (data.velocity.x / speed) * maxVelocity;
                data.velocity.y = (data.velocity.y / speed) * maxVelocity;
            }

            // Update position
            data.current.x = newX;
            data.current.y = newY;
            data.element.style.left = newX + 'px';
            data.element.style.top = newY + 'px';
        });

        requestAnimationFrame(animate);
    }

    // Start animation
    animate();
}

// Initialize floating logos when page loads
document.addEventListener('DOMContentLoaded', initFloatingLogos);

// Re-initialize on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        initFloatingLogos();
    }, 250);
});
