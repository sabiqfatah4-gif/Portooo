// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = document.querySelectorAll('.section');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Smooth scrolling and active section
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Update active link
            document.querySelector('.nav-link.active')?.classList.remove('active');
            this.classList.add('active');
            
            // Show target section
            sections.forEach(section => section.classList.remove('active'));
            document.querySelector(targetId)?.classList.add('active');
            
            // Close mobile menu
            closeMobileMenu();
        });
    });
    
    // Mobile menu toggle
    mobileToggle.addEventListener('click', toggleMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);
    
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        mobileToggle.querySelector('i').classList.toggle('fa-bars');
        mobileToggle.querySelector('i').classList.toggle('fa-times');
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        mobileToggle.querySelector('i').classList.add('fa-bars');
        mobileToggle.querySelector('i').classList.remove('fa-times');
    }
    
    // Theme toggle
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'light') {
        themeToggle.classList.add('active');
    }
    
    themeToggle.addEventListener('click', function() {
        const body = document.documentElement;
        const isDark = body.getAttribute('data-theme') === 'dark';
        
        body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeToggle.classList.toggle('active');
        
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
});