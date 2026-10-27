import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hoteles en Maturín con Planta Eléctrica y Wifi | Hotel Kariña',
  description: '¿Buscas hoteles en Maturín? Hotel Kariña ofrece suites ejecutivas con respaldo eléctrico 24/7, wifi de alta velocidad, restaurante y convenios corporativos.',
  alternates: {
    canonical: 'https://www.hoteleskariña.com/sedes/maturin',
  },
  openGraph: {
    title: 'Hoteles en Maturín con Planta Eléctrica | Hotel Kariña',
    description: 'Suites ejecutivas en Maturín, Monagas. Continuidad operativa 24/7, fibra óptica y atención B2B.',
    url: 'https://www.hoteleskariña.com/sedes/maturin',
    siteName: 'Hotel Kariña',
    locale: 'es_VE',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Hotel Kariña Maturín',
  description: 'Alojamiento corporativo y turístico en Maturín con respaldo eléctrico 24/7 y conectividad de alta velocidad.',
  url: 'https://www.hoteleskariña.com/sedes/maturin',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Maturín',
    addressRegion: 'Monagas',
    addressCountry: 'VE',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Planta Eléctrica 24/7', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Conexión Wi-Fi de Alta Velocidad', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurante y Servicio a la Habitación', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Estacionamiento Privado Vigilado', value: true },
  ],
};

export default function SedeMaturinPage() {
  const whatsappUrl = 'https://wa.me/584249000000?text=Hola%2C%20quisiera%20cotizar%20hospedaje%20en%20Hotel%20Kari%C3%B1a%20sede%20Matur%C3%ADn.';

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
            <span className="text-amber-700 font-semibold">Maturín</span>
          </nav>

          {/* Hero Sede */}
          <header className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full inline-block mb-3">
              Monagas • Epicentro Ejecutivo
            </span>
            <h1 className="text-3xl sm:text-5xl font-sans font-bold text-stone-900 leading-tight">
              Hoteles en Maturín: Confort Ejecutivo y Continuidad Operativa en Hotel Kariña
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-3xl leading-relaxed">
              Diseñado para responder a la dinámica empresarial de Monagas. Disfruta de suites acondicionadas, respaldo eléctrico 100% garantizado, conectividad de alta velocidad y atención preferencial para delegaciones y visitantes de negocios.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold px-6 py-3 rounded-full transition shadow-md"
              >
                Reservar o Cotizar en Maturín
              </a>
              <Link
                href="/planes-corporativos"
                className="border border-stone-300 hover:border-stone-400 bg-white text-stone-800 font-medium px-6 py-3 rounded-full transition"
              >
                Convenios para Empresas
              </Link>
            </div>
          </header>

          {/* Diferenciales Críticos */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
              <h3 className="font-semibold text-lg text-stone-900">Respaldo Eléctrico 24/7</h3>
              <p className="text-sm text-stone-600 mt-2">
                Planta de transferencia automática que cubre habitaciones, suites y áreas comunes sin interrupciones.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
              <h3 className="font-semibold text-lg text-stone-900">Fibra Óptica Dedicada</h3>
              <p className="text-sm text-stone-600 mt-2">
                Conexión Wi-Fi de alta velocidad estable para trabajo remoto, videollamadas y sincronización empresarial.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
              <h3 className="font-semibold text-lg text-stone-900">Gastronomía y Servicio</h3>
              <p className="text-sm text-stone-600 mt-2">
                Desayuno ejecutivo, menú regional e internacional, y servicio directo a la suite.
              </p>
            </div>
          </section>

          {/* Bloque SEO Local y Preguntas Frecuentes */}
          <section className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm mt-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">¿Por qué elegir Hotel Kariña si buscas hospedaje en Maturín?</h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>
                Si buscas <strong>hoteles en Maturín</strong> con ubicación estratégica, Hotel Kariña combina calidez de servicio con la infraestructura necesaria para ejecutivos, consultores y turistas. Nuestras suites están acondicionadas acústica y térmicamente para garantizar un descanso reparador.
              </p>
              <p>
                Ofrecemos facturación fiscal directa para empresas, check-in flexible coordinado previamente y tarifas corporativas blindadas para contratistas y comisiones de servicio en Monagas.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
