// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add active class to nav links on scroll and handle nav background
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const nav = document.querySelector('nav');
    
    // Handle navigation background
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
  
  // Add parallax effect to background images
  window.addEventListener('scroll', () => {
    const landing = document.querySelector('#landing');
    const info = document.querySelector('#info');
    const scrolled = window.pageYOffset;
    
    landing.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    info.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
  });

  document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
  
    menuItems.forEach(item => {
      observer.observe(item);
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    nav.classList.add('visible');
  });
  