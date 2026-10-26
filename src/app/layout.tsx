import React from 'react';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hotel Kariña ★★★★ | Experiencia 4 Estrellas',
  description:
    'Una estadía que te abraza. Confort ejecutivo, hospitalidad 4 estrellas, piscinas resort, Master Pádel y alta gastronomía en Maturín, El Tigre y Punta de Mata. ¡Oriente es territorio Kariña!',
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
