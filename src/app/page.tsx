'use client';

import React, { useEffect } from 'react';
import { TeaserVideoPlayer } from '@/components/teaser/TeaserVideoPlayer';
import { InstagramCta } from '@/components/teaser/InstagramCta';
import { CorporateRatesSection } from '@/components/corporate/CorporateRatesSection';

const CORPORATE_WA_URL =
  'https://wa.me/584249169610?text=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20para%20convenio%20corporativo%20en%20Hotel%20Kari%C3%B1a.';

export default function HomePage() {
  useEffect(() => {
    const win = window as any;
    if (typeof win.initKarinaSite === 'function') {
      win.__karinaSiteInitialized = false;
      win.initKarinaSite();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('active');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const callWin = (fnName: string, ...args: any[]) => {
    const win = window as any;
    if (typeof win[fnName] === 'function') {
      win[fnName](...args);
    }
  };

  return (
    <div className="min-h-screen bg-karina-charcoal text-karina-charcoal font-manrope antialiased selection:bg-karina-mustard selection:text-karina-charcoal">
      {/* ========================================== */}
      {/* 1. NAVBAR OFICIAL CON ISLA FLOTANTE & DROPDOWNS CREATIVOS */}
      {/* ========================================== */}
      <header id="main-navbar" className="fixed top-0 inset-x-0 mx-auto w-full z-50 navbar-default">
        <div className="nav-inner max-w-[1440px] mx-auto px-4 sm:px-12 h-20 flex items-center justify-between">
          {/* LADO IZQUIERDO: Menú Trigger + Separador + Logotipo */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              id="open-menu-btn"
              type="button"
              className="flex items-center gap-2.5 py-1.5 px-3 rounded-full hover:bg-black/5 transition-colors focus:outline-none group"
              aria-label="Abrir menú completo"
            >
              <img
                src="https://uploads.onecompiler.io/44s48z3dm/1787539299313/Icono-Kari%C3%B1a-new.png"
                alt="Icono Kariña"
                className="h-6 sm:h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xs sm:text-sm font-bold text-karina-charcoal group-hover:text-karina-mustard transition-colors">
                Menú
              </span>
            </button>

            <div className="h-6 sm:h-8 w-[1px] bg-karina-charcoal/20 hidden sm:block" />

            <a href="/" className="flex items-center group">
              <img
                src="https://uploads.onecompiler.io/44s48z3dm/1786371092035/Kari%C3%B1a-PNG-.png"
                alt="Grupo Kariña Venezuela"
                className="h-8 sm:h-9 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
              />
            </a>
          </div>

          {/* BLOQUE CENTRO: NAVEGACIÓN PRINCIPAL CON DROPDOWNS CREATIVOS */}
          <nav className="hidden lg:flex items-center gap-2 text-xs font-semibold text-karina-charcoal/90">
            {/* DROPDOWN 1: SEDES */}
            <div className="nav-dropdown-wrapper relative group py-3">
              <a
                href="#sedes"
                className="nav-link-item px-3 py-2 flex items-center gap-1.5 transition-colors text-karina-charcoal group-hover:text-karina-mustard"
              >
                <span>Sedes</span>
                <i className="fa-solid fa-chevron-down text-[9px] opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-transform duration-300" />
              </a>

              <div className="dropdown-hover-bridge absolute top-full left-0 w-full h-3" />

              {/* Panel Desplegable Asimétrico Orgánico Sedes */}
              <div className="nav-dropdown-panel absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[440px] bg-[#FAF6F0]/95 backdrop-blur-xl rounded-pebble p-6 pt-6 shadow-2xl border border-[#E8DFC8] overflow-hidden opacity-0 pointer-events-none translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 text-left z-50">
                <div className="flex items-center pb-2.5 mb-2 border-b border-[#E8DFC8]/60">
                  <span className="text-[11px] font-mono tracking-wider text-[#726B63] font-bold uppercase">
                    Sedes Kariña
                  </span>
                </div>

                <div className="space-y-1">
                  {/* Opción 1: Maturín */}
                  <a
                    href="/maturin.html"
                    className="dropdown-item-row flex items-center gap-3.5 p-2 rounded-2xl hover:bg-[#E8DFC8]/30 transition-all group/item"
                  >
                    <img
                      src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Principales-Homepage/Area-Hotel-Karina-Maturin.webp"
                      alt="Sede Maturín"
                      className="w-12 h-12 rounded-xl object-cover shrink-0 group-hover/item:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#1E1E1E] group-hover/item:text-karina-mustard transition-colors">
                        Hotel Kariña Maturín
                      </h4>
                      <p className="text-[11px] text-[#726B63] truncate font-light mt-0.5">
                        Urb. Palma Real • Piscinas, Master Pádel y Gastronomía
                      </p>
                    </div>
                    <i className="fa-solid fa-chevron-right text-[10px] text-[#726B63]/40 group-hover/item:text-[#1E1E1E] group-hover/item:translate-x-0.5 transition-all pr-1" />
                  </a>

                  {/* Opción 2: Punta de Mata */}
                  <a
                    href="/punta-de-mata.html"
                    className="dropdown-item-row flex items-center gap-3.5 p-2 rounded-2xl hover:bg-[#E8DFC8]/30 transition-all group/item"
                  >
                    <img
                      src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Principales-Homepage/FACHADA-PRINCIPAL-PUNTADEMATA.webp"
                      alt="Sede Punta de Mata"
                      className="w-12 h-12 rounded-xl object-cover shrink-0 group-hover/item:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#1E1E1E] group-hover/item:text-karina-mustard transition-colors">
                        Kariña Punta de Mata
                      </h4>
                      <p className="text-[11px] text-[#726B63] truncate font-light mt-0.5">
                        Zona Industrial • Privacidad y Estancia Ejecutiva
                      </p>
                    </div>
                    <i className="fa-solid fa-chevron-right text-[10px] text-[#726B63]/40 group-hover/item:text-[#1E1E1E] group-hover/item:translate-x-0.5 transition-all pr-1" />
                  </a>

                  {/* Opción 3: El Tigre */}
                  <a
                    href="/el-tigre.html"
                    className="dropdown-item-row flex items-center gap-3.5 p-2 rounded-2xl hover:bg-[#E8DFC8]/30 transition-all group/item"
                  >
                    <img
                      src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Principales-Homepage/Piscina-Principal-El-Tigre.webp"
                      alt="Sede El Tigre"
                      className="w-12 h-12 rounded-xl object-cover shrink-0 group-hover/item:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#1E1E1E] group-hover/item:text-karina-mustard transition-colors">
                        Hotel Kariña El Tigre
                      </h4>
                      <p className="text-[11px] text-[#726B63] truncate font-light mt-0.5">
                        Av. Ruiz Pineda • Confort Ejecutivo y Gastronomía 283
                      </p>
                    </div>
                    <i className="fa-solid fa-chevron-right text-[10px] text-[#726B63]/40 group-hover/item:text-[#1E1E1E] group-hover/item:translate-x-0.5 transition-all pr-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* DROPDOWN 2: CATÁLOGO DE SUITES */}
            <div className="nav-dropdown-wrapper relative group py-3">
              <a
                href="/suites.html"
                className="nav-link-item px-3 py-2 flex items-center gap-1.5 transition-colors text-karina-charcoal group-hover:text-karina-mustard"
              >
                <span>Catálogo de suites</span>
                <i className="fa-solid fa-chevron-down text-[9px] opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-transform duration-300" />
              </a>

              <div className="dropdown-hover-bridge absolute top-full left-0 w-full h-3" />

              {/* Panel Desplegable Asimétrico Orgánico Suites */}
              <div className="nav-dropdown-panel absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[450px] bg-[#FAF6F0]/95 backdrop-blur-xl rounded-[28px] p-6 pt-6 shadow-2xl border border-[#E8DFC8] overflow-hidden opacity-0 pointer-events-none translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 text-left z-50">
                <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#E8DFC8]/60 px-1">
                  <span className="text-[11px] font-mono tracking-wider text-[#726B63] font-bold uppercase">
                    Suites por Sede
                  </span>
                  <a
                    href="/suites.html"
                    className="text-[11px] font-bold text-[#2680BD] hover:text-[#1E1E1E] transition-colors flex items-center gap-1"
                  >
                    <span>Ver todo el catálogo</span>
                    <i className="fa-solid fa-arrow-right text-[9px]" />
                  </a>
                </div>

                <div className="space-y-1">
                  {/* Opción 1: Suites Maturín */}
                  <a
                    href="/maturin.html#suites-sede"
                    className="dropdown-item-row flex items-center gap-3.5 p-2 rounded-2xl hover:bg-[#E8DFC8]/30 transition-all group/item"
                  >
                    <img
                      src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Doble-Premium-main2.webp"
                      alt="Suites Maturín"
                      className="w-12 h-12 rounded-xl object-cover shrink-0 group-hover/item:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#1E1E1E] group-hover/item:text-karina-mustard transition-colors">
                        Suites Maturín
                      </h4>
                      <p className="text-[11px] text-[#726B63] truncate font-light mt-0.5">
                        50 m² y 48 m² • Dos ambientes independientes
                      </p>
                    </div>
                    <i className="fa-solid fa-chevron-right text-[10px] text-[#726B63]/40 group-hover/item:text-[#1E1E1E] group-hover/item:translate-x-0.5 transition-all pr-1" />
                  </a>

                  {/* Opción 2: Suites El Tigre */}
                  <a
                    href="/el-tigre.html#suites-sede"
                    className="dropdown-item-row flex items-center gap-3.5 p-2 rounded-2xl hover:bg-[#E8DFC8]/30 transition-all group/item"
                  >
                    <img
                      src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-El-Tigre/Suite%20Premium-Main-El%20Tigre.webp"
                      alt="Suites El Tigre"
                      className="w-12 h-12 rounded-xl object-cover shrink-0 group-hover/item:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#1E1E1E] group-hover/item:text-karina-mustard transition-colors">
                        Suites El Tigre
                      </h4>
                      <p className="text-[11px] text-[#726B63] truncate font-light mt-0.5">
                        36 m² • Kitchenette y confort contemporáneo
                      </p>
                    </div>
                    <i className="fa-solid fa-chevron-right text-[10px] text-[#726B63]/40 group-hover/item:text-[#1E1E1E] group-hover/item:translate-x-0.5 transition-all pr-1" />
                  </a>

                  {/* Opción 3: Suites Punta de Mata */}
                  <a
                    href="/punta-de-mata.html#suites-sede"
                    className="dropdown-item-row flex items-center gap-3.5 p-2 rounded-2xl hover:bg-[#E8DFC8]/30 transition-all group/item"
                  >
                    <img
                      src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Punta-de-Mata/Suite-Doble-Premium-Punta-de-Mata.webp"
                      alt="Suites Punta de Mata"
                      className="w-12 h-12 rounded-xl object-cover shrink-0 group-hover/item:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#1E1E1E] group-hover/item:text-karina-mustard transition-colors">
                        Suites Punta de Mata
                      </h4>
                      <p className="text-[11px] text-[#726B63] truncate font-light mt-0.5">
                        36 m² • Confort acústico y descanso corporativo
                      </p>
                    </div>
                    <i className="fa-solid fa-chevron-right text-[10px] text-[#726B63]/40 group-hover/item:text-[#1E1E1E] group-hover/item:translate-x-0.5 transition-all pr-1" />
                  </a>
                </div>

                <div className="mt-2.5 p-2.5 rounded-2xl bg-[#E8DFC8]/25 border border-[#E8DFC8]/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-wand-magic-sparkles text-[#F0A800] text-xs" />
                    <span className="text-[11px] font-bold text-[#1E1E1E]">¿Cotización personalizada?</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => callWin('openAriminaChat', 'Deseo una cotización personalizada de suites')}
                    className="text-[10px] font-mono font-bold bg-[#1E1E1E] hover:bg-black text-white px-3 py-1 rounded-full transition-all active:scale-95 cursor-pointer"
                  >
                    Consultar IA ✨
                  </button>
                </div>
              </div>
            </div>

            {/* ENLACES DIRECTOS RESTANTES */}
            <a href="#nuestra-transformacion" className="nav-link-item px-3 py-2 transition-colors text-[#C8832B] font-bold">
              Nuestra Transformación
            </a>
            <a href="/vive-karina.html" className="nav-link-item px-3 py-2 transition-colors">
              ¡Vive Kariña!
            </a>
            <a href="/restaurante.html" className="nav-link-item px-3 py-2 transition-colors">
              Gastronomía
            </a>
            <a href="/business.html" className="nav-link-item px-3 py-2 transition-colors">
              Planes Corporativos
            </a>
            <a href="/fundacion.html" className="nav-link-item px-3 py-2 transition-colors">
              Fundación
            </a>
          </nav>

          {/* BLOQUE DERECHO: Botón Píldora Shimmer Cotizar Estadía */}
          <div className="flex items-center gap-4 sm:gap-5">
            <button
              type="button"
              onClick={() => callWin('openAriminaChat', 'Hola, deseo cotizar una estadía.')}
              className="shimmer-btn bg-[#FFD573] hover:bg-[#F0A800] text-karina-charcoal font-bold text-xs px-5 sm:px-6 py-2.5 rounded-full flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            >
              <span>Cotizar Estadía</span>
              <i className="fa-solid fa-sparkles text-[10px]" />
            </button>
          </div>
        </div>
      </header>

      {/* ========================================== */}
      {/* 2. MENÚ INMERSIVO OVERLAY                  */}
      {/* ========================================== */}
      <div
        id="immersive-menu"
        className="fixed inset-0 z-[100] bg-[#2E2E2E] text-white opacity-0 pointer-events-none transition-opacity duration-300 flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
      >
        <div className="flex items-center justify-between max-w-5xl mx-auto w-full border-b border-white/10 pb-6">
          <a href="/">
            <img
              src="https://uploads.onecompiler.io/44s48z3dm/1787539752119/Kari%C3%B1a-white-new.png"
              alt="Hotel Kariña"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </a>
          <button
            id="close-menu-btn"
            type="button"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors"
            aria-label="Cerrar menú"
          >
            <i className="fa-solid fa-xmark text-lg" />
          </button>
        </div>

        <div className="max-w-xl mx-auto w-full py-8 space-y-4 text-left">
          <div className="border-b border-white/10 pb-4">
            <button
              id="toggle-sedes-sub"
              type="button"
              className="w-full flex items-center justify-between text-left group"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-white/40">01</span>
                <span className="text-2xl sm:text-3xl font-light group-hover:text-karina-mustard transition-colors">
                  Sedes
                </span>
              </div>
              <i
                id="sedes-chevron"
                className="fa-solid fa-chevron-down text-xs text-white/40 transition-transform duration-300"
              />
            </button>
            <div id="sedes-sub-menu" className="hidden pl-10 pt-3 space-y-2 text-sm text-white/60">
              <a href="/maturin.html" className="block hover:text-karina-mustard transition-colors">
                Maturín (Resort y Salón de Eventos)
              </a>
              <a href="/punta-de-mata.html" className="block hover:text-karina-mustard transition-colors">
                Punta de Mata (Hub Ejecutivo)
              </a>
              <a href="/el-tigre.html" className="block hover:text-karina-mustard transition-colors">
                El Tigre (Negocios y Eventos)
              </a>
            </div>
          </div>

          <div className="border-b border-white/10 pb-4">
            <a
              href="/suites.html"
              onClick={() => document.getElementById('close-menu-btn')?.click()}
              className="flex items-baseline gap-4 group"
            >
              <span className="text-xs font-mono text-white/40">02</span>
              <span className="text-2xl sm:text-3xl font-light group-hover:text-karina-mustard transition-colors">
                Suites
              </span>
            </a>
          </div>

          <div className="border-b border-white/10 pb-4">
            <a
              href="/business.html"
              onClick={() => document.getElementById('close-menu-btn')?.click()}
              className="flex items-baseline gap-4 group"
            >
              <span className="text-xs font-mono text-white/40">03</span>
              <span className="text-2xl sm:text-3xl font-light group-hover:text-karina-mustard transition-colors">
                Planes Corporativos
              </span>
            </a>
          </div>

          <div className="border-b border-white/10 pb-4">
            <a
              href="#nuestra-transformacion"
              onClick={() => document.getElementById('close-menu-btn')?.click()}
              className="flex items-baseline gap-4 group"
            >
              <span className="text-xs font-mono text-white/40">04</span>
              <span className="text-2xl sm:text-3xl font-light group-hover:text-karina-mustard transition-colors">
                Nuestra Transformación
              </span>
            </a>
          </div>

          <div className="border-b border-white/10 pb-4">
            <a
              href="/vive-karina.html"
              onClick={() => document.getElementById('close-menu-btn')?.click()}
              className="flex items-baseline gap-4 group"
            >
              <span className="text-xs font-mono text-white/40">05</span>
              <span className="text-2xl sm:text-3xl font-light group-hover:text-karina-mustard transition-colors">
                Galería General (¡Vive Kariña!)
              </span>
            </a>
          </div>

          <div className="border-b border-white/10 pb-4">
            <a
              href="/fundacion.html"
              onClick={() => document.getElementById('close-menu-btn')?.click()}
              className="flex items-baseline gap-4 group"
            >
              <span className="text-xs font-mono text-white/40">06</span>
              <span className="text-2xl sm:text-3xl font-light group-hover:text-karina-mustard transition-colors">
                Fundación
              </span>
            </a>
          </div>

          <div className="border-b border-white/10 pb-4">
            <a
              href="/faqs.html"
              onClick={() => document.getElementById('close-menu-btn')?.click()}
              className="flex items-baseline gap-4 group"
            >
              <span className="text-xs font-mono text-white/40">07</span>
              <span className="text-2xl sm:text-3xl font-light group-hover:text-karina-mustard transition-colors">
                Preguntas Frecuentes
              </span>
            </a>
          </div>

          <div className="border-b border-white/10 pb-4">
            <a
              href="/contacto.html"
              onClick={() => document.getElementById('close-menu-btn')?.click()}
              className="flex items-baseline gap-4 group"
            >
              <span className="text-xs font-mono text-white/40">08</span>
              <span className="text-2xl sm:text-3xl font-light group-hover:text-karina-mustard transition-colors">
                Contacto y Ubicaciones
              </span>
            </a>
          </div>
        </div>

        <div className="max-w-xl mx-auto w-full pt-4 space-y-3">
          <button
            type="button"
            onClick={() => {
              document.getElementById('close-menu-btn')?.click();
              callWin('openAriminaChat');
            }}
            className="w-full py-3.5 px-6 rounded-full bg-white hover:bg-karina-mustard-light text-karina-charcoal text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <i className="fa-solid fa-sparkles text-[#F0A800]" />
            <span>Hablar con Arimiña-IA</span>
          </button>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. HERO SECTION (ENCUADRE FIGMA EXACTO)    */}
      {/* ========================================== */}
      <section className="hero-section relative min-h-[92vh] sm:min-h-screen flex items-end justify-start pb-16 sm:pb-20 px-6 sm:px-16 bg-[#0f172a] overflow-hidden">
        {/* Video de Fondo Nítido (Autoplay & Loop) */}
        <div className="hero-video-container absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#0f172a]">
          <video
            id="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hero-video w-full h-full object-cover object-center scale-105"
          >
            <source
              src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/HEADER-VIDEO-MONAGAS-NORTE-SUR.mp4"
              type="video/mp4"
            />
          </video>

          {/* Degradado Suave Exclusivamente en la Base */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent via-65% to-[#FFF6EA]" />
        </div>

        {/* Botón Flotante de Audio Hero */}
        <div className="absolute bottom-20 right-6 sm:bottom-10 sm:right-28 z-20">
          <button
            id="hero-audio-btn"
            type="button"
            className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md px-3.5 py-2 rounded-full border border-white/20 transition-all text-xs font-medium shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Activar o desactivar sonido del video"
          >
            <i id="hero-audio-icon" className="fa-solid fa-volume-high text-[#FFD573]" />
            <span id="hero-audio-text">Audio</span>
          </button>
        </div>

        {/* Contenido Inferior Izquierdo (Titular + CTA Suites) */}
        <div className="relative z-10 max-w-2xl lg:max-w-3xl text-left reveal active">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)] mb-6">
            Miles de huéspedes eligen
            <br className="hidden md:inline" /> hospedarse con nosotros
          </h1>

          {/* Botón Explorar Tarifas y Suites */}
          <a
            href="#suites"
            className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-2xl border border-white/80 cursor-pointer hover:bg-white hover:scale-105 transition-all active:scale-95 text-left group"
            aria-label="Explorar Tarifas y Suites"
          >
            <div className="w-8 h-8 rounded-full bg-[#FFD573] group-hover:bg-[#F0A800] flex items-center justify-center text-[#343434] shadow-sm shrink-0 transition-colors">
              <i className="fa-solid fa-bed text-xs" />
            </div>
            <div className="text-left pr-2">
              <p className="text-xs font-bold text-[#343434] leading-tight">Explorar Tarifas y Suites</p>
              <p className="text-[11px] text-[#343434]/70">Ver catálogo y sedes →</p>
            </div>
          </a>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. SECCIÓN DE NUESTRAS SEDES               */}
      {/* ========================================== */}
      <section id="sedes" className="w-full bg-[#FFF6EA] py-20 px-6 sm:px-12 text-karina-charcoal">
        <div className="max-w-7xl mx-auto space-y-8 text-center">
          {/* CABECERA CON CURVA ORGÁNICA */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-light text-karina-charcoal tracking-tight">
              Nuestras Sedes
            </h2>
            <p className="text-xs sm:text-sm text-karina-charcoal/70 max-w-md mx-auto font-light">
              Oriente es Territorio Kariña.
            </p>

            {/* LÍNEA AMARILLA CURVA DE TRAZO SUAVE */}
            <div className="flex justify-center pt-1">
              <svg
                width="104"
                height="10"
                viewBox="0 0 104 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-karina-mustard-light"
              >
                <path
                  d="M3 7C30 2.5 74 2.5 101 7"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* CONTROLES FLECHA DE SECCIÓN */}
          <div className="flex items-center justify-center gap-4 pt-1">
            <button
              id="prev-sede-btn"
              type="button"
              onClick={() => callWin('navigateSede', -1)}
              className="w-10 h-10 rounded-full border border-karina-charcoal/20 bg-white/60 hover:bg-karina-charcoal hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
              aria-label="Sede anterior"
            >
              <i className="fa-solid fa-chevron-left text-xs" />
            </button>

            <div className="flex items-center gap-2 text-xs text-karina-charcoal/70 font-mono font-normal px-2">
              <span className="sede-dot w-2.5 h-2.5 rounded-full bg-karina-charcoal transition-all" />
              <span className="sede-dot w-2 h-2 rounded-full bg-karina-charcoal/30 transition-all" />
              <span className="sede-dot w-2 h-2 rounded-full bg-karina-charcoal/30 transition-all" />
              <span id="sede-counter" className="ml-2 font-normal">
                01 - 03
              </span>
            </div>

            <button
              id="next-sede-btn"
              type="button"
              onClick={() => callWin('navigateSede', 1)}
              className="w-10 h-10 rounded-full border border-karina-charcoal/20 bg-white/60 hover:bg-karina-charcoal hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
              aria-label="Siguiente sede"
            >
              <i className="fa-solid fa-chevron-right text-xs" />
            </button>
          </div>

          {/* TARJETAS DE SEDES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left pt-4">
            {/* Sede 0: Maturín */}
            <div
              id="sede-card-0"
              onClick={() => callWin('openSedeModal', 0)}
              className="sede-card group cursor-pointer"
            >
              <div className="relative h-[380px] w-full rounded-pebble overflow-hidden shadow-lg mb-3 border border-black/5 bg-black/5">
                <img
                  src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Principales-Homepage/Area-Hotel-Karina-Maturin.webp"
                  alt="Hotel Kariña Maturín"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white space-y-1">
                  <h3 className="text-2xl font-light tracking-tight text-white">Maturín</h3>
                </div>
              </div>
              <p className="text-xs text-karina-charcoal/70 leading-relaxed font-light px-1">
                Etapa II, Macroparcela MC-30 de La Urbanización Palma Real.
              </p>
            </div>

            {/* Sede 1: Punta de Mata */}
            <div
              id="sede-card-1"
              onClick={() => callWin('openSedeModal', 1)}
              className="sede-card group cursor-pointer"
            >
              <div className="relative h-[380px] w-full rounded-pebble overflow-hidden shadow-lg mb-3 border border-black/5 bg-black/5">
                <img
                  src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Principales-Homepage/FACHADA-PRINCIPAL-PUNTADEMATA.webp"
                  alt="Hotel Kariña Punta de Mata"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white space-y-1">
                  <h3 className="text-2xl font-light tracking-tight text-white">Punta de Mata</h3>
                </div>
              </div>
              <p className="text-xs text-karina-charcoal/70 leading-relaxed font-light px-1">
                Sector Zona Industrial, Ramal 7, al lado del Depósito Empresas Polar.
              </p>
            </div>

            {/* Sede 2: El Tigre */}
            <div
              id="sede-card-2"
              onClick={() => callWin('openSedeModal', 2)}
              className="sede-card group cursor-pointer"
            >
              <div className="relative h-[380px] w-full rounded-pebble overflow-hidden shadow-lg mb-3 border border-black/5 bg-black/5">
                <img
                  src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Principales-Homepage/Piscina-Principal-El-Tigre.webp"
                  alt="Hotel Kariña El Tigre"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white space-y-1">
                  <h3 className="text-2xl font-light tracking-tight text-white">El Tigre</h3>
                </div>
              </div>
              <p className="text-xs text-karina-charcoal/70 leading-relaxed font-light px-1">
                A 100mts del Balancín Tricolor, Avenida Ruiz Pineda, cruce con Calle 23 de Enero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. SECCIÓN DE REBRANDING: NUESTRA TRANSFORMACIÓN */}
      {/* ========================================== */}
      <section
        id="nuestra-transformacion"
        className="w-full bg-[#FAF6F0] py-20 px-6 sm:px-12 text-stone-900 border-t border-b border-[#E8DFD3] relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,rgba(232,163,74,0.12)_0%,rgba(250,246,240,0)_65%)]"
        />

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
          {/* Cabecera Editorial de la Serie */}
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2.5">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#C8832B]" />
              <span className="text-[11px] font-mono tracking-[0.22em] text-[#C8832B] uppercase font-bold">
                La Nueva Experiencia Kariña
              </span>
              <span className="w-8 h-[2px] bg-[#C8832B]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight">
              Nuestra Transformación
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
              Revive los 3 capítulos de nuestra evolución en el Oriente de Venezuela: desde nuestras raíces ancestrales hasta la revelación de una nueva era de hospitalidad ejecutiva.
            </p>
          </div>

          {/* Reproductor Vertical 9:16 con Selector de 3 Capítulos (Inicia en Capítulo 03) */}
          <TeaserVideoPlayer initialEpisodeId={3} showChaptersList={true} />

          {/* CTA de Comunidad en Instagram */}
          <InstagramCta instagramUrl="https://instagram.com/hoteleskarina" />
        </div>
      </section>

      {/* ========================================== */}
      {/* 6. SECCIÓN SUITES                          */}
      {/* ========================================== */}
      <section id="suites" className="py-20 px-6 sm:px-12 bg-[#FFF6EA] text-karina-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4 reveal active">
            <button
              id="btn-un-ambiente"
              type="button"
              onClick={() => callWin('switchSuite', 'un-ambiente')}
              className="px-5 py-1.5 rounded-full text-xs font-bold border border-[#343434] bg-[#343434] text-white transition-all shadow-sm"
            >
              Suite Estándar
            </button>
            <button
              id="btn-dos-ambientes"
              type="button"
              onClick={() => callWin('switchSuite', 'dos-ambientes')}
              className="px-5 py-1.5 rounded-full text-xs font-bold border border-[#343434]/30 bg-transparent text-[#343434] hover:border-[#343434] transition-all"
            >
              Suite Premium
            </button>
          </div>

          <p className="text-center text-[10px] tracking-[0.2em] font-semibold text-[#343434]/60 uppercase mb-12 reveal active">
            Escoge entre dos tipos de suites — Reserva desde $100
          </p>

          <div
            id="home-suite-container"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center suite-fade"
          >
            <div className="lg:col-span-6 space-y-6 reveal active">
              <h2
                id="suite-title"
                className="text-4xl sm:text-5xl font-light text-[#343434] tracking-tight uppercase"
              >
                Suite Estándar
              </h2>
              <p id="suite-desc" className="text-sm text-[#343434]/80 leading-relaxed">
                Un refugio de diseño contemporáneo y confort absoluto, pensado para garantizar un descanso impecable y alta conectividad en todo momento.
              </p>

              <div id="suite-amenities" className="space-y-2 pt-2">
                <div className="flex items-center gap-3 text-xs font-semibold text-[#343434]">
                  <i className="fa-regular fa-circle-check text-[#F0A800]" />
                  <span>1 Cama Matrimonial (Desayuno Incluido)</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-[#343434]">
                  <i className="fa-regular fa-circle-check text-[#F0A800]" />
                  <span>TV y Fibra Óptica</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-[#343434]">
                  <i className="fa-regular fa-circle-check text-[#F0A800]" />
                  <span>Cocina Kitchenette, Nevera 15P y Microondas</span>
                </div>
              </div>

              <div className="border-l-2 border-[#F0A800] pl-4 py-1">
                <p id="suite-quote" className="text-xs text-[#343434]/70 italic">
                  &ldquo;Un santuario de descanso pensado para el confort y la comodidad.&rdquo;
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="/suites.html"
                  className="text-xs font-bold text-[#F0A800] hover:text-[#343434] transition-colors flex items-center gap-1.5"
                >
                  <span>Ver Catálogo Completo</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative reveal active reveal-delay-1">
              <div className="relative rounded-pebble overflow-hidden shadow-2xl bg-black/5">
                <img
                  id="suite-img"
                  src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-Punta-de-Mata/Suite-Estandar-PuntadeMata_resultado.webp"
                  alt="Suite Hotel Kariña"
                  className="w-full h-[420px] object-cover transition-opacity duration-300"
                />

                <div className="absolute top-6 right-6 z-20 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md text-xs font-bold text-[#343434]">
                  <span id="suite-price">Desde $120</span> / noche
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 7. SECCIÓN TARIFAS Y CONVENIOS CORPORATIVOS B2B */}
      {/* ========================================== */}
      <div id="corporativo" className="bg-[#FAF6F0] text-stone-900 border-t border-[#E8DFD3]">
        <CorporateRatesSection />
      </div>

      {/* ========================================== */}
      {/* 8. BENTO GALLERY ("VIVE KARIÑA")           */}
      {/* ========================================== */}
      <section id="experiencias" className="py-24 px-6 sm:px-12 bg-karina-charcoal text-white text-center">
        <div className="max-w-7xl mx-auto">
          <div className="reveal active">
            <h2 className="text-3xl sm:text-5xl font-light mb-12">Vive Kariña</h2>
          </div>

          {/* Grid 3x2 Balanceado y Panorámico */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left reveal active">
            {/* Posición 1 */}
            <div
              onClick={() =>
                callWin(
                  'openLightbox',
                  'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Piscina-Maturin-3.webp',
                  'Piscina & Solárium — Hotel Kariña Maturín',
                  'Espacios al aire libre, solárium y relajación tropical'
                )
              }
              className="relative h-52 sm:h-56 rounded-2xl overflow-hidden group cursor-pointer shadow-lg bg-black/10"
            >
              <img
                src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Piscina-Maturin-3.webp"
                alt="Piscina & Solárium Maturín"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[9px] font-mono tracking-widest uppercase bg-[#F0A800] text-[#343434] font-bold px-2.5 py-0.5 rounded-full inline-block">
                  ÁREAS HÚMEDAS
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                  Piscina &amp; Solárium
                </h3>
              </div>
            </div>

            {/* Posición 2 */}
            <div
              onClick={() =>
                callWin(
                  'openLightbox',
                  'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/MasterPadel-Maturin-1.webp',
                  'Master Pádel Maturín — Hotel Kariña',
                  'Canchas panorámicas techadas, torneos y clínicas formativas'
                )
              }
              className="relative h-52 sm:h-56 rounded-2xl overflow-hidden group cursor-pointer shadow-lg bg-black/10"
            >
              <img
                src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/MasterPadel-Maturin-1.webp"
                alt="Master Pádel Maturín"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[9px] font-mono tracking-widest uppercase bg-[#2680BD] text-white font-bold px-2.5 py-0.5 rounded-full inline-block">
                  DEPORTE &amp; ACCIÓN
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                  Master Pádel Maturín
                </h3>
              </div>
            </div>

            {/* Posición 3 */}
            <div
              onClick={() =>
                callWin(
                  'openLightbox',
                  'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondades-El-Tigre/Carpaccio-de-pulpo-En-El-Tigre.webp',
                  'Moriche Restaurant — Cocina de Autor',
                  'Propuestas gastronómicas de autor, maridaje y sabores regionales'
                )
              }
              className="relative h-52 sm:h-56 rounded-2xl overflow-hidden group cursor-pointer shadow-lg bg-black/10"
            >
              <img
                src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondades-El-Tigre/Carpaccio-de-pulpo-En-El-Tigre.webp"
                alt="Moriche Restaurant"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[9px] font-mono tracking-widest uppercase bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full inline-block">
                  ALTA COCINA
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                  Moriche Restaurant
                </h3>
              </div>
            </div>

            {/* Posición 4 (Card Interactiva CTA) */}
            <a
              href="/vive-karina.html"
              className="h-52 sm:h-56 rounded-2xl bg-gradient-to-br from-[#FFF6EA] to-[#FFECCE] hover:from-white hover:to-[#FFF6EA] text-karina-charcoal p-6 flex flex-col justify-between shadow-lg border border-white/20 transition-all hover:scale-[1.02] group cursor-pointer"
            >
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-karina-mustard text-karina-charcoal text-[10px] font-bold uppercase tracking-wider self-start shadow-2xs">
                  <i className="fa-solid fa-wand-magic-sparkles text-[9px]" /> EXPERIENCIAS KARIÑA
                </span>
                <p className="text-xs text-karina-charcoal/70 font-light leading-relaxed">
                  Descubre cada rincón, deportes, bienestar y sabores del Oriente Venezolano.
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-black/5">
                <span className="text-xs sm:text-sm font-bold text-karina-charcoal group-hover:text-karina-mustard transition-colors">
                  Explora la Galería Vive Kariña →
                </span>
                <div className="w-8 h-8 rounded-full bg-karina-charcoal group-hover:bg-[#F0A800] text-white group-hover:text-karina-charcoal flex items-center justify-center transition-all shadow-xs shrink-0 group-hover:translate-x-0.5">
                  <i className="fa-solid fa-arrow-right text-xs" />
                </div>
              </div>
            </a>

            {/* Posición 5 */}
            <div
              onClick={() =>
                callWin(
                  'openLightbox',
                  'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Tinto-de-Verano-Master-Padel-Oh-my-bar.webp',
                  'Oh My Bar Bistro — Mixología y Coctelería',
                  'Ambiente lounge, cócteles de autor y gastronomía bistro'
                )
              }
              className="relative h-52 sm:h-56 rounded-2xl overflow-hidden group cursor-pointer shadow-lg bg-black/10"
            >
              <img
                src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Tinto-de-Verano-Master-Padel-Oh-my-bar.webp"
                alt="Oh My Bar Bistro"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[9px] font-mono tracking-widest uppercase bg-karina-mustard text-karina-charcoal font-extrabold px-2.5 py-0.5 rounded-full inline-block">
                  MIXOLOGÍA &amp; LOUNGE
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                  Oh My Bar Bistro
                </h3>
              </div>
            </div>

            {/* Posición 6 */}
            <div
              onClick={() =>
                callWin(
                  'openLightbox',
                  'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondades-El-Tigre/Lobby-Nocturno-Guanipa.webp',
                  'Lobby & Espacios Sociales — Hotel Kariña El Tigre',
                  'Instalaciones modernas, confort ejecutivo y recepción 24/7'
                )
              }
              className="relative h-52 sm:h-56 rounded-2xl overflow-hidden group cursor-pointer shadow-lg bg-black/10"
            >
              <img
                src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondades-El-Tigre/Lobby-Nocturno-Guanipa.webp"
                alt="Lobby & Espacios Sociales"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[9px] font-mono tracking-widest uppercase bg-emerald-600 text-white font-bold px-2.5 py-0.5 rounded-full inline-block">
                  CONFORT EJECUTIVO
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                  Lobby &amp; Espacios Sociales
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 9. SECCIÓN FUNDACIÓN KARIÑA                */}
      {/* ========================================== */}
      <section id="fundacion" className="py-20 px-6 sm:px-12 bg-[#FFF6EA] text-karina-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12 reveal active">
            <img
              src="https://uploads.onecompiler.io/44s48z3dm/1787539299313/Icono-Kari%C3%B1a-new.png"
              alt="Fundación Kariña"
              className="h-14 w-auto object-contain"
            />
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#343434]">
                Somos Turismo, Cultura y Servicio
              </h2>
              <p className="text-xs text-[#343434]/70 mt-1 max-w-2xl">
                Un compromiso genuino con nuestras raíces ancestrales, impulsando el desarrollo sostenible, la preservación cultural y el bienestar de las comunidades Kariña.
              </p>
            </div>
          </div>

          <div className="relative rounded-pebble overflow-hidden shadow-2xl min-h-[460px] flex items-end reveal active reveal-delay-1">
            <img
              src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Karina-Comunidad/Comunidad-Karina-Punta-de-Mata-Oriente.webp"
              alt="Comunidad Indígena Fundación Kariña"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 p-8 sm:p-12 text-white max-w-3xl">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FFD573]">
                COMPROMISO SOCIAL
              </span>
              <h3 className="text-3xl sm:text-5xl font-light leading-tight mt-2 mb-4">
                Nuestra Esencia, Su Futuro: <br />
                <strong className="font-extrabold">Fundación Kariña</strong>
              </h3>
              <p className="text-xs text-white/80 leading-relaxed mb-6">
                En Hotel Kariña, la hospitalidad va de la mano con el respeto a nuestras raíces. A través de la Fundación Kariña, cada estancia apoya directamente la educación, la preservación artesanal y el desarrollo de nuestras comunidades ancestrales.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <span className="text-xs font-bold block text-white">Artesanía Local</span>
                  <span className="text-[10px] text-white/60">Apoyo a talleres tradicionales</span>
                </div>
                <div>
                  <span className="text-xs font-bold block text-white">Educación</span>
                  <span className="text-[10px] text-white/60">Becas e infraestructura</span>
                </div>
                <div>
                  <span className="text-xs font-bold block text-white">Sostenibilidad</span>
                  <span className="text-[10px] text-white/60">Prácticas eco-amigables</span>
                </div>
              </div>
            </div>

            <a
              href="/fundacion.html"
              aria-label="Conoce más sobre la Fundación Kariña"
              className="absolute bottom-8 right-8 z-20 w-12 h-12 rounded-full bg-[#F0A800] hover:bg-[#FFD573] text-[#343434] flex items-center justify-center shadow-lg transition-transform hover:scale-105"
            >
              <i className="fa-solid fa-arrow-right text-sm" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 10. PREGUNTAS FRECUENTES                   */}
      {/* ========================================== */}
      <section id="faqs" className="py-24 px-6 sm:px-12 bg-[#FFF6EA] text-karina-charcoal">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3 reveal active">
            <h2 className="text-3xl sm:text-5xl font-light text-[#343434] tracking-tight">
              Preguntas Frecuentes
            </h2>
            <p className="text-xs sm:text-sm text-[#343434]/70 max-w-md mx-auto leading-relaxed">
              Respuestas claras a tus dudas sobre reservas, estadías y servicios exclusivos en Hotel Kariña.
            </p>

            {/* Filtros por Categoría */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={(e) => callWin('filterFaq', 'all', e.currentTarget)}
                className="filter-tab px-4 py-1.5 rounded-full text-xs font-bold bg-[#343434] text-white shadow-sm"
              >
                Todas
              </button>
              <button
                type="button"
                onClick={(e) => callWin('filterFaq', 'checkin', e.currentTarget)}
                className="filter-tab px-4 py-1.5 rounded-full text-xs font-semibold text-[#343434]/70 hover:text-[#343434] bg-white/40 hover:bg-white/80 border border-[#343434]/10"
              >
                Check-in y Políticas
              </button>
              <button
                type="button"
                onClick={(e) => callWin('filterFaq', 'pagos', e.currentTarget)}
                className="filter-tab px-4 py-1.5 rounded-full text-xs font-semibold text-[#343434]/70 hover:text-[#343434] bg-white/40 hover:bg-white/80 border border-[#343434]/10"
              >
                Pagos y Tarifas
              </button>
              <button
                type="button"
                onClick={(e) => callWin('filterFaq', 'servicios', e.currentTarget)}
                className="filter-tab px-4 py-1.5 rounded-full text-xs font-semibold text-[#343434]/70 hover:text-[#343434] bg-white/40 hover:bg-white/80 border border-[#343434]/10"
              >
                Servicios y Resort
              </button>
            </div>
          </div>

          {/* Listado de Preguntas */}
          <div className="border-t border-b border-[#343434]/15 divide-y divide-[#343434]/15 reveal active reveal-delay-1">
            {/* Item 1 */}
            <div
              className="faq-line-item faq-item-all faq-item-checkin py-5 px-3 sm:px-5 cursor-pointer"
              onClick={(e) => callWin('toggleEditorialFaq', e.currentTarget)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base sm:text-lg font-medium text-[#343434] leading-snug tracking-tight">
                  ¿Cuáles son los horarios de check-in y check-out?
                </h3>
                <span className="faq-icon-rotator text-[#343434]/60 text-lg sm:text-xl font-light shrink-0">
                  <i className="fa-solid fa-plus" />
                </span>
              </div>
              <div className="faq-wrapper">
                <div className="faq-inner-content">
                  <div className="faq-text-body pt-3 space-y-3">
                    <p className="text-xs sm:text-sm text-[#343434]/75 leading-relaxed font-normal">
                      El horario de Check-In es a partir de las 3:00 p.m. y el Check-Out es hasta la 1:00 p.m. del día siguiente. Sujeto a disponibilidad, ofrecemos opciones de Early Check-in y Late Check-out previa coordinación con recepción.
                    </p>
                    <div className="pt-1">
                      <a
                        href="https://wa.me/584249169610"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F0A800] hover:text-[#343434] transition-colors"
                      >
                        <span>Solicitar Late Check-out por WhatsApp</span>
                        <i className="fa-solid fa-arrow-right text-[10px]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div
              className="faq-line-item faq-item-all faq-item-pagos py-5 px-3 sm:px-5 cursor-pointer"
              onClick={(e) => callWin('toggleEditorialFaq', e.currentTarget)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base sm:text-lg font-medium text-[#343434] leading-snug tracking-tight">
                  ¿Qué métodos de pago aceptan para las reservas?
                </h3>
                <span className="faq-icon-rotator text-[#343434]/60 text-lg sm:text-xl font-light shrink-0">
                  <i className="fa-solid fa-plus" />
                </span>
              </div>
              <div className="faq-wrapper">
                <div className="faq-inner-content">
                  <div className="faq-text-body pt-3 space-y-2">
                    <p className="text-xs sm:text-sm text-[#343434]/75 leading-relaxed font-normal">
                      Aceptamos transferencias bancarias nacionales (Bolívares / Pago Móvil), divisas en efectivo, tarjetas internacionales, Zelle y convenios de crédito corporativo B2B.
                    </p>
                    <p className="text-[11px] font-semibold text-[#343434]/50">
                      Aceptados: Zelle • Pago Móvil • Visa / Mastercard • Facturación Empresa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div
              className="faq-line-item faq-item-all faq-item-servicios py-5 px-3 sm:px-5 cursor-pointer"
              onClick={(e) => callWin('toggleEditorialFaq', e.currentTarget)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base sm:text-lg font-medium text-[#343434] leading-snug tracking-tight">
                  ¿El desayuno está incluido en la estadía?
                </h3>
                <span className="faq-icon-rotator text-[#343434]/60 text-lg sm:text-xl font-light shrink-0">
                  <i className="fa-solid fa-plus" />
                </span>
              </div>
              <div className="faq-wrapper">
                <div className="faq-inner-content">
                  <div className="faq-text-body pt-3 space-y-2">
                    <p className="text-xs sm:text-sm text-[#343434]/75 leading-relaxed font-normal">
                      El servicio de desayuno se coordina directamente con recepción según las opciones y el plan contratado en su reserva (servicio a la carta / continental según plan). Nuestras instalaciones incluyen acceso a piscinas resort, Wi-Fi de fibra óptica dedicada, áreas deportivas y estacionamiento privado vigilado 24/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div
              className="faq-line-item faq-item-all faq-item-checkin py-5 px-3 sm:px-5 cursor-pointer"
              onClick={(e) => callWin('toggleEditorialFaq', e.currentTarget)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base sm:text-lg font-medium text-[#343434] leading-snug tracking-tight">
                  ¿Son un hotel pet-friendly?
                </h3>
                <span className="faq-icon-rotator text-[#343434]/60 text-lg sm:text-xl font-light shrink-0">
                  <i className="fa-solid fa-plus" />
                </span>
              </div>
              <div className="faq-wrapper">
                <div className="faq-inner-content">
                  <div className="faq-text-body pt-3 space-y-2">
                    <p className="text-xs sm:text-sm text-[#343434]/75 leading-relaxed font-normal">
                      No se admiten mascotas (no pet-friendly). Para garantizar el máximo estándar de descanso y bienestar de todos los huéspedes, no contamos con instalaciones ni servicio para mascotas en nuestras suites.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 5 */}
            <div
              className="faq-line-item faq-item-all faq-item-servicios py-5 px-3 sm:px-5 cursor-pointer"
              onClick={(e) => callWin('toggleEditorialFaq', e.currentTarget)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base sm:text-lg font-medium text-[#343434] leading-snug tracking-tight">
                  ¿Cuáles son los horarios de las piscinas y Day Pass?
                </h3>
                <span className="faq-icon-rotator text-[#343434]/60 text-lg sm:text-xl font-light shrink-0">
                  <i className="fa-solid fa-plus" />
                </span>
              </div>
              <div className="faq-wrapper">
                <div className="faq-inner-content">
                  <div className="faq-text-body pt-3 space-y-2">
                    <p className="text-xs sm:text-sm text-[#343434]/75 leading-relaxed font-normal">
                      En la <strong>Sede Maturín</strong> contamos con horario extendido nocturno hasta las <strong>8:00 p.m.</strong> En las <strong>Sedes El Tigre y Punta de Mata</strong> el horario disponible es hasta las <strong>6:00 p.m.</strong> Todos los huéspedes hospedados disfrutan de acceso libre a las piscinas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 6 */}
            <div
              className="faq-line-item faq-item-all faq-item-servicios py-5 px-3 sm:px-5 cursor-pointer"
              onClick={(e) => callWin('toggleEditorialFaq', e.currentTarget)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base sm:text-lg font-medium text-[#343434] leading-snug tracking-tight">
                  ¿Cómo reservar pistas en Master Pádel (Sede Maturín)?
                </h3>
                <span className="faq-icon-rotator text-[#343434]/60 text-lg sm:text-xl font-light shrink-0">
                  <i className="fa-solid fa-plus" />
                </span>
              </div>
              <div className="faq-wrapper">
                <div className="faq-inner-content">
                  <div className="faq-text-body pt-3 space-y-3">
                    <p className="text-xs sm:text-sm text-[#343434]/75 leading-relaxed font-normal">
                      En la sede Maturín (Club Palma Real) disponemos del complejo <strong>Master Pádel</strong> con canchas profesionales iluminadas. Horario de pistas: <strong>7:00 a.m. a 11:30 p.m.</strong> (fines de semana con horario extendido).
                    </p>
                    <div>
                      <a
                        href="https://wa.me/584141908421"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2680BD] hover:text-[#343434] transition-colors"
                      >
                        <i className="fa-brands fa-whatsapp text-emerald-600" />
                        <span>Reservar Cancha por WhatsApp (+58 414-1908421)</span>
                        <i className="fa-solid fa-arrow-right text-[10px]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 7 */}
            <div
              className="faq-line-item faq-item-all faq-item-servicios py-5 px-3 sm:px-5 cursor-pointer"
              onClick={(e) => callWin('toggleEditorialFaq', e.currentTarget)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base sm:text-lg font-medium text-[#343434] leading-snug tracking-tight">
                  ¿Ofrecen menús para dietas especiales o eventos corporativos?
                </h3>
                <span className="faq-icon-rotator text-[#343434]/60 text-lg sm:text-xl font-light shrink-0">
                  <i className="fa-solid fa-plus" />
                </span>
              </div>
              <div className="faq-wrapper">
                <div className="faq-inner-content">
                  <div className="faq-text-body pt-3 space-y-3">
                    <p className="text-xs sm:text-sm text-[#343434]/75 leading-relaxed font-normal">
                      Sí. Contamos con salones corporativos en nuestras tres sedes equipados con fibra óptica dedicada, pantallas 4K y servicio gastronómico integral con opciones de menú adaptadas para dietas especiales (vegetarianos, celíacos) en eventos corporativos y banquetes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 11. MASTER FOOTER CORPORATIVO COMPLETO     */}
      {/* ========================================== */}
      <footer id="footer" className="bg-[#262626] text-white pt-20 pb-24 sm:pb-28 px-6 sm:px-12 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Columna 1: Marca y Slogan */}
          <div className="lg:col-span-3 space-y-5">
            <a href="/" className="inline-block">
              <img
                src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/KARINA-LOGO-VERTICAL.png"
                alt="Grupo Kariña Logo Blanco"
                className="h-28 sm:h-32 md:h-36 w-auto object-contain"
              />
            </a>
            <p className="text-xs text-white/70 leading-relaxed max-w-xs font-normal">
              Una estadía que te abraza. Confort, hospitalidad ejecutiva y cultura viva en el Oriente Venezolano.
            </p>
          </div>

          {/* Columna 2: NUESTRAS SEDES */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F0A800] block">
              Nuestras Sedes
            </span>
            <ul className="space-y-2 text-xs text-white/75 font-normal">
              <li>
                <a href="/maturin.html" className="hover:text-white transition-colors">
                  Hotel Kariña Maturín
                </a>
              </li>
              <li>
                <a href="/punta-de-mata.html" className="hover:text-white transition-colors">
                  Hotel Kariña Punta de Mata
                </a>
              </li>
              <li>
                <a href="/el-tigre.html" className="hover:text-white transition-colors">
                  Hotel Kariña El Tigre
                </a>
              </li>
              <li>
                <a href="/suites.html" className="hover:text-white transition-colors">
                  Catálogo de Suites y Tarifas
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: EXPERIENCIAS */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2680BD] block">
              Experiencias
            </span>
            <ul className="space-y-2 text-xs text-white/75 font-normal">
              <li>
                <a href="/vive-karina.html" className="hover:text-white transition-colors">
                  Club y piscina
                </a>
              </li>
              <li>
                <a href="/business.html" className="hover:text-white transition-colors">
                  Centro de negocios
                </a>
              </li>
              <li>
                <a href="/restaurante.html" className="hover:text-white transition-colors">
                  Restaurante 283
                </a>
              </li>
              <li>
                <a href="/fundacion.html" className="hover:text-white transition-colors">
                  Fundación Kariña
                </a>
              </li>
              <li>
                <a href="/faqs.html" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contacto.html" className="hover:text-white transition-colors">
                  Contacto y Ubicaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: CONTACTO POR SEDE */}
          <div className="lg:col-span-3 space-y-3.5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-white/90 block">
              Contacto por Sede
            </span>

            <div className="space-y-3 text-xs text-white/75">
              {/* Maturín */}
              <div className="space-y-0.5">
                <p className="font-bold text-white text-[11px] flex items-center gap-1.5">
                  <i className="fa-solid fa-location-dot text-[#F0A800] text-[10px]" /> Maturín:
                </p>
                <p className="text-[10px] text-white/60 leading-tight">
                  Urb. Palma Real, Etapa II, Macroparcela MC-30
                </p>
                <a
                  href="https://wa.me/584249169610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-[11px] text-[#92CEF7] inline-flex items-center gap-1"
                >
                  <i className="fa-brands fa-whatsapp text-xs" /> +58 424-9169610
                </a>
                <div className="pt-0.5">
                  <a
                    href="https://wa.me/584141908421"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors text-[10px] text-[#FFD573] inline-flex items-center gap-1"
                  >
                    <i className="fa-brands fa-whatsapp text-[10px]" /> Master Pádel: +58 414-1908421
                  </a>
                </div>
              </div>

              {/* El Tigre */}
              <div className="space-y-0.5">
                <p className="font-bold text-white text-[11px] flex items-center gap-1.5">
                  <i className="fa-solid fa-location-dot text-[#EB8C84] text-[10px]" /> El Tigre:
                </p>
                <p className="text-[10px] text-white/60 leading-tight">
                  Av. Ruiz Pineda c/c 23 de Enero (a 100m del Balancín)
                </p>
                <a
                  href="https://wa.me/584249559213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-[11px] text-[#92CEF7] inline-flex items-center gap-1"
                >
                  <i className="fa-brands fa-whatsapp text-xs" /> +58 424-9559213
                </a>
              </div>

              {/* Punta de Mata */}
              <div className="space-y-0.5">
                <p className="font-bold text-white text-[11px] flex items-center gap-1.5">
                  <i className="fa-solid fa-location-dot text-[#2680BD] text-[10px]" /> Punta de Mata:
                </p>
                <p className="text-[10px] text-white/60 leading-tight">
                  Sector Zona Industrial, Ramal 7
                </p>
                <a
                  href="https://wa.me/584249396445"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-[11px] text-[#92CEF7] inline-flex items-center gap-1"
                >
                  <i className="fa-brands fa-whatsapp text-xs" /> +58 424-9396445
                </a>
              </div>

              {/* Email central */}
              <div className="pt-1 flex items-center gap-2">
                <i className="fa-solid fa-envelope text-[#FFD573] text-xs" />
                <a
                  href="mailto:contacto@hoteleskarina.com"
                  className="karina-email-link hover:text-white transition-colors text-[11px]"
                >
                  contacto@hoteleskarina.com
                </a>
              </div>
            </div>
          </div>

          {/* Columna 5: SÍGUENOS EN INSTAGRAM */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#EB8C84] block">
              Instagram
            </span>

            <div className="flex flex-col gap-2">
              <a
                href="https://instagram.com/hoteleskarina"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-insta-pill flex items-center gap-2 py-1.5 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 hover:bg-white/10 transition-colors"
              >
                <i className="fa-brands fa-instagram text-[#F0A800]" />
                <span>@hoteleskarina</span>
              </a>

              <a
                href="https://instagram.com/hotelkarina.maturin"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-insta-pill flex items-center gap-2 py-1.5 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 hover:bg-white/10 transition-colors"
              >
                <i className="fa-brands fa-instagram text-[#92CEF7]" />
                <span>@hotelkarina.maturin</span>
              </a>

              <a
                href="https://instagram.com/hotelkarina.guanipa"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-insta-pill flex items-center gap-2 py-1.5 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 hover:bg-white/10 transition-colors"
              >
                <i className="fa-brands fa-instagram text-[#FFD573]" />
                <span>@hotelkarina.guanipa</span>
              </a>

              <a
                href="https://instagram.com/hotelkarina.ptamata"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-insta-pill flex items-center gap-2 py-1.5 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 hover:bg-white/10 transition-colors"
              >
                <i className="fa-brands fa-instagram text-[#EB8C84]" />
                <span>@hotelkarina.ptamata</span>
              </a>

              <a
                href="https://instagram.com/fundacionkarina"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-insta-pill flex items-center gap-2 py-1.5 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 hover:bg-white/10 transition-colors"
              >
                <i className="fa-brands fa-instagram text-[#F0A800]" />
                <span>@fundacionkarina</span>
              </a>
            </div>
          </div>
        </div>

        {/* Barra Inferior Legal + Botón Back-to-Top */}
        <div className="max-w-[1440px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <p>© 2026 Grupo Kariña</p>
            <a href="/terminos.html" className="hover:text-white transition-colors">
              Términos
            </a>
            <a href="/privacidad.html" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="/faqs.html" className="hover:text-white transition-colors">
              Cancelaciones
            </a>
            <a href="/faqs.html" className="hover:text-white transition-colors">
              Libro de Reclamaciones
            </a>
          </div>

          <button
            type="button"
            onClick={() => callWin('scrollToTop')}
            className="back-to-top-btn w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center focus:outline-none"
            aria-label="Volver arriba"
          >
            <i className="fa-solid fa-arrow-up text-xs" />
          </button>
        </div>
      </footer>

      {/* ========================================== */}
      {/* MODAL INMERSIVO DE SEDES                   */}
      {/* ========================================== */}
      <div
        id="sede-modal"
        className="fixed inset-0 z-[200] opacity-0 pointer-events-none bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none"
        onClick={(e) => callWin('closeSedeModalOnBackdrop', e.nativeEvent)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-karina-mustard/35 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />

        <button
          type="button"
          onClick={() => callWin('navigateSedeInModal', -1)}
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-black/50 hover:bg-karina-mustard hover:text-karina-charcoal text-white items-center justify-center transition-all backdrop-blur-md shadow-xl active:scale-95 border border-white/20"
          title="Sede anterior"
        >
          <i className="fa-solid fa-chevron-left text-sm" />
        </button>

        <button
          type="button"
          onClick={() => callWin('navigateSedeInModal', 1)}
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-black/50 hover:bg-karina-mustard hover:text-karina-charcoal text-white items-center justify-center transition-all backdrop-blur-md shadow-xl active:scale-95 border border-white/20"
          title="Siguiente sede"
        >
          <i className="fa-solid fa-chevron-right text-sm" />
        </button>

        <div
          id="sede-modal-container"
          className="relative w-full max-w-3xl min-h-[580px] max-h-[92vh] bg-karina-cream rounded-[36px] overflow-hidden shadow-2xl border border-black/10 text-karina-charcoal my-auto flex flex-col justify-between"
        >
          <div
            id="modal-content-wrapper"
            className="grid grid-cols-1 md:grid-cols-12 h-full overflow-y-auto modal-content-fade"
          >
            <div className="md:col-span-5 p-6 sm:p-7 flex flex-col justify-between bg-white/40 border-r border-black/5 space-y-4">
              <div className="relative w-full h-[280px] sm:h-[320px] rounded-pebble overflow-hidden shadow-md bg-black/10 shrink-0">
                <img
                  id="modal-main-image"
                  src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Principales-Homepage/Area-Hotel-Karina-Maturin.webp"
                  alt="Sede Vista"
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span
                  id="modal-image-caption"
                  className="absolute bottom-3.5 left-3.5 text-[11px] font-normal text-white drop-shadow tracking-wide"
                >
                  Fachada Principal
                </span>
              </div>

              <div id="modal-thumbnails-container" className="grid grid-cols-4 gap-2.5 pt-1">
                {[0, 1, 2, 3].map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => callWin('setModalImage', idx)}
                    className={`thumb-btn ${
                      idx === 0 ? 'is-active-thumb' : ''
                    } aspect-square rounded-xl overflow-hidden border-2 border-transparent`}
                  >
                    <img
                      id={`thumb-${idx}`}
                      src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Principales-Homepage/Area-Hotel-Karina-Maturin.webp"
                      className="w-full h-full object-cover"
                      alt={`Vista ${idx + 1}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-6">
                <div className="flex items-center justify-end gap-5">
                  <div className="flex items-center gap-2 text-xs font-mono font-normal text-karina-charcoal/70">
                    <button
                      type="button"
                      onClick={() => callWin('navigateSedeInModal', -1)}
                      className="hover:text-karina-mustard transition-colors px-1 py-1"
                      title="Anterior"
                    >
                      <i className="fa-solid fa-chevron-left text-xs" />
                    </button>
                    <span id="modal-counter-text" className="text-[12px] font-normal px-1">
                      01 / 03
                    </span>
                    <button
                      type="button"
                      onClick={() => callWin('navigateSedeInModal', 1)}
                      className="hover:text-karina-mustard transition-colors px-1 py-1"
                      title="Siguiente"
                    >
                      <i className="fa-solid fa-chevron-right text-xs" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => callWin('closeSedeModal')}
                    className="text-karina-charcoal/60 hover:text-karina-charcoal text-lg p-1 transition-colors leading-none"
                    aria-label="Cerrar vista previa"
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                </div>

                <div className="space-y-2">
                  <h3 id="modal-title" className="text-2xl sm:text-3xl font-light text-karina-charcoal leading-tight">
                    Hotel Kariña Maturín
                  </h3>
                  <p
                    id="modal-tagline"
                    className="text-xs sm:text-sm text-karina-charcoal/70 font-light leading-relaxed pt-1"
                  >
                    El resort insignia del Oriente Venezolano con piscina semiolímpica, solárium, gastronomía de autor y salones corporativos.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3.5 text-xs font-normal text-karina-charcoal/80 pt-1">
                  <div className="flex items-center gap-2.5">
                    <i className="fa-regular fa-circle-check text-karina-mustard text-xs" />
                    <span>Piscina y Áreas Verdes</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <i className="fa-regular fa-circle-check text-karina-mustard text-xs" />
                    <span>WiFi Fibra Óptica</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <i className="fa-regular fa-circle-check text-karina-mustard text-xs" />
                    <span>Restaurante y Bar 24 Horas</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <i className="fa-regular fa-circle-check text-karina-mustard text-xs" />
                    <span>Estacionamiento Vigilado</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-karina-charcoal/80 pt-4 border-t border-karina-charcoal/10">
                  <div className="flex items-start gap-2.5">
                    <i className="fa-solid fa-location-dot text-karina-mustard text-xs mt-0.5" />
                    <a
                      id="modal-maps-link"
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs leading-relaxed text-karina-charcoal/80 font-light hover:text-karina-mustard hover:underline transition-colors flex items-center gap-1.5 group"
                    >
                      <span id="modal-address">
                        Urbanización Palma Real, Etapa II, Macroparcela MC-30, Maturín, Edo. Monagas.
                      </span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-60 group-hover:opacity-100 shrink-0" />
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <i className="fa-solid fa-phone text-karina-mustard text-xs" />
                    <span className="font-normal text-karina-charcoal text-xs">Recepción Directa:</span>
                    <a
                      id="modal-phone-link"
                      href="tel:+584249169610"
                      className="text-xs font-medium text-karina-charcoal hover:text-karina-mustard transition-colors"
                    >
                      +58 424-9169610
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-2.5">
                <button
                  type="button"
                  onClick={() => callWin('consultarTarifasSedeModal')}
                  className="w-full py-3 px-5 rounded-full bg-karina-charcoal hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2.5 shadow-md transition-all active:scale-95 group cursor-pointer"
                >
                  <span className="w-5 h-5 rounded-full bg-karina-mustard text-karina-charcoal flex items-center justify-center text-[10px] shrink-0">
                    <i className="fa-solid fa-wand-magic-sparkles" />
                  </span>
                  <span>
                    Consultar Tarifas con <strong>Arimiña</strong>
                  </span>
                  <i className="fa-solid fa-arrow-right text-[10px] text-white/60 group-hover:translate-x-1 transition-transform ml-1" />
                </button>

                <a
                  id="modal-explore-sede-link"
                  href="#suites"
                  onClick={() => callWin('closeSedeModal')}
                  className="w-full py-3 px-5 rounded-full bg-white hover:bg-karina-mustard-light text-karina-charcoal text-xs font-semibold flex items-center justify-center gap-2 border border-karina-charcoal/15 transition-all active:scale-95"
                >
                  <span id="modal-explore-sede-text">Ver Catálogo de Suites</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* LIGHTBOX MODAL PARA IMÁGENES               */}
      {/* ========================================== */}
      <div
        id="lightbox-modal"
        className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-300 flex flex-col items-center justify-center p-4"
      >
        <button
          type="button"
          onClick={() => callWin('closeLightbox')}
          className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl transition-colors"
          aria-label="Cerrar vista previa"
        >
          <i className="fa-solid fa-xmark" />
        </button>
        <img
          id="lightbox-img"
          src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Piscina-Maturin-3.webp"
          alt="Vista Ampliada"
          className="max-h-[80vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
        />
        <p id="lightbox-caption" className="text-white/80 text-xs sm:text-sm font-medium mt-4 text-center max-w-xl hidden" />
      </div>

      {/* ========================================== */}
      {/* LANZADOR FLOTANTE CENTRAL DE ARIMIÑA       */}
      {/* ========================================== */}
      <div
        className="fixed arimina-floating-bar bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-40 max-w-[92vw] sm:max-w-none pointer-events-auto"
        style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}
      >
        <div className="relative group">
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-400 via-[#F0A800] to-amber-600 opacity-40 group-hover:opacity-75 blur-md animate-pulse pointer-events-none transition-opacity duration-300" />

          <div
            onClick={() => callWin('openAriminaChat')}
            className="relative backdrop-blur-xl bg-white/95 border border-amber-500/40 shadow-2xl rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-3.5 cursor-pointer hover:bg-white hover:scale-[1.02] active:scale-95 transition-all select-none"
          >
            <div className="relative flex items-center justify-center shrink-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#F0A800] to-[#FFD573] flex items-center justify-center text-[#1E1E1E] shadow-xs">
                <i className="fa-solid fa-wand-magic-sparkles text-[11px] sm:text-xs text-[#1E1E1E] group-hover:rotate-12 transition-transform" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
            </div>

            <div className="text-left flex flex-col sm:flex-row sm:items-center sm:gap-1.5 min-w-0">
              <span className="text-xs sm:text-sm font-bold text-karina-charcoal tracking-tight group-hover:text-karina-mustard transition-colors truncate">
                ¿Dudas sobre suites o sedes?
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-karina-charcoal/80 hidden sm:inline">
                Pregúntale a Arimiña ✨
              </span>
            </div>

            <div className="h-4 sm:h-5 w-[1px] bg-black/15 shrink-0 mx-0.5" />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                callWin('toggleLanguage');
              }}
              className="text-[10px] sm:text-xs font-mono font-extrabold text-[#726B63] hover:text-[#1E1E1E] px-1.5 py-0.5 rounded-full hover:bg-black/5 transition-colors shrink-0"
              aria-label="Cambiar idioma"
            >
              <span>ES/EN</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
