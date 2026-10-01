import React from 'react';
import type { Metadata } from 'next';
import { TeaserVideoPlayer } from '@/components/teaser/TeaserVideoPlayer';
import { CampaignChapters } from '@/components/teaser/CampaignChapters';
import { InstagramCta } from '@/components/teaser/InstagramCta';

export const metadata: Metadata = {
  title: 'Nuestras raíces, nuestra presencia | Hoteles Kariña',
  description: 'Fase de transformación y reapertura oficial. ¡Oriente es territorio Kariña!',
};

export default function TeaserHomePage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] text-stone-900 flex flex-col justify-between selection:bg-[#C8832B] selection:text-white relative overflow-x-hidden font-sans">
      {/* Fondo ambiental sutil */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,rgba(232,163,74,0.12)_0%,rgba(250,246,240,0)_65%)]" 
      />

      {/* Header institucional sin logo */}
      <header className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-7 pb-3 flex items-center justify-between">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-[#E8DFD3] shadow-sm backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-stone-700">
          <span className="w-2 h-2 rounded-full bg-[#C8832B] animate-pulse" />
          Próximamente
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs tracking-wider text-stone-500 uppercase font-semibold">
          <span>Maturín</span>
          <span className="text-stone-300">&bull;</span>
          <span>El Tigre</span>
          <span className="text-stone-300">&bull;</span>
          <span>Punta de Mata</span>
        </div>
      </header>

      {/* Contenido Central */}
      <section className="relative z-10 w-full max-w-4xl mx-auto px-4 py-4 md:py-6 flex flex-col items-center">
        {/* Encabezado de Campaña */}
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-7 space-y-2">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C8832B] uppercase inline-block">
            Fase de Transformación
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-tight font-sans">
            Nuestras raíces,<br className="hidden sm:inline" /> nuestra presencia.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#C8832B] font-bold tracking-wide pt-1">
            ¡Oriente es territorio Kariña!
          </p>
        </div>

        {/* Reproductor Vertical 9:16 */}
        <TeaserVideoPlayer 
          badge="Capítulo I" 
          src="https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Karina-Breaking-Logo.mp4" 
        />

        {/* Lista de Capítulos */}
        <CampaignChapters />

        {/* CTA a Instagram */}
        <InstagramCta instagramUrl="https://instagram.com/hoteleskarina" />
      </section>

      {/* Footer corporativo provisional */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto px-6 py-6 border-t border-[#E8DFD3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
        <div>
          <span className="font-semibold text-stone-700">Oriente de Venezuela</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span>Atención a empresas y eventos:</span>
          <a
            href="https://wa.me/584249169610?text=Hola,%20deseo%20consultar%20disponibilidad%20corporativa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#C8832B] hover:text-stone-900 transition-colors underline underline-offset-4"
          >
            WhatsApp &rarr;
          </a>
        </div>
      </footer>
    </main>
  );
}
