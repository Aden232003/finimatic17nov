// ============================================
// NAVIGATION BAR
// ============================================

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const navbar = document.querySelector('.navbar');

if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link, .mobile-menu-cta');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// Navbar scroll behavior
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

            // Check if this is the smooth-scroll-cta (slow auto-scroll)
            if (this.classList.contains('smooth-scroll-cta')) {
                // Slow, gradual scroll that lets users see content
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 3500; // 3.5 seconds for slow scroll
                let startTime = null;

                function easeInOutCubic(t) {
                    return t < 0.5
                        ? 4 * t * t * t
                        : 1 - Math.pow(-2 * t + 2, 3) / 2;
                }

                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    const ease = easeInOutCubic(progress);

                    window.scrollTo(0, startPosition + distance * ease);

                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }

                requestAnimationFrame(animation);
            } else {
                // Regular smooth scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: Unobserve after animation to improve performance
            // animationObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with scroll animation classes
const animatedElements = document.querySelectorAll(
    '.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale'
);

animatedElements.forEach(el => {
    animationObserver.observe(el);
});

// ============================================
// PIPELINE SECTION ANIMATION
// ============================================

const pipelineSection = document.querySelector('.pipeline-section');

if (pipelineSection) {
    const pipelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after triggering animation
                pipelineObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    pipelineObserver.observe(pipelineSection);
}

// ============================================
// FAQ ACCORDION
// ============================================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-q');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all FAQ items
        faqItems.forEach(faq => {
            faq.classList.remove('active');
        });

        // If it wasn't active, open it
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ============================================
// VIDEO PLACEHOLDER INTERACTION
// ============================================

const videoPlaceholder = document.querySelector('.video-placeholder');

if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
        // Replace this with your actual VSL video embed
        alert('⚠️ Action Required!\n\nReplace the placeholder with your VSL video.\n\nUpdate line 98 in index.html with your video embed URL.');

        // Example of how to replace the placeholder with an actual video:
        // const container = document.querySelector('.vsl-video-container');
        // container.innerHTML = '<iframe src="YOUR_VSL_URL" width="100%" height="100%" frameborder="0" allowfullscreen style="aspect-ratio: 16/9; border: 4px solid var(--border);"></iframe>';
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

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

// ============================================
// FILTER LIST ITEM ANIMATIONS
// ============================================

const filterItems = document.querySelectorAll('.filter-list li');

filterItems.forEach((item, index) => {
    // Stagger the animation on scroll
    item.style.transitionDelay = `${index * 0.1}s`;

    // Add click animation
    item.addEventListener('click', () => {
        item.style.transform = 'translate(-3px, -3px) scale(1.05)';
        setTimeout(() => {
            item.style.transform = '';
        }, 200);
    });
});

// ============================================
// FEATURE CARD ANIMATIONS
// ============================================

const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach((card, index) => {
    // Stagger scroll animation
    card.style.transitionDelay = `${index * 0.15}s`;

    // Enhanced hover effect
    card.addEventListener('mouseenter', () => {
        const number = card.querySelector('.feature-number');
        if (number) {
            number.style.transform = 'scale(1.1) rotate(-5deg)';
        }
    });

    card.addEventListener('mouseleave', () => {
        const number = card.querySelector('.feature-number');
        if (number) {
            number.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// ============================================
// CASE STUDY CARD HOVER EFFECTS
// ============================================

const caseStudyCards = document.querySelectorAll('.case-study-card');

caseStudyCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Pause video on hover (if you want)
        const iframe = card.querySelector('iframe');
        if (iframe && iframe.src.includes('autoplay=0')) {
            // Play video on hover
            iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1');
        }
    });
});

// ============================================
// SAMPLE CARDS ANIMATION
// ============================================

const sampleCards = document.querySelectorAll('.sample-card');

sampleCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;

    // Add tilt effect on hover
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `translate(-3px, -3px) scale(1.02) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ============================================
// STAT BOX COUNTER ANIMATION
// ============================================

const statBoxes = document.querySelectorAll('.stat-box');

const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('animated')) {
                statNumber.classList.add('animated');

                // Animate numbers (if they're numeric)
                const text = statNumber.textContent.trim();
                const numericPart = parseInt(text);

                // Only animate if it's a pure number (no letters or special chars except at the end)
                if (!isNaN(numericPart) && /^\d+$/.test(text)) {
                    statNumber.textContent = '0';
                    animateCounter(statNumber, numericPart);
                }
                // For text with suffixes like "300M+" or "AI-First", just keep as is
            }
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statBoxes.forEach(box => {
    statObserver.observe(box);

    // Add hover effect
    box.addEventListener('mouseenter', () => {
        const number = box.querySelector('.stat-number');
        if (number) {
            number.style.transform = 'scale(1.15)';
            number.style.transition = 'transform 0.3s ease';
        }
    });

    box.addEventListener('mouseleave', () => {
        const number = box.querySelector('.stat-number');
        if (number) {
            number.style.transform = 'scale(1)';
        }
    });
});

// ============================================
// STEP CARD ANIMATIONS
// ============================================

const stepCards = document.querySelectorAll('.step-card');

stepCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-30px)';
    card.style.transition = 'all 0.6s ease';

    // Animate on scroll
    const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 150);
                stepObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    stepObserver.observe(card);

    // Hover effect
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateX(5px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateX(0)';
    });
});

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to document
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// VIDEO MUTE ON LOAD (for autoplay videos)
// ============================================

window.addEventListener('load', () => {
    // Mute all autoplay videos
    const autoplayVideos = document.querySelectorAll('iframe[src*="autoplay=1"]');
    autoplayVideos.forEach(video => {
        if (!video.src.includes('mute=1')) {
            video.src = video.src + '&mute=1';
        }
    });
});

// ============================================
// PLAYBOOK VIDEOS (Now using YouTube iframes)
// ============================================

// Video metadata and interactivity handled in videoMetadata.js

// ============================================
// RESULTS IMAGE MODAL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.modal-close');
    const resultImages = document.querySelectorAll('.result-image');

    // Open modal when clicking on result images
    resultImages.forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            modal.style.display = 'block';
            modalImg.src = img.src;
            modalCaption.textContent = img.alt;
        });
    });

    // Close modal when clicking the X
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});

// ============================================
// BENCHMARK MASTER TOGGLE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const masterContainer = document.querySelector('.benchmark-master-container');
    const masterToggle = document.querySelector('.benchmark-master-toggle');

    if (masterToggle && masterContainer) {
        masterToggle.addEventListener('click', () => {
            masterContainer.classList.toggle('active');
        });
    }
});

// ============================================
// BENCHMARK ACCORDION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.benchmark-accordion');

    accordions.forEach(accordion => {
        const trigger = accordion.querySelector('.accordion-trigger');

        if (trigger) {
            trigger.addEventListener('click', () => {
                // Toggle active state
                const isActive = accordion.classList.contains('active');

                // Close all accordions
                accordions.forEach(acc => {
                    acc.classList.remove('active');
                });

                // If it wasn't active, open it
                if (!isActive) {
                    accordion.classList.add('active');
                }
            });
        }
    });
});

// ============================================
// CONSOLE LOGS
// ============================================

console.log('✅ Finimatic Landing Page Loaded!');
console.log('📝 TODO:');
console.log('  1. Replace VSL video placeholder (line 98 in index.html)');
console.log('  2. Replace chart animation video ID (line 98 in index.html)');
console.log('  3. Replace work sample videos with your actual content');
console.log('  4. Update video titles, views, likes, and comments in The Playbook section');
console.log('  5. Update Calendly link (line 381 in index.html)');
console.log('');
console.log('🎨 Green accents and scroll animations are active!');
console.log('✨ Hover over any element to see the animations');
console.log('🎬 Hover over Playbook videos to see them play!');
