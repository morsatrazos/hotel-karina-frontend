import React from 'react';

export interface CorporatePlan {
  id: string;
  title: string;
  category: string;
  badgeB2B: string;
  rateBadge: string;
  capacity: string;
  featured?: boolean;
  badgeHighlight?: string;
  image: string;
  description: string;
  benefits: string[];
  whatsappText: string;
}

export interface CorporateRatesSectionProps {
  whatsappNumber?: string;
  title?: string;
  subtitle?: string;
  customPlans?: CorporatePlan[];
  className?: string;
}

const DEFAULT_CORPORATE_PLANS: CorporatePlan[] = [
  {
    id: 'convenio-estandar',
    title: 'Convenio Corporativo Estándar',
    category: 'Estancia Ejecutiva',
    badgeB2B: 'Tarifa Preferencial B2B',
    rateBadge: 'A Convenio',
    capacity: 'Ejecutivos & Consultores',
    featured: false,
    image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Estandar-El-Tigre/Suite-Estandar-Principal-El-Tigre.webp',
    description: 'Ideal para ejecutivos en tránsito recurrente y visitas comerciales que demandan confort, conectividad ininterrumpida y flexibilidad.',
    benefits: [
      'Check-in/out flexible sujeto a disponibilidad.',
      'Tarifas blindadas anuales por volumen de pernocta.',
      'Facturación fiscal directa empresarial.',
      'Desayuno ejecutivo y conectividad de alta velocidad.',
      'Planta eléctrica continua 24/7 y acceso a business lounge.',
      'Atención ejecutiva prioritaria en recepción y reservas.'
    ],
    whatsappText: 'Hola, quisiera solicitar una cotización para convenio corporativo en Hotel Kariña.'
  },
  {
    id: 'plan-larga-estadia',
    title: 'Plan Larga Estadía',
    category: 'Residencia de Proyectos',
    badgeB2B: 'Tarifa Preferencial B2B',
    rateBadge: 'A Convenio',
    capacity: 'Media & Larga Estadía',
    featured: true,
    badgeHighlight: 'Más Solicitado',
    image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Suite-Premium-Maturin/Suite-Doble-Premium-main2.webp',
    description: 'Solución optimizada para líderes de proyectos, auditores, ingenieros y personal en asignaciones prolongadas con máxima comodidad.',
    benefits: [
      'Check-in/out flexible sujeto a disponibilidad.',
      'Tarifas blindadas anuales por volumen de pernocta.',
      'Facturación fiscal directa empresarial.',
      'Desayuno ejecutivo y conectividad de alta velocidad.',
      'Kitchenette equipada, nevera ejecutiva y microondas.',
      'Servicio de mantenimiento de lencería y room service adaptado a turnos.'
    ],
    whatsappText: 'Hola, quisiera solicitar una cotización para convenio corporativo en Hotel Kariña.'
  },
  {
    id: 'tarifa-eventos-conferencias',
    title: 'Tarifa Eventos & Conferencias',
    category: 'Grupos & Convenciones',
    badgeB2B: 'Tarifa Preferencial B2B',
    rateBadge: 'A Convenio',
    capacity: 'Grupos & Delegaciones',
    featured: false,
    image: 'https://sdwxibeicptfevccvjmt.supabase.co/storage/v1/object/public/Assets/Bondade-Maturin/Salon-Maturin.webp',
    description: 'Infraestructura integral para conferencias, juntas directivas, asambleas de accionistas y bloqueo exclusivo de habitaciones para delegaciones.',
    benefits: [
      'Check-in/out flexible sujeto a disponibilidad.',
      'Tarifas blindadas anuales por volumen de pernocta.',
      'Facturación fiscal directa empresarial.',
      'Desayuno ejecutivo y conectividad de alta velocidad.',
      'Salones climatizados con aislamiento acústico y soporte audiovisual.',
      'Servicio de banquetes, coffee break y bloque de habitaciones unificado.'
    ],
    whatsappText: 'Hola, quisiera solicitar una cotización para convenio corporativo en Hotel Kariña.'
  }
];

export function CorporateRatesSection({
  whatsappNumber = '584249169610',
  title = 'Tarifas Corporativas y Convenios Empresariales',
  subtitle = 'Planes B2B diseñados para responder a la dinámica operacional de su empresa en Monagas y el Oriente de Venezuela. Tarifas blindadas anuales por volumen de pernocta, facturación fiscal directa empresarial y atención ejecutiva preferencial.',
  customPlans = DEFAULT_CORPORATE_PLANS,
  className = '',
}: CorporateRatesSectionProps) {
  const generalSupportWaUrl = `https://wa.me/${whatsappNumber}?text=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20para%20convenio%20corporativo%20en%20Hotel%20Kari%C3%B1a.`;

  return (
    <section id="planes-corporativos" className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 ${className}`}>
      {/* Cabecera B2B */}
      <div className="text-center max-w-3xl mx-auto space-y-3.5">
        <div className="inline-flex items-center gap-2">
          <span className="w-8 h-[2px] bg-[#C8832B]" />
          <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#C8832B]">
            CONVENIOS EMPRESARIALES B2B
          </span>
          <span className="w-8 h-[2px] bg-[#C8832B]" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* Distintivos de Valor */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-2.5">
          <span className="px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E8DFD3] text-[11px] font-semibold text-stone-800 flex items-center gap-2 shadow-sm">
            <svg className="w-3.5 h-3.5 text-[#C8832B]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Tarifas Blindadas por Volumen</span>
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E8DFD3] text-[11px] font-semibold text-stone-800 flex items-center gap-2 shadow-sm">
            <svg className="w-3.5 h-3.5 text-[#C8832B]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Facturación Fiscal Directa</span>
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E8DFD3] text-[11px] font-semibold text-stone-800 flex items-center gap-2 shadow-sm">
            <svg className="w-3.5 h-3.5 text-[#C8832B]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Continuidad Operativa 24/7</span>
          </span>
        </div>
      </div>

      {/* Grid de 3 Tarjetas de Convenio B2B */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {customPlans.map((plan) => {
          const planWaUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(plan.whatsappText)}`;

          return (
            <div
              key={plan.id}
              className={`bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD3] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group ${
                plan.featured ? 'ring-2 ring-[#C8832B]/80 shadow-md' : ''
              }`}
            >
              {/* Badge Más Solicitado */}
              {plan.featured && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#C8832B] to-amber-500 text-white font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md z-10 flex items-center gap-1.5">
                  <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span>{plan.badgeHighlight || 'Más Solicitado'}</span>
                </div>
              )}

              <div className="space-y-5">
                {/* Imagen del Espacio / Suite */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-stone-100 shadow-inner">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-mono font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8832B]" />
                    <span>{plan.capacity}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-stone-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                    {plan.category}
                  </div>
                </div>

                {/* Badges Superiores B2B & A Convenio */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-mono font-bold text-[#C8832B] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8832B]" />
                    {plan.badgeB2B}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-stone-900 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                    {plan.rateBadge}
                  </span>
                </div>

                {/* Título y Descripción (Sin montos numéricos en USD) */}
                <div className="space-y-2 text-left border-b border-stone-100 pb-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-normal leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Lista de Beneficios Clave Incluidos */}
                <div className="space-y-2.5 text-left text-xs text-stone-700 pt-1">
                  <p className="font-mono uppercase tracking-wider text-[10px] text-stone-400 font-bold">
                    Beneficios Clave Incluidos:
                  </p>
                  <ul className="space-y-2">
                    {plan.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <svg
                          className="w-4 h-4 text-[#C8832B] mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Botón CTA Directo a WhatsApp */}
              <div className="pt-6 mt-6 border-t border-stone-100">
                <a
                  href={planWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-full bg-stone-900 hover:bg-black text-white text-xs font-bold flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all active:scale-95 group/btn"
                >
                  <svg className="w-4 h-4 text-emerald-400 fill-current group-hover/btn:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.792s.448-1.272.607-1.446c.159-.175.346-.219.462-.219s.232.002.333.007c.106.005.249-.04.39.299.144.35.491 1.196.534 1.284.043.088.072.19.014.305-.058.115-.087.19-.173.289l-.26.302c-.087.086-.18.18-.077.356.101.175.452.746.97 1.207.669.596 1.233.78 1.408.868.175.088.277.073.379-.044.102-.117.434-.506.55-.681.116-.175.232-.146.39-.088s1.011.477 1.185.564c.174.087.29.13.333.204.043.073.043.424-.101.829zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.307A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                  </svg>
                  <span>Cotizar Convenio</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bloque Inferior de Soporte Corporativo */}
      <div className="max-w-4xl mx-auto">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#2D2A26] via-[#221F1D] to-[#1A1816] text-white border border-[#C8832B]/35 shadow-xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono uppercase tracking-wider text-amber-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Soporte Corporativo & Alianzas B2B</span>
          </div>
          <p className="text-sm sm:text-base font-light italic text-white/95 leading-relaxed max-w-2xl mx-auto">
            “Diseñamos planes a la medida para empresas y grupos ejecutivos en Monagas. Contáctanos para evaluar tu convenio corporativo anual.”
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={generalSupportWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C8832B] hover:bg-amber-500 text-white text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.792s.448-1.272.607-1.446c.159-.175.346-.219.462-.219s.232.002.333.007c.106.005.249-.04.39.299.144.35.491 1.196.534 1.284.043.088.072.19.014.305-.058.115-.087.19-.173.289l-.26.302c-.087.086-.18.18-.077.356.101.175.452.746.97 1.207.669.596 1.233.78 1.408.868.175.088.277.073.379-.044.102-.117.434-.506.55-.681.116-.175.232-.146.39-.088s1.011.477 1.185.564c.174.087.29.13.333.204.043.073.043.424-.101.829zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.307A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              </svg>
              <span>Solicitar Cotización</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
