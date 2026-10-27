'use client';

import React, { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    const win = window as any;
    if (typeof win.initKarinaSite === 'function') {
      win.__karinaSiteInitialized = false;
      win.initKarinaSite();
    }
  }, []);

  const callWin = (fnName: string, ...args: any[]) => {
    const win = window as any;
    if (typeof win[fnName] === 'function') {
      win[fnName](...args);
    }
  };

  return (
    <div className="bg-karina-cream text-karina-charcoal font-sans font-['Manrope'] font-manrope antialiased min-h-screen selection:bg-karina-mustard selection:text-karina-charcoal flex flex-col justify-between">
      {/* 1. NAVBAR OFICIAL CON ISLA FLOTANTE Y DROPDOWNS CREATIVOS */}
      <header id="main-navbar" className="fixed top-0 inset-x-0 mx-auto w-full z-50 navbar-default">
        <div className="nav-inner max-w-[1440px] mx-auto px-4 sm:px-12 h-20 flex items-center justify-between">
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

          <nav className="hidden lg:flex items-center gap-2 text-xs font-semibold text-karina-charcoal/90">
            {/* DROPDOWN 1: SEDES */}
            <div className="nav-dropdown-wrapper relative group py-3">
              <a
                href="/#sedes"
                className="nav-link-item px-3 py-2 flex items-center gap-1.5 transition-colors text-karina-charcoal group-hover:text-karina-mustard"
              >
                <span>Sedes</span>
                <i className="fa-solid fa-chevron-down text-[9px] opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-transform duration-300" />
              </a>

              <div className="dropdown-hover-bridge absolute top-full left-0 w-full h-3" />

              <div className="nav-dropdown-panel absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[440px] bg-[#FAF6F0]/95 backdrop-blur-xl rounded-pebble p-6 pt-6 shadow-2xl border border-[#E8DFC8] overflow-hidden opacity-0 pointer-events-none translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 text-left z-50">
                <div className="flex items-center pb-2.5 mb-2 border-b border-[#E8DFC8]/60">
                  <span className="text-[11px] font-mono tracking-wider text-[#726B63] font-bold uppercase">
                    Sedes Kariña
                  </span>
                </div>

                <div className="space-y-1">
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
              </div>
            </div>

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

          {/* BLOQUE DERECHO: Botón Inicio apuntando estrictamente a "/" */}
          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href="/"
              className="shimmer-btn bg-[#FFD573] hover:bg-[#F0A800] text-[#343434] font-bold text-xs px-5 sm:px-6 py-2.5 rounded-full flex items-center gap-1.5 transition-all shadow-sm"
            >
              <span>Inicio</span>
              <i className="fa-solid fa-house text-[10px]" />
            </a>
          </div>
        </div>
      </header>

      {/* 2. MAIN CONTENT: RESCATE 404 */}
      <main className="min-h-[85vh] flex items-center justify-center pt-28 pb-20 px-6 sm:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Columna Izquierda: Diseño Tipográfico Limpio de Marca sin foto artificial */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-karina-mustard-light/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative w-[300px] sm:w-[380px] lg:w-[420px] aspect-square rounded-[110px_32px_32px_32px] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#FAF6F0] via-[#FFF6EA] to-[#FFECCE] flex flex-col items-center justify-center p-8 text-center select-none">
              <div className="w-14 h-14 rounded-full bg-karina-mustard/20 flex items-center justify-center mb-4">
                <img
                  src="https://uploads.onecompiler.io/44s48z3dm/1787539299313/Icono-Kari%C3%B1a-new.png"
                  alt="Icono Kariña"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="text-7xl sm:text-9xl font-extralight text-karina-charcoal tracking-tighter font-mono leading-none">
                404
              </span>
              <div className="w-16 h-1 rounded-full bg-karina-mustard my-4" />
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-karina-charcoal/80 bg-white/90 px-4 py-1.5 rounded-full border border-karina-charcoal/10 shadow-sm">
                Página No Encontrada
              </span>
            </div>
          </div>

          {/* Columna Derecha: Contenido Editorial y Botones de Rescate */}
          <div className="lg:col-span-6 space-y-6 text-left max-w-xl">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-karina-terracotta/15 text-karina-terracotta text-[10px] font-mono font-bold tracking-widest uppercase">
                ERROR
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-light text-karina-charcoal tracking-tight leading-[1.12]">
                Parece que esta ruta
                <br />
                no está en nuestro
                <br />
                mapa
              </h1>

              <div className="pt-1">
                <svg
                  width="220"
                  height="12"
                  viewBox="0 0 220 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-karina-mustard-light"
                >
                  <path
                    d="M4 8C60 2.5 160 2.5 216 8"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-karina-charcoal/70 font-light leading-relaxed">
              El destino que buscas no existe. Tal vez la brisa borró el camino, o la página fue movida a otra suite.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="/"
                className="px-7 py-3.5 rounded-full bg-karina-mustard-light hover:bg-karina-mustard text-karina-charcoal text-xs font-bold shadow-md transition-all active:scale-95 flex items-center gap-2.5"
              >
                <span>Volver a la Página Principal</span>
                <i className="fa-solid fa-arrow-right text-xs" />
              </a>

              <button
                type="button"
                onClick={() => callWin('openAriminaChat')}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-karina-cream text-karina-charcoal text-xs font-semibold border border-black/15 shadow-sm transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <i className="fa-solid fa-wand-magic-sparkles text-karina-mustard text-xs" />
                <span>Consultar con Arimiña-IA</span>
              </button>
            </div>

            <div className="pt-6 border-t border-black/5 flex flex-wrap items-center gap-4 text-xs text-karina-charcoal/60 font-light">
              <span className="font-mono text-[10px] uppercase tracking-wider text-karina-charcoal/40">
                Rutas sugeridas:
              </span>
              <a href="/maturin.html" className="hover:text-karina-charcoal hover:underline">
                Maturín
              </a>
              <span>•</span>
              <a href="/punta-de-mata.html" className="hover:text-karina-charcoal hover:underline">
                Punta de Mata
              </a>
              <span>•</span>
              <a href="/el-tigre.html" className="hover:text-karina-charcoal hover:underline">
                El Tigre
              </a>
              <span>•</span>
              <a href="/suites.html" className="hover:text-karina-charcoal hover:underline">
                Suites
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
