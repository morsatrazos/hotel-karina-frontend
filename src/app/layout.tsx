import React from 'react';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nuestras raíces, nuestra presencia | Hoteles Kariña',
  description: 'Fase de transformación y reapertura oficial. ¡Oriente es territorio Kariña!',
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
    <html lang="es" className={`${manrope.variable} font-sans scroll-smooth`}>
      <body className="bg-[#FAF6F0] text-stone-900 antialiased selection:bg-[#C8832B] selection:text-white">
        {children}
      </body>
    </html>
  );
}
