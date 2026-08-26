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

  // ==========================================
  // 9. CONTROLADORES PÁGINA VIVE KARIÑA & DAY PASS
  // ==========================================
  const dayPassData = [
    {
      title: "Hotel Kariña Maturín",
      desc: "Disfruta de un día de sol con acceso libre a las piscinas familiares, parque acuático infantil con toboganes, tumbonas de descanso y vestidores de 10:00 AM a 6:00 PM.",
      tag: "Piscina Resort & Toboganes",
      price: "$25",
      img: "https://uploads.onecompiler.io/44s48z3dm/1787540075587/fachada_maturin.jpg"
    },
    {
      title: "Kariña Punta de Mata",
      desc: "Un día completo de paz corporativa rodeado de jardines tropicales, acceso a piscina ejecutiva, toallas y consumo acreditado en restaurante.",
      tag: "Piscina Executive & Jardines",
      price: "$20",
      img: "https://uploads.onecompiler.io/44s48z3dm/1787540097635/Fachada-Aerea.2.jpg"
    },
    {
      title: "Hotel Kariña El Tigre",
      desc: "Sumergete en la refrescante piscina resort de Guañipa, área de caneyes, canchas deportivas y ambiente familiar único en la Mesa de Guanipa.",
      tag: "Piscina Guañipa & Caney",
      price: "$22",
      img: "https://uploads.onecompiler.io/44s48z3dm/1787540085674/Guanipa-Piscina-Kari%C3%B1a.png"
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
  // 11. LÓGICA JAVASCRIPT: GASTRONOMÍA, PELUQUERÍA & SERVICIOS
  // ===================================================

  const menuData = {
    'desayuno': {
      title: "Desayunos & Mañanas",
      desc: "Opciones criollas e internacionales para iniciar el día con vitalidad.",
      dishes: [
        { name: "Desayuno Criollo Kariña", desc: "Arepitas de maíz, carne mechada sazonada, queso telita, perico y caraotas negras refinadas.", price: 16, img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80", tag: "Insignia" },
        { name: "Pancakes de Avena & Frutos del Bosque", desc: "Servidos con sirope de arce orgánico y fruta fresca de temporada.", price: 14, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=200&q=80", tag: "Saludable" }
      ]
    },
    'almuerzo-cena': {
      title: "Almuerzo y Cena",
      desc: "Creaciones de autor que honran los ingredientes locales con técnicas de vanguardia.",
      dishes: [
        { name: "Asado Negro de Larga Cocción", desc: "Corte de res braseado por 12 horas en reducción de vino tinto y papelón, puré de apio.", price: 38, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80", tag: "Sin Gluten" },
        { name: "Carpaccio de Remolacha Orgánica", desc: "Finas láminas de remolacha asada, crema de cashew fermentado, polvo de pistachos.", price: 22, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80", tag: "Vegano" },
        { name: "Lomo de Rótalo en Mantequilla de Ají", desc: "Pesca del día a la plancha, emulsión tibia de ají dulce, risotto cremoso de coco.", price: 32, img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80", tag: "Especialidad" }
      ]
    },
    'postres': {
      title: "Postres & Dulce Final",
      desc: "Delicias artesanales diseñadas por nuestra repostería de autor.",
      dishes: [
        { name: "Marquesa de Chocolate & Nuez", desc: "Capas de galleta crujiente y mousse de cacao venezolano al 70%.", price: 10, img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=200&q=80", tag: "Cacao 70%" },
        { name: "Quesillo Tradicional de Coco", desc: "Acompañado de crujiente de coco tostado y caramelo de ron añejo.", price: 8, img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=200&q=80", tag: "Artesanal" }
      ]
    },
    'vinos-cocteles': {
      title: "Vinos & Coctelería de Autor",
      desc: "Selección curada por nuestra sommelier e infusiones tropicales.",
      dishes: [
        { name: "Margarita de Ají Dulce & Cocuy", desc: "Cocuy artesanal, zumo de parchita fresco y ribete de sal aromatizada.", price: 14, img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=200&q=80", tag: "Cóctel Autor" },
        { name: "Copa Malbec Reserva Mendoza", desc: "Notas profundas de ciruela, vainilla y roble.", price: 12, img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=200&q=80", tag: "Copas" }
      ]
    }
  };

  // Selector de Categoría
  window.selectCategory = function(catKey, clickedBtn) {
    document.querySelectorAll('.cat-btn').forEach(btn => {
      btn.classList.remove('is-active');
      const arrow = btn.querySelector('.cat-arrow');
      if (arrow) {
        arrow.classList.remove('opacity-100', 'translate-x-0');
        arrow.classList.add('opacity-0', '-translate-x-2');
      }
    });

    if (clickedBtn) {
      clickedBtn.classList.add('is-active');
      const activeArrow = clickedBtn.querySelector('.cat-arrow');
      if (activeArrow) {
        activeArrow.classList.remove('opacity-0', '-translate-x-2');
        activeArrow.classList.add('opacity-100', 'translate-x-0');
      }
    }

    const data = menuData[catKey];
    if (!data) return;

    const titleEl = document.getElementById('category-title');
    const descEl = document.getElementById('category-desc');
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;

    const container = document.getElementById('dishes-container');
    if (container) {
      container.innerHTML = data.dishes.map(d => `
        <div class="dish-card dish-card-hover bg-white/70 p-5 rounded-3xl border border-black/5 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div class="flex items-center gap-4 w-full sm:w-auto">
            <img src="${d.img}" alt="${d.name}" class="w-20 h-20 rounded-2xl object-cover shrink-0">
            <div class="space-y-1 text-left">
              <div class="flex items-center gap-2">
                <h3 class="text-base font-bold text-karina-charcoal">${d.name}</h3>
                <span class="bg-karina-cream text-karina-charcoal text-[9px] font-mono px-2 py-0.5 rounded-full border border-black/5">${d.tag}</span>
              </div>
              <p class="text-xs text-karina-charcoal/70 font-light leading-relaxed">${d.desc}</p>
            </div>
          </div>
          <div class="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-black/5 shrink-0">
            <span class="text-lg font-bold text-karina-charcoal">$${d.price}</span>
            <button onclick="addToOrder('${d.name}', ${d.price}, '${d.img}')" class="w-9 h-9 rounded-full bg-karina-cream hover:bg-karina-mustard text-karina-charcoal flex items-center justify-center transition-all active:scale-90" title="Añadir a la orden">
              <i class="fa-solid fa-plus text-xs"></i>
            </button>
          </div>
        </div>
      `).join('');
    }
  };

  // Carrito / Estado de Selección
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
    }
  };

  window.closeModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  // Lightbox específico para Fundación Kariña y adaptativo para imágenes de otras páginas
  const originalOpenLightbox = window.openLightbox;
  window.openLightbox = function(srcOrEl, title, desc) {
    if (srcOrEl && typeof srcOrEl === 'object' && srcOrEl.querySelector) {
      if (typeof originalOpenLightbox === 'function') {
        originalOpenLightbox(srcOrEl);
        return;
      }
    }

    const img = document.getElementById('lightbox-img');
    const titleEl = document.getElementById('lightbox-title');
    const descEl = document.getElementById('lightbox-desc');

    if (img) img.src = (typeof srcOrEl === 'string') ? srcOrEl : '';
    if (titleEl && title) titleEl.textContent = title;
    if (descEl && desc) descEl.textContent = desc;

    openModal('modal-lightbox');
  };

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});
