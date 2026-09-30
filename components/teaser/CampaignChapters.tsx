export function CampaignChapters() {
  return (
    <div className="w-full max-w-sm mt-7 space-y-2.5">
      <div className="text-[11px] uppercase tracking-wider text-stone-500 font-bold text-center mb-2">
        Capítulos de la Campaña
      </div>

      <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-amber-300/80 shadow-sm text-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-100 text-[#C8832B] flex items-center justify-center font-extrabold text-xs">
            01
          </div>
          <div>
            <div className="font-bold text-stone-900">El Primer Capítulo</div>
            <div className="text-[11px] text-stone-500">La Demolición</div>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-[#C8832B] border border-amber-200">
          En emisión
        </span>
      </div>

      <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/60 border border-[#E8DFD3] text-xs opacity-75">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-stone-100 text-stone-400 flex items-center justify-center font-bold text-xs">
            02
          </div>
          <div>
            <div className="font-semibold text-stone-700">Las Raíces</div>
            <div className="text-[11px] text-stone-400">Nuestra gente y territorio</div>
          </div>
        </div>
        <span className="text-[10px] font-semibold text-stone-400">Pronto</span>
      </div>

      <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/60 border border-[#E8DFD3] text-xs opacity-75">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-stone-100 text-stone-400 flex items-center justify-center font-bold text-xs">
            03
          </div>
          <div>
            <div className="font-semibold text-stone-700">La Revelación</div>
            <div className="text-[11px] text-stone-400">El nuevo rostro de Hoteles Kariña</div>
          </div>
        </div>
        <span className="text-[10px] font-semibold text-stone-400">Pronto</span>
      </div>
    </div>
  );
}
