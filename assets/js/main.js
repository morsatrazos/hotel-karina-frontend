// ==========================================
// CONFIGURACIÓN CENTRALIZADA GRUPO KARIÑA
// ==========================================
window.KARINA_CONFIG = {
  contactEmail: "contacto@hoteleskarina.com",
  social: {
    instagramGeneral: "https://instagram.com/hoteleskarina",
    instagramMaturin: "https://instagram.com/hotelkarina.maturin",
    instagramElTigre: "https://instagram.com/hotelkarina.guanipa",
    instagramPuntaDeMata: "https://instagram.com/hotelkarina.ptamata",
    instagramFundacion: "https://instagram.com/fundacionkarina"
  },
  sedes: {
    maturin: {
      name: "Hotel Kariña Maturín",
      address: "Etapa II, Macroparcela MC-30, Urbanización Palma Real, Maturín, Monagas",
      phone: "+58 424-9169610",
      whatsapp: "https://wa.me/584249169610",
      padelPhone: "+58 414-1908421",
      padelWhatsapp: "https://wa.me/584141908421",
      instagram: "@hotelkarina.maturin",
      instagramUrl: "https://instagram.com/hotelkarina.maturin"
    },
    elTigre: {
      name: "Hotel Kariña El Tigre",
      address: "A 100 m del Balancín Tricolor, Av. Ruiz Pineda con Calle 23 de Enero, El Tigre, Anzoátegui",
      phone: "+58 424-9559213",
      whatsapp: "https://wa.me/584249559213",
      instagram: "@hotelkarina.guanipa",
      instagramUrl: "https://instagram.com/hotelkarina.guanipa"
    },
    puntaDeMata: {
      name: "Hotel Kariña Punta de Mata",
      address: "Sector Zona Industrial, Ramal 7, Punta de Mata, Monagas",
      phone: "+58 424-9396445",
      whatsapp: "https://wa.me/584249396445",
      instagram: "@hotelkarina.ptamata",
      instagramUrl: "https://instagram.com/hotelkarina.ptamata"
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {

  // Sincronizar dinámicamente enlaces de email con clase .karina-email-link
  document.querySelectorAll('.karina-email-link').forEach(link => {
    link.href = `mailto:${window.KARINA_CONFIG.contactEmail}`;
    if (!link.hasChildNodes() || link.textContent.includes('@')) {
      link.textContent = window.KARINA_CONFIG.contactEmail;
    }
  });

  // ==========================================
  // 0. CONTROL DE HERO VIDEO Y AUTOPLAY MÓVIL
  // ==========================================
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    heroVideo.play().catch(() => {
      // Silencioso ante bloqueos estrictos de batería
    });
  }

  const heroAudioBtn = document.getElementById('hero-audio-btn');
  const heroAudioIcon = document.getElementById('hero-audio-icon');
  const heroAudioText = document.getElementById('hero-audio-text');

  if (heroVideo && heroAudioBtn) {
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

    updateHeroAudioUI(heroVideo.muted);

    heroAudioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      heroVideo.muted = !heroVideo.muted;
      if (!heroVideo.muted) {
        heroVideo.play().catch(() => {});
      }
      updateHeroAudioUI(heroVideo.muted);
    });
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
  // CONFIGURACIÓN CENTRALIZADA DE CONTACTO
  // ==========================================
  const KARINA_CONFIG = {
    contactEmail: 'contacto@hoteleskarina.com',
    reservasEmail: 'reservas@hoteleskarina.com',
    corporativoEmail: 'corporativo@hoteleskarina.com',
    instagramGeneral: '@hoteleskarina',
    instagramGeneralUrl: 'https://instagram.com/hoteleskarina',
    sedes: {
      maturin: {
        name: 'Hotel Kariña Maturín',
        phone: '+58 424-9169610',
        phoneRaw: '+584249169610',
        padelPhone: '+58 414-1908421',
        padelPhoneRaw: '+584141908421',
        padelWhatsapp: 'https://wa.me/584141908421',
        address: 'Etapa II, Macroparcela MC-30, Urbanización Palma Real, Maturín, Monagas',
        instagram: '@hotelkarina.maturin',
        instagramUrl: 'https://instagram.com/hotelkarina.maturin'
      },
      elTigre: {
        name: 'Hotel Kariña El Tigre',
        phone: '+58 424-9559213',
        phoneRaw: '+584249559213',
        address: 'A 100 m del Balancín Tricolor, Av. Ruiz Pineda con Calle 23 de Enero, El Tigre, Anzoátegui',
        instagram: '@hotelkarina.guanipa',
        instagramUrl: 'https://instagram.com/hotelkarina.guanipa'
      },
      puntaDeMata: {
        name: 'Hotel Kariña Punta de Mata',
        phone: '+58 424-9396445',
        phoneRaw: '+584249396445',
        address: 'Sector Zona Industrial, Ramal 7, Punta de Mata, Monagas',
        instagram: '@hotelkarina.ptamata',
        instagramUrl: 'https://instagram.com/hotelkarina.ptamata'
      }
    }
  };
  window.KARINA_CONFIG = KARINA_CONFIG;

  // ==========================================
  // 3. CONTROLADORES SECCIÓN SEDES Y MODAL INMERSIVO
  // ==========================================
  const sedesData = [
    {
      id: 0,
      name: "Maturín",
      title: "Hotel Kariña Maturín",
      tagline: "El resort insignia del Oriente Venezolano con parque acuático, gastronomía de autor y salones corporativos.",
      address: "Etapa II, Macroparcela MC-30, Urbanización Palma Real, Maturín, Monagas.",
      mapsUrl: "https://maps.google.com/?cid=370127326196523800",
      phone: "+58 424-9169610",
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
      name: "Punta de Mata",
      title: "Kariña Punta de Mata",
      tagline: "Un oasis de privacidad estratégica y tranquilidad rodeado de áreas verdes, perfecto para ejecutivos.",
      address: "Sector Zona Industrial, Ramal 7, Punta de Mata, Monagas.",
      mapsUrl: "https://maps.google.com/?cid=9643206305083018040",
      phone: "+58 424-9396445",
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
      name: "El Tigre",
      title: "Hotel Kariña El Tigre",
      tagline: "Centro neurálgico para eventos corporativos, banquetes y alojamiento de alta gama en la Mesa de Guanipa.",
      address: "A 100 m del Balancín Tricolor, Av. Ruiz Pineda con Calle 23 de Enero, El Tigre, Anzoátegui.",
      mapsUrl: "https://maps.google.com/?cid=12057092587787417265",
      phone: "+58 424-9559213",
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

  window.consultarTarifasSedeModal = function() {
    const sede = sedesData[currentModalSede] || sedesData[0];
    const sedeName = sede.name || (sede.id === 0 ? 'Maturín' : (sede.id === 1 ? 'Punta de Mata' : 'El Tigre'));
    closeSedeModal();
    const message = `Hola, deseo consultar las tarifas y suites para la sede ${sedeName}.`;
    if (typeof window.openAriminaChat === 'function') {
      window.openAriminaChat(message, { sede: sedeName });
    }
  };

  window.consultarTarifasSede = function(sedeName) {
    if (typeof closeSedeModal === 'function') closeSedeModal();
    const message = `Hola, deseo consultar las tarifas y suites para la sede ${sedeName}.`;
    if (typeof window.openAriminaChat === 'function') {
      window.openAriminaChat(message, { sede: sedeName });
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
      price: 'Desde $120',
      img: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Punta-de-Mata/suite-ptamata-main.webp',
      amenities: [
        '1 Cama Matrimonial (Desayuno Incluido)',
        'Estación de Trabajo y TV 32"',
        'Kitchenette y Nevera 15\''
      ]
    },
    'dos-ambientes': {
      title: 'Suite Premium',
      desc: 'Santuario de amplitud superior y estética sutil, donde la calidez del lujo contemporáneo se integra armoniosamente con las vistas al complejo.',
      quote: '"La combinación perfecta entre amplitud, descanso y equipamiento superior."',
      price: '$140',
      img: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Doble-Premium-main2.webp',
      amenities: [
        '2 Camas Matrimoniales (Desayuno Incluido)',
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
    // MATURÍN
    {
      id: 'premium-maturin',
      sede: 'maturin',
      sedeName: 'Maturín',
      tarifa_usd: '140',
      price: '$140',
      priceDisplay: '$140 / noche',
      title: 'Suite Premium',
      tag: 'Desayuno Incluido',
      desc: 'Santuario de amplitud superior y estética sutil, donde la calidez del lujo contemporáneo se integra armoniosamente con las vistas al complejo.',
      image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Doble-Premium-main2.webp',
      breakdown: {
        base: '$140 / noche',
        occupancy: [
          { label: '2 Personas (2 Camas Matrimoniales)', price: '$140' },
          { label: 'Pax adicional', price: '+$20' }
        ],
        breakfast: 'Desayuno Incluido'
      },
      amenities: [
        '2 Camas Matrimoniales',
        'Desayuno Incluido',
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
      sedeName: 'Maturín',
      tarifa_usd: '120',
      price: '$120',
      priceDisplay: 'Desde $120 / noche',
      title: 'Suite Estándar',
      tag: 'Desayuno Incluido',
      desc: 'Un refugio de diseño contemporáneo y confort absoluto, pensado para garantizar un descanso impecable y alta conectividad en todo momento.',
      image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Maturin/Suite-Estandar-Maturin-Main.webp',
      breakdown: {
        base: 'Desde $120 / noche',
        occupancy: [
          { label: '1 Persona (Uso individual / Junior)', price: '$120' },
          { label: '2 Personas (Cama Matrimonial)', price: '$130' },
          { label: 'Pax adicional', price: '+$20' }
        ],
        breakfast: 'Desayuno Incluido'
      },
      amenities: [
        '1 Cama Matrimonial',
        'Desayuno Incluido',
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
      id: 'triple-maturin',
      sede: 'maturin',
      sedeName: 'Maturín',
      tarifa_usd: '170',
      price: '$170',
      priceDisplay: '$170 / noche',
      title: 'Suite Triple',
      tag: 'Exclusiva Maturín • Desayuno Incluido',
      desc: 'Máxima capacidad y confort exclusivo para 3 personas en Sede Maturín. Equipada con 3 camas confortables, dos ambientes independientes, kitchenette y desayuno incluido.',
      image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Premium-Doble-Maturin.webp',
      breakdown: {
        base: '$170 / noche (3 Personas)',
        occupancy: [
          { label: '3 Personas (3 Camas)', price: '$170' },
          { label: 'Pax adicional', price: '+$20' }
        ],
        breakfast: 'Desayuno Incluido'
      },
      amenities: [
        '3 Camas Confortables',
        'Desayuno Incluido',
        'Exclusiva Sede Maturín (3 Pax)',
        'Mesa de noche',
        'Estación de trabajo ejecutiva integrada con Smart TV de 32"',
        'Internet por Fibra Óptica de Alta Velocidad',
        'Aire Acondicionado Autónomo',
        'Cocina equipada tipo Kitchenette',
        'Nevera de 15 pies',
        'Horno Microondas y Estantería',
        'Guardarropa',
        'Dos ambientes independientes con baño amplio (50 m²)'
      ],
      gallery: [
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Premium-Doble-Maturin.webp', tag: 'Vista Principal Triple' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Doble-Premium-main2.webp', tag: 'Habitación y Camas' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Premium3.webp', tag: 'Área de Sala' },
        { src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Premium5.webp', tag: 'Espacio de Confort' }
      ]
    },
    // EL TIGRE
    {
      id: 'premium-eltigre',
      sede: 'el-tigre',
      sedeName: 'El Tigre',
      tarifa_usd: '140',
      price: '$140',
      priceDisplay: '$140 / noche',
      title: 'Suite Premium',
      tag: 'Desayuno Incluido',
      desc: 'Una experiencia de inmersión en el lujo boutique, destacada por sus acabados de alta gama, espacialidad fluida y un ambiente de serenidad absoluta.',
      image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-El-Tigre/Suite%20Premium-Main-El%20Tigre.webp',
      breakdown: {
        base: '$140 / noche',
        occupancy: [
          { label: '2 Personas (2 Camas Matrimoniales)', price: '$140' },
          { label: 'Pax adicional', price: '+$20' }
        ],
        breakfast: 'Desayuno Incluido'
      },
      amenities: [
        '2 Camas Matrimoniales',
        'Desayuno Incluido',
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
      sedeName: 'El Tigre',
      tarifa_usd: '120',
      price: '$120',
      priceDisplay: 'Desde $120 / noche',
      title: 'Suite Estándar',
      tag: 'Desayuno Incluido',
      desc: 'El equilibrio perfecto entre eficiencia ejecutiva y confort, diseñado para ofrecer privacidad absoluta y un reconfortante descanso contemporáneo.',
      image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-El-Tigre/Suite-Estandar-Principal-El-Tigre.webp',
      breakdown: {
        base: 'Desde $120 / noche',
        occupancy: [
          { label: '1 Persona (Uso individual / Junior)', price: '$120' },
          { label: '2 Personas (Cama Matrimonial)', price: '$130' },
          { label: 'Pax adicional', price: '+$20' }
        ],
        breakfast: 'Desayuno Incluido'
      },
      amenities: [
        '1 Cama Matrimonial',
        'Desayuno Incluido',
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
    // PUNTA DE MATA
    {
      id: 'premium-ptamata',
      sede: 'punta-de-mata',
      sedeName: 'Punta de Mata',
      tarifa_usd: '120',
      price: '$120',
      priceDisplay: '$120 / noche',
      title: 'Suite Premium',
      tag: 'Desayuno Incluido',
      desc: 'La máxima expresión de exclusividad y confort, combinando áreas de estar independientes con equipamiento premium para estadías de distinción.',
      image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Punta-de-Mata/Suite-Doble-Premium-Punta-de-Mata.webp',
      breakdown: {
        base: '$120 / noche',
        occupancy: [
          { label: '2 Personas (2 Camas Matrimoniales)', price: '$120' },
          { label: 'Pax adicional', price: '+$20' }
        ],
        breakfast: 'Desayuno Incluido'
      },
      amenities: [
        '2 Camas Matrimoniales',
        'Desayuno Incluido',
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
      sedeName: 'Punta de Mata',
      tarifa_usd: '100',
      price: '$100',
      priceDisplay: 'Desde $100 / noche',
      title: 'Suite Estándar',
      tag: 'Desayuno Incluido',
      desc: 'Un oasis de calma con arquitectura de vanguardia, optimizado para el confort del viajero corporativo que busca privacidad y descanso reparador.',
      image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Punta-de-Mata/suite-ptamata-main.webp',
      breakdown: {
        base: 'Desde $100 / noche',
        occupancy: [
          { label: '1 Persona (Uso individual / Junior)', price: '$100' },
          { label: '2 Personas (Cama Matrimonial)', price: '$110' },
          { label: 'Pax adicional', price: '+$20' }
        ],
        breakfast: 'Desayuno Incluido'
      },
      amenities: [
        '1 Cama Matrimonial',
        'Desayuno Incluido',
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
      } else if (capacity === '3') {
        matchCapacity = card.classList.contains('suite-item-triple') || card.classList.contains('suite-item-premium');
      } else if (capacity === '4') {
        matchCapacity = card.classList.contains('suite-item-premium') || card.classList.contains('suite-item-triple');
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
    const pageSede = detectCurrentSede();
    const filterSedeEl = document.getElementById('filter-sede');
    const filterSedeVal = filterSedeEl ? filterSedeEl.value : null;

    let targetSede = targetSuite.sede;
    if (pageSede) {
      targetSede = pageSede;
    } else if (filterSedeVal && filterSedeVal !== 'all') {
      targetSede = filterSedeVal;
    }

    // Filtrar array a las suites de esa sede
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
    const breakdownEl = document.getElementById('suite-modal-pricing-breakdown');

    if (titleEl) {
      titleEl.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-3">
          <span>${suite.title}</span>
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-[#2680BD]/15 text-[#2680BD] border border-[#2680BD]/25 inline-flex items-center gap-1.5 font-mono">
            <i class="fa-solid fa-mug-saucer text-xs"></i>
            Desayuno Incluido
          </span>
        </div>
      `;
    }

    if (descEl) descEl.textContent = suite.desc;
    if (imgEl) imgEl.src = suite.image;
    if (tagEl) tagEl.textContent = suite.gallery?.[0]?.tag || 'Vista Principal';

    const currentNum = String(activeModalSuiteIndex + 1).padStart(2, '0');
    const totalNum = String(activeModalSuites.length).padStart(2, '0');
    if (counterEl) counterEl.textContent = `${currentNum} / ${totalNum}`;

    // Renderizar desglose de tarifas y ocupación si existe el contenedor o crearlo
    if (breakdownEl && suite.breakdown) {
      breakdownEl.innerHTML = `
        <div class="bg-black/[0.03] rounded-2xl p-3.5 border border-black/5 space-y-2">
          <div class="flex items-center justify-between text-[10px] font-mono uppercase font-bold text-karina-charcoal/60 border-b border-black/5 pb-1">
            <span>Ocupación & Plan</span>
            <span>Tarifa / Noche</span>
          </div>
          <div class="space-y-1 text-xs">
            ${suite.breakdown.occupancy.map(item => `
              <div class="flex items-center justify-between py-0.5">
                <span class="text-karina-charcoal/80 font-medium">${item.label}</span>
                <span class="font-bold text-karina-charcoal font-mono">${item.price}</span>
              </div>
            `).join('')}
          </div>
          <div class="pt-1 border-t border-black/5 flex items-center justify-between text-[11px] text-[#2680BD] font-semibold">
            <span class="inline-flex items-center gap-1"><i class="fa-solid fa-check text-[10px]"></i> Desayuno tipo continental incluido</span>
            <span class="text-[10px] text-karina-charcoal/50 font-mono">IVA inc.</span>
          </div>
        </div>
      `;
    }

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

  window.requestSuiteReservation = function(suiteId) {
    let suite = null;

    if (suiteId && typeof suiteId === 'string') {
      suite = catalogSuitesData.find(s => s.id === suiteId);
    }
    
    if (!suite && typeof activeModalSuites !== 'undefined' && activeModalSuites[activeModalSuiteIndex]) {
      suite = activeModalSuites[activeModalSuiteIndex];
    }

    const modal = document.getElementById('suite-modal');
    const modalTitleEl = document.getElementById('suite-modal-title');
    const suiteTitle = suite?.title || modalTitleEl?.textContent?.trim() || 'Suite Premium';
    
    let sedeCode = suite?.sede || modal?.dataset?.sede || detectCurrentSede() || 'maturin';
    let sedeDisplay = suite?.sedeName;
    if (!sedeDisplay) {
      if (sedeCode === 'maturin') sedeDisplay = 'Maturín';
      else if (sedeCode === 'el-tigre') sedeDisplay = 'El Tigre';
      else if (sedeCode === 'punta-de-mata') sedeDisplay = 'Punta de Mata';
      else sedeDisplay = 'Maturín';
    }

    if (!suite) {
      const isTriple = suiteTitle.toLowerCase().includes('triple');
      const isPremium = suiteTitle.toLowerCase().includes('premium');
      suite = catalogSuitesData.find(s => s.sede === sedeCode && (isTriple ? s.id.startsWith('triple') : (isPremium ? s.id.startsWith('premium') : s.id.startsWith('estandar'))));
    }

    let tarifa = suite?.tarifa_usd || modal?.dataset?.tarifa;
    if (!tarifa) {
      if (suiteTitle.toLowerCase().includes('triple')) {
        tarifa = '170';
      } else if (suiteTitle.toLowerCase().includes('premium')) {
        tarifa = (sedeCode === 'punta-de-mata') ? '120' : '140';
      } else {
        tarifa = (sedeCode === 'punta-de-mata') ? '100' : '120';
      }
    }

    const message = `Hola, deseo solicitar la reserva para la ${suiteTitle} en la sede ${sedeDisplay}.`;
    const contextData = {
      suite_nombre: suiteTitle,
      sede: sedeDisplay,
      tarifa_usd: String(tarifa)
    };

    if (typeof window.closeSuiteModal === 'function') {
      window.closeSuiteModal();
    } else if (modal) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    if (typeof window.openAriminaChat === 'function') {
      window.openAriminaChat(message, contextData);
    }
  };

  window.inquireSuiteWithAI = function(customPrompt) {
    if (typeof window.closeSuiteModal === 'function') window.closeSuiteModal();
    const prompt = (customPrompt && typeof customPrompt === 'string') ? customPrompt : 'Hola, deseo cotizar una estadía.';
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
      desc: "Disfruta de un día de sol con acceso libre a las piscinas familiares, parque acuático infantil con toboganes, tumbonas de descanso y vestidores. Horario extendido nocturno hasta las 8:00 p.m.",
      tag: "Piscina Resort y Toboganes",
      price: "$25",
      img: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Principales-Homepage/Area-Hotel-Karina-Maturin.webp"
    },
    {
      title: "Kariña Punta de Mata",
      desc: "Un día completo de paz corporativa rodeado de jardines tropicales, acceso a piscina ejecutiva, toallas y consumo acreditado en restaurante. Horario disponible hasta las 6:00 p.m.",
      tag: "Piscina Ejecutiva y Jardines",
      price: "$20",
      img: "https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Punta-de-Mata/fachada-main-ptmata.webp"
    },
    {
      title: "Hotel Kariña El Tigre",
      desc: "Sumérgete en la refrescante piscina resort de Guanipa, solárium, canchas deportivas y ambiente familiar único en la Mesa de Guanipa. Horario disponible hasta las 6:00 p.m.",
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
  const contactoSedesData = {
    'maturin': {
      title: "Sede Maturín",
      name: "Hotel Kariña Maturín",
      address: "Etapa II, Macroparcela MC-30, Urbanización Palma Real, Maturín, Monagas",
      phone: "+58 424-9169610",
      phoneRaw: "+584249169610",
      ws: "+58 424-9169610",
      instagram: "@hotelkarina.maturin",
      instagramUrl: "https://instagram.com/hotelkarina.maturin",
      mapsUrl: "https://maps.google.com/?cid=370127326196523800",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      badge: "Hotel y Club Maturín",
      tagline: "Urbanización Palma Real, Maturín, Estado Monagas."
    },
    'punta-de-mata': {
      title: "Sede Punta de Mata",
      name: "Hotel Kariña Punta de Mata",
      address: "Sector Zona Industrial, Ramal 7, Punta de Mata, Monagas",
      phone: "+58 424-9396445",
      phoneRaw: "+584249396445",
      ws: "+58 424-9396445",
      instagram: "@hotelkarina.ptamata",
      instagramUrl: "https://instagram.com/hotelkarina.ptamata",
      mapsUrl: "https://maps.google.com/?cid=9643206305083018040",
      img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
      badge: "Hotel Corporativo Punta de Mata",
      tagline: "Sector Zona Industrial, Ramal 7, Punta de Mata, Estado Monagas."
    },
    'el-tigre': {
      title: "Sede El Tigre",
      name: "Hotel Kariña El Tigre",
      address: "A 100 m del Balancín Tricolor, Av. Ruiz Pineda con Calle 23 de Enero, El Tigre, Anzoátegui",
      phone: "+58 424-9559213",
      phoneRaw: "+584249559213",
      ws: "+58 424-9559213",
      instagram: "@hotelkarina.guanipa",
      instagramUrl: "https://instagram.com/hotelkarina.guanipa",
      mapsUrl: "https://maps.google.com/?cid=12057092587787417265",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      badge: "Hotel y Restaurante El Tigre",
      tagline: "A 100 m del Balancín Tricolor, El Tigre, Estado Anzoátegui."
    }
  };

  const contactoSedesArray = [
    contactoSedesData['maturin'],
    contactoSedesData['punta-de-mata'],
    contactoSedesData['el-tigre']
  ];

  window.selectContactSede = function(sedeKey, btnElement) {
    const data = contactoSedesData[sedeKey];
    if (!data) return;

    document.querySelectorAll('.contact-sede-pill').forEach(btn => {
      btn.className = "contact-sede-pill flex-1 py-2 px-3 rounded-full text-xs font-semibold text-karina-charcoal/70 hover:text-karina-charcoal transition-all";
    });
    if (btnElement) {
      btnElement.className = "contact-sede-pill flex-1 py-2 px-3 rounded-full text-xs font-bold bg-white text-karina-charcoal shadow-xs transition-all";
    }

    const titleEl = document.getElementById('contacto-sede-title');
    const nameEl = document.getElementById('contacto-sede-name');
    const addrEl = document.getElementById('contacto-sede-address');
    const phoneEl = document.getElementById('contacto-sede-phone');
    const wsEl = document.getElementById('contacto-sede-ws');
    const badgeEl = document.getElementById('contacto-sede-badge');
    const taglineEl = document.getElementById('contacto-sede-tagline');
    const imgEl = document.getElementById('contacto-sede-img');

    if (titleEl) titleEl.textContent = data.title;
    if (nameEl) nameEl.textContent = data.name;
    if (addrEl) addrEl.textContent = data.address;
    if (phoneEl) phoneEl.textContent = data.phone;
    if (wsEl) wsEl.textContent = data.ws;
    if (badgeEl) badgeEl.textContent = data.badge;
    if (taglineEl) taglineEl.textContent = data.tagline;
    if (imgEl) imgEl.src = data.img;

    const padelBox = document.getElementById('contacto-sede-padel-box');
    if (padelBox) {
      if (sedeKey === 'maturin') {
        padelBox.classList.remove('hidden');
      } else {
        padelBox.classList.add('hidden');
      }
    }
  };

  window.switchContactoSede = function(index) {
    const data = contactoSedesArray[index];
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

    const titleEl = document.getElementById('contacto-sede-title');
    const nameEl = document.getElementById('contacto-sede-name');
    const addrEl = document.getElementById('contacto-sede-address');
    const phoneEl = document.getElementById('contacto-sede-phone');
    const wsEl = document.getElementById('contacto-sede-ws');
    const badgeEl = document.getElementById('contacto-sede-badge') || document.getElementById('contacto-map-badge');
    const taglineEl = document.getElementById('contacto-sede-tagline');
    const imgEl = document.getElementById('contacto-sede-img') || document.getElementById('contacto-map-img');
    const mapLinkEl = document.getElementById('contacto-map-direct-link');
    const btnDirEl = document.getElementById('contacto-btn-directions');

    if (titleEl) titleEl.textContent = data.title;
    if (nameEl) nameEl.textContent = data.name;
    if (addrEl) addrEl.textContent = data.address;
    if (phoneEl) phoneEl.textContent = data.phone;
    if (wsEl) wsEl.textContent = data.ws;
    if (badgeEl) badgeEl.textContent = data.badge;
    if (taglineEl) taglineEl.textContent = data.tagline;
    if (imgEl) imgEl.src = data.img;
    if (mapLinkEl) mapLinkEl.href = data.mapsUrl;
    if (btnDirEl) btnDirEl.href = data.mapsUrl;

    const padelBox = document.getElementById('contacto-sede-padel-box');
    if (padelBox) {
      if (index === 0) {
        padelBox.classList.remove('hidden');
      } else {
        padelBox.classList.add('hidden');
      }
    }
  };

  // ===================================================
  // 12. CONTROLADORES: PLANES CORPORATIVOS (BUSINESS.HTML)
  // ===================================================
  const corporatePlansData = {
    semanal: {
      conDesayuno: [
        {
          id: 'estandar-sem-des',
          title: 'Suite Estándar',
          capacity: '1 Pax',
          paxIcon: 'fa-user',
          tag: 'Eficiencia Ejecutiva',
          price: '$630',
          period: '/ semana',
          dailyNote: '$90/día aprox. (IVA inc.)',
          serviceNote: 'Room service diario incluido',
          image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Punta-de-Mata/suite-ptamata-main.webp',
          benefits: [
            '1 Cama Matrimonial Confortable',
            'Desayuno diario incluido',
            'Room service diario incluido',
            'Internet por Fibra Óptica de Alta Velocidad',
            'Kitchenette equipada y nevera ejecutiva',
            'Planta eléctrica continua 24/7'
          ]
        },
        {
          id: 'matrimonial-sem-des',
          title: 'Suite Matrimonial',
          capacity: '2 Pax',
          paxIcon: 'fa-user-group',
          tag: 'Confort Corporativo',
          price: '$770',
          period: '/ semana',
          dailyNote: '$110/día aprox. (IVA inc.)',
          serviceNote: 'Room service diario incluido',
          image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-El-Tigre/Suite-Estandar-Principal-El-Tigre.webp',
          benefits: [
            '1 Cama King / Matrimonial Amplia (2 Pax)',
            'Desayuno diario incluido para 2',
            'Room service diario incluido',
            'Internet por Fibra Óptica de Alta Velocidad',
            'Kitchenette equipada y nevera ejecutiva',
            'Planta eléctrica continua 24/7'
          ]
        },
        {
          id: 'premium-sem-des',
          title: 'Suite Premium',
          capacity: '2 Pax',
          paxIcon: 'fa-user-group',
          tag: 'Doble Ambiente & Máximo Lujo',
          featured: true,
          price: '$840',
          period: '/ semana',
          dailyNote: '$120/día aprox. (IVA inc.)',
          serviceNote: 'Room service diario incluido',
          image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Doble-Premium-main2.webp',
          benefits: [
            '2 Camas Matrimoniales (2 Pax)',
            'Dos ambientes independientes (Sala-Comedor + Habitación)',
            'Desayuno diario incluido para 2',
            'Room service diario incluido',
            'Cocina completa, microondas y nevera 15\'',
            'Planta eléctrica 24/7 y soporte preferencial'
          ]
        }
      ],
      sinDesayuno: [
        {
          id: 'estandar-sem-nodes',
          title: 'Suite Estándar',
          capacity: '1 Pax',
          paxIcon: 'fa-user',
          tag: 'Eficiencia Ejecutiva',
          price: '$560',
          period: '/ semana',
          dailyNote: '$80/día aprox. (IVA inc.)',
          serviceNote: 'Room service diario incluido',
          image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Punta-de-Mata/suite-ptamata-main.webp',
          benefits: [
            '1 Cama Matrimonial Confortable',
            'Room service diario incluido',
            'Internet por Fibra Óptica de Alta Velocidad',
            'Kitchenette equipada y nevera ejecutiva',
            'Planta eléctrica continua 24/7',
            'Acceso a centro de negocios y piscinas'
          ]
        },
        {
          id: 'matrimonial-sem-nodes',
          title: 'Suite Matrimonial',
          capacity: '2 Pax',
          paxIcon: 'fa-user-group',
          tag: 'Confort Corporativo',
          price: '$700',
          period: '/ semana',
          dailyNote: '$100/día aprox. (IVA inc.)',
          serviceNote: 'Room service diario incluido',
          image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-El-Tigre/Suite-Estandar-Principal-El-Tigre.webp',
          benefits: [
            '1 Cama King / Matrimonial Amplia (2 Pax)',
            'Room service diario incluido',
            'Internet por Fibra Óptica de Alta Velocidad',
            'Kitchenette equipada y nevera ejecutiva',
            'Planta eléctrica continua 24/7',
            'Acceso a centro de negocios y piscinas'
          ]
        },
        {
          id: 'premium-sem-nodes',
          title: 'Suite Premium',
          capacity: '2 Pax',
          paxIcon: 'fa-user-group',
          tag: 'Doble Ambiente & Máximo Lujo',
          featured: true,
          price: '$770',
          period: '/ semana',
          dailyNote: '$110/día aprox. (IVA inc.)',
          serviceNote: 'Room service diario incluido',
          image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Doble-Premium-main2.webp',
          benefits: [
            '2 Camas Matrimoniales (2 Pax)',
            'Dos ambientes independientes (Sala-Comedor + Habitación)',
            'Room service diario incluido',
            'Cocina completa, microondas y nevera 15\'',
            'Planta eléctrica 24/7 y soporte corporativo preferencial',
            'Internet simétrico dedicado'
          ]
        }
      ]
    },
    mensual: {
      conDesayuno: [
        {
          id: 'estandar-mes-des',
          title: 'Suite Estándar',
          capacity: '1 Pax',
          paxIcon: 'fa-user',
          tag: 'Larga Estadía Ejecutiva',
          price: '$1.293,40',
          period: '/ mes (30 noches)',
          dailyNote: 'Tarifa mensual corporativa',
          serviceNote: 'Room service diario incluido',
          image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Punta-de-Mata/suite-ptamata-main.webp',
          benefits: [
            '1 Cama Matrimonial (1 Pax)',
            'Desayuno diario incluido',
            'Room service diario incluido',
            'Limpieza y mantenimiento integral',
            'Internet por Fibra Óptica de Alta Velocidad',
            'Kitchenette equipada, nevera 15\' y microondas',
            'Planta eléctrica continua 24/7 y factura fiscal'
          ]
        },
        {
          id: 'premium-mes-des',
          title: 'Suite Premium',
          capacity: '2 Pax',
          paxIcon: 'fa-user-group',
          tag: 'Residencia Corporativa VIP',
          featured: true,
          price: '$1.760,88',
          period: '/ mes (30 noches)',
          dailyNote: 'Tarifa mensual corporativa',
          serviceNote: 'Room service diario incluido',
          image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Doble-Premium-main2.webp',
          benefits: [
            '2 Camas Matrimoniales (2 Pax)',
            'Dos ambientes independientes (50 m²)',
            'Desayuno diario incluido para 2',
            'Room service diario incluido',
            'Cocina completa de alta gama, nevera 15\' y microondas',
            'Limpieza y mantenimiento programado',
            'Planta eléctrica 24/7 y facturación fiscal empresarial'
          ]
        }
      ],
      sinDesayuno: [
        {
          id: 'estandar-mes-nodes',
          title: 'Suite Estándar',
          capacity: '1 Pax',
          paxIcon: 'fa-user',
          tag: 'Larga Estadía Económica',
          price: '$765,60',
          period: '/ mes (30 noches)',
          dailyNote: 'Tarifa mensual corporativa',
          serviceNote: '1 Room service semanal incluido',
          image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Punta-de-Mata/suite-ptamata-main.webp',
          benefits: [
            '1 Cama Matrimonial (1 Pax)',
            '1 Room service semanal incluido',
            'Limpieza y cambio de lencería semanal',
            'Internet por Fibra Óptica de Alta Velocidad',
            'Kitchenette equipada, nevera 15\' y microondas',
            'Planta eléctrica continua 24/7 y factura fiscal'
          ]
        },
        {
          id: 'premium-mes-nodes',
          title: 'Suite Premium',
          capacity: '2 Pax',
          paxIcon: 'fa-user-group',
          tag: 'Residencia Corporativa VIP',
          featured: true,
          price: '$1.186,68',
          period: '/ mes (30 noches)',
          dailyNote: 'Tarifa mensual corporativa',
          serviceNote: '1 Room service semanal incluido',
          image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Doble-Premium-main2.webp',
          benefits: [
            '2 Camas Matrimoniales (2 Pax)',
            'Dos ambientes independientes (50 m²)',
            '1 Room service semanal incluido',
            'Limpieza y cambio de lencería semanal',
            'Cocina completa de alta gama, nevera 15\' y microondas',
            'Planta eléctrica 24/7 y facturación fiscal empresarial'
          ]
        }
      ]
    }
  };

  let currentCorporateDuration = 'semanal';
  let currentCorporateBreakfast = 'conDesayuno';

  window.setCorporateDuration = function(duration) {
    currentCorporateDuration = duration;
    updateCorporateToggleButtons();
    renderCorporateGrid();
  };

  window.setCorporateBreakfast = function(breakfast) {
    currentCorporateBreakfast = breakfast;
    updateCorporateToggleButtons();
    renderCorporateGrid();
  };

  function updateCorporateToggleButtons() {
    const btnSemanal = document.getElementById('corp-toggle-semanal');
    const btnMensual = document.getElementById('corp-toggle-mensual');
    const btnConDes = document.getElementById('corp-toggle-con-desayuno');
    const btnSinDes = document.getElementById('corp-toggle-sin-desayuno');

    const activeDarkClass = "px-5 py-2 rounded-full text-xs font-bold bg-karina-charcoal text-white shadow-xs transition-all cursor-pointer";
    const inactiveClass = "px-5 py-2 rounded-full text-xs font-semibold text-karina-charcoal/70 hover:text-karina-charcoal transition-all cursor-pointer";
    const activeGoldClass = "px-5 py-2 rounded-full text-xs font-bold bg-karina-mustard text-karina-charcoal shadow-xs transition-all cursor-pointer";

    if (btnSemanal && btnMensual) {
      if (currentCorporateDuration === 'semanal') {
        btnSemanal.className = activeDarkClass;
        btnMensual.className = inactiveClass;
      } else {
        btnMensual.className = activeDarkClass;
        btnSemanal.className = inactiveClass;
      }
    }

    if (btnConDes && btnSinDes) {
      if (currentCorporateBreakfast === 'conDesayuno') {
        btnConDes.className = activeGoldClass;
        btnSinDes.className = inactiveClass;
      } else {
        btnSinDes.className = activeDarkClass;
        btnConDes.className = inactiveClass;
      }
    }
  }

  window.renderCorporateGrid = function() {
    const gridContainer = document.getElementById('corporate-cards-grid');
    const footerNote = document.getElementById('corporate-footer-note');
    if (!gridContainer) return;

    const cards = corporatePlansData[currentCorporateDuration]?.[currentCorporateBreakfast] || [];
    
    const isSemanal = currentCorporateDuration === 'semanal';
    gridContainer.className = isSemanal 
      ? "grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 transition-opacity duration-300"
      : "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto transition-opacity duration-300";

    gridContainer.innerHTML = cards.map(card => `
      <div class="bg-white/90 backdrop-blur-md rounded-[32px] p-6 sm:p-7 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative ${card.featured ? 'ring-2 ring-karina-mustard/60' : ''}">
        
        ${card.featured ? `
        <div class="absolute -top-3 right-6 bg-gradient-to-r from-karina-mustard to-amber-500 text-white font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md z-10 flex items-center gap-1">
          <i class="fa-solid fa-star text-[9px]"></i>
          <span>Más Solicitado</span>
        </div>
        ` : ''}

        <div class="space-y-5">
          <!-- Imagen de la Suite -->
          <div class="relative h-48 w-full rounded-2xl overflow-hidden bg-black/5 shadow-inner">
            <img src="${card.image}" alt="${card.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute top-3 left-3 bg-black/65 backdrop-blur-md text-white text-[10px] font-mono font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
              <i class="fa-solid ${card.paxIcon} text-karina-mustard"></i>
              <span>${card.capacity}</span>
            </div>
            <div class="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-karina-charcoal text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
              ${card.tag}
            </div>
          </div>

          <!-- Título y Tarifa -->
          <div class="space-y-1.5 text-left border-b border-black/5 pb-4">
            <h3 class="text-xl sm:text-2xl font-bold text-karina-charcoal tracking-tight">
              ${card.title}
            </h3>
            <div class="flex items-baseline gap-1.5 flex-wrap">
              <span class="text-3xl font-extrabold text-karina-charcoal tracking-tight">${card.price}</span>
              <span class="text-xs font-mono text-karina-charcoal/60 font-semibold">${card.period}</span>
            </div>
            <p class="text-[11px] text-karina-charcoal/70 font-medium">
              <span class="text-karina-mustard font-bold">●</span> ${card.dailyNote} • <span class="italic">${card.serviceNote}</span>
            </p>
          </div>

          <!-- Lista de Beneficios -->
          <div class="space-y-2.5 text-left text-xs text-karina-charcoal/80 pt-1">
            <p class="font-mono uppercase tracking-wider text-[10px] text-karina-charcoal/50 font-bold">Beneficios Incluidos:</p>
            ${card.benefits.map(b => `
              <div class="flex items-start gap-2.5">
                <i class="fa-regular fa-circle-check text-karina-mustard text-xs mt-0.5 shrink-0"></i>
                <span class="leading-tight">${b}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Botón CTA con Arimiña -->
        <div class="pt-6 mt-6 border-t border-black/5">
          <button onclick="requestCorporateQuote('${card.title}', '${card.price}')" class="w-full py-3.5 px-5 rounded-full bg-karina-charcoal hover:bg-black text-white text-xs font-bold flex items-center justify-center gap-2.5 shadow-md transition-all active:scale-95 cursor-pointer group/btn">
            <i class="fa-solid fa-wand-magic-sparkles text-karina-mustard text-xs group-hover/btn:rotate-12 transition-transform"></i>
            <span>Iniciar Solicitud con Arimiña</span>
          </button>
        </div>

      </div>
    `).join('');

    if (footerNote) {
      if (isSemanal) {
        footerNote.innerHTML = `
          <p class="font-semibold text-karina-charcoal"><i class="fa-solid fa-circle-info text-karina-mustard mr-1.5"></i> <strong>Nota del Plan Semanal:</strong> Persona adicional <strong>+$140/semana</strong> con IVA incluido. Todos los planes semanales incluyen room service diario.</p>
          <p class="text-[11px] text-karina-charcoal/60">Tarifas preferenciales aplicables a estancias mínimas de 7 noches continuas en cualquiera de nuestras sedes.</p>
        `;
      } else {
        footerNote.innerHTML = `
          <p class="font-semibold text-karina-charcoal"><i class="fa-solid fa-circle-info text-karina-mustard mr-1.5"></i> <strong>Nota del Plan Mensual:</strong> Calculado en base a 30 noches continuas. Modalidad "Con Desayuno" incluye room service diario; modalidad "Sin Desayuno" incluye 1 room service semanal.</p>
          <p class="text-[11px] text-karina-charcoal/60">Facturación fiscal corporativa, soporte operacional 24/7 y acceso a todas las bondades ejecutivas de Hotel Kariña.</p>
        `;
      }
    }
  };

  window.requestCorporateQuote = function(suiteTitle, price) {
    const planLabel = currentCorporateDuration === 'semanal' ? 'Plan Semanal (7 Noches)' : 'Plan Mensual (30 Noches)';
    const breakfastLabel = currentCorporateBreakfast === 'conDesayuno' ? 'Con Desayuno' : 'Sin Desayuno';
    const message = `Hola, deseo solicitar una cotización corporativa para el ${planLabel} (${breakfastLabel}) en la ${suiteTitle}.`;
    const contextData = {
      plan_corporativo: planLabel,
      modalidad_desayuno: breakfastLabel,
      suite_nombre: suiteTitle,
      tarifa_plan: price
    };

    if (typeof window.openAriminaChat === 'function') {
      window.openAriminaChat(message, contextData);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      if (document.getElementById('corporate-cards-grid')) {
        renderCorporateGrid();
      }
    });
  } else {
    if (document.getElementById('corporate-cards-grid')) {
      renderCorporateGrid();
    }
  }

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
      phone: "584249559213",
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
      phone: "584249396445",
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
      phone: "584249396445",
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
      phone: "584249169610",
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
      phone: "584249169610",
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
      phone: "584249169610",
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

    window.open(`https://wa.me/584249169610?text=${text}`, '_blank');
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
    if (typeof window.openAriminaChat === 'function') {
      window.openAriminaChat("Hola Arimiña, me he perdido en el sitio web de Hoteles Kariña. ¿Podrías orientarme con las suites disponibles o servicios?");
    }
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
  window.open('https://wa.me/584249169610?text=Hola%20Arimi%C3%B1a-IA,%20deseo%20reprogramar%20mi%20itinerario%20de%20hoy%20en%20la%20suite%20403', '_blank');
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
  window.open(`https://wa.me/584249169610?text=${encodeURIComponent(mensaje)}`, '_blank');
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
    window.open(`https://wa.me/584249169610?text=${encodeURIComponent(`[Token Odoo: ${token}] Solicitud Huésped: ${query}`)}`, '_blank');
    input.value = '';
  }
}

function accionRapida(accion) {
  const token = 'KD-78291';
  window.open(`https://wa.me/584249169610?text=${encodeURIComponent(`[Token: ${token}] Solicitud rápida: ${accion}`)}`, '_blank');
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
  <div id="modal-arimina" class="fixed inset-0 z-[100] h-[100dvh] max-h-[100dvh] w-full bg-[#FAF8F5]/95 backdrop-blur-md transition-all duration-300 opacity-0 pointer-events-none flex flex-col overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="arimina-header-title">
    <div class="max-w-4xl mx-auto w-full h-[100dvh] max-h-[100dvh] flex flex-col py-3 sm:py-6 px-3 sm:px-6 relative overflow-hidden">
      
      <!-- Cabecera Minimalista del Asistente -->
      <header class="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#E8DFC8]/60 shrink-0">
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

      <!-- Área Conversacional Central con Scroll Suave y overscroll-contain -->
      <main id="arimina-messages-container" class="flex-1 overflow-y-auto overscroll-contain py-4 sm:py-6 space-y-4 no-scrollbar scroll-smooth pr-1">
        
        <!-- Welcome / Empty State Inicial Limpio y Conversacional -->
        <div id="arimina-welcome-state" class="text-center py-8 sm:py-12 space-y-5 max-w-xl mx-auto my-auto">
          <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-gradient-to-tr from-[#FFF3D6] to-[#FFE8A3] border border-[#F0A800]/30 shadow-lg flex items-center justify-center animate-ai-glow">
            <img src="https://uploads.onecompiler.io/44s48z3dm/1787539299313/Icono-Kari%C3%B1a-new.png" alt="Arimiña Asistente" class="w-10 sm:w-12 h-auto object-contain">
          </div>

          <div class="space-y-2.5 px-2">
            <h2 class="text-xl sm:text-2xl font-light text-[#1E1E1E]">
              ¡Hola! Soy <strong class="font-extrabold text-karina-charcoal">Arimiña</strong> ✨
            </h2>
            <p class="text-xs sm:text-sm text-[#726B63] font-light leading-relaxed max-w-md mx-auto">
              Tu conserje virtual para asesorarte con información sobre nuestras suites, restaurantes, eventos y servicios en Maturín, El Tigre y Punta de Mata. ¿En qué puedo ayudarte hoy?
            </p>
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

      <!-- Input Bar Estilo Gemini / Claude (Flotante Inferior - shrink-0) -->
      <footer class="pt-2 pb-2 sm:pb-0 shrink-0">
        <div class="max-w-3xl mx-auto w-full bg-white/95 backdrop-blur-xl border border-[#E8DFC8] rounded-3xl p-2 sm:p-2.5 shadow-xl transition-all focus-within:ring-2 focus-within:ring-[#F0A800]/50 focus-within:border-[#F0A800]">
          <div class="flex items-end gap-2">
            <textarea 
              id="arimina-chat-input" 
              rows="1" 
              placeholder="Escribe tu consulta aquí (ej. tarifas de suites, restaurantes)..." 
              class="flex-1 bg-transparent border-none outline-none resize-none px-3 py-2 text-base text-[#1E1E1E] placeholder:text-[#726B63]/60 focus:ring-0 max-h-32 leading-relaxed"
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
        <p class="text-[10px] text-center text-[#726B63]/70 font-light mt-1.5 pb-0.5">
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
    input.addEventListener('focus', function() {
      setTimeout(() => {
        const container = document.getElementById('arimina-messages-container');
        const feed = document.getElementById('arimina-messages-feed');
        if (feed && feed.lastElementChild) {
          feed.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
        } else if (container) {
          container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
        }
      }, 250);
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

function getSessionId() {
  let sid = localStorage.getItem('karina_chat_session_id');
  if (!sid) {
    sid = 'karina_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now();
    localStorage.setItem('karina_chat_session_id', sid);
  }
  return sid;
}

const ARIMINA_BACKEND_ENDPOINT = 'https://infinityart3d-agent.up.railway.app/webhook/webchat/karina';

function openAriminaChat(initialPrompt = '', contextData = null) {
  initAriminaChatModal();
  const modal = document.getElementById('modal-arimina');
  if (modal) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const input = document.getElementById('arimina-chat-input');
    setTimeout(() => {
      if (input) input.focus();
      if (initialPrompt && initialPrompt.trim()) {
        sendAriminaUserMessage(initialPrompt.trim(), contextData);
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
    document.documentElement.style.overflow = '';
  }
}

function sendAriminaQuickPrompt(prompt) {
  sendAriminaUserMessage(prompt);
}

async function sendAriminaUserMessage(overrideText = null, contextData = null) {
  const input = document.getElementById('arimina-chat-input');
  const sendBtn = document.getElementById('arimina-chat-send');
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
    userBubble.className = 'flex justify-end chat-message chat-message-user';
    userBubble.innerHTML = `
      <div class="bg-[#1E1E1E] text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%] sm:max-w-[75%] text-xs sm:text-sm font-normal shadow-sm leading-relaxed text-left">
        ${escapeHtml(text)}
      </div>
    `;
    feed.appendChild(userBubble);
  }

  if (typing) typing.classList.remove('hidden');
  if (container) container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  if (sendBtn) sendBtn.disabled = true;

  try {
    const payload = {
      sessionId: getSessionId(),
      text: text,
      senderName: "Huésped"
    };

    if (contextData && typeof contextData === 'object') {
      if (contextData.suite_nombre) payload.suite_nombre = contextData.suite_nombre;
      if (contextData.sede) payload.sede = contextData.sede;
      if (contextData.tarifa_usd) payload.tarifa_usd = contextData.tarifa_usd;
      payload.metadata = {
        ...(contextData.metadata || {}),
        ...contextData
      };
    }

    const response = await fetch(ARIMINA_BACKEND_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    renderBotRepliesData(data);
  } catch (error) {
    console.error('Error conectando con Arimiña-IA:', error);
    renderAriminaBotMessage(
      'En este momento estoy experimentando dificultades técnicas para conectar con el servidor. Nuestro equipo está disponible por WhatsApp para atenderte de inmediato.',
      true
    );
  } finally {
    if (typing) typing.classList.add('hidden');
    if (sendBtn) sendBtn.disabled = false;
    if (container) container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  }
}

function parseMarkdown(md) {
  return formatAriminaMarkdown(md);
}

function renderBotRepliesData(data) {
  const chatContainer = document.getElementById('arimina-messages-feed');
  const scrollContainer = document.getElementById('arimina-messages-container');
  if (!chatContainer) return;

  // Normalizar replies si data es un string o no tiene el formato estándar
  let replies = [];
  if (data && Array.isArray(data.replies) && data.replies.length > 0) {
    replies = data.replies;
  } else if (data && typeof data === 'object') {
    const text = data.output || data.text || data.message || data.reply || data.response || (data.data && data.data.text) || '';
    const imageUrl = data.imageUrl || data.image_url || (data.data && (data.data.imageUrl || data.data.image_url));
    const imageTitle = data.imageTitle || data.image_title || (data.data && (data.data.imageTitle || data.data.image_title));
    if (text || imageUrl) {
      replies = [{ text, imageUrl, imageTitle }];
    }
  } else if (typeof data === 'string' && data.trim()) {
    replies = [{ text: data.trim() }];
  }

  if (replies.length === 0) {
    renderAriminaBotMessage('Disculpa, no pude procesar tu solicitud en este momento. ¿Podrías reformular tu consulta o contactarnos por WhatsApp?');
    return;
  }

  // Extraer textos e imágenes de data.replies
  const textElements = [];
  const imageElements = [];

  replies.forEach(reply => {
    if (typeof reply === 'string') {
      if (reply.trim()) textElements.push(reply.trim());
    } else if (reply && typeof reply === 'object') {
      const t = reply.text || reply.output || reply.message || '';
      if (t && t.trim()) textElements.push(t.trim());
      if (reply.imageUrl) {
        imageElements.push({
          imageUrl: reply.imageUrl,
          imageTitle: reply.imageTitle || ''
        });
      }
    }
  });

  // 1. Contenedor principal de la respuesta del bot
  const botMessageElement = document.createElement('div');
  botMessageElement.className = 'chat-message chat-message-bot flex items-start gap-3 text-left';

  // Avatar de Arimiña
  const avatarElement = document.createElement('div');
  avatarElement.className = 'w-8 h-8 rounded-full bg-gradient-to-tr from-[#F0A800] to-[#FFD573] flex items-center justify-center text-[#1E1E1E] text-xs shadow-sm shrink-0 mt-1';
  avatarElement.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles text-[11px]"></i>';
  botMessageElement.appendChild(avatarElement);

  // Contenedor de la burbuja
  const bubbleWrapper = document.createElement('div');
  bubbleWrapper.className = 'bg-white/95 border border-[#E8DFC8] text-[#1E1E1E] rounded-2xl rounded-tl-none p-4 sm:p-5 max-w-[90%] sm:max-w-[80%] text-xs sm:text-sm shadow-sm space-y-3 leading-relaxed w-full';

  // 2. Renderizado del texto (con Markdown si aplica)
  if (textElements.length > 0) {
    const textElement = document.createElement('div');
    textElement.className = 'chat-bubble-text arimina-msg-content text-[#1E1E1E] space-y-1';
    textElement.innerHTML = parseMarkdown(textElements.join('\n\n'));
    bubbleWrapper.appendChild(textElement);
  }

  // 3. Renderizado de imágenes: Bento Grid si >= 2 imágenes, Ancho Completo si 1 sola
  if (imageElements.length === 1) {
    const single = imageElements[0];
    const mediaContainer = document.createElement('div');
    mediaContainer.className = 'chat-bubble-media';
    mediaContainer.style.marginTop = textElements.length > 0 ? '10px' : '0';
    mediaContainer.style.borderRadius = '12px';
    mediaContainer.style.overflow = 'hidden';
    mediaContainer.style.border = '1px solid rgba(0,0,0,0.08)';

    mediaContainer.innerHTML = `
      <a href="${single.imageUrl}" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none;">
        <img 
          src="${single.imageUrl}" 
          alt="${single.imageTitle || 'Fotografía de Hotel Kariña'}" 
          loading="lazy"
          style="width: 100%; max-height: 240px; object-fit: cover; display: block; transition: transform 0.2s ease;"
          onmouseover="this.style.transform='scale(1.02)'"
          onmouseout="this.style.transform='scale(1)'"
        />
        ${single.imageTitle ? `
          <div style="padding: 8px 12px; font-size: 12px; background: rgba(0,0,0,0.03); color: #555; font-weight: 500;">
            ${single.imageTitle}
          </div>
        ` : ''}
      </a>
    `;
    bubbleWrapper.appendChild(mediaContainer);
  } else if (imageElements.length >= 2) {
    const bentoGrid = document.createElement('div');
    let gridClass = 'grid-2';
    if (imageElements.length === 3) gridClass = 'grid-3';
    else if (imageElements.length === 4) gridClass = 'grid-4';
    else if (imageElements.length > 4) gridClass = 'grid-many';

    bentoGrid.className = `chat-bento-grid ${gridClass}`;
    if (textElements.length > 0) {
      bentoGrid.style.marginTop = '10px';
    }

    imageElements.forEach(img => {
      const itemLink = document.createElement('a');
      itemLink.href = img.imageUrl;
      itemLink.target = '_blank';
      itemLink.rel = 'noopener noreferrer';
      itemLink.className = 'chat-bento-item';
      itemLink.innerHTML = `
        <img 
          src="${img.imageUrl}" 
          alt="${img.imageTitle || 'Fotografía de Hotel Kariña'}" 
          loading="lazy"
        />
        ${img.imageTitle ? `
          <div class="chat-bento-title">${img.imageTitle}</div>
        ` : ''}
      `;
      bentoGrid.appendChild(itemLink);
    });

    bubbleWrapper.appendChild(bentoGrid);
  }

  botMessageElement.appendChild(bubbleWrapper);

  // 4. Agregar mensaje al contenedor del chat
  chatContainer.appendChild(botMessageElement);

  // 5. Scroll automático hacia el último mensaje
  if (scrollContainer) {
    scrollContainer.scrollTo({ top: scrollContainer.scrollHeight, behavior: 'smooth' });
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }
}

function extractBotReply(data) {
  if (!data) return '';
  if (typeof data === 'string') return data;
  if (data.replies && Array.isArray(data.replies) && data.replies.length > 0) {
    return data.replies.map(r => (typeof r === 'string' ? r : (r.text || r.message || r.output || ''))).filter(Boolean).join('\n\n');
  }
  if (Array.isArray(data) && data.length > 0) {
    return data.map(item => {
      if (typeof item === 'string') return item;
      if (item && typeof item === 'object') {
        return item.output || item.text || item.message || item.reply || item.response || '';
      }
      return '';
    }).filter(Boolean).join('\n\n');
  }
  if (typeof data === 'object') {
    return data.output || data.text || data.message || data.reply || data.response || (data.data && data.data.text) || '';
  }
  return '';
}

function renderAriminaBotMessage(replyOrText, isError = false) {
  const feed = document.getElementById('arimina-messages-feed');
  const container = document.getElementById('arimina-messages-container');
  if (!feed) return;

  if (isError) {
    const aiBubble = document.createElement('div');
    aiBubble.className = 'chat-message chat-message-bot flex items-start gap-3 text-left';

    const waEncoded = encodeURIComponent('Hola, deseo consultar con un asesor de Hotel Kariña');
    const waLink = `https://wa.me/584249169610?text=${waEncoded}`;
    const actionsHtml = `
      <div class="flex flex-wrap gap-2 pt-2 border-t border-[#E8DFC8]/60">
        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm">
          <i class="fa-brands fa-whatsapp text-xs"></i>
          <span>Contactar por WhatsApp (+58 424-9169610)</span>
        </a>
      </div>
    `;

    const text = typeof replyOrText === 'string' ? replyOrText : (replyOrText && replyOrText.text ? replyOrText.text : '');

    aiBubble.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F0A800] to-[#FFD573] flex items-center justify-center text-[#1E1E1E] text-xs shadow-sm shrink-0 mt-1">
        <i class="fa-solid fa-wand-magic-sparkles text-[11px]"></i>
      </div>
      <div class="bg-white/95 border border-[#E8DFC8] text-[#1E1E1E] rounded-2xl rounded-tl-none p-4 sm:p-5 max-w-[90%] sm:max-w-[80%] text-xs sm:text-sm shadow-sm space-y-3 leading-relaxed">
        <div class="chat-bubble-text arimina-msg-content text-[#1E1E1E] space-y-1">${formatAriminaMarkdown(text)}</div>
        ${actionsHtml}
      </div>
    `;
    feed.appendChild(aiBubble);

    if (container) container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    return;
  }

  if (typeof replyOrText === 'string') {
    renderBotRepliesData({ replies: [{ text: replyOrText }] });
  } else if (replyOrText && typeof replyOrText === 'object') {
    if (replyOrText.replies) {
      renderBotRepliesData(replyOrText);
    } else {
      renderBotRepliesData({ replies: [replyOrText] });
    }
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function formatAriminaMarkdown(md) {
  if (!md) return '';
  let text = md.trim();

  // Escape HTML characters to prevent raw injection
  text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Markdown links [title](url)
  text = text.replace(/\[(.*?)\]\((https?:\/\/[^\s\)]+)\)/g, (match, title, url) => {
    if (url.includes('wa.me')) {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i><span>${title}</span></a>`;
    }
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-[#2680BD] underline font-semibold hover:text-[#F0A800] transition-colors">${title}</a>`;
  });

  // Raw wa.me links
  text = text.replace(/(^|[\s\n])(https?:\/\/wa\.me\/[^\s<\)]+)/g, '$1<a href="$2" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i><span>Contactar por WhatsApp</span></a>');

  // Bold **text**
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Italic *text* or _text_
  text = text.replace(/\*([^\*]+)\*/g, '<em>$1</em>');
  text = text.replace(/_([^_]+)_/g, '<em>$1</em>');

  // Numbered lists (e.g. "1. Suite Estándar")
  text = text.replace(/^(\d+)\.\s+(.*?)$/gm, '<div class="flex items-start gap-2 my-1"><span class="font-mono font-bold text-[#F0A800] shrink-0 text-xs">$1.</span><div>$2</div></div>');

  // Bullet points (- or • or *)
  text = text.replace(/^[\s]*[-•]\s+(.*?)$/gm, '<div class="flex items-start gap-2 my-0.5"><span class="text-[#F0A800] shrink-0">•</span><div>$1</div></div>');

  // Paragraph breaks
  text = text.replace(/\n\n+/g, '<div class="h-2"></div>');
  text = text.replace(/\n/g, '<br>');

  return text;
}

// Inicializar Arimiña Chat Modal al cargar el DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAriminaChatModal);
} else {
  initAriminaChatModal();
}

// Exportación global de funciones de Arimiña y Planes Corporativos
window.getSessionId = getSessionId;
window.initAriminaChatModal = initAriminaChatModal;
window.openAriminaChat = openAriminaChat;
window.closeAriminaChat = closeAriminaChat;
window.sendAriminaQuickPrompt = sendAriminaQuickPrompt;
window.sendAriminaUserMessage = sendAriminaUserMessage;
window.formatAriminaMarkdown = formatAriminaMarkdown;
window.parseMarkdown = parseMarkdown;
window.renderAriminaBotMessage = renderAriminaBotMessage;
window.renderBotRepliesData = renderBotRepliesData;
window.setCorporateDuration = setCorporateDuration;
window.setCorporateBreakfast = setCorporateBreakfast;
window.renderCorporateGrid = renderCorporateGrid;
window.requestCorporateQuote = requestCorporateQuote;
window.consultarTarifasSedeModal = consultarTarifasSedeModal;
window.consultarTarifasSede = consultarTarifasSede;



