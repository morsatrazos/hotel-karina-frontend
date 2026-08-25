document.addEventListener('DOMContentLoaded', () => {

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
  // 3. CONTROLADORES SECCIÓN SEDES & MODAL INMERSIVO
  // ==========================================
  const sedesData = [
    {
      id: 0,
      title: "Hotel Kariña Maturín",
      tagline: "El resort insignia del oriente venezolano con parque acuático, gastronomía de autor y salones corporativos.",
      address: "Urbanización Palma Real, Etapa II, Macroparcela MC-30, Maturín, Edo. Monagas.",
      mapsUrl: "https://maps.google.com/?cid=370127326196523800",
      phone: "+58 0424-9169601",
      images: [
        { src: "https://uploads.onecompiler.io/44s48z3dm/1787540075587/fachada_maturin.jpg", caption: "Fachada Principal Maturín" },
        { src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80", caption: "Piscina Resort & Parque Acuático" },
        { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80", caption: "Suites Premium & Equipamiento" },
        { src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80", caption: "Restaurante Moriche & Gastronomía" }
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
        { src: "https://uploads.onecompiler.io/44s48z3dm/1787540097635/Fachada-Aerea.2.jpg", caption: "Vista Aérea Punta de Mata" },
        { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80", caption: "Piscina Central Executive" },
        { src: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80", caption: "Centro de Negocios Corporativo" },
        { src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80", caption: "Juice & Coffee Bar Executive" }
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
        { src: "https://uploads.onecompiler.io/44s48z3dm/1787540085674/Guanipa-Piscina-Kari%C3%B1a.png", caption: "Piscina & Caney El Tigre" },
        { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80", caption: "Salones de Eventos Corporativos" },
        { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", caption: "Canchas Deportivas & Gimnasio" },
        { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80", caption: "Suites Dúplex de Alto Nivel" }
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
    const exploreBtn = document.getElementById('modal-explore-sede-link') || document.querySelector('#sede-modal a[href="#suites"], #sede-modal a[href="el-tigre.html"]');
    const exploreText = document.getElementById('modal-explore-sede-text');
    if (exploreBtn) {
      if (index === 2) {
        exploreBtn.href = "el-tigre.html";
        exploreBtn.removeAttribute('onclick');
        if (exploreText) {
          exploreText.innerHTML = `Explorar Sede El Tigre <i class="fa-solid fa-arrow-right text-[10px] ml-1"></i>`;
        } else {
          exploreBtn.innerHTML = `<span>Explorar Sede El Tigre</span> <i class="fa-solid fa-arrow-right text-[10px] ml-1"></i>`;
        }
      } else {
        exploreBtn.href = "#suites";
        exploreBtn.setAttribute('onclick', 'closeSedeModal()');
        if (exploreText) {
          exploreText.textContent = "Ver Catálogo de Suites";
        } else {
          exploreBtn.innerHTML = `<span>Ver Catálogo de Suites</span>`;
        }
      }
    }

    for (let i = 0; i < 4; i++) {
      const thumb = document.getElementById(`thumb-${i}`);
      if (thumb && sede.images[i]) {
        thumb.src = sede.images[i].src;
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
  // 4. SUITES TABS / SWITCHER
  // ==========================================
  const suiteData = {
    'un-ambiente': {
      title: 'Suite Premium',
      desc: 'Diseñadas bajo una geometría orgánica fluida, nuestras suites ofrecen un refugio de minimalismo editorial y confort curado.',
      quote: '"Un santuario de descanso pensado para el viajero moderno."',
      price: '$120',
      img: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Doble-Model.jpg'
    },
    'dos-ambientes': {
      title: 'Suite Ejecutiva Dúplex',
      desc: 'Espacio ampliado con sala de reuniones privada, lencería de alta gama y área de descanso independiente.',
      quote: '"La combinación perfecta entre productividad y bienestar de alto nivel."',
      price: '$170',
      img: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-2.jpg'
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

  // ==========================================
  // 8. CONTROLADORES CATÁLOGO DE SUITES Y MODAL
  // ==========================================
  const catalogSuitesData = [
    {
      id: 'premium-maturin',
      title: 'Suite Premium Maturín',
      desc: 'Nuestra suite insignia en la Sede Maturín ofrece vistas panorámicas al resort, lounge independiente y equipamiento ejecutivo de alta densidad.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'estandar-eltigre',
      title: 'Suite Estándar El Tigre',
      desc: 'Excelente distribución ejecutiva orientada al descanso silencioso en la Mesa de Guanipa, con acceso ilimitado a áreas de piscina.',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'premium-ptamata',
      title: 'Suite Premium Punta de Mata',
      desc: 'Santuario corporativo rodeado de jardines tropicales en la Zona Industrial de Punta de Mata.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'duplex-maturin',
      title: 'Suite Dúplex / Dos Ambientes',
      desc: 'Espacio expansivo de dos niveles combinando sala de juntas privada y habitación principal para directivos.',
      image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'estandar-maturin',
      title: 'Suite Estándar Maturín',
      desc: 'Un espacio refinado diseñado para el viajero moderno que busca eficiencia sin comprometer la elegancia y confort.',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80'
    }
  ];

  let currentCatalogSuiteIdx = 0;

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
        matchCapacity = !card.classList.contains('suite-item-duplex');
      }

      if (matchSede && matchCapacity) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  };

  window.openSuiteModalById = function(id) {
    const idx = catalogSuitesData.findIndex(s => s.id === id);
    currentCatalogSuiteIdx = idx !== -1 ? idx : 0;
    updateSuiteModalData();

    const modal = document.getElementById('suite-modal');
    if (modal) {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  };

  function updateSuiteModalData() {
    const suite = catalogSuitesData[currentCatalogSuiteIdx];
    if (!suite) return;
    const titleEl = document.getElementById('suite-modal-title');
    const descEl = document.getElementById('suite-modal-desc');
    const imgEl = document.getElementById('suite-modal-main-img');
    const counterEl = document.getElementById('suite-modal-counter');

    if (titleEl) titleEl.textContent = suite.title;
    if (descEl) descEl.textContent = suite.desc;
    if (imgEl) imgEl.src = suite.image;
    if (counterEl) counterEl.textContent = `0${currentCatalogSuiteIdx + 1} / 04`;
  }

  window.navigateSuiteInModal = function(dir) {
    const total = catalogSuitesData.length;
    currentCatalogSuiteIdx = (currentCatalogSuiteIdx + dir + total) % total;
    
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

  window.inquireSuiteWithAI = function() {
    closeSuiteModal();
    alert('Iniciando consulta de disponibilidad y tarifas con Arimiña-IA...');
  };

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});
