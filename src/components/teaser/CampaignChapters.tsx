import React from 'react';

export interface CampaignChaptersProps {
  activeEpisodeId?: number;
  onSelectEpisode?: (id: number) => void;
}

export function CampaignChapters({ activeEpisodeId = 2, onSelectEpisode }: CampaignChaptersProps) {
  const chapters = [
    {
      id: 1,
      number: '01',
      title: 'Nuestras Raíces',
      subtitle: 'El comienzo del viaje: reconectando con la esencia',
      status: 'Disponible',
      isAvailable: true,
    },
    {
      id: 2,
      number: '02',
      title: 'La Experiencia Continúa',
      subtitle: 'Descanso ejecutivo y excelencia en cada detalle',
      status: 'Nuevo',
      isAvailable: true,
      isNew: true,
    },
    {
      id: 3,
      number: '03',
      title: 'La Revelación',
      subtitle: 'El nuevo rostro de Hoteles Kariña en Oriente',
      status: 'Pronto',
      isAvailable: false,
    },
  ];

  return (
    <div className="w-full max-w-[330px] sm:max-w-[350px] md:max-w-[365px] mt-6 space-y-2.5">
      <div className="text-[11px] uppercase tracking-wider text-stone-500 font-bold text-center mb-2">
        Capítulos de la Campaña
      </div>

      {chapters.map((ch) => {
        const isActive = activeEpisodeId === ch.id;
        const isClickable = ch.isAvailable && Boolean(onSelectEpisode);

        return (
          <div
            key={ch.id}
            role={isClickable ? 'button' : undefined}
            tabIndex={isClickable ? 0 : undefined}
            onClick={() => {
              if (isClickable && onSelectEpisode) {
                onSelectEpisode(ch.id);
              }
            }}
            onKeyDown={(e) => {
              if (isClickable && onSelectEpisode && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                onSelectEpisode(ch.id);
              }
            }}
            className={`w-full flex items-center justify-between p-3.5 rounded-2xl transition-all duration-300 text-xs ${
              isActive
                ? 'bg-white border-2 border-[#C8832B] shadow-md scale-[1.01]'
                : ch.isAvailable
                ? 'bg-white/80 hover:bg-white border border-[#E8DFD3] hover:border-amber-300 shadow-sm cursor-pointer'
                : 'bg-white/40 border border-[#E8DFD3]/60 opacity-60 cursor-not-allowed'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs transition-colors ${
                  isActive
                    ? 'bg-[#C8832B] text-white shadow-sm'
                    : ch.isAvailable
                    ? 'bg-amber-100 text-[#C8832B]'
                    : 'bg-stone-100 text-stone-400'
                }`}
              >
                {ch.number}
              </div>
              <div className="text-left">
                <div className={`font-bold transition-colors ${isActive ? 'text-[#C8832B]' : 'text-stone-900'}`}>
                  {ch.title}
                </div>
                <div className="text-[11px] text-stone-500 truncate max-w-[160px] sm:max-w-[185px]">
                  {ch.subtitle}
                </div>
              </div>
            </div>

            <div>
              {isActive ? (
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#C8832B] text-white shadow-sm">
                  Reproduciendo
                </span>
              ) : ch.isNew ? (
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-[#C8832B] border border-amber-200">
                  Nuevo
                </span>
              ) : ch.isAvailable ? (
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                  Ver
                </span>
              ) : (
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full text-stone-400">
                  Pronto
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
