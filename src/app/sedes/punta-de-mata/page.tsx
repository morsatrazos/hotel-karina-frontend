import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hotel en Punta de Mata | Alojamiento Corporativo y Confort | Kariña',
  description: 'El mejor hotel en Punta de Mata para estadías ejecutivas y de proyectos. Habitaciones confortables, seguridad, servicio gastronómico y tarifas a convenio.',
  alternates: {
    canonical: 'https://www.hoteleskariña.com/sedes/punta-de-mata',
  },
  openGraph: {
    title: 'Hotel en Punta de Mata | Hotel Kariña',
    description: 'Alojamiento para operaciones, ingenieros y proyectos en Punta de Mata. Respaldo eléctrico y confort.',
    url: 'https://www.hoteleskariña.com/sedes/punta-de-mata',
    siteName: 'Hotel Kariña',
    locale: 'es_VE',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Hotel Kariña Punta de Mata',
  description: 'Alojamiento estratégico en Punta de Mata para proyectos industriales, operaciones y estancias corporativas.',
  url: 'https://www.hoteleskariña.com/sedes/punta-de-mata',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Punta de Mata',
    addressRegion: 'Monagas',
    addressCountry: 'VE',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Planta Eléctrica 24/7', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Conexión Wi-Fi Estable', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Comedor y Gastronomía Ejecutiva', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Estacionamiento Seguro', value: true },
  ],
};

export default function SedePuntaDeMataPage() {
  const whatsappUrl = 'https://wa.me/584249000000?text=Hola%2C%20quisiera%20solicitar%20informaci%C3%B3n%20para%20Hotel%20Kari%C3%B1a%20sede%20Punta%20de%20Mata.';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#faf8f5] text-stone-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-xs text-stone-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-stone-900">Inicio</Link>
            <span>/</span>
            <span className="hover:text-stone-900">Sedes</span>
            <span>/</span>
            <span className="text-amber-700 font-semibold">Punta de Mata</span>
          </nav>

          <header className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full inline-block mb-3">
              Oeste de Monagas • Soporte Operacional
            </span>
            <h1 className="text-3xl sm:text-5xl font-sans font-bold text-stone-900 leading-tight">
              Hotel en Punta de Mata: Hospitalidad Estratégica para Empresas y Proyectos
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-3xl leading-relaxed">
              La alternativa confiable para supervisores, cuadrillas técnicas y personal corporativo en Punta de Mata. Habitaciones equipadas, seguridad perimetral y servicios orientados a contratos de mediana y larga duración.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold px-6 py-3 rounded-full transition shadow-md"
              >
                Cotizar Hospedaje en Punta de Mata
              </a>
              <Link
                href="/planes-corporativos"
                className="border border-stone-300 hover:border-stone-400 bg-white text-stone-800 font-medium px-6 py-3 rounded-full transition"
              >
                Ver Planes de Larga Estadía
              </Link>
            </div>
          </header>

          <section className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Alojamiento corporativo en Punta de Mata sin complicaciones</h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Encontrar <strong>hoteles en Punta de Mata</strong> con servicios consistentes es fundamental para el éxito de proyectos en la región. Hotel Kariña garantiza suministro continuo de agua y electricidad, conexión de red confiable y planes de alimentación ajustados a los turnos de su equipo.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
