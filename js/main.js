// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Smooth Scrolling for Anchor Links
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

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

// Observe elements for scroll reveal
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Button Click Handlers
document.addEventListener('DOMContentLoaded', () => {
    // Free Wash Button Clicks
    const freeWashButtons = document.querySelectorAll('.free-wash-btn, .btn-primary');
    freeWashButtons.forEach(button => {
        if (button.textContent.includes('FREE WASH')) {
            button.addEventListener('click', () => {
                // Redirect to free wash page
                window.location.href = 'free-wash.html';
            });
        }
    });

    // Join Unlimited Club Button
    const unlimitedButtons = document.querySelectorAll('.btn-secondary');
    unlimitedButtons.forEach(button => {
        if (button.textContent.includes('UNLIMITED')) {
            button.addEventListener('click', () => {
                // Redirect to unlimited plans page
                window.location.href = 'unlimited.html';
            });
        }
    });

    // Apply Now Button
    const applyButton = document.querySelector('.apply-btn');
    if (applyButton) {
        applyButton.addEventListener('click', () => {
            // Redirect to careers page
            window.location.href = 'careers.html';
        });
    }

    // Location Menu Buttons
    const locationButtons = document.querySelectorAll('.location-btn');
    locationButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const locationCard = e.target.closest('.location-card');
            const locationName = locationCard.querySelector('.location-name').textContent.toLowerCase().replace(' ', '-');
            // Redirect to location-specific menu page
            window.location.href = `menu-${locationName}.html`;
        });
    });
});

// Form Validation (for future forms)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Email Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Phone Validation
function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,49}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Show Loading State
function showLoading(button) {
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Loading...';
    
    return () => {
        button.disabled = false;
        button.textContent = originalText;
    };
}

// Show Success Message
function showSuccessMessage(message) {
    const toast = document.createElement('div');
    toast.className = 'toast toast-success';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Show Error Message
function showErrorMessage(message) {
    const toast = document.createElement('div');
    toast.className = 'toast toast-error';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}