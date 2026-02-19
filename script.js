// Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, input, select').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1.8)';
      ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
      ring.style.opacity = '0.3';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.opacity = '0.6';
    });
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  // Stagger children inside grids
  document.querySelectorAll('.features-grid, .services-row, .testimonials-grid').forEach(grid => {
    grid.querySelectorAll('.reveal').forEach((card, i) => {
      card.style.transitionDelay = (i * 0.12) + 's';
    });
  });

  // Nav scroll effect
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.style.background = 'rgba(8,8,8,0.97)';
      nav.style.backdropFilter = 'blur(10px)';
    } else {
      nav.style.background = 'linear-gradient(to bottom, rgba(8,8,8,0.95), transparent)';
      nav.style.backdropFilter = 'none';
    }
  });

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });