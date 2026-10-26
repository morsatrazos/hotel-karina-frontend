/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async rewrites() {
    return [
      { source: '/index.html', destination: '/' },
      { source: '/maturin', destination: '/maturin.html' },
      { source: '/el-tigre', destination: '/el-tigre.html' },
      { source: '/punta-de-mata', destination: '/punta-de-mata.html' },
      { source: '/vive-karina', destination: '/vive-karina.html' },
      { source: '/suites', destination: '/suites.html' },
      { source: '/restaurante', destination: '/restaurante.html' },
      { source: '/gastronomia', destination: '/gastronomia.html' },
      { source: '/contacto', destination: '/contacto.html' },
      { source: '/business', destination: '/business.html' },
      { source: '/corporativo', destination: '/business.html' },
      { source: '/planes-corporativos', destination: '/business.html' },
      { source: '/fundacion', destination: '/fundacion.html' },
      { source: '/faqs', destination: '/faqs.html' },
      { source: '/terminos', destination: '/terminos.html' },
      { source: '/privacidad', destination: '/privacidad.html' },
    ];
  },
  async redirects() {
    return [
      { source: '/auth', destination: '/', permanent: false },
      { source: '/auth.html', destination: '/', permanent: false },
      { source: '/dashboard', destination: '/', permanent: false },
      { source: '/dashboard.html', destination: '/', permanent: false },
      { source: '/checkin', destination: '/', permanent: false },
      { source: '/checkin.html', destination: '/', permanent: false },
      { source: '/pre-checkin', destination: '/', permanent: false },
      { source: '/pre-checkin.html', destination: '/', permanent: false },
    ];
  },
};

module.exports = nextConfig;
