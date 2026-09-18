document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 0. CONTROL DE AUDIO HERO VIDEO
  // ==========================================
  const heroVideo = document.getElementById('hero-video');
  const heroAudioBtn = document.getElementById('hero-audio-btn');
  const heroAudioIcon = document.getElementById('hero-audio-icon');
  const heroAudioText = document.getElementById('hero-audio-text');

  if (heroVideo) {
    heroVideo.muted = false;

    const updateHeroAudioUI = (isMuted) => {
      if (heroAudioIcon && heroAudioText) {
        if (isMuted) {
          heroAudioIcon.className = 'fa-solid fa-volume-xmark text-white/70';
          heroAudioText.textContent = 'Silenciado';
        } else {
          heroAudioIcon.className = 'fa-solid fa-volume-high text-[#FFD573]';
          heroAudioText.textContent = 'Audio activo';
        }
      }
    };

    // Intentar reproducir con audio desmuteado
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          updateHeroAudioUI(heroVideo.muted);
        })
        .catch(() => {
          // Si el navegador restringe autoplay con sonido, iniciar en mute y activar al primer gesto
          heroVideo.muted = true;
          heroVideo.play().catch(() => {});
          updateHeroAudioUI(true);

          const enableAudioOnGesture = () => {
            heroVideo.muted = false;
            updateHeroAudioUI(false);
            window.removeEventListener('click', enableAudioOnGesture);
            window.removeEventListener('touchstart', enableAudioOnGesture);
            window.removeEventListener('keydown', enableAudioOnGesture);
          };

          window.addEventListener('click', enableAudioOnGesture, { once: true });
          window.addEventListener('touchstart', enableAudioOnGesture, { once: true });
          window.addEventListener('keydown', enableAudioOnGesture, { once: true });
        });
    }

    if (heroAudioBtn) {
      heroAudioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        heroVideo.muted = !heroVideo.muted;
        if (!heroVideo.muted) {
          heroVideo.play().catch(() => {});
        }
        updateHeroAudioUI(heroVideo.muted);
      });
    }
  }

  // ==========================================
  // 1. NAVBAR MORPHING FLOATING ISLAND
  // ==========================================
  const navbar = document.getElementById('main-navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 45) {
      navbar.classList.remove('navbar-default');
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
      navbar.classList.add('navbar-default');
    }
  }, { passive: true });

  // ==========================================
  // 2. MENÚ INMERSIVO (100% OVERLAY)
  // ==========================================
  const immersiveMenu = document.getElementById('immersive-menu');
  const openMenuBtn = document.getElementById('open-menu-btn');
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
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
  if (menuToggleBtn) menuToggleBtn.addEventListener('click', openMenu);
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
  // 3. CONTROLADORES SECCIÓN SEDES Y MODAL INMERSIVO
  // ==========================================
  const sedesData = [
    {
      id: 0,
      title: "Hotel Kariña Maturín",
      tagline: "El resort insignia del Oriente Venezolano con parque acuático, gastronomía de autor y salones corporativos.",
      address: "Urbanización Palma Real, Etapa II, Macroparcela MC-30, Maturín, Edo. Monagas.",
      mapsUrl: "https://maps.google.com/?cid=370127326196523800",
      phone: "+58 0424-9169601",
      images: [
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Principales-Homepage/Area-Hotel-Karina-Maturin.webp", caption: "Área y Fachada Principal Maturín" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Piscina-Maturin-Main.webp", caption: "Piscina Principal Resort Maturín" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Piscina-Maturin-2.webp", caption: "Complejo de Piscinas y Palmeras" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Moriche-Restaurant.webp", caption: "Moriche Restaurant — Cocina de Autor" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Bar-En-Maturin.webp", caption: "Oh My Bar Bistro — Coctelería y Lounge" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Cervezas-En-Maturin-Padel.webp", caption: "Master Pádel y Ambiente Social" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Brulee-Pasteleria-Maturin.webp", caption: "Brûlée Pastelería Palma Real" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/La-PalmeraRestobar.webp", caption: "La Palmera Restobar Club" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Lagos-Restaurant.webp", caption: "Lagos Restaurant Club" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Salon-Maturin.webp", caption: "Salones Corporativos y Eventos" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Parque-Master-Padel.webp", caption: "Parque Infantil Master Pádel" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Parque-Club-Palma-Real.webp", caption: "Parque Infantil Club Palma Real" }
      ]
    },
    {
      id: 1,
      title: "Kariña Punta de Mata",
      tagline: "Un oasis de privacidad estratégica y tranquilidad rodeado de áreas verdes, perfecto para ejecutivos.",
      address: "Sector Zona Industrial, Ramal 7, al lado del Depósito Empresas Polar, Punta de Mata, Edo. Monagas.",
      mapsUrl: "https://maps.google.com/?cid=9643206305083018040",
      phone: "+58 0424-9169602",
      images: [
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Principales-Homepage/FACHADA-PRINCIPAL-PUNTADEMATA.webp", caption: "Fachada Principal Punta de Mata" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Punta-de-Mata/Piscina-en-Punta-de-Mata.webp", caption: "Piscina Central y Solárium" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Punta-de-Mata/Piscina-Familiar-Punta-de-Mata.webp", caption: "Piscina Familiar y Day Pass" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Punta-de-Mata/Restaurante-Hamburguesa-Puntade-Mata.webp", caption: "Gastronomía Artesanal — Two Chefs Restaurant" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Principales-Homepage/Cliente-Corporativo.webp", caption: "Espacios Corporativos y Coworking" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Punta-de-Mata/lobby-ptamata.webp", caption: "Lobby Principal y Recepción VIP" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Punta-de-Mata/Restaurant-ptmata.webp", caption: "Two Chefs Restaurant" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Punta-de-Mata/fachada-int-1.webp", caption: "Jardines y Fachadas Interiores" }
      ]
    },
    {
      id: 2,
      title: "Hotel Kariña El Tigre",
      tagline: "Centro neurálgico para eventos corporativos, banquetes y alojamiento de alta gama en la Mesa de Guanipa.",
      address: "Avenida Ruiz Pineda, a 100mts del Balancín Tricolor, cruce con Calle 23 de Enero, El Tigre, Edo. Anzoátegui.",
      mapsUrl: "https://maps.google.com/?cid=12057092587787417265",
      phone: "+58 0424-9169603",
      images: [
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Principales-Homepage/Piscina-Principal-El-Tigre.webp", caption: "Piscina Principal" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondades-El-Tigre/Fachada-Atardecer-Guanipa.webp", caption: "Fachada Principal al Atardecer" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Lobby-el-Tigre/Lobby--El-Tigre-1.webp", caption: "Lobby Principal y Recepción" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondades-El-Tigre/Centro-de-Negocios-El-Tigre.webp", caption: "Centro de Negocios y Espacios Corporativos" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondades-El-Tigre/Gimnasio-El-Tigre.webp", caption: "Gimnasio y Bienestar" },
        { src: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondades-El-Tigre/Paella-En-El-Tigre.webp", caption: "Gastronomía de Autor y 283 Restaurante" }
      ]
    }
  ];

  let currentActiveSede = 0;
  let currentModalSede = 0;

  window.navigateSede = function(direction) {
    const total = sedesData.length;
    currentActiveSede = (currentActiveSede + direction + total) % total;
    updateCarouselCounter();
    openSedeModal(currentActiveSede);
  };

  window.navigateSedeInModal = function(direction) {
    const total = sedesData.length;
    currentModalSede = (currentModalSede + direction + total) % total;
    currentActiveSede = currentModalSede;
    
    updateCarouselCounter();

    const wrapper = document.getElementById('modal-content-wrapper');
    if (wrapper) wrapper.classList.add('is-switching');

    setTimeout(() => {
      populateModalData(currentModalSede);
      if (wrapper) wrapper.classList.remove('is-switching');
    }, 140);
  };

  function updateCarouselCounter() {
    const dots = document.querySelectorAll('.sede-dot');
    const counter = document.getElementById('sede-counter');

    dots.forEach((dot, idx) => {
      if (idx === currentActiveSede) {
        dot.className = 'sede-dot w-2.5 h-2.5 rounded-full bg-karina-charcoal transition-all';
      } else {
        dot.className = 'sede-dot w-2 h-2 rounded-full bg-karina-charcoal/30 transition-all';
      }
    });

    if (counter) {
      counter.textContent = `0${currentActiveSede + 1} - 03`;
    }
  }

  function populateModalData(index) {
    const sede = sedesData[index];
    const modalTitle = document.getElementById('modal-title');
    const modalTagline = document.getElementById('modal-tagline');
    const modalAddress = document.getElementById('modal-address');
    const modalMapsLink = document.getElementById('modal-maps-link');
    const modalCounterText = document.getElementById('modal-counter-text');
    const phoneLink = document.getElementById('modal-phone-link');

    if (modalTitle) modalTitle.textContent = sede.title;
    if (modalTagline) modalTagline.textContent = sede.tagline;
    if (modalAddress) modalAddress.textContent = sede.address;
    if (modalMapsLink) modalMapsLink.href = sede.mapsUrl;
    if (modalCounterText) modalCounterText.textContent = `0${index + 1} / 03`;
    
    if (phoneLink) {
      phoneLink.textContent = sede.phone;
      phoneLink.href = `tel:${sede.phone.replace(/[^0-9+]/g, '')}`;
    }

    // Botón de acción Sede / Catálogo Suites
    const exploreBtn = document.getElementById('modal-explore-sede-link') || document.querySelector('#sede-modal a[href="#suites"], #sede-modal a[href="el-tigre.html"], #sede-modal a[href="maturin.html"], #sede-modal a[href="punta-de-mata.html"]');
    const exploreText = document.getElementById('modal-explore-sede-text');
    if (exploreBtn) {
      exploreBtn.removeAttribute('onclick');
      if (index === 0) {
        exploreBtn.href = "maturin.html";
        if (exploreText) {
          exploreText.innerHTML = `Explorar Sede Maturín <i class="fa-solid fa-arrow-right text-[10px] ml-1"></i>`;
        } else {
          exploreBtn.innerHTML = `<span>Explorar Sede Maturín</span> <i class="fa-solid fa-arrow-right text-[10px] ml-1"></i>`;
        }
      } else if (index === 1) {
        exploreBtn.href = "punta-de-mata.html";
        if (exploreText) {
          exploreText.innerHTML = `Explorar Sede Punta de Mata <i class="fa-solid fa-arrow-right text-[10px] ml-1"></i>`;
        } else {
          exploreBtn.innerHTML = `<span>Explorar Sede Punta de Mata</span> <i class="fa-solid fa-arrow-right text-[10px] ml-1"></i>`;
        }
      } else if (index === 2) {
        exploreBtn.href = "el-tigre.html";
        if (exploreText) {
          exploreText.innerHTML = `Explorar Sede El Tigre <i class="fa-solid fa-arrow-right text-[10px] ml-1"></i>`;
        } else {
          exploreBtn.innerHTML = `<span>Explorar Sede El Tigre</span> <i class="fa-solid fa-arrow-right text-[10px] ml-1"></i>`;
        }
      }
    }

    const thumbContainer = document.getElementById('modal-thumbnails-container');
    if (thumbContainer && sede.images) {
      const cols = sede.images.length >= 6 ? 6 : (sede.images.length >= 4 ? sede.images.length : 4);
      thumbContainer.className = `grid grid-cols-${cols} gap-2 pt-1`;
      thumbContainer.innerHTML = sede.images.map((img, i) => `
        <button onclick="setModalImage(${i})" class="thumb-btn ${i === 0 ? 'is-active-thumb' : ''} aspect-square rounded-xl overflow-hidden border-2 border-transparent focus:ring-1 focus:ring-karina-blue">
          <img id="thumb-${i}" src="${img.src}" class="w-full h-full object-cover" alt="${img.caption}">
        </button>
      `).join('');
    } else {
      for (let i = 0; i < 4; i++) {
        const thumb = document.getElementById(`thumb-${i}`);
        if (thumb && sede.images[i]) {
          thumb.src = sede.images[i].src;
        }
      }
    }

    setModalImage(0);
  }

  window.openSedeModal = function(index) {
    currentModalSede = index;
    currentActiveSede = index;
    updateCarouselCounter();
    populateModalData(index);

    const modal = document.getElementById('sede-modal');
    if (modal) {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  };

  window.setModalImage = function(imgIndex) {
    const sede = sedesData[currentModalSede];
    const mainImg = document.getElementById('modal-main-image');
    const caption = document.getElementById('modal-image-caption');
    const thumbs = document.querySelectorAll('.thumb-btn');

    if (mainImg && sede.images[imgIndex]) {
      mainImg.style.opacity = '0.3';
      setTimeout(() => {
        mainImg.src = sede.images[imgIndex].src;
        if (caption) caption.textContent = sede.images[imgIndex].caption;
        mainImg.style.opacity = '1';
      }, 100);
    }

    thumbs.forEach((t, i) => {
      if (i === imgIndex) {
        t.classList.add('is-active-thumb');
      } else {
        t.classList.remove('is-active-thumb');
      }
    });
  };

  window.closeSedeModal = function() {
    const modal = document.getElementById('sede-modal');
    if (modal) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  };

  window.closeSedeModalOnBackdrop = function(e) {
    if (e.target.id === 'sede-modal') {
      closeSedeModal();
    }
  };

  // Escuchador de teclado (ESC y Flechas Lateral)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (immersiveMenu && !immersiveMenu.classList.contains('opacity-0')) {
        closeMenu();
      }
      const sedeModal = document.getElementById('sede-modal');
      if (sedeModal && sedeModal.classList.contains('is-open')) closeSedeModal();
      const suiteModal = document.getElementById('suite-modal');
      if (suiteModal && suiteModal.classList.contains('is-open')) closeSuiteModal();
      const viveModal = document.getElementById('vive-lightbox-modal');
      if (viveModal && viveModal.classList.contains('is-open')) closeViveLightbox();
      const dpModal = document.getElementById('daypass-modal');
      if (dpModal && dpModal.classList.contains('is-open')) closeDayPassModal();
      const cartDrawer = document.getElementById('cart-drawer');
      if (cartDrawer && !cartDrawer.classList.contains('translate-x-full')) toggleCartDrawer(false);
      closeModal('modal-video');
      closeModal('modal-colaborar');
      closeModal('modal-lightbox');
    }
    const sedeModal = document.getElementById('sede-modal');
    if (sedeModal && sedeModal.classList.contains('is-open')) {
      if (e.key === 'ArrowLeft') navigateSedeInModal(-1);
      if (e.key === 'ArrowRight') navigateSedeInModal(1);
    }
    const suiteModal = document.getElementById('suite-modal');
    if (suiteModal && suiteModal.classList.contains('is-open')) {
      if (e.key === 'ArrowLeft') navigateSuiteInModal(-1);
      if (e.key === 'ArrowRight') navigateSuiteInModal(1);
    }
  });

  // Soporte Gestual Táctil (Swipe en Móviles)
  let touchStartX = 0;
  let touchEndX = 0;

  const modalContainer = document.getElementById('sede-modal-container');
  if (modalContainer) {
    modalContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modalContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;
      if (swipeDistance > 45) navigateSedeInModal(-1);
      else if (swipeDistance < -45) navigateSedeInModal(1);
    }, { passive: true });
  }



  // ==========================================
  // 5. ACORDEÓN DE PREGUNTAS FRECUENTES (EDITORIAL)
  // ==========================================
  window.toggleEditorialFaq = function(item) {
    const wrapper = item.querySelector('.faq-wrapper');
    const isOpen = wrapper.classList.contains('is-open');

    // Cerrar los demás ítems para mantener orden visual
    document.querySelectorAll('.faq-line-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('is-active');
        otherItem.querySelector('.faq-wrapper').classList.remove('is-open');
      }
    });

    if (isOpen) {
      item.classList.remove('is-active');
      wrapper.classList.remove('is-open');
    } else {
      item.classList.add('is-active');
      wrapper.classList.add('is-open');
    }
  };

  // Filtros por Categoría de FAQs
  window.filterFaq = function(category, clickedBtn) {
    document.querySelectorAll('.filter-tab').forEach(btn => {
      btn.className = 'filter-tab px-4 py-1.5 rounded-full text-xs font-semibold text-[#343434]/70 hover:text-[#343434] bg-white/40 hover:bg-white/80 border border-[#343434]/10';
    });

    clickedBtn.className = 'filter-tab px-4 py-1.5 rounded-full text-xs font-bold bg-[#343434] text-white shadow-sm';

    const items = document.querySelectorAll('.faq-line-item');
    items.forEach(item => {
      item.classList.remove('is-active');
      item.querySelector('.faq-wrapper').classList.remove('is-open');

      if (category === 'all' || item.classList.contains('faq-item-' + category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  };

  // Botón Volver Arriba (Scroll to Top)
  window.scrollToTop = function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // ==========================================
  // 6. LIGHTBOX MODAL UNIVERSAL PARA IMÁGENES
  // ==========================================
  window.openLightbox = function(srcOrEl, title = '', desc = '') {
    let src = '';
    let captionText = '';

    if (typeof srcOrEl === 'string') {
      src = srcOrEl;
      captionText = title ? (desc ? `${title} — ${desc}` : title) : '';
    } else if (srcOrEl && srcOrEl.tagName === 'IMG') {
      src = srcOrEl.src;
      captionText = title || srcOrEl.alt || '';
    } else if (srcOrEl && srcOrEl.querySelector) {
      const img = srcOrEl.querySelector('img');
      if (img) {
        src = img.src;
        captionText = title || img.alt || '';
      }
    }

    if (!src) return;

    // Caso A: Modal moderno con transiciones (lightbox-modal)
    const modernModal = document.getElementById('lightbox-modal');
    if (modernModal) {
      const imgEl = modernModal.querySelector('#lightbox-img') || document.getElementById('lightbox-img');
      const captionEl = modernModal.querySelector('#lightbox-caption') || document.getElementById('lightbox-caption');
      
      if (imgEl) imgEl.src = src;
      if (captionEl) {
        captionEl.textContent = captionText;
        if (captionText) {
          captionEl.classList.remove('hidden');
        } else {
          captionEl.classList.add('hidden');
        }
      }

      modernModal.classList.remove('opacity-0', 'pointer-events-none');
      modernModal.classList.add('opacity-100');
      document.body.style.overflow = 'hidden';
      return;
    }

    // Caso B: Modal Fundación (modal-lightbox)
    const fundacionModal = document.getElementById('modal-lightbox');
    if (fundacionModal) {
      const img = fundacionModal.querySelector('#lightbox-img') || document.getElementById('lightbox-img');
      const titleEl = fundacionModal.querySelector('#lightbox-title') || document.getElementById('lightbox-title');
      const descEl = fundacionModal.querySelector('#lightbox-desc') || document.getElementById('lightbox-desc');

      if (img) img.src = src;
      if (titleEl) titleEl.textContent = title || '';
      if (descEl) descEl.textContent = desc || '';

      if (typeof window.openModal === 'function') {
        window.openModal('modal-lightbox');
      } else {
        fundacionModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    }
  };

  window.closeLightbox = function() {
    const modernModal = document.getElementById('lightbox-modal');
    if (modernModal) {
      modernModal.classList.add('opacity-0', 'pointer-events-none');
      modernModal.classList.remove('opacity-100');
    }

    const fundacionModal = document.getElementById('modal-lightbox');
    if (fundacionModal) {
      if (typeof window.closeModal === 'function') {
        window.closeModal('modal-lightbox');
      } else {
        fundacionModal.classList.add('hidden');
      }
    }

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

  // ==========================================
  // 4. SUITES TABS / SWITCHER
  // ==========================================
  const suiteData = {
    'un-ambiente': {
      title: 'Suite Estándar',
      desc: 'Un refugio de diseño contemporáneo y confort absoluto, pensado para garantizar un descanso impecable y alta conectividad en todo momento.',
      quote: '"Un santuario de descanso pensado para el confort y la comodidad."',
      price: '$120',
      img: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Punta-de-Mata/suite-ptamata-main.webp',
      amenities: [
        '1 Cama Matrimonial',
        'Estación de Trabajo y TV 32"',
        'Kitchenette y Nevera 15\''
      ]
    },
    'dos-ambientes': {
      title: 'Suite Premium',
      desc: 'Santuario de amplitud superior y estética sutil, donde la calidez del lujo contemporáneo se integra armoniosamente con las vistas al complejo.',
      quote: '"La combinación perfecta entre amplitud, descanso y equipamiento superior."',
      price: '$170',
      img: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Doble-Premium-main2.webp',
      amenities: [
        '2 Camas Matrimoniales',
        'Estación de Trabajo y TV 32"',
        'Kitchenette y Nevera 15\''
      ]
    }
  };

  window.switchSuite = function(type) {
    const btnUn = document.getElementById('btn-un-ambiente');
    const btnDos = document.getElementById('btn-dos-ambientes');
    const container = document.getElementById('home-suite-container') || document.querySelector('#suites .grid');
    const title = document.getElementById('suite-title');
    const desc = document.getElementById('suite-desc');
    const quote = document.getElementById('suite-quote');
    const price = document.getElementById('suite-price');
    const img = document.getElementById('suite-img');
    const amenitiesList = document.getElementById('suite-amenities');

    if (!btnUn || !btnDos) return;

    if (type === 'un-ambiente') {
      btnUn.className = 'px-5 py-1.5 rounded-full text-xs font-bold border border-[#343434] bg-[#343434] text-white transition-all shadow-sm';
      btnDos.className = 'px-5 py-1.5 rounded-full text-xs font-bold border border-[#343434]/30 bg-transparent text-[#343434] hover:border-[#343434] transition-all';
    } else {
      btnDos.className = 'px-5 py-1.5 rounded-full text-xs font-bold border border-[#343434] bg-[#343434] text-white transition-all shadow-sm';
      btnUn.className = 'px-5 py-1.5 rounded-full text-xs font-bold border border-[#343434]/30 bg-transparent text-[#343434] hover:border-[#343434] transition-all';
    }

    if (container) container.classList.add('changing');

    setTimeout(() => {
      const data = suiteData[type];
      if (title) title.textContent = data.title;
      if (desc) desc.textContent = data.desc;
      if (quote) quote.textContent = data.quote;
      if (price) price.textContent = data.price;
      if (img) img.src = data.img;

      if (amenitiesList && data.amenities) {
        amenitiesList.innerHTML = data.amenities.map(a => `
          <div class="flex items-center gap-3 text-xs font-semibold text-[#343434]">
            <i class="fa-regular fa-circle-check text-[#F0A800]"></i>
            <span>${a}</span>
          </div>
        `).join('');
      }

      if (container) container.classList.remove('changing');
    }, 150);
  };

  // ==========================================
  // 8. CONTROLADORES CATÁLOGO DE SUITES Y MODAL
  // ==========================================
  const catalogSuitesData = [
    {
      id: 'premium-maturin',
      sede: 'maturin',
      title: 'Suite Premium',
      desc: 'Santuario de amplitud superior y estética sutil, donde la calidez del lujo contemporáneo se integra armoniosamente con las vistas al complejo.',
      image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Doble-Premium-main2.webp',
      amenities: [
        '2 Camas Matrimoniales',
        'Mesa de noche',
        'Estación de trabajo ejecutiva integrada con mueble para Smart TV de 32"',
        'Internet por Fibra Óptica de Alta Velocidad',
        'Aire Acondicionado Autónomo',
        'Cocina equipada tipo Kitchenette',
        'Nevera de 15 pies',
        'Horno Microondas y Estantería',
        'Guardarropa',
        'Dos ambientes independientes: Sala-comedor y habitación con baño separado (50 m²)'
      ],
      gallery: [
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Doble-Premium-main2.webp', tag: 'Vista Principal' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Premium-Doble-Maturin.webp', tag: 'Dormitorio Doble Matrimonial' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Doble-Premium-Main.webp', tag: 'Vista Panorámica de la Suite' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Premium-2.webp', tag: 'Camas y Lencería' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Premium3.webp', tag: 'Ambiente y Confort' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Premium5.webp', tag: 'Espacio de Descanso' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Premium-6.webp', tag: 'Detalles y Acabados' }
      ]
    },
    {
      id: 'estandar-maturin',
      sede: 'maturin',
      title: 'Suite Estándar',
      desc: 'Un refugio de diseño contemporáneo y confort absoluto, pensado para garantizar un descanso impecable y alta conectividad en todo momento.',
      image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Maturin/Suite-Estandar-Maturin-Main.webp',
      amenities: [
        '1 Cama Matrimonial',
        'Mesa de noche',
        'Estación de trabajo ejecutiva integrada con mueble para Smart TV de 32"',
        'Internet por Fibra Óptica de Alta Velocidad',
        'Aire Acondicionado Autónomo',
        'Cocina equipada tipo Kitchenette',
        'Nevera de 15 pies',
        'Horno Microondas y Estantería',
        'Guardarropa',
        'Dos ambientes independientes: Sala-comedor y habitación con baño separado (48 m²)'
      ],
      gallery: [
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Maturin/Suite-Estandar-Maturin-Main.webp', tag: 'Vista Principal / Dormitorio' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Maturin/Suite-Estandar-Maturin-Comedor.webp', tag: 'Área de Comedor' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Maturin/Suite-Estandar-Maturin-3.webp', tag: 'Ambiente Integrado' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-maturin-2.webp', tag: 'Espacio de Descanso' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Maturin/Suite-Estandar-Maturin-Sala-Comedor-2.webp', tag: 'Sala y Comedor' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Maturin/Suite-Estandar-Maturin-Sala-Comedor.webp', tag: 'Sala de Estar Integrada' }
      ]
    },
    {
      id: 'premium-eltigre',
      sede: 'el-tigre',
      title: 'Suite Premium',
      desc: 'Una experiencia de inmersión en el lujo boutique, destacada por sus acabados de alta gama, espacialidad fluida y un ambiente de serenidad absoluta.',
      image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-El-Tigre/Suite%20Premium-Main-El%20Tigre.webp',
      amenities: [
        '2 Camas Matrimoniales',
        'Mesa de noche',
        'Estación de trabajo ejecutiva integrada con mueble para Smart TV de 32"',
        'Internet por Fibra Óptica de Alta Velocidad',
        'Aire Acondicionado Autónomo',
        'Cocina equipada tipo Kitchenette',
        'Nevera de 15 pies',
        'Horno Microondas y Estantería',
        'Guardarropa',
        'Distribución espacial integral (36 m²)'
      ],
      gallery: [
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-El-Tigre/Suite%20Premium-Main-El%20Tigre.webp', tag: 'Vista Principal' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-El-Tigre/Suite%20PremiumEl%20Tigre.webp', tag: 'Dormitorio Matrimonial' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-El-Tigre/Suite-Premium%20El%20Tigre.webp', tag: 'Lounge y Confort' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-El-Tigre/Suite-Premium-2.webp', tag: 'Área de Estar' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-El-Tigre/Suite-Premium-3-El-Tigre.webp', tag: 'Detalles y Acabados' }
      ]
    },
    {
      id: 'estandar-eltigre',
      sede: 'el-tigre',
      title: 'Suite Estándar',
      desc: 'El equilibrio perfecto entre eficiencia ejecutiva y confort, diseñado para ofrecer privacidad absoluta y un reconfortante descanso contemporáneo.',
      image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-El-Tigre/Suite-Estandar-Principal-El-Tigre.webp',
      amenities: [
        '1 Cama Matrimonial',
        'Mesa de noche',
        'Estación de trabajo ejecutiva integrada con mueble para Smart TV de 32"',
        'Internet por Fibra Óptica de Alta Velocidad',
        'Aire Acondicionado Autónomo',
        'Cocina equipada tipo Kitchenette',
        'Nevera de 15 pies',
        'Horno Microondas y Estantería',
        'Guardarropa',
        'Distribución espacial integral (36 m²)'
      ],
      gallery: [
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-El-Tigre/Suite-Estandar-Principal-El-Tigre.webp', tag: 'Vista Principal' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-El-Tigre/Suite-Estandar-El-Tigre-2.webp', tag: 'Dormitorio Matrimonial' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-El-Tigre/Suite-Estandar-El-Tigre-3.webp', tag: 'Área de Confort' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-El-Tigre/Suite-Estandar-El-Tigre-4.webp', tag: 'Ambiente Integrado' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-El-Tigre/Suite-Estandar-El-Tigre-5.webp', tag: 'Espacio de Descanso' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-El-Tigre/Suite-Estandar-El-Tigre-6.webp', tag: 'Baño y Acabados' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-El-Tigre/Suite-Estandar-El-Tigre-7.webp', tag: 'Perspectiva General' }
      ]
    },
    {
      id: 'premium-ptamata',
      sede: 'punta-de-mata',
      title: 'Suite Premium',
      desc: 'La máxima expresión de exclusividad y confort, combinando áreas de estar independientes con equipamiento premium para estadías de distinción.',
      image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Punta-de-Mata/Suite-Doble-Premium-Punta-de-Mata.webp',
      amenities: [
        '2 Camas Matrimoniales',
        'Mesa de noche',
        'Estación de trabajo ejecutiva integrada con mueble para Smart TV de 32"',
        'Internet por Fibra Óptica de Alta Velocidad',
        'Aire Acondicionado Autónomo',
        'Cocina equipada tipo Kitchenette',
        'Nevera de 15 pies',
        'Horno Microondas y Estantería',
        'Guardarropa',
        'Distribución espacial integral (36 m²)'
      ],
      gallery: [
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Punta-de-Mata/Suite-Doble-Premium-Punta-de-Mata.webp', tag: 'Vista Principal' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Punta-de-Mata/Suite-Doble-Premium-Punta-de-Mata-2.webp', tag: 'Dormitorio Doble' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Punta-de-Mata/Suite-Doble-Premium-Punta-de-Mata-3.webp', tag: 'Espacio y Confort' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Punta-de-Mata/Suite-Doble-Punta-de-mata-5.jpg', tag: 'Camas y Lencería' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Punta-de-Mata/Suite-Premium-Doble-5.webp', tag: 'Detalles y Acabados' }
      ]
    },
    {
      id: 'estandar-ptamata',
      sede: 'punta-de-mata',
      title: 'Suite Estándar',
      desc: 'Un oasis de calma con arquitectura de vanguardia, optimizado para el confort del viajero corporativo que busca privacidad y descanso reparador.',
      image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Punta-de-Mata/suite-ptamata-main.webp',
      amenities: [
        '1 Cama Matrimonial',
        'Mesa de noche',
        'Estación de trabajo ejecutiva integrada con mueble para Smart TV de 32"',
        'Internet por Fibra Óptica de Alta Velocidad',
        'Aire Acondicionado Autónomo',
        'Cocina equipada tipo Kitchenette',
        'Nevera de 15 pies',
        'Horno Microondas y Estantería',
        'Guardarropa',
        'Distribución espacial integral (36 m²)'
      ],
      gallery: [
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Punta-de-Mata/suite-ptamata-main.webp', tag: 'Vista Principal / Dormitorio' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Punta-de-Mata/Suite-Estandar-PuntadeMata_resultado.webp', tag: 'Dormitorio Matrimonial' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Punta-de-Mata/suite-estandar-ptmata-2.webp', tag: 'Área de Descanso' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Punta-de-Mata/suite-estandar-ptmata-.webp', tag: 'Espacio Integrado' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Punta-de-Mata/fachada-main-ptamata.webp', tag: 'Fachada Sede Punta de Mata' }
      ]
    }
  ];

  let activeModalSuites = catalogSuitesData;
  let activeModalSuiteIndex = 0;

  function detectCurrentSede() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('maturin')) return 'maturin';
    if (path.includes('el-tigre')) return 'el-tigre';
    if (path.includes('punta-de-mata')) return 'punta-de-mata';
    return null;
  }

  // Soporte de filtro por URL param (?sede=maturin, etc.)
  const urlParams = new URLSearchParams(window.location.search);
  const sedeParam = urlParams.get('sede');
  if (sedeParam) {
    const filterSedeEl = document.getElementById('filter-sede');
    if (filterSedeEl) {
      filterSedeEl.value = sedeParam;
      setTimeout(() => {
        if (typeof window.applySuiteFilters === 'function') {
          window.applySuiteFilters();
        }
      }, 50);
    }
  }

  window.applySuiteFilters = function() {
    const filterSedeEl = document.getElementById('filter-sede');
    const filterCapEl = document.getElementById('filter-capacity');
    if (!filterSedeEl || !filterCapEl) return;
    
    const sede = filterSedeEl.value;
    const capacity = filterCapEl.value;
    const cards = document.querySelectorAll('.suite-card');

    cards.forEach(card => {
      let matchSede = (sede === 'all') || card.classList.contains('suite-item-' + sede);
      let matchCapacity = true;

      if (capacity === '2') {
        matchCapacity = card.classList.contains('suite-item-estandar');
      } else if (capacity === '4') {
        matchCapacity = card.classList.contains('suite-item-premium');
      }

      if (matchSede && matchCapacity) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  };

  window.openSuiteModalById = function(id) {
    const targetSuite = catalogSuitesData.find(s => s.id === id);
    if (!targetSuite) return;

    // Aislamiento estricto por sede:
    // Si estamos en página de sede o hay un filtro de sede activo, o según la sede de la suite
    const pageSede = detectCurrentSede();
    const filterSedeEl = document.getElementById('filter-sede');
    const filterSedeVal = filterSedeEl ? filterSedeEl.value : null;

    let targetSede = targetSuite.sede;
    if (pageSede) {
      targetSede = pageSede;
    } else if (filterSedeVal && filterSedeVal !== 'all') {
      targetSede = filterSedeVal;
    }

    // Filtrar array a las suites de esa sede (2 suites: Estándar y Premium)
    activeModalSuites = catalogSuitesData.filter(s => s.sede === targetSede);
    if (activeModalSuites.length === 0) {
      activeModalSuites = [targetSuite];
    }

    const idx = activeModalSuites.findIndex(s => s.id === id);
    activeModalSuiteIndex = idx !== -1 ? idx : 0;
    updateSuiteModalData();

    const modal = document.getElementById('suite-modal');
    if (modal) {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  };

  function updateSuiteModalData() {
    const suite = activeModalSuites[activeModalSuiteIndex];
    if (!suite) return;

    const titleEl = document.getElementById('suite-modal-title');
    const descEl = document.getElementById('suite-modal-desc');
    const imgEl = document.getElementById('suite-modal-main-img');
    const tagEl = document.getElementById('suite-modal-tag');
    const counterEl = document.getElementById('suite-modal-counter');
    const thumbContainer = document.getElementById('suite-modal-thumbnails');
    const amenitiesEl = document.getElementById('suite-modal-amenities') || document.getElementById('suite-modal-features');

    if (titleEl) titleEl.textContent = suite.title;
    if (descEl) descEl.textContent = suite.desc;
    if (imgEl) imgEl.src = suite.image;
    if (tagEl) tagEl.textContent = suite.gallery?.[0]?.tag || 'Vista Principal';

    // Formato estricto 01 / 02 o 02 / 02 aislado por sede
    const currentNum = String(activeModalSuiteIndex + 1).padStart(2, '0');
    const totalNum = String(activeModalSuites.length).padStart(2, '0');
    if (counterEl) counterEl.textContent = `${currentNum} / ${totalNum}`;

    if (amenitiesEl && suite.amenities) {
      amenitiesEl.innerHTML = suite.amenities.map(a => `
        <div class="flex items-start gap-2 text-xs text-karina-charcoal/80">
          <i class="fa-regular fa-circle-check text-karina-mustard text-xs mt-0.5 shrink-0"></i>
          <span class="leading-tight">${a}</span>
        </div>
      `).join('');
    }

    if (thumbContainer && suite.gallery && suite.gallery.length > 0) {
      const cols = suite.gallery.length >= 7 ? 7 : (suite.gallery.length > 4 ? 6 : 4);
      thumbContainer.className = `grid grid-cols-${cols} gap-2`;
      thumbContainer.innerHTML = suite.gallery.map(item => `
        <button onclick="setSuiteModalImg('${item.src}', '${item.tag}')" class="h-14 sm:h-16 rounded-xl overflow-hidden border border-black/10 focus:ring-2 focus:ring-karina-mustard transition-transform active:scale-95 group" title="${item.tag}">
          <img src="${item.src}" alt="${item.tag}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        </button>
      `).join('');
    }
  }

  window.navigateSuiteInModal = function(dir) {
    const total = activeModalSuites.length;
    if (total <= 1) return;
    activeModalSuiteIndex = (activeModalSuiteIndex + dir + total) % total;
    
    const wrapper = document.getElementById('suite-modal-wrapper');
    if (wrapper) wrapper.style.opacity = '0.3';
    setTimeout(() => {
      updateSuiteModalData();
      if (wrapper) wrapper.style.opacity = '1';
    }, 120);
  };

  window.setSuiteModalImg = function(src, tag) {
    const imgEl = document.getElementById('suite-modal-main-img');
    const tagEl = document.getElementById('suite-modal-tag');
    if (imgEl) imgEl.src = src;
    if (tagEl && tag) tagEl.textContent = tag;
  };

  window.openSuiteModalMainLightbox = function() {
    const imgEl = document.getElementById('suite-modal-main-img');
    const titleEl = document.getElementById('suite-modal-title');
    const tagEl = document.getElementById('suite-modal-tag');
    if (imgEl && imgEl.src) {
      const title = titleEl ? titleEl.textContent : 'Suite Kariña';
      const tag = tagEl ? tagEl.textContent : '';
      openLightbox(imgEl.src, title, tag);
    }
  };

  window.closeSuiteModal = function() {
    const modal = document.getElementById('suite-modal');
    if (modal) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  };

  window.closeSuiteModalOnBackdrop = function(e) {
    if (e.target.id === 'suite-modal') closeSuiteModal();
  };

  window.loadMoreCatalogSuites = function() {
    console.log('Cargando más habitaciones...');
  };

  window.inquireSuiteWithAI = function(customPrompt) {
    closeSuiteModal();
    const suiteTitle = document.getElementById('suite-modal-title')?.textContent || 'Suite';
    const prompt = customPrompt || `Hola Arimiña, deseo consultar disponibilidad y cotizar la ${suiteTitle}`;
    if (typeof window.openAriminaChat === 'function') {
      window.openAriminaChat(prompt);
    }
  };

  // ==========================================
  // 9. CONTROLADORES PÁGINA VIVE KARIÑA Y DAY PASS
  // ==========================================
  const dayPassData = [
    {
      title: "Hotel Kariña Maturín",
      desc: "Disfruta de un día de sol con acceso libre a las piscinas familiares, parque acuático infantil con toboganes, tumbonas de descanso y vestidores de 10:00 AM a 6:00 PM.",
      tag: "Piscina Resort y Toboganes",
      price: "$25",
      img: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Principales-Homepage/Area-Hotel-Karina-Maturin.webp"
    },
    {
      title: "Kariña Punta de Mata",
      desc: "Un día completo de paz corporativa rodeado de jardines tropicales, acceso a piscina ejecutiva, toallas y consumo acreditado en restaurante.",
      tag: "Piscina Ejecutiva y Jardines",
      price: "$20",
      img: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Punta-de-Mata/fachada-main-ptmata.webp"
    },
    {
      title: "Hotel Kariña El Tigre",
      desc: "Sumérgete en la refrescante piscina resort de Guanipa, solárium, canchas deportivas y ambiente familiar único en la Mesa de Guanipa.",
      tag: "Piscina Guanipa y Solárium",
      price: "$22",
      img: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondades-El-Tigre/Piscina-En-El-Tigre-3.webp"
    }
  ];

  let currentDayPassSedeIdx = 0;

  window.filterViveGallery = function(category, clickedBtn) {
    const tabs = document.querySelectorAll('.vive-tab');
    tabs.forEach(tab => {
      tab.className = "vive-tab px-5 py-2 rounded-full text-xs font-semibold text-karina-charcoal/70 hover:text-karina-charcoal bg-white/50 hover:bg-white border border-black/10 transition-all";
    });
    if (clickedBtn) clickedBtn.className = "vive-tab px-5 py-2 rounded-full text-xs font-bold bg-karina-charcoal text-white shadow-sm transition-all";

    const items = document.querySelectorAll('.vive-item');
    items.forEach(item => {
      if (category === 'all' || item.classList.contains('vive-cat-' + category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  };

  window.openViveLightbox = function(src, caption, type, sede) {
    const modal = document.getElementById('vive-lightbox-modal');
    const imgEl = document.getElementById('lightbox-img');
    const captionEl = document.getElementById('lightbox-caption');
    const sedeEl = document.getElementById('lightbox-sede');

    if (imgEl) imgEl.src = src;
    if (captionEl) captionEl.textContent = caption;
    if (sedeEl) sedeEl.textContent = sede || 'Kariña';

    if (modal) modal.classList.add('is-open');
  };

  window.closeViveLightbox = function() {
    const modal = document.getElementById('vive-lightbox-modal');
    if (modal) modal.classList.remove('is-open');
  };

  window.closeViveLightboxOnBackdrop = function(e) {
    if (e.target.id === 'vive-lightbox-modal') closeViveLightbox();
  };

  window.openDayPassModal = function(sedeIndex) {
    currentDayPassSedeIdx = sedeIndex || 0;
    selectDayPassSede(currentDayPassSedeIdx);

    const modal = document.getElementById('daypass-modal');
    if (modal) {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  };

  window.selectDayPassSede = function(index) {
    currentDayPassSedeIdx = index;
    const data = dayPassData[index];
    if (!data) return;

    for (let i = 0; i < 3; i++) {
      const tab = document.getElementById(`dp-tab-${i}`);
      if (tab) {
        if (i === index) {
          tab.className = "dp-tab-btn py-2.5 px-3 rounded-2xl text-xs font-bold bg-karina-charcoal text-white shadow-sm transition-all text-center";
        } else {
          tab.className = "dp-tab-btn py-2.5 px-3 rounded-2xl text-xs font-semibold text-karina-charcoal/70 bg-white/60 hover:bg-white border border-black/10 transition-all text-center";
        }
      }
    }

    const wrapper = document.getElementById('daypass-detail-wrapper');
    if (wrapper) wrapper.style.opacity = '0.3';

    setTimeout(() => {
      const titleEl = document.getElementById('dp-sede-title');
      const descEl = document.getElementById('dp-sede-desc');
      const tagEl = document.getElementById('dp-sede-tag');
      const priceEl = document.getElementById('dp-sede-price');
      const imgEl = document.getElementById('dp-sede-img');

      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.desc;
      if (tagEl) tagEl.textContent = data.tag;
      if (priceEl) priceEl.innerHTML = `${data.price} <span class="text-xs font-light text-karina-charcoal/60">/ persona</span>`;
      if (imgEl) imgEl.src = data.img;

      if (wrapper) wrapper.style.opacity = '1';
    }, 120);
  };

  window.closeDayPassModal = function() {
    const modal = document.getElementById('daypass-modal');
    if (modal) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  };

  window.closeDayPassModalOnBackdrop = function(e) {
    if (e.target.id === 'daypass-modal') closeDayPassModal();
  };

  window.loadMoreViveMoments = function() {
    console.log('Cargando más momentos en la galería ¡Vive Kariña!...');
  };

  // ===================================================
  // 10. LÓGICA JAVASCRIPT: BUSINESS, FAQS Y CONTACTO
  // ===================================================

  // 1. Acordeón de FAQs
  window.toggleFaqAccordion = function(element) {
    const wrapper = element.querySelector('.faq-accordion-wrapper');
    if (!wrapper) return;
    const isOpen = wrapper.classList.contains('is-open');

    // Cerrar otros acordeones
    document.querySelectorAll('.faq-item-card').forEach(card => {
      card.classList.remove('is-open');
      const otherWrapper = card.querySelector('.faq-accordion-wrapper');
      if (otherWrapper) otherWrapper.classList.remove('is-open');
    });

    if (!isOpen) {
      element.classList.add('is-open');
      wrapper.classList.add('is-open');
    }
  };

  // Búsqueda de FAQs
  window.searchFaqs = function() {
    const searchInput = document.getElementById('faq-search-input');
    if (!searchInput) return;
    const input = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.faq-item-card');

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(input)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  };

  window.filterFaqByTag = function(tag) {
    const input = document.getElementById('faq-search-input');
    if (input) {
      input.value = tag;
      window.searchFaqs();
    }
  };

  // 2. Selector de Sede en Página de Contacto
  const contactoSedesData = [
    {
      title: "Sede Maturín",
      address: "Urbanización Palma Real, Etapa II, Macroparcela MC-30, Maturín, Edo. Monagas.",
      phone: "+58 (0291) 640-1234",
      ws: "+58 (0424) 916-9601",
      mapsUrl: "https://maps.google.com/?cid=370127326196523800",
      img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
      badge: "Maturín"
    },
    {
      title: "Sede Punta de Mata",
      address: "Sector Zona Industrial, Ramal 7, al lado del Depósito Empresas Polar, Punta de Mata, Edo. Monagas.",
      phone: "+58 (0292) 331-5678",
      ws: "+58 (0424) 916-9602",
      mapsUrl: "https://maps.google.com/?cid=9643206305083018040",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      badge: "Punta de Mata"
    },
    {
      title: "Sede El Tigre",
      address: "Avenida Ruiz Pineda, a 100mts del Balancín Tricolor, cruce con Calle 23 de Enero, El Tigre, Edo. Anzoátegui.",
      phone: "+58 (0283) 241-9012",
      ws: "+58 (0424) 916-9603",
      mapsUrl: "https://maps.google.com/?cid=12057092587787417265",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      badge: "El Tigre"
    }
  ];

  window.switchContactoSede = function(index) {
    const data = contactoSedesData[index];
    if (!data) return;

    for (let i = 0; i < 3; i++) {
      const tab = document.getElementById(`contacto-tab-${i}`);
      if (tab) {
        if (i === index) {
          tab.className = "contacto-tab-btn px-5 py-2 rounded-full text-xs font-bold bg-karina-charcoal text-white shadow-sm transition-all";
        } else {
          tab.className = "contacto-tab-btn px-5 py-2 rounded-full text-xs font-semibold text-karina-charcoal/70 hover:text-karina-charcoal bg-white/50 border border-black/10 transition-all";
        }
      }
    }

    const wrapper = document.getElementById('contacto-sede-wrapper');
    if (wrapper) wrapper.classList.add('is-changing');

    setTimeout(() => {
      const titleEl = document.getElementById('contacto-sede-title');
      const addrEl = document.getElementById('contacto-sede-address');
      const phoneEl = document.getElementById('contacto-sede-phone');
      const wsEl = document.getElementById('contacto-sede-ws');
      const badgeEl = document.getElementById('contacto-map-badge');
      const addrShortEl = document.getElementById('contacto-map-address-short');
      const mapImgEl = document.getElementById('contacto-map-img');
      const mapLinkEl = document.getElementById('contacto-map-direct-link');
      const btnDirEl = document.getElementById('contacto-btn-directions');

      if (titleEl) titleEl.textContent = data.title;
      if (addrEl) addrEl.textContent = data.address;
      if (phoneEl) phoneEl.textContent = data.phone;
      if (wsEl) wsEl.textContent = data.ws;
      if (badgeEl) badgeEl.textContent = data.badge;
      if (addrShortEl) addrShortEl.textContent = data.address;
      if (mapImgEl) mapImgEl.src = data.img;
      if (mapLinkEl) mapLinkEl.href = data.mapsUrl;
      if (btnDirEl) btnDirEl.href = data.mapsUrl;

      if (wrapper) wrapper.classList.remove('is-changing');
    }, 120);
  };

  // Handlers para formularios
  window.handleQuoteSubmit = function(e) {
    e.preventDefault();
    const banner = document.getElementById('quote-success-banner');
    if (banner) {
      banner.classList.remove('hidden');
      setTimeout(() => {
        banner.classList.add('hidden');
        const form = document.getElementById('quote-form');
        if (form) form.reset();
      }, 4000);
    }
  };

  window.handleContactSubmit = function(e) {
    e.preventDefault();
    const banner = document.getElementById('contact-success-banner');
    if (banner) {
      banner.classList.remove('hidden');
      setTimeout(() => {
        banner.classList.add('hidden');
        const form = document.getElementById('contact-general-form');
        if (form) form.reset();
      }, 4000);
    }
  };

  // ===================================================
  // 11. LÓGICA JAVASCRIPT: GASTRONOMÍA, RESTAURANTES Y MENÚS
  // ===================================================

  // Base de datos de menús digitales por establecimiento
  const gastronomiaMenusData = {
    'restaurante-283': {
      name: "Restaurante 283",
      sede: "Hotel Kariña El Tigre • Salón y Terraza Guanipa",
      schedule: "Lun a Dom • 7:00 AM – 10:30 PM",
      phone: "5804249169603",
      heroImg: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondades-El-Tigre/Paella-En-El-Tigre.webp",
      categories: [
        {
          name: "Pizzas a la Leña y Pastas Artesanales",
          items: [
            { name: "Pizza Margherita Especial a la Leña", desc: "Salsa de tomate San Marzano, mozzarella fresca de búfala, albahaca fresca y aceite de oliva virgen extra.", price: "$12", tag: "Artesanal" },
            { name: "Pizza Cuatro Quesos Gourmet", desc: "Base crujiente a la leña, mozzarella, gorgonzola, parmesano reggiano y queso de cabra artesanal.", price: "$14", tag: "A la Leña" },
            { name: "Fettuccine al Pesto Genovés y Nueces", desc: "Pasta artesanal fresca salteada con albahaca fresca, nueces tostadas y parmesano.", price: "$15", tag: "Fresco" },
            { name: "Lasagna Bolognese Tradicional", desc: "Capas de pasta casera, ragú clásico de carne de res, bechamel cremosa y gratén dorado.", price: "$16", tag: "Especialidad" }
          ]
        },
        {
          name: "Paellas Tradicionales",
          items: [
            { name: "Paella Valenciana 283 (Individual o Para Compartir)", desc: "Nuestra especialidad insigne con mariscos frescos, calamares, camarones, mejillones y toque de azafrán español.", price: "$26", tag: "Especialidad" },
            { name: "Paella Marinera Especial", desc: "Arroz al punto con caldo de mariscos concentrado, langostinos, calamares y pimientos asados.", price: "$28", tag: "Favorito" }
          ]
        },
        {
          name: "Desayunos 283",
          items: [
            { name: "Desayuno Criollo Tradicional", desc: "Arepas calientes, carne mechada jugosa, huevos perico, queso telita y caraotas negras refritas.", price: "$12", tag: "Insignia" },
            { name: "Omelette de Claras con Vegetales y Aguacate", desc: "Omelette con espinacas baby, queso pasteurizado y tostadas artesanales.", price: "$10", tag: "Balanceado" }
          ]
        },
        {
          name: "Servicio de Bar y Coctelería",
          items: [
            { name: "Sangría de Autor 283 (Jarra)", desc: "Receta secreta con vino tinto español, frutas frescas maceradas y licor de naranja.", price: "$22", tag: "Para Compartir" },
            { name: "Smoked Old Fashioned", desc: "Bourbon premium ahumado con madera de roble y bíter artesanal.", price: "$14", tag: "Cóctel Autor" },
            { name: "Mojitos y Cócteles Clásicos", desc: "Variedad de cócteles refrescantes preparados con frutas de temporada y licores importados.", price: "$10", tag: "Bar" }
          ]
        }
      ]
    },
    'two-chefs': {
      name: "Two Chefs Restaurant",
      sede: "Hotel Kariña Punta de Mata • Salón Principal y Terraza",
      schedule: "Lun a Dom • 6:30 AM – 10:00 PM",
      phone: "5804249169602",
      heroImg: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Punta-de-Mata/Restaurant-ptmata.webp",
      categories: [
        {
          name: "Desayunos Ejecutivos y Criollos",
          items: [
            { name: "Desayuno Criollo Two Chefs", desc: "Arepas asadas al momento, carne mechada de res, huevos perico, queso telita y caraotas negras refritas.", price: "$12", tag: "Insignia" },
            { name: "Omelette Fit de Claras y Aguacate", desc: "Omelette con espinacas baby, queso blanco pasteurizado y tostadas integrales.", price: "$10", tag: "Saludable" },
            { name: "Pancakes Clásicos con Miel y Frutas", desc: "Pancakes esponjosos con frutas frescas de estación y mantequilla artesanal.", price: "$9", tag: "Dulce Mañana" }
          ]
        },
        {
          name: "Almuerzos y Menú Ejecutivo",
          items: [
            { name: "Asado Negro Tradicional", desc: "Corte de res cocinado lentamente en caramelo de papelón y especias, arroz blanco y plátano horneado.", price: "$18", tag: "Favorito" },
            { name: "Pollo a la Plancha en Finas Hierbas", desc: "Pechuga marinada con romero fresco, ensalada verde y puré de papas trufado.", price: "$15", tag: "Ligero" },
            { name: "Pastel de Chucho Oriental", desc: "Capas de pescado guisado con ají dulce, plátano maduro frito y queso blanco gratinado.", price: "$16", tag: "Oriental" }
          ]
        },
        {
          name: "Cenas y Opciones Rápidas",
          items: [
            { name: "Club House Two Chefs", desc: "Triple piso con pollo desmechado, tocineta crocante, queso gouda, huevo y papas fritas.", price: "$14", tag: "Clásico" },
            { name: "Hamburguesa Artesanal Two Chefs", desc: "Carne de res seleccionada, pan brioche, queso cheddar fundido, tocineta y papas rústicas.", price: "$14", tag: "Especialidad" },
            { name: "Ensalada César con Suprema de Pollo", desc: "Lechuga romana fresca, aderezo César artesanal, crutones de ajo y parmesano.", price: "$11", tag: "Fresco" }
          ]
        },
        {
          name: "Bebidas y Cafetería",
          items: [
            { name: "Jugos Naturales Tropicales (Parchita / Guanábana)", desc: "100% fruta natural recién exprimida.", price: "$4", tag: "Natural" },
            { name: "Café Espresso y Cappuccino Kariña", desc: "Granos seleccionados tostados artesanalmente.", price: "$3", tag: "Especialidad" }
          ]
        }
      ]
    },
    'tu-chef': {
      name: "Two Chefs Restaurant",
      sede: "Hotel Kariña Punta de Mata • Salón Principal y Terraza",
      schedule: "Lun a Dom • 6:30 AM – 10:00 PM",
      phone: "5804249169602",
      heroImg: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Punta-de-Mata/Restaurant-ptmata.webp",
      categories: [
        {
          name: "Desayunos Ejecutivos y Criollos",
          items: [
            { name: "Desayuno Criollo Two Chefs", desc: "Arepas asadas al momento, carne mechada de res, huevos perico, queso telita y caraotas negras refritas.", price: "$12", tag: "Insignia" },
            { name: "Omelette Fit de Claras y Aguacate", desc: "Omelette con espinacas baby, queso blanco pasteurizado y tostadas integrales.", price: "$10", tag: "Saludable" },
            { name: "Pancakes Clásicos con Miel y Frutas", desc: "Pancakes esponjosos con frutas frescas de estación y mantequilla artesanal.", price: "$9", tag: "Dulce Mañana" }
          ]
        },
        {
          name: "Almuerzos y Menú Ejecutivo",
          items: [
            { name: "Asado Negro Tradicional", desc: "Corte de res cocinado lentamente en caramelo de papelón y especias, arroz blanco y plátano horneado.", price: "$18", tag: "Favorito" },
            { name: "Pollo a la Plancha en Finas Hierbas", desc: "Pechuga marinada con romero fresco, ensalada verde y puré de papas trufado.", price: "$15", tag: "Ligero" },
            { name: "Pastel de Chucho Oriental", desc: "Capas de pescado guisado con ají dulce, plátano maduro frito y queso blanco gratinado.", price: "$16", tag: "Oriental" }
          ]
        },
        {
          name: "Cenas y Opciones Rápidas",
          items: [
            { name: "Club House Two Chefs", desc: "Triple piso con pollo desmechado, tocineta crocante, queso gouda, huevo y papas fritas.", price: "$14", tag: "Clásico" },
            { name: "Hamburguesa Artesanal Two Chefs", desc: "Carne de res seleccionada, pan brioche, queso cheddar fundido, tocineta y papas rústicas.", price: "$14", tag: "Especialidad" },
            { name: "Ensalada César con Suprema de Pollo", desc: "Lechuga romana fresca, aderezo César artesanal, crutones de ajo y parmesano.", price: "$11", tag: "Fresco" }
          ]
        },
        {
          name: "Bebidas y Cafetería",
          items: [
            { name: "Jugos Naturales Tropicales (Parchita / Guanábana)", desc: "100% fruta natural recién exprimida.", price: "$4", tag: "Natural" },
            { name: "Café Espresso y Cappuccino Kariña", desc: "Granos seleccionados tostados artesanalmente.", price: "$3", tag: "Especialidad" }
          ]
        }
      ]
    },
    'moriche-restaurant': {
      name: "Moriche Restaurant",
      sede: "Hotel Kariña Maturín • Salón Insignia",
      schedule: "Lun a Dom • 7:00 AM – 11:00 PM",
      phone: "5804249169601",
      heroImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      categories: [
        {
          name: "Entradas de Alta Cocina",
          items: [
            { name: "Arepa de Langosta Caribeña", desc: "Masa de maíz pilado, langosta fresca del Caribe, emulsión de aguacate y ají dulce margariteño.", price: "$18", tag: "Plato Insignia" },
            { name: "Carpaccio de Remolacha y Anacardo Fermentado", desc: "Finas láminas de remolacha asada, crema de anacardos fermentada, brotes orgánicos y pistacho.", price: "$14", tag: "Vegano" },
            { name: "Tartar de Atún Rojo y Sésamo Tostado", desc: "Atún fresco en cubos, aderezo de soya cítrica, aguacate y chips de plátano verde.", price: "$16", tag: "De Autor" }
          ]
        },
        {
          name: "Platos Fuertes y Especialidades",
          items: [
            { name: "Lomo de Rótalo en Mantequilla de Ají Dulce", desc: "Pesca del día a la plancha sobre risotto cremoso de coco y chips de topocho.", price: "$28", tag: "Recomendación Chef" },
            { name: "Asado Negro Braseado 12 Horas", desc: "Corte de res braseado en reducción de vino tinto y papelón con puré rústico de apio criollo.", price: "$26", tag: "Sin Gluten" },
            { name: "Risotto Cremoso de Hongos Silvestres", desc: "Arroz arborio en caldo aromatizado con hongos silvestres, trufa y parmesano reggiano.", price: "$24", tag: "De Autor" }
          ]
        },
        {
          name: "Postres de Autor",
          items: [
            { name: "Texturas de Cacao de Caripito 70%", desc: "Mousse aireado, bizcocho húmedo, tierra de cacao y gelée de frutos rojos.", price: "$10", tag: "Cacao Monagas" },
            { name: "Quesillo Tradicional al Caramelo de Ron Añejo", desc: "Suave textura con reducción de ron añejo venezolano y crocante de coco.", price: "$8", tag: "Artesanal" }
          ]
        }
      ]
    },
    'oh-my-bar': {
      name: "Oh My Bar Bistro",
      sede: "Hotel Kariña Maturín • Complejo Master Pádel",
      schedule: "Mié a Dom • 5:00 PM – 2:00 AM",
      phone: "5804249169601",
      heroImg: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Bar-En-Maturin.webp",
      categories: [
        {
          name: "Coctelería de Autor y Mixología",
          items: [
            { name: "Margarita de Ají Dulce y Cocuy", desc: "Cocuy larense artesanal, reducción de ají dulce oriental, zumo de parchita y borde de sal aromatizada.", price: "$12", tag: "Insignia OMB" },
            { name: "Smoked Old Fashioned Kariña", desc: "Ron añejo venezolano, bíter aromático, ahumado en campana con madera de barrica.", price: "$14", tag: "Ahumado" },
            { name: "Gin Tonic Pasión Botánica", desc: "Gin premium infusionado con bayas de enebro, pepino fresco, pimienta rosa y tónica premium.", price: "$12", tag: "Refrescante" },
            { name: "Mojito de Parchita y Hierbabuena", desc: "Ron blanco, pulpa fresca de maracuyá, menta macerada y soda efervescente.", price: "$10", tag: "Tropical" }
          ]
        },
        {
          name: "Hamburguesas, Alitas y Platos para Compartir",
          items: [
            { name: "Mini Angus Burgers OMB (3 unidades)", desc: "Pan brioche artesanal, carne angus smash, queso cheddar madurado y cebolla caramelizada.", price: "$14", tag: "Para Picar" },
            { name: "Alitas BBQ Glaseadas al Ají Dulce", desc: "Alitas de pollo crocantes bañadas en nuestra salsa BBQ artesanal con toque oriental.", price: "$13", tag: "Favorito" },
            { name: "Nachos Supremos OMB", desc: "Tortillas crocantes con queso cheddar fundido, pico de gallo, frijoles negros, guacamole y jalapeños.", price: "$14", tag: "Para Compartir" },
            { name: "Tequeños con Chutney de Mango", desc: "Dedos dorados rellenos de abundante queso blanco con dip agridulce casero.", price: "$9", tag: "Clásico" }
          ]
        },
        {
          name: "Licores y Cervezas",
          items: [
            { name: "Cervezas Nacionales e Importadas", desc: "Variedad de rubias, negras y artesanales bien frías.", price: "$4 - $6", tag: "Frías" },
            { name: "Servicio de Whisky / Ron Premium (Botella)", desc: "Incluye hielo, mezcladores y servicio en mesa con frutos secos.", price: "$65 - $130", tag: "Servicio VIP" }
          ]
        }
      ]
    },
    'club-palma-real': {
      name: "Propuestas Aliadas Complejo Palma Real",
      sede: "Maturín • Complejo Palma Real",
      schedule: "Mar a Dom • 8:00 AM – 9:00 PM",
      phone: "5804249169601",
      heroImg: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Principales-Homepage/Area-Hotel-Karina-Maturin.webp",
      categories: [
        {
          name: "Parrillera al Aire Libre",
          items: [
            { name: "Parrillada Mixta Familiar Palma Real", desc: "Punta trasera, solomo, chorizo artesanal, chinchurria, yuca frita, guasacaca y ensalada rayada.", price: "$32", tag: "Familiar" },
            { name: "Hamburguesa Monster Club House", desc: "Doble carne a la brasa, queso fundido, tocineta ahumada, huevo frito y papas rústicas.", price: "$14", tag: "Favorito" },
            { name: "Costillitas BBQ Glaseadas", desc: "Costillas de cerdo en cocción lenta bañadas en salsa barbacoa de miel y ají.", price: "$18", tag: "Brasas" }
          ]
        },
        {
          name: "Sushi Bar Aliado Palma Real",
          items: [
            { name: "Spicy Tuna Roll (10 piezas)", desc: "Atún fresco marinado en salsa picante, aguacate, sésamo y topping de wakame.", price: "$14", tag: "Sushi" },
            { name: "Ebi Tempura Roll (10 piezas)", desc: "Langostino crocante tempurizado, queso crema, plátano maduro y salsa fuji dulce.", price: "$15", tag: "Tempura" },
            { name: "Poke Bowl Tropical de Salmón", desc: "Base de arroz de sushi, salmón fresco, edamames, mango, aguacate y aderezo ponzu.", price: "$16", tag: "Bowl Fit" }
          ]
        },
        {
          name: "Snacks de Piscina",
          items: [
            { name: "Tequeños Playeros Palma Real (8 und)", desc: "Crujientes dedos de queso servidos al borde de la piscina con salsas de la casa.", price: "$8", tag: "Piscina" },
            { name: "Papas Rústicas con Queso Cheddar y Tocineta", desc: "Papas con piel crocantes bañadas en salsa de queso fundido y tocineta picada.", price: "$7", tag: "Snack" },
            { name: "Helados y Paletas Artesanales", desc: "Sabores frutales y cremosos ideales para refrescar la tarde.", price: "$4 - $6", tag: "Postre" }
          ]
        },
        {
          name: "Cafetería, Batidos y Cócteles",
          items: [
            { name: "Batidos Naturales y Frappés de Fruta", desc: "Fresas, parchita, mango, piña o melón bien granizados.", price: "$4", tag: "Granizado" },
            { name: "Piña Colada y Coco Loco del Club", desc: "Servidos en copa alta con sombrillita y licor de coco tropical.", price: "$9", tag: "Tropical" }
          ]
        }
      ]
    }
  };

  // 1. Filtrado de Tarjetas de Gastronomía por Sede
  window.filterGastronomiaBySede = function(sedeKey, btnEl) {
    // Actualizar estados visuales de las pills
    const pills = document.querySelectorAll('.sede-filter-pill');
    pills.forEach(pill => {
      pill.classList.remove('is-active', 'bg-karina-charcoal', 'text-white', 'font-bold', 'shadow-md');
      pill.classList.add('bg-white/80', 'text-karina-charcoal/80', 'border-black/10');
    });

    if (btnEl) {
      btnEl.classList.remove('bg-white/80', 'text-karina-charcoal/80', 'border-black/10');
      btnEl.classList.add('is-active', 'bg-karina-charcoal', 'text-white', 'font-bold', 'shadow-md');
    }

    // Filtrar tarjetas y sección de aliados
    const cards = document.querySelectorAll('.gastronomia-card, #section-club-palma-real');
    let visibleCount = 0;

    cards.forEach(card => {
      const cardSede = card.getAttribute('data-sede');
      if (sedeKey === 'all' || cardSede === sedeKey) {
        card.classList.remove('hidden');
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(() => {
          card.style.transition = 'all 320ms cubic-bezier(0.16, 1, 0.3, 1)';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 30 * visibleCount);
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });
  };

  // 2. Intercambio de Foto Principal con Transición Suave
  window.changeRestaurantPhoto = function(restaurantId, newSrc, clickedThumb) {
    const mainImg = document.getElementById('main-photo-' + restaurantId);
    if (!mainImg) return;

    // Aplicar clase de swap (fade out / scale down)
    mainImg.classList.add('is-swapping');

    setTimeout(() => {
      mainImg.src = newSrc;
      mainImg.classList.remove('is-swapping');
    }, 180);

    // Actualizar borde activo en la fila de miniaturas
    if (clickedThumb) {
      const parentRow = clickedThumb.closest('.thumbs-row');
      if (parentRow) {
        parentRow.querySelectorAll('.restaurant-thumb').forEach(thumb => {
          thumb.classList.remove('is-active', 'border-karina-mustard', 'ring-2', 'ring-karina-mustard/40', 'opacity-100');
          thumb.classList.add('border-transparent', 'opacity-70');
        });
        clickedThumb.classList.remove('border-transparent', 'opacity-70');
        clickedThumb.classList.add('is-active', 'border-karina-mustard', 'ring-2', 'ring-karina-mustard/40', 'opacity-100');
      }
    }
  };

  // 3. Modal de Menú Digital
  window.openGastronomiaMenu = function(restaurantId, categoryKeyword = '') {
    const data = gastronomiaMenusData[restaurantId];
    if (!data) return;

    const modal = document.getElementById('gastronomia-menu-modal');
    const titleEl = document.getElementById('modal-menu-title');
    const subtitleEl = document.getElementById('modal-menu-subtitle');
    const scheduleEl = document.getElementById('modal-menu-schedule');
    const contentEl = document.getElementById('modal-menu-categories');
    const whatsappBtn = document.getElementById('modal-menu-whatsapp-btn');

    if (titleEl) titleEl.textContent = data.name;
    if (subtitleEl) subtitleEl.textContent = data.sede;
    if (scheduleEl) scheduleEl.innerHTML = `<i class="fa-regular fa-clock mr-1.5 text-karina-mustard"></i>${data.schedule}`;

    if (whatsappBtn) {
      const message = encodeURIComponent(`Hola ${data.name} (${data.sede}), deseo consultar la disponibilidad y realizar una reserva/pedido de su menú.`);
      whatsappBtn.href = `https://wa.me/${data.phone}?text=${message}`;
    }

    let categoriesToShow = data.categories;
    if (categoryKeyword) {
      const matched = data.categories.filter(cat => 
        cat.name.toLowerCase().includes(categoryKeyword.toLowerCase())
      );
      if (matched.length > 0) {
        const others = data.categories.filter(cat => !matched.includes(cat));
        categoriesToShow = [...matched, ...others];
      }
    }

    if (contentEl) {
      contentEl.innerHTML = categoriesToShow.map(cat => `
        <div class="space-y-4">
          <div class="flex items-center gap-3 border-b border-black/10 pb-2">
            <span class="w-2.5 h-2.5 rounded-full bg-karina-mustard"></span>
            <h4 class="text-sm sm:text-base font-bold text-karina-charcoal tracking-wide uppercase">${cat.name}</h4>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            ${cat.items.map(item => `
              <div class="bg-white/80 p-3.5 sm:p-4 rounded-2xl border border-black/5 flex flex-col justify-between gap-2 shadow-xs hover:border-karina-mustard/50 transition-colors">
                <div class="space-y-1 text-left">
                  <div class="flex items-start justify-between gap-2">
                    <h5 class="text-xs sm:text-sm font-bold text-karina-charcoal leading-snug">${item.name}</h5>
                    <span class="text-xs sm:text-sm font-bold text-karina-charcoal shrink-0 font-mono">${item.price}</span>
                  </div>
                  <p class="text-[11px] text-karina-charcoal/70 font-light leading-relaxed">${item.desc}</p>
                </div>
                <div class="flex items-center justify-between pt-1 border-t border-black/5">
                  <span class="tag-pill text-[9px]">${item.tag}</span>
                  <a href="https://wa.me/${data.phone}?text=${encodeURIComponent(`Hola ${data.name}, me interesa ordenar: ${item.name} (${item.price})`)}" target="_blank" class="text-[10px] font-bold text-karina-blue hover:text-karina-charcoal flex items-center gap-1 transition-colors">
                    <span>Pedir por WhatsApp</span>
                    <i class="fa-brands fa-whatsapp text-xs text-[#25D366]"></i>
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');
    }

    if (modal) {
      modal.classList.remove('is-hidden');
      document.body.style.overflow = 'hidden';
      const modalScroll = modal.querySelector('.overflow-y-auto');
      if (modalScroll) modalScroll.scrollTop = 0;
    }
  };

  window.closeGastronomiaMenu = function() {
    const modal = document.getElementById('gastronomia-menu-modal');
    if (modal) {
      modal.classList.add('is-hidden');
      document.body.style.overflow = '';
    }
  };

  // 4. Carrusel de Propuestas Aliadas Club Palma Real (Touch & Mouse Drag)
  window.scrollPalmaRealCarousel = function(direction) {
    const track = document.getElementById('palma-real-carousel-track');
    if (!track) return;
    const card = track.querySelector('.snap-start');
    const cardWidth = card ? card.offsetWidth + 16 : 320;
    track.scrollBy({ left: cardWidth * direction, behavior: 'smooth' });
  };

  // Inicializar observador y dots del carrusel de Club Palma Real
  const setupPalmaRealCarousel = () => {
    const track = document.getElementById('palma-real-carousel-track');
    const dots = document.querySelectorAll('.palma-dot');
    if (!track) return;

    // Sincronización de dots con scroll táctil
    const updateDots = () => {
      if (!dots.length) return;
      const scrollLeft = track.scrollLeft;
      const card = track.querySelector('.snap-start');
      const cardWidth = card ? card.offsetWidth + 16 : 320;
      const activeIndex = Math.min(dots.length - 1, Math.max(0, Math.round(scrollLeft / cardWidth)));
      dots.forEach((dot, idx) => {
        if (idx === activeIndex) {
          dot.className = 'palma-dot w-5 h-1.5 rounded-full bg-karina-charcoal transition-all cursor-pointer';
        } else {
          dot.className = 'palma-dot w-1.5 h-1.5 rounded-full bg-karina-charcoal/20 transition-all cursor-pointer';
        }
      });
    };

    track.addEventListener('scroll', updateDots, { passive: true });

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        const card = track.querySelector('.snap-start');
        const cardWidth = card ? card.offsetWidth + 16 : 320;
        track.scrollTo({ left: cardWidth * idx, behavior: 'smooth' });
      });
    });

    // Soporte para arrastre con ratón en desktop además de touch nativo en mobile
    let isDown = false;
    let startX = 0;
    let scrollLeftPos = 0;

    track.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeftPos = track.scrollLeft;
    });

    track.addEventListener('mouseleave', () => {
      isDown = false;
    });

    track.addEventListener('mouseup', () => {
      isDown = false;
    });

    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeftPos - walk;
    });
  };

  setupPalmaRealCarousel();

  // Cerrar modales al presionar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeGastronomiaMenu();
      window.closeLightbox();
    }
  });




  // ===================================================
  // 11B. SELECCIÓN DE PLATOS / CARRITO RÁPIDO (COMPATIBILIDAD)
  // ===================================================
  let cart = [];

  window.addToOrder = function(name, price, img) {
    const existing = cart.find(i => i.name === name);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ name, price, img, qty: 1 });
    }
    updateCartUI();
    toggleCartDrawer(true);
  };

  function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const list = document.getElementById('cart-items-list');
    const totalEl = document.getElementById('cart-total-price');

    const totalQty = cart.reduce((acc, i) => acc + i.qty, 0);
    const totalPrice = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);

    if (badge) badge.textContent = totalQty;
    if (totalEl) totalEl.textContent = `$${totalPrice}`;

    if (!list) return;

    if (cart.length === 0) {
      list.innerHTML = `<p class="text-xs text-karina-charcoal/50 font-light text-center py-10">Tu selección está vacía. Añade tus opciones preferidas.</p>`;
      return;
    }

    list.innerHTML = cart.map(item => `
      <div class="flex items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-black/5 shadow-xs">
        <div class="flex items-center gap-3">
          <img src="${item.img}" class="w-12 h-12 rounded-xl object-cover">
          <div>
            <p class="text-xs font-bold text-karina-charcoal">${item.name}</p>
            <p class="text-[11px] text-karina-charcoal/60">$${item.price} x ${item.qty}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-karina-charcoal">$${item.price * item.qty}</span>
          <button onclick="removeFromOrder('${item.name}')" class="text-xs text-red-400 hover:text-red-600 p-1" title="Eliminar"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    `).join('');
  }

  window.removeFromOrder = function(name) {
    cart = cart.filter(i => i.name !== name);
    updateCartUI();
  };

  window.toggleCartDrawer = function(open) {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-backdrop');

    if (!drawer || !backdrop) return;

    if (open) {
      drawer.classList.remove('translate-x-full');
      backdrop.classList.remove('opacity-0', 'pointer-events-none');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.add('translate-x-full');
      backdrop.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    }
  };

  window.submitOrderToAI = function() {
    if (cart.length === 0) {
      alert('Por favor, añade al menos un platillo o servicio a tu selección.');
      return;
    }

    const orderSummary = cart.map(i => `• ${i.name} (x${i.qty}) - $${i.price * i.qty}`).join('%0A');
    const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
    const text = `Hola Arimiña-IA, deseo realizar la siguiente reserva/pedido:%0A%0A${orderSummary}%0A%0ATotal Estimado: $${total}`;

    window.open(`https://wa.me/5804249169601?text=${text}`, '_blank');
  };

  window.consultAIAssistant = function() {
    alert('Arimiña-IA: Te sugiero acompañar tus elecciones gastronómicas con nuestra selección de vinos tintos Reserva o solicitar una cita personalizada para nuestros servicios de estilismo.');
  };


  // ===================================================
  // 12. CONTROLADORES: FUNDACIÓN KARIÑA (MODALES Y LIGHTBOX)
  // ===================================================

  window.openModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      const video = modal.querySelector('video');
      if (video) {
        video.play().catch(() => {});
      }
    }
  };

  window.closeModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
      const video = modal.querySelector('video');
      if (video) {
        video.pause();
      }
    }
  };



  // ===================================================
  // 13. CONTROLADORES: PÁGINAS LEGALES Y RESCATE 404
  // ===================================================

  window.askAIForHelp404 = function() {
    const message = "Hola Arimiña-IA, me he perdido en el sitio web de Hoteles Kariña. ¿Podrías orientarme con las suites disponibles o servicios?";
    window.open(`https://wa.me/5804249169601?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Observador para resaltar la sección activa en el TOC de Términos y Privacidad
  const legalSections = document.querySelectorAll('article section[id]');
  const tocLinks = document.querySelectorAll('.toc-link');

  if (legalSections.length > 0 && tocLinks.length > 0) {
    const tocObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          tocLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('is-active');
            } else {
              link.classList.remove('is-active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    legalSections.forEach(section => tocObserver.observe(section));
  }

  // ===================================================
  // 14. CONTROLADORES: NAVEGACIÓN Y MENÚS DESPLEGABLES
  // ===================================================
  const dropdownWrappers = document.querySelectorAll('.nav-dropdown-wrapper');

  dropdownWrappers.forEach(wrapper => {
    const trigger = wrapper.querySelector('.nav-link-item');
    const panel = wrapper.querySelector('.nav-dropdown-panel');

    if (!trigger || !panel) return;

    // Abrir/Cerrar con Enter o Espacio para accesibilidad
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isOpen = panel.classList.contains('is-keyboard-open');
        
        dropdownWrappers.forEach(w => {
          const p = w.querySelector('.nav-dropdown-panel');
          if (p) p.classList.remove('is-keyboard-open', 'opacity-100', 'pointer-events-auto', 'translate-y-0');
        });

        if (!isOpen) {
          panel.classList.add('is-keyboard-open', 'opacity-100', 'pointer-events-auto', 'translate-y-0');
        }
      } else if (e.key === 'Escape') {
        panel.classList.remove('is-keyboard-open', 'opacity-100', 'pointer-events-auto', 'translate-y-0');
        trigger.focus();
      }
    });
  });

  // Cerrar al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown-wrapper')) {
      document.querySelectorAll('.nav-dropdown-panel').forEach(panel => {
        panel.classList.remove('is-keyboard-open', 'opacity-100', 'pointer-events-auto', 'translate-y-0');
      });
    }
  });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});

// ===================================================
// 15. CONTROLADORES: AUTENTICACIÓN Y DASHBOARD DEL HUÉSPED
// ===================================================

let currentAuthMode = 'register';
let currentLightLevel = 4;

// 1. Alternar modo entre Iniciar Sesión y Registro
function switchAuthMode(mode) {
  currentAuthMode = mode;
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');
  const fieldName = document.getElementById('field-fullname');
  const fieldPhone = document.getElementById('field-whatsapp');
  const title = document.getElementById('auth-title');
  const subtitle = document.getElementById('auth-subtitle');
  const submitBtn = document.getElementById('auth-submit-btn');

  if (!tabLogin || !tabRegister) return;

  if (mode === 'login') {
    tabLogin.className = 'auth-segment-btn is-active flex-1 py-2 rounded-full text-xs font-bold bg-white text-karina-charcoal shadow-sm transition-all';
    tabRegister.className = 'auth-segment-btn flex-1 py-2 rounded-full text-xs font-semibold text-karina-charcoal/60 hover:text-karina-charcoal transition-all';

    if (fieldName) fieldName.style.display = 'none';
    if (fieldPhone) fieldPhone.style.display = 'none';
    if (title) title.textContent = 'Iniciar Sesión';
    if (subtitle) subtitle.textContent = 'Ingresa tus credenciales para acceder a tu suite y reservas.';
    if (submitBtn) submitBtn.textContent = 'ENTRAR A MI CUENTA';
  } else {
    tabRegister.className = 'auth-segment-btn is-active flex-1 py-2 rounded-full text-xs font-bold bg-white text-karina-charcoal shadow-sm transition-all';
    tabLogin.className = 'auth-segment-btn flex-1 py-2 rounded-full text-xs font-semibold text-karina-charcoal/60 hover:text-karina-charcoal transition-all';

    if (fieldName) fieldName.style.display = 'block';
    if (fieldPhone) fieldPhone.style.display = 'block';
    if (title) title.textContent = 'Bienvenido';
    if (subtitle) subtitle.textContent = 'Accede a tu cuenta o únete a Kariña Club.';
    if (submitBtn) submitBtn.textContent = 'REGISTRARME';
  }
}

// 2. Enviar formulario con bypass directo a Home (Módulo usuario temporalmente inactivo)
function handleAuthSubmit(event) {
  if (event) event.preventDefault();
  window.location.replace('index.html');
}

function bypassToDashboard(socialName) {
  window.location.replace('index.html');
}

// 3. Inicialización del Dashboard
document.addEventListener('DOMContentLoaded', () => {
  const userNameElem = document.getElementById('dash-user-name');
  if (userNameElem) {
    const savedName = localStorage.getItem('karina_user_name');
    if (savedName) userNameElem.textContent = savedName;
  }
});

// 4. Control domótico de Suite
function toggleSuiteFeature(featureName, isChecked) {
  const statusElem = document.getElementById('dash-ai-status');
  if (statusElem) {
    statusElem.textContent = `${featureName} ha sido ${isChecked ? 'activado' : 'desactivado'} con éxito para tu suite.`;
  }
}

function adjustLightLevel(delta) {
  currentLightLevel = Math.max(1, Math.min(6, currentLightLevel + delta));
  const levelElem = document.getElementById('light-level');
  if (levelElem) levelElem.textContent = currentLightLevel;

  const statusElem = document.getElementById('dash-ai-status');
  if (statusElem) {
    statusElem.textContent = `Nivel de iluminación ajustado a escena ${currentLightLevel}/6.`;
  }
}

// 5. Interacción con Arimiña-IA en el Dashboard
function handleDashboardAISubmit(event) {
  event.preventDefault();
  const input = document.getElementById('dash-ai-input');
  const statusElem = document.getElementById('dash-ai-status');
  if (!input || !input.value.trim()) return;

  const query = input.value.trim();
  input.value = '';

  if (statusElem) {
    statusElem.textContent = `Arimiña-IA procesando: "${query}"... Solicitud enviada a la conserjería de tu sede.`;
  }
}

function requestItineraryChange() {
  const statusElem = document.getElementById('dash-ai-status');
  if (statusElem) {
    statusElem.textContent = 'Arimiña-IA: Te he abierto el canal de WhatsApp para reprogramar tu masaje o cena de hoy.';
  }
  window.open('https://wa.me/5804249169601?text=Hola%20Arimi%C3%B1a-IA,%20deseo%20reprogramar%20mi%20itinerario%20de%20hoy%20en%20la%20suite%20403', '_blank');
}

function triggerQuickAction(actionName) {
  const statusElem = document.getElementById('dash-ai-status');
  if (statusElem) {
    statusElem.textContent = `Solicitud de "${actionName}" enviada a recepción. Un conserje atenderá tu suite a la brevedad.`;
  }
}

// Exportación a objeto window para llamadas inline
window.switchAuthMode = switchAuthMode;
window.handleAuthSubmit = handleAuthSubmit;
window.bypassToDashboard = bypassToDashboard;
window.toggleSuiteFeature = toggleSuiteFeature;
window.adjustLightLevel = adjustLightLevel;
window.handleDashboardAISubmit = handleDashboardAISubmit;
window.requestItineraryChange = requestItineraryChange;
window.triggerQuickAction = triggerQuickAction;

/* ==========================================================
   16. CONTROLADORES: PRE-CHECKIN Y CHECKIN CONTROLLER
   ========================================================== */

function solicitarServicio(servicio) {
  const token = document.getElementById('display-token')?.textContent || 'KD-78291';
  const mensaje = `Hola Arimiña-IA, deseo solicitar el servicio de *${servicio}* para mi reserva con Token Odoo: *${token}*.`;
  window.open(`https://wa.me/5804249169601?text=${encodeURIComponent(mensaje)}`, '_blank');
}

function seleccionarHora(btn) {
  document.querySelectorAll('.hora-btn').forEach(b => {
    b.classList.remove('bg-[#1E1E1E]', 'text-white');
    b.classList.add('bg-[#FAF6F0]', 'text-[#1E1E1E]', 'border', 'border-[#E8DFC8]');
  });
  btn.classList.add('bg-[#1E1E1E]', 'text-white');
  btn.classList.remove('bg-[#FAF6F0]', 'border', 'border-[#E8DFC8]');
}

function completarCheckin() {
  const modal = document.getElementById('modal-pase-express');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function cerrarModalPaseExpress() {
  const modal = document.getElementById('modal-pase-express');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function enviarAriminaDashboard() {
  const input = document.getElementById('arimina-input');
  if (input && input.value.trim() !== '') {
    const query = input.value.trim();
    const token = 'KD-78291';
    window.open(`https://wa.me/5804249169601?text=${encodeURIComponent(`[Token Odoo: ${token}] Solicitud Huésped: ${query}`)}`, '_blank');
    input.value = '';
  }
}

function accionRapida(accion) {
  const token = 'KD-78291';
  window.open(`https://wa.me/5804249169601?text=${encodeURIComponent(`[Token: ${token}] Solicitud rápida: ${accion}`)}`, '_blank');
}

// Exportación a objeto window para llamadas inline
window.solicitarServicio = solicitarServicio;
window.seleccionarHora = seleccionarHora;
window.completarCheckin = completarCheckin;
window.cerrarModalPaseExpress = cerrarModalPaseExpress;
window.enviarAriminaDashboard = enviarAriminaDashboard;
window.accionRapida = accionRapida;

// ==========================================
// 17. CONTROLADOR DE CAMBIO DE IDIOMA (BOTÓN FLOTANTE DISCRETO)
// ==========================================
function toggleLanguage() {
  const btns = document.querySelectorAll('#floating-lang-btn, .floating-lang-toggle, .fixed button');
  btns.forEach(btn => {
    const span = btn.querySelector('span') || btn;
    if (span.textContent.trim().toUpperCase() === 'ES/EN') {
      span.textContent = 'EN/ES';
    } else if (span.textContent.trim().toUpperCase() === 'EN/ES') {
      span.textContent = 'ES/EN';
    }
  });
}
window.toggleLanguage = toggleLanguage;

// ==========================================
// 18. ASISTENTE CONVERSACIONAL ARIMIÑA (MODAL INMERSIVO FULLSCREEN)
// ==========================================

function initAriminaChatModal() {
  if (document.getElementById('modal-arimina')) return;

  const modalHtml = `
  <div id="modal-arimina" class="fixed inset-0 z-[100] bg-[#FAF8F5]/95 backdrop-blur-md transition-all duration-300 opacity-0 pointer-events-none flex flex-col justify-between" role="dialog" aria-modal="true" aria-labelledby="arimina-header-title">
    <div class="max-w-4xl mx-auto w-full h-full flex flex-col py-4 sm:py-6 px-4 sm:px-6 relative">
      
      <!-- Cabecera Minimalista del Asistente -->
      <header class="flex items-center justify-between pb-4 border-b border-[#E8DFC8]/60 shrink-0">
        <div class="flex items-center gap-3">
          <div class="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#F0A800] to-[#FFD573] flex items-center justify-center text-[#1E1E1E] shadow-md shrink-0">
            <i class="fa-solid fa-wand-magic-sparkles text-sm animate-pulse"></i>
            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 id="arimina-header-title" class="text-base sm:text-lg font-bold text-[#1E1E1E] tracking-tight">Arimiña ✨</h3>
              <span class="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-200">En línea</span>
            </div>
            <p class="text-xs text-[#726B63] font-light">Conserje Virtual • Hotel Kariña</p>
          </div>
        </div>

        <!-- Botón de Cierre Accesible -->
        <button onclick="closeAriminaChat()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 hover:bg-black/10 text-xs font-semibold text-[#1E1E1E] transition-all active:scale-95 cursor-pointer" aria-label="Cerrar asistente Arimiña">
          <span>✕ Cerrar</span>
          <kbd class="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 bg-white/80 rounded text-[#726B63] border border-black/10">Esc</kbd>
        </button>
      </header>

      <!-- Área Conversacional Central con Scroll Suave -->
      <main id="arimina-messages-container" class="flex-1 overflow-y-auto py-6 space-y-4 no-scrollbar scroll-smooth pr-1">
        
        <!-- Welcome / Empty State Inicial -->
        <div id="arimina-welcome-state" class="text-center py-6 sm:py-10 space-y-6 max-w-xl mx-auto">
          <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-gradient-to-tr from-[#FFF3D6] to-[#FFE8A3] border border-[#F0A800]/30 shadow-lg flex items-center justify-center animate-ai-glow">
            <img src="https://uploads.onecompiler.io/44s48z3dm/1787539299313/Icono-Kari%C3%B1a-new.png" alt="Arimiña Asistente" class="w-10 sm:w-12 h-auto object-contain">
          </div>

          <div class="space-y-2">
            <h2 class="text-xl sm:text-2xl font-light text-[#1E1E1E]">
              ¡Hola! Soy <strong class="font-extrabold text-karina-charcoal">Arimiña</strong> ✨
            </h2>
            <p class="text-xs sm:text-sm text-[#726B63] font-light leading-relaxed max-w-md mx-auto">
              Tu conserje virtual con inteligencia artificial para asesorarte con reservas, suites, gastronomía, eventos y servicios en todas nuestras sedes.
            </p>
          </div>

          <!-- Sugerencias Rápidas en Pills Interactivos -->
          <div class="pt-2 space-y-2">
            <p class="text-[11px] font-mono font-bold uppercase tracking-wider text-[#726B63]">Sugerencias de consulta rápida:</p>
            <div class="flex flex-wrap justify-center gap-2 pt-1">
              <button onclick="sendAriminaQuickPrompt('Ver suites disponibles en Maturín')" class="px-4 py-2 rounded-full bg-white hover:bg-[#E8DFC8]/40 border border-[#E8DFC8] text-xs font-medium text-[#1E1E1E] shadow-sm hover:shadow transition-all active:scale-95 text-left flex items-center gap-2 cursor-pointer">
                <i class="fa-solid fa-bed text-[#F0A800] text-[11px]"></i>
                <span>Ver suites disponibles en Maturín</span>
              </button>
              <button onclick="sendAriminaQuickPrompt('Conocer la gastronomía de Moriche y Oh My Bar')" class="px-4 py-2 rounded-full bg-white hover:bg-[#E8DFC8]/40 border border-[#E8DFC8] text-xs font-medium text-[#1E1E1E] shadow-sm hover:shadow transition-all active:scale-95 text-left flex items-center gap-2 cursor-pointer">
                <i class="fa-solid fa-utensils text-[#EB8C84] text-[11px]"></i>
                <span>Conocer la gastronomía de Moriche y Oh My Bar</span>
              </button>
              <button onclick="sendAriminaQuickPrompt('Planes corporativos en El Tigre y Punta de Mata')" class="px-4 py-2 rounded-full bg-white hover:bg-[#E8DFC8]/40 border border-[#E8DFC8] text-xs font-medium text-[#1E1E1E] shadow-sm hover:shadow transition-all active:scale-95 text-left flex items-center gap-2 cursor-pointer">
                <i class="fa-solid fa-briefcase text-[#2680BD] text-[11px]"></i>
                <span>Planes corporativos en El Tigre y Punta de Mata</span>
              </button>
              <button onclick="sendAriminaQuickPrompt('Hablar directamente con un asesor humano')" class="px-4 py-2 rounded-full bg-white hover:bg-[#E8DFC8]/40 border border-[#E8DFC8] text-xs font-medium text-[#1E1E1E] shadow-sm hover:shadow transition-all active:scale-95 text-left flex items-center gap-2 cursor-pointer">
                <i class="fa-brands fa-whatsapp text-emerald-600 text-xs"></i>
                <span>Hablar directamente con un asesor humano</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Feed Dinámico de Mensajes -->
        <div id="arimina-messages-feed" class="space-y-4"></div>

        <!-- Indicador de Escritura -->
        <div id="arimina-typing-indicator" class="hidden flex items-center gap-2 text-xs text-[#726B63] pt-2">
          <div class="w-7 h-7 rounded-full bg-[#FFD573]/60 flex items-center justify-center text-[10px] text-[#1E1E1E] shrink-0">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
          </div>
          <div class="bg-white/90 border border-[#E8DFC8] px-3.5 py-2 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 bg-[#F0A800] rounded-full animate-bounce"></span>
            <span class="w-1.5 h-1.5 bg-[#F0A800] rounded-full animate-bounce [animation-delay:0.2s]"></span>
            <span class="w-1.5 h-1.5 bg-[#F0A800] rounded-full animate-bounce [animation-delay:0.4s]"></span>
            <span class="text-[11px] text-[#726B63] ml-1 font-mono">Arimiña está escribiendo...</span>
          </div>
        </div>

      </main>

      <!-- Input Bar Estilo Gemini / Claude (Flotante Inferior) -->
      <footer class="pt-2 shrink-0">
        <div class="max-w-3xl mx-auto w-full bg-white/95 backdrop-blur-xl border border-[#E8DFC8] rounded-3xl p-2 sm:p-2.5 shadow-xl transition-all focus-within:ring-2 focus-within:ring-[#F0A800]/50 focus-within:border-[#F0A800]">
          <div class="flex items-end gap-2">
            <textarea 
              id="arimina-chat-input" 
              rows="1" 
              placeholder="Pregúntale a Arimiña sobre suites, gastronomía o reservas..." 
              class="flex-1 bg-transparent border-none outline-none resize-none px-3 py-2 text-xs sm:text-sm text-[#1E1E1E] placeholder:text-[#726B63]/60 focus:ring-0 max-h-32 leading-relaxed"
            ></textarea>
            
            <button 
              id="arimina-chat-send" 
              onclick="sendAriminaUserMessage()" 
              class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1E1E1E] hover:bg-black text-white flex items-center justify-center shrink-0 transition-all active:scale-90 shadow-sm cursor-pointer" 
              aria-label="Enviar mensaje a Arimiña"
            >
              <i class="fa-solid fa-arrow-up text-xs sm:text-sm"></i>
            </button>
          </div>
        </div>
        <p class="text-[10px] text-center text-[#726B63]/70 font-light mt-2 pb-1">
          Arimiña utiliza IA para ayudarte a planificar tu estancia en Hotel Kariña.
        </p>
      </footer>

    </div>
  </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const input = document.getElementById('arimina-chat-input');
  if (input) {
    input.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendAriminaUserMessage();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('modal-arimina');
      if (modal && !modal.classList.contains('opacity-0')) {
        closeAriminaChat();
      }
    }
  });
}

function openAriminaChat(initialPrompt = '') {
  initAriminaChatModal();
  const modal = document.getElementById('modal-arimina');
  if (modal) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = 'hidden';

    const input = document.getElementById('arimina-chat-input');
    setTimeout(() => {
      if (input) input.focus();
      if (initialPrompt && initialPrompt.trim()) {
        sendAriminaUserMessage(initialPrompt.trim());
      }
    }, 150);
  }
}

function closeAriminaChat() {
  const modal = document.getElementById('modal-arimina');
  if (modal) {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = '';
  }
}

function sendAriminaQuickPrompt(prompt) {
  sendAriminaUserMessage(prompt);
}

function sendAriminaUserMessage(overrideText = null) {
  const input = document.getElementById('arimina-chat-input');
  const text = overrideText || (input ? input.value.trim() : '');
  if (!text) return;

  if (input && !overrideText) {
    input.value = '';
    input.style.height = 'auto';
  }

  const welcomeState = document.getElementById('arimina-welcome-state');
  if (welcomeState) welcomeState.style.display = 'none';

  const feed = document.getElementById('arimina-messages-feed');
  const container = document.getElementById('arimina-messages-container');
  const typing = document.getElementById('arimina-typing-indicator');

  if (feed) {
    const userBubble = document.createElement('div');
    userBubble.className = 'flex justify-end';
    userBubble.innerHTML = `
      <div class="bg-[#1E1E1E] text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%] sm:max-w-[75%] text-xs sm:text-sm font-normal shadow-sm leading-relaxed text-left">
        ${escapeHtml(text)}
      </div>
    `;
    feed.appendChild(userBubble);
  }

  if (typing) typing.classList.remove('hidden');
  if (container) container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });

  setTimeout(() => {
    if (typing) typing.classList.add('hidden');
    const response = generateAriminaResponse(text);

    if (feed) {
      const aiBubble = document.createElement('div');
      aiBubble.className = 'flex items-start gap-3 text-left';
      aiBubble.innerHTML = `
        <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F0A800] to-[#FFD573] flex items-center justify-center text-[#1E1E1E] text-xs shadow-sm shrink-0 mt-1">
          <i class="fa-solid fa-wand-magic-sparkles text-[11px]"></i>
        </div>
        <div class="bg-white/95 border border-[#E8DFC8] text-[#1E1E1E] rounded-2xl rounded-tl-none p-4 sm:p-5 max-w-[90%] sm:max-w-[80%] text-xs sm:text-sm shadow-sm space-y-3 leading-relaxed">
          <div>${formatAriminaMarkdown(response.text)}</div>
          ${response.actionsHtml || ''}
        </div>
      `;
      feed.appendChild(aiBubble);
    }

    if (container) container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  }, 600);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function formatAriminaMarkdown(md) {
  let html = md
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
  return html;
}

function generateAriminaResponse(userQuery) {
  const q = userQuery.toLowerCase();
  const encodedQ = encodeURIComponent(`Hola Arimiña-IA, deseo consultar sobre: ${userQuery}`);
  const waLink = `https://wa.me/5804249169601?text=${encodedQ}`;

  // 1. Suites / Habitaciones / Sedes
  if (q.includes('suite') || q.includes('habitaci') || q.includes('cama') || q.includes('matur') || q.includes('tigre') || q.includes('punta de mata') || q.includes('disponib') || q.includes('tarifa') || q.includes('precio') || q.includes('costo') || q.includes('hosped')) {
    return {
      text: `En **Hoteles Kariña** contamos con 2 configuraciones de suites cuidadosamente diseñadas para tu máximo confort en nuestras sedes de **Maturín**, **El Tigre** y **Punta de Mata**:\n\n` +
            `• **Suite Estándar:** Equipada con **1 Cama Matrimonial** (capacidad para 2 personas), climatización split silenciosa, TV de alta definición, WiFi de alta velocidad y escritorio ejecutivo.\n` +
            `• **Suite Premium:** Equipada con **2 Camas Matrimoniales** (capacidad para hasta 4 personas), dos ambientes independientes, sala de estar, kitchenette con nevera ejecutiva y acabados de lujo contemporáneo.\n\n` +
            `¿En cuál de nuestras sedes te gustaría hospedarte?`,
      actionsHtml: `
        <div class="flex flex-wrap gap-2 pt-2 border-t border-[#E8DFC8]/60">
          <a href="suites.html" class="px-3.5 py-1.5 rounded-full bg-[#1E1E1E] hover:bg-black text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all">
            <span>Ver Catálogo de Suites</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
          <a href="${waLink}" target="_blank" class="px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all">
            <i class="fa-brands fa-whatsapp text-xs"></i>
            <span>Cotizar con Asesor</span>
          </a>
        </div>
      `
    };
  }

  // 2. Gastronomía / Restaurantes / Bares
  if (q.includes('gastronom') || q.includes('restaurante') || q.includes('comida') || q.includes('moriche') || q.includes('oh my bar') || q.includes('two chefs') || q.includes('283') || q.includes('brulee') || q.includes('brûlée') || q.includes('desayuno') || q.includes('cenar') || q.includes('comer') || q.includes('bar') || q.includes('bistro') || q.includes('cocktail') || q.includes('menu') || q.includes('menú')) {
    return {
      text: `Nuestra oferta gastronómica exalta los sabores autóctonos del **Oriente Venezolano** con técnicas contemporáneas de alta cocina:\n\n` +
            `• **Moriche Restaurant (Maturín):** Restaurante insignia con cocina de autor, desayunos buffet y coctelería refinada.\n` +
            `• **Oh My Bar Bistro (Maturín):** Gastronomía casual, hamburguesas gourmet, alitas BBQ y mixología en el complejo Master Pádel.\n` +
            `• **Restaurante 283 (El Tigre):** Especialidad en paellas, carpaccio de ternera y cocina mediterránea contemporánea.\n` +
            `• **Two Chefs Restaurant (Punta de Mata):** Exclusivos cortes premium y gastronomía de autor.\n` +
            `• **Club Palma Real:** La Palmera Restobar, Lagos Restaurant y Brûlée Pastelería fina.`,
      actionsHtml: `
        <div class="flex flex-wrap gap-2 pt-2 border-t border-[#E8DFC8]/60">
          <a href="restaurante.html" class="px-3.5 py-1.5 rounded-full bg-[#1E1E1E] hover:bg-black text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all">
            <span>Explorar Gastronomía</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
          <a href="${waLink}" target="_blank" class="px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all">
            <i class="fa-brands fa-whatsapp text-xs"></i>
            <span>Reservar Mesa</span>
          </a>
        </div>
      `
    };
  }

  // 3. Corporativo / Negocios / Salones / Eventos
  if (q.includes('corporat') || q.includes('negocio') || q.includes('salon') || q.includes('salón') || q.includes('evento') || q.includes('conferenc') || q.includes('boda') || q.includes('reunion') || q.includes('reunión') || q.includes('empresa') || q.includes('guanipa') || q.includes('arimiña')) {
    return {
      text: `Disponemos de espacios corporativos y salones de alta confiabilidad con tecnología de vanguardia:\n\n` +
            `• **Salón Arimiña (Maturín):** Gran salón de conferencias y recepciones con capacidad para hasta 250 personas, sonido acústico y catering integral.\n` +
            `• **Salón Guanipa (El Tigre):** Centro de eventos corporativos y bodas con ambientes climatizados.\n` +
            `• **Business Centers (Punta de Mata & El Tigre):** Salas de juntas ejecutivas con internet de fibra óptica simétrica dedicado, pantallas interactivas y coffee break corporativo.`,
      actionsHtml: `
        <div class="flex flex-wrap gap-2 pt-2 border-t border-[#E8DFC8]/60">
          <a href="business.html" class="px-3.5 py-1.5 rounded-full bg-[#1E1E1E] hover:bg-black text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all">
            <span>Espacios Corporativos</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
          <a href="${waLink}" target="_blank" class="px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all">
            <i class="fa-brands fa-whatsapp text-xs"></i>
            <span>Cotizar Evento</span>
          </a>
        </div>
      `
    };
  }

  // 4. Asesor humano / WhatsApp / Contacto directo
  if (q.includes('humano') || q.includes('asesor') || q.includes('persona') || q.includes('contacto') || q.includes('telefono') || q.includes('teléfono') || q.includes('llamar') || q.includes('hablar') || q.includes('whatsapp')) {
    return {
      text: `¡Por supuesto! Nuestro equipo de atención y conserjería humana está disponible a través de nuestra línea oficial de **WhatsApp** para brindarte atención personalizada al instante.`,
      actionsHtml: `
        <div class="flex flex-wrap gap-2 pt-2 border-t border-[#E8DFC8]/60">
          <a href="${waLink}" target="_blank" class="px-4 py-2 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white text-xs font-bold inline-flex items-center gap-2 transition-all shadow-sm active:scale-95">
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>Conectar con Asesor Humano (+58 0424-9169601)</span>
          </a>
        </div>
      `
    };
  }

  // 5. Day Pass / Piscinas / Pádel / Recreación
  if (q.includes('day pass') || q.includes('daypass') || q.includes('piscina') || q.includes('padel') || q.includes('pádel') || q.includes('recreac') || q.includes('sol')) {
    return {
      text: `Disfruta de una jornada inolvidable con nuestro **Day Pass**:\n\n` +
            `• **Sede Maturín ($25):** Acceso completo al complejo de piscinas resort, parque acuático con toboganes, tumbonas y canchas de Master Pádel.\n` +
            `• **Sede El Tigre ($20):** Acceso a piscinas recreativas, solárium y áreas verdes de descanso continuo.`,
      actionsHtml: `
        <div class="flex flex-wrap gap-2 pt-2 border-t border-[#E8DFC8]/60">
          <a href="vive-karina.html" class="px-3.5 py-1.5 rounded-full bg-[#1E1E1E] hover:bg-black text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all">
            <span>Ver ¡Vive Kariña!</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
          <a href="${waLink}" target="_blank" class="px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all">
            <i class="fa-brands fa-whatsapp text-xs"></i>
            <span>Reservar Day Pass</span>
          </a>
        </div>
      `
    };
  }

  // 6. Fundación / Comunidad
  if (q.includes('fundacion') || q.includes('fundación') || q.includes('comunidad') || q.includes('indigena') || q.includes('indígena') || q.includes('artesania') || q.includes('artesanía') || q.includes('social')) {
    return {
      text: `La **Fundación Kariña** es nuestro compromiso vivo con las comunidades ancestrales de Monagas y Anzoátegui, apoyando la educación bilingüe, la preservación cultural y el desarrollo de talleres de cestería y artesanía en fibra de moriche.`,
      actionsHtml: `
        <div class="flex flex-wrap gap-2 pt-2 border-t border-[#E8DFC8]/60">
          <a href="fundacion.html" class="px-3.5 py-1.5 rounded-full bg-[#1E1E1E] hover:bg-black text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all">
            <span>Conocer Fundación</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      `
    };
  }

  // 7. Respuesta General / Default
  return {
    text: `Con gusto te asisto. En **Hotel Kariña** ofrecemos suites de descanso premium, gastronomía selecta, salones corporativos y piscinas resort en **Maturín**, **El Tigre** y **Punta de Mata**.\n\n` +
          `Puedes consultarme sobre **disponibilidad de suites**, **restaurantes y bares**, **Day Pass** o **salones para eventos**. ¿Qué información deseas consultar?`,
    actionsHtml: `
      <div class="flex flex-wrap gap-2 pt-2 border-t border-[#E8DFC8]/60">
        <a href="suites.html" class="px-3 py-1.5 rounded-full bg-white hover:bg-[#E8DFC8]/40 border border-[#E8DFC8] text-xs font-semibold text-[#1E1E1E] inline-flex items-center gap-1 transition-all">
          <span>Ver Suites</span>
        </a>
        <a href="restaurante.html" class="px-3 py-1.5 rounded-full bg-white hover:bg-[#E8DFC8]/40 border border-[#E8DFC8] text-xs font-semibold text-[#1E1E1E] inline-flex items-center gap-1 transition-all">
          <span>Gastronomía</span>
        </a>
        <a href="${waLink}" target="_blank" class="px-3 py-1.5 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all">
          <i class="fa-brands fa-whatsapp text-xs"></i>
          <span>Hablar por WhatsApp</span>
        </a>
      </div>
    `
  };
}

// Inicializar Arimiña Chat Modal al cargar el DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAriminaChatModal);
} else {
  initAriminaChatModal();
}

// Exportación global de funciones de Arimiña
window.initAriminaChatModal = initAriminaChatModal;
window.openAriminaChat = openAriminaChat;
window.closeAriminaChat = closeAriminaChat;
window.sendAriminaQuickPrompt = sendAriminaQuickPrompt;
window.sendAriminaUserMessage = sendAriminaUserMessage;
