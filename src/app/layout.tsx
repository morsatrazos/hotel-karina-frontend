import React from 'react';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hotel Kariña | Cadena Hotelera en Maturín, Punta de Mata y El Tigre',
  description: 'Descubre Hotel Kariña en Monagas y Anzoátegui. Suites ejecutivas con respaldo eléctrico 24/7, fibra óptica, gastronomía y planes corporativos.',
  alternates: {
    canonical: 'https://www.hoteleskariña.com',
  },
  openGraph: {
    title: 'Hotel Kariña | Hospitalidad y Confort Ejecutivo en Oriente',
    description: 'Alojamiento corporativo y turístico en Maturín, Punta de Mata y El Tigre con respaldo eléctrico 24/7 y conectividad de alta velocidad.',
    url: 'https://www.hoteleskariña.com',
    siteName: 'Hotel Kariña',
    locale: 'es_VE',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es" className="font-sans font-['Manrope'] font-manrope scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="stylesheet" href="/assets/css/style.css?v=20261026-4" />
      </head>
      <body className="bg-karina-charcoal text-karina-charcoal font-sans font-['Manrope'] font-manrope antialiased selection:bg-karina-mustard selection:text-karina-charcoal">
        {children}
        <Script src="/assets/js/main.js?v=20261026-4" strategy="afterInteractive" />
      </body>
    </html>
  );
}
