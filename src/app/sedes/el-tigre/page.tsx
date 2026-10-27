import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hotel en El Tigre Anzoátegui | Confort Ejecutivo | Hotel Kariña',
  description: 'Alojamiento premium en El Tigre. Hotel Kariña te brinda descanso absoluto, conectividad garantizada, gastronomía local y convenios corporativos.',
  alternates: {
    canonical: 'https://www.hoteleskariña.com/sedes/el-tigre',
  },
  openGraph: {
    title: 'Hotel en El Tigre Anzoátegui | Hotel Kariña',
    description: 'Confort ejecutivo, descanso y convenios empresariales en El Tigre, Anzoátegui.',
    url: 'https://www.hoteleskariña.com/sedes/el-tigre',
    siteName: 'Hotel Kariña',
    locale: 'es_VE',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Hotel Kariña El Tigre',
  description: 'Instalaciones ejecutivas y descanso de primer nivel en El Tigre, Anzoátegui.',
  url: 'https://www.hoteleskariña.com/sedes/el-tigre',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'El Tigre',
    addressRegion: 'Anzoátegui',
    addressCountry: 'VE',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Planta Eléctrica 24/7', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Conexión Wi-Fi Rápida', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurante Integrado', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Estacionamiento Privado', value: true },
  ],
};

export default function SedeElTigrePage() {
  const whatsappUrl = 'https://wa.me/584249000000?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20en%20Hotel%20Kari%C3%B1a%20sede%20El%20Tigre.';

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
            <span className="text-amber-700 font-semibold">El Tigre</span>
          </nav>

          <header className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full inline-block mb-3">
              Anzoátegui Sur • Eje Comercial
            </span>
            <h1 className="text-3xl sm:text-5xl font-sans font-bold text-stone-900 leading-tight">
              Hotel en El Tigre: Epicentro del Descanso Ejecutivo en Anzoátegui
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-3xl leading-relaxed">
              Habitaciones diseñadas para la tranquilidad de viajeros de negocios y familias. Céntrico, seguro, con gastronomía de autor y respaldo de servicios continuos para una estancia productiva.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold px-6 py-3 rounded-full transition shadow-md"
              >
                Reservar en El Tigre
              </a>
              <Link
                href="/restaurante"
                className="border border-stone-300 hover:border-stone-400 bg-white text-stone-800 font-medium px-6 py-3 rounded-full transition"
              >
                Conocer Restaurante
              </Link>
            </div>
          </header>

          <section className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Hospedaje de referencia entre los hoteles en El Tigre</h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Para quienes buscan <strong>hoteles en El Tigre</strong> con altos estándares de mantenimiento y atención personalizada, Hotel Kariña ofrece la combinación ideal entre ubicación accesible, habitaciones climatizadas y atención corporativa continua.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
