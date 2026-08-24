document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. NAVBAR SCROLL STICKY
  // ==========================================
  const navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('bg-[#FFF6EA]/95', 'backdrop-blur-md', 'shadow-sm', 'h-16');
      navbar.classList.remove('h-20');
    } else {
      navbar.classList.remove('bg-[#FFF6EA]/95', 'backdrop-blur-md', 'shadow-sm', 'h-16');
      navbar.classList.add('h-20');
    }
  });

  // ==========================================
  // 2. MENÚ INMERSIVO (100% OVERLAY)
  // ==========================================
  const immersiveMenu = document.getElementById('immersive-menu');
  const openMenuBtn = document.getElementById('open-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');

  function openMenu() {
    immersiveMenu.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    immersiveMenu.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  if (openMenuBtn) openMenuBtn.addEventListener('click', openMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);

  // Acordeón interno de Sedes dentro del menú
  const toggleSedesBtn = document.getElementById('toggle-sedes-sub');
  const sedesSubMenu = document.getElementById('sedes-sub-menu');
  const sedesChevron = document.getElementById('sedes-chevron');

  if (toggleSedesBtn) {
    toggleSedesBtn.addEventListener('click', () => {
      sedesSubMenu.classList.toggle('hidden');
      sedesChevron.classList.toggle('rotate-180');
    });
  }

  // ==========================================
  // 3. CARRUSEL INTERACTIVO DE SEDES
  // ==========================================
  const sedesCards = document.querySelectorAll('.sede-card');
  const prevSedeBtn = document.getElementById('prev-sede-btn');
  const nextSedeBtn = document.getElementById('next-sede-btn');
  const sedeCounter = document.getElementById('sede-counter');
  const dots = document.querySelectorAll('.sede-dot');
  let currentSedeIndex = 0;

  function updateSedeView(index) {
    currentSedeIndex = (index + sedesCards.length) % sedesCards.length;
    
    sedesCards.forEach((card, idx) => {
      if (idx === currentSedeIndex) {
        card.classList.add('ring-2', 'ring-[#F0A800]', 'scale-[1.02]');
        card.classList.remove('opacity-60');
      } else {
        card.classList.remove('ring-2', 'ring-[#F0A800]', 'scale-[1.02]');
        card.classList.add('opacity-60');
      }
    });

    dots.forEach((dot, idx) => {
      if (idx === currentSedeIndex) {
        dot.className = 'sede-dot w-2.5 h-2.5 rounded-full bg-[#343434] transition-all';
      } else {
        dot.className = 'sede-dot w-2 h-2 rounded-full bg-[#343434]/30 transition-all';
      }
    });

    if (sedeCounter) {
      sedeCounter.textContent = `0${currentSedeIndex + 1} - 03`;
    }
  }

  if (prevSedeBtn && nextSedeBtn) {
    prevSedeBtn.addEventListener('click', () => updateSedeView(currentSedeIndex - 1));
    nextSedeBtn.addEventListener('click', () => updateSedeView(currentSedeIndex + 1));
  }

  // ==========================================
  // 4. SUITES TABS / SWITCHER
  // ==========================================
  const suiteData = {
    'un-ambiente': {
      title: 'Suite Premium',
      desc: 'Diseñadas bajo una geometría orgánica fluida, nuestras suites ofrecen un refugio de minimalismo editorial y confort curado.',
      quote: '"Un santuario de descanso pensado para el viajero moderno."',
      price: '$120',
      img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80'
    },
    'dos-ambientes': {
      title: 'Suite Ejecutiva Dúplex',
      desc: 'Espacio ampliado con sala de reuniones privada, lencería de alta gama y área de descanso independiente.',
      quote: '"La combinación perfecta entre productividad y bienestar de alto nivel."',
      price: '$170',
      img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80'
    }
  };

  window.switchSuite = function(type) {
    const btnUn = document.getElementById('btn-un-ambiente');
    const btnDos = document.getElementById('btn-dos-ambientes');
    const title = document.getElementById('suite-title');
    const desc = document.getElementById('suite-desc');
    const quote = document.getElementById('suite-quote');
    const price = document.getElementById('suite-price');
    const img = document.getElementById('suite-img');

    if (!btnUn || !btnDos) return;

    if (type === 'un-ambiente') {
      btnUn.className = 'px-5 py-1.5 rounded-full text-xs font-bold border border-[#343434] bg-[#343434] text-white transition-all shadow-sm';
      btnDos.className = 'px-5 py-1.5 rounded-full text-xs font-bold border border-[#343434]/30 bg-transparent text-[#343434] hover:border-[#343434] transition-all';
    } else {
      btnDos.className = 'px-5 py-1.5 rounded-full text-xs font-bold border border-[#343434] bg-[#343434] text-white transition-all shadow-sm';
      btnUn.className = 'px-5 py-1.5 rounded-full text-xs font-bold border border-[#343434]/30 bg-transparent text-[#343434] hover:border-[#343434] transition-all';
    }

    img.style.opacity = '0';
    setTimeout(() => {
      title.textContent = suiteData[type].title;
      desc.textContent = suiteData[type].desc;
      quote.textContent = suiteData[type].quote;
      price.textContent = suiteData[type].price;
      img.src = suiteData[type].img;
      img.style.opacity = '1';
    }, 200);
  };

  // ==========================================
  // 5. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQS)
  // ==========================================
  window.toggleFaq = function(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('i');
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-45');
  };

  // ==========================================
  // 6. LIGHTBOX MODAL PARA IMÁGENES
  // ==========================================
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');

  window.openLightbox = function(el) {
    const img = el.querySelector('img');
    if (!img) return;
    lightboxImg.src = img.src;
    lightboxModal.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function() {
    lightboxModal.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  };

  // ==========================================
  // 7. MOTOR INTERSECTION OBSERVER (ANIMACIONES)
  // ==========================================
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});
