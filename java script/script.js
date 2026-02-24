import { neon } from '@netlify/neon';
const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
const [post] = await sql`SELECT * FROM posts WHERE id = ${postId}`;

// Navbar Toggle untuk Mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Menutup menu mobile ketika link diklik
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll untuk navigasi
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

// Animasi progress bar ketika di-scroll
const skillSection = document.querySelector('.skills');
const progressBars = document.querySelectorAll('.progress');

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.style.width;
        progressBar.style.width = '0%';
        setTimeout(() => {
            progressBar.style.width = value;
        }, 500);
    });
}

function hideProgress() {
    progressBars.forEach(progressBar => {
        progressBar.style.width = '0%';
    });
}

window.addEventListener('scroll', () => {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if (sectionPos < screenPos) {
        showProgress();
    } else {
        hideProgress();
    }
});

// Form submission handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Mengambil nilai form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Validasi sederhana
    if (name && email && subject && message) {
        // Simulasi pengiriman data
        alert('Terima kasih! Pesan Anda telah terkirim.');
        contactForm.reset();
    } else {
        alert('Mohon lengkapi semua field!');
    }
});

// Download CV handler
const downloadBtn = document.getElementById('downloadCV');

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Simulasi download CV
    alert('Fitur download CV akan segera tersedia!');
    
    // Contoh implementasi download file
    // const link = document.createElement('a');
    // link.href = 'path/to/your/cv.pdf';
    // link.download = 'CV_John_Doe.pdf';
    // link.click();
});

// Animasi fade in ketika scroll
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

// Menerapkan animasi ke setiap section
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.boxShadow = 'var(--shadow)';
    }
});

// Typing effect untuk profession
const professionElement = document.querySelector('.profession');
const professions = ['Web Developer', 'UI Designer', 'Freelancer'];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentProfession = professions[professionIndex];
    
    if (isDeleting) {
        professionElement.textContent = currentProfession.substring(0, charIndex - 1);
        charIndex--;
    } else {
        professionElement.textContent = currentProfession.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentProfession.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        professionIndex = (professionIndex + 1) % professions.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

// Mulai typing effect
if (professionElement) {
    setTimeout(typeEffect, 1000);
}

// Mengganti gambar profile (opsional)
const profileImage = document.getElementById('profileImage');
profileImage.addEventListener('mouseenter', () => {
    profileImage.style.transform = 'scale(1.05)';
    profileImage.style.transition = 'transform 0.3s ease';
});

profileImage.addEventListener('mouseleave', () => {
    profileImage.style.transform = 'scale(1)';
});
