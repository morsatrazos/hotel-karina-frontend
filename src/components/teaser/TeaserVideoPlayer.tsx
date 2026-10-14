'use client';

import React, { useRef, useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { CampaignChapters } from './CampaignChapters';

export interface ChapterEpisode {
  id: number;
  number: string;
  tabLabel: string;
  badge: string;
  isNew?: boolean;
  title: string;
  description: string;
  src: string;
  fallbackSrc?: string;
}

export const EPISODES_DATA: ChapterEpisode[] = [
  {
    id: 1,
    number: '01',
    tabLabel: 'Capítulo 01',
    badge: 'Capítulo 01',
    title: 'Nuestras Raíces',
    description: 'El comienzo del viaje: reconectando con la esencia, confort y calidez en Monagas.',
    src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/FINAL-VIDEO-1-KARINA-COMPRESS.mp4',
    fallbackSrc: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Karina-Breaking-Logo.mp4',
  },
  {
    id: 2,
    number: '02',
    tabLabel: 'Capítulo 02',
    badge: 'Capítulo 02',
    title: 'La Experiencia Continúa',
    description: 'Descubre los espacios pensados para el descanso ejecutivo y la excelencia en cada detalle.',
    src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/FINAL-VIDEO-2-KARINA-COMPRESS.mp4',
  },
  {
    id: 3,
    number: '03',
    tabLabel: 'Capítulo 03',
    badge: 'Capítulo 03 • La Revelación',
    isNew: true,
    title: 'La Revelación: Una Nueva Era',
    description: 'El desenlace de nuestra transformación. Conoce la nueva identidad y experiencia de Hotel Kariña.',
    src: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/LA-REVELACION-KARINA-NEW.mp4',
  },
];

interface TeaserVideoPlayerProps {
  initialEpisodeId?: number;
  episodes?: ChapterEpisode[];
  showChaptersList?: boolean;
}

export function TeaserVideoPlayer({
  initialEpisodeId = 3,
  episodes = EPISODES_DATA,
  showChaptersList = true,
}: TeaserVideoPlayerProps) {
  // Inicializa con Episodio 3 (Gran Lanzamiento) por defecto
  const defaultEpisode = episodes.find((e) => e.id === initialEpisodeId) || episodes[episodes.length - 1] || episodes[0];

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [activeEpisode, setActiveEpisode] = useState<ChapterEpisode>(defaultEpisode);
  const [videoSrc, setVideoSrc] = useState<string>(defaultEpisode.src);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [hasFallbackApplied, setHasFallbackApplied] = useState<boolean>(false);

  // Recarga fluida del video al cambiar de episodio o de fuente
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // En caso de que las políticas de autoplay del navegador requieran interacción
      });
    }
  }, [activeEpisode.id, videoSrc]);

  // Manejo de cambio de episodio desde las pestañas
  const handleSelectEpisode = (ep: ChapterEpisode) => {
    if (ep.id === activeEpisode.id) return;
    setActiveEpisode(ep);
    setVideoSrc(ep.src);
    setHasFallbackApplied(false);
  };

  const handleSelectEpisodeById = (id: number) => {
    const target = episodes.find((e) => e.id === id);
    if (target) {
      handleSelectEpisode(target);
    }
  };

  // Respaldo resiliente si la URL principal del video reporta error
  const handleVideoError = () => {
    if (activeEpisode.fallbackSrc && videoSrc !== activeEpisode.fallbackSrc && !hasFallbackApplied) {
      console.warn(`[TeaserVideoPlayer] Error cargando ${videoSrc}. Utilizando fuente alternativa.`);
      setHasFallbackApplied(true);
      setVideoSrc(activeEpisode.fallbackSrc);
    }
  };

  // Toggle de sonido
  const toggleMute = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. Selector de Capítulos / Tabs */}
      <div className="w-full max-w-[340px] sm:max-w-[365px] md:max-w-[385px] mb-3 sm:mb-4 pt-1">
        <div
          role="tablist"
          aria-label="Selector de Episodios"
          className="grid grid-cols-3 p-1 sm:p-1.5 rounded-2xl bg-[#1C1917] border border-stone-800 shadow-xl backdrop-blur-md gap-1 sm:gap-1.5 relative"
        >
          {episodes.map((ep) => {
            const isActive = activeEpisode.id === ep.id;
            return (
              <button
                key={ep.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => handleSelectEpisode(ep)}
                className={`relative flex items-center justify-center py-2 sm:py-2.5 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs md:text-sm font-semibold transition-all duration-300 select-none ${
                  isActive
                    ? 'bg-[#C8832B] text-white shadow-md shadow-[#C8832B]/30 font-bold scale-[1.02]'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/80 active:scale-95'
                }`}
              >
                <span className="whitespace-nowrap">{ep.tabLabel}</span>
                {ep.isNew && (
                  <span
                    className={`absolute -top-2 right-1 sm:-top-2.5 sm:right-1.5 text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded-full whitespace-nowrap transition-colors shadow-sm ${
                      isActive
                        ? 'bg-amber-300 text-stone-950 border border-amber-200'
                        : 'bg-amber-500 text-stone-950 shadow-amber-500/30 animate-pulse'
                    }`}
                  >
                    Estreno
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Reproductor Vertical 9:16 */}
      <div className="w-full max-w-[340px] sm:max-w-[365px] md:max-w-[385px] relative group">
        <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 shadow-[0_25px_60px_-12px_rgba(28,25,23,0.35),0_0_35px_rgba(200,131,43,0.2)] select-none">
          <video
            ref={videoRef}
            key={videoSrc}
            src={videoSrc}
            playsInline
            controls
            autoPlay
            loop
            muted={isMuted}
            onError={handleVideoError}
            onVolumeChange={(e) => setIsMuted(e.currentTarget.muted)}
            className="w-full h-full object-cover"
          />

          {/* Degradado cinematográfico superior para asegurar legibilidad */}
          <div className="absolute inset-x-0 top-0 h-28 pointer-events-none bg-gradient-to-b from-black/75 via-black/30 to-transparent" />

          {/* Badge superior y botón de sonido */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
            <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#C8832B]/40 text-[10px] font-bold tracking-wider text-amber-300 uppercase shadow-md flex items-center gap-1.5 max-w-[68%]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8832B] animate-pulse shrink-0" />
              <span className="truncate">{activeEpisode.badge}</span>
            </div>

            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                title={isMuted ? 'Activar sonido' : 'Silenciar'}
                className="p-2 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-md"
              >
                {isMuted ? (
                  <svg className="w-4 h-4 text-stone-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
              <div className="text-[11px] text-stone-300 font-mono bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm hidden sm:block">
                9:16 HD
              </div>
            </div>
          </div>
        </div>

        {/* Resplandor cálido ambiental de marca */}
        <div className="absolute -bottom-3 inset-x-6 h-6 bg-[#C8832B]/25 blur-lg -z-10 rounded-full" />
      </div>

      {/* 3. Título y Descripción del Capítulo Activo (debajo del video) */}
      <div className="w-full max-w-[340px] sm:max-w-[365px] md:max-w-[385px] mt-4 text-center bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-[#E8DFD3] shadow-sm transition-all duration-300">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-bold text-[#C8832B] uppercase tracking-wider mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8832B]" />
          {activeEpisode.badge}
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight font-sans">
          {activeEpisode.title}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
          {activeEpisode.description}
        </p>
      </div>

      {/* 4. Lista de Capítulos de la Campaña (interactiva y sincronizada) */}
      {showChaptersList && (
        <CampaignChapters
          activeEpisodeId={activeEpisode.id}
          onSelectEpisode={handleSelectEpisodeById}
        />
      )}
    </div>
  );
}
