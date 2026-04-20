AOS.init({
    once: true,
    mirror: false
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Hamburger Menu Toggle
const hamburgerToggle = document.getElementById('hamburgerToggle');
const navMenu = document.getElementById('navbarNav');

if (hamburgerToggle && navMenu) {
    hamburgerToggle.addEventListener('click', () => {
        const isOpen = hamburgerToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
        hamburgerToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a nav link is clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerToggle.classList.remove('active');
            navMenu.classList.remove('open');
            hamburgerToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
}

tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        ferrari: '#EF3340',
                        carbon: '#1A1A1A',
                        offwhite: '#F8F9FA'
                    },
                    fontFamily: {
                        orbitron: ['Orbitron', 'sans-serif'],
                        inter: ['Inter', 'sans-serif'],
                    },
                    backgroundImage: {
                        'ferrari-bg': `
                        linear-gradient(to bottom, transparent 60%, #000 100%),
                        repeating-linear-gradient(
                            90deg,
                            rgba(255,255,255,0.03) 0px,
                            rgba(255,255,255,0.03) 2px,
                            transparent 2px,
                            transparent 6px
                        ),
                        linear-gradient(90deg, #7a0000, #EF3340, #1a0000)
                        `
                    },
                    backgroundSize: {
                        'dots': '6px 6px',
                    }
                }
            }
        }