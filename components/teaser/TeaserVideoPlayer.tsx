'use client';

import { useRef, useState, useEffect } from 'react';

interface TeaserVideoPlayerProps {
  src: string;
  badge: string;
  title: string;
  subtitle: string;
}

export function TeaserVideoPlayer({ src, badge, title, subtitle }: TeaserVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="w-full max-w-[330px] sm:max-w-[350px] md:max-w-[365px] relative group">
      <div 
        onClick={togglePlay}
        className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 shadow-[0_25px_60px_-12px_rgba(28,25,23,0.35),0_0_35px_rgba(200,131,43,0.2)] cursor-pointer select-none"
      >
        <video
          ref={videoRef}
          src={src}
          playsInline
          loop
          autoPlay
          muted={isMuted}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-transparent to-black/80" />

        {/* Badge superior */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
          <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-bold tracking-wider text-amber-300 uppercase">
            {badge}
          </div>
          <div className="text-[11px] text-stone-300 font-mono bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
            9:16 HD
          </div>
        </div>

        {/* Indicador de Play cuando está pausado */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl">
              <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Overlay inferior de información y botón de audio */}
        <div className="absolute bottom-5 left-4 right-4 z-20 flex items-end justify-between gap-3 pointer-events-none">
          <div className="space-y-1">
            <span className="text-[11px] tracking-widest text-amber-300 font-bold uppercase block drop-shadow">
              {title}
            </span>
            <p className="text-xs text-white/95 font-medium leading-tight drop-shadow-md">
              {subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
            className="pointer-events-auto p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/25 text-white backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-lg"
          >
            {isMuted ? (
              <svg className="w-5 h-5 text-stone-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="absolute -bottom-3 inset-x-6 h-6 bg-[#C8832B]/25 blur-lg -z-10 rounded-full" />
    </div>
  );
}
