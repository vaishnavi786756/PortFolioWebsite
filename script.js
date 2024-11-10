// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Toggle Mobile Menu
const mobileMenuButton = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
} else {
    console.error('Mobile menu button or menu not found.');
}

// Form Validation
const form = document.getElementById('newsletter-form');

if (form) {
    form.addEventListener('submit', (e) => {
        const emailInput = document.getElementById('mail');
        if (emailInput && (!emailInput.value || !validateEmail(emailInput.value))) {
            alert('Please enter a valid email address.');
            e.preventDefault();
        }
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Skill Bar Animation
document.addEventListener('scroll', () => {
    const skillBars = document.querySelectorAll('.skill-bar .skill-level');
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            bar.style.width = bar.getAttribute('data-skill-level') + '%';
        }
    });
});
