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
      { source: '/sedes/index.html', destination: '/' },
      { source: '/maturin', destination: '/maturin.html' },
      { source: '/el-tigre', destination: '/el-tigre.html' },
      { source: '/guanipa', destination: '/el-tigre.html' },
      { source: '/punta-de-mata', destination: '/punta-de-mata.html' },
      { source: '/sedes/maturin', destination: '/maturin.html' },
      { source: '/sedes/el-tigre', destination: '/el-tigre.html' },
      { source: '/sedes/guanipa', destination: '/el-tigre.html' },
      { source: '/sedes/punta-de-mata', destination: '/punta-de-mata.html' },
      { source: '/sedes/maturin.html', destination: '/maturin.html' },
      { source: '/sedes/el-tigre.html', destination: '/el-tigre.html' },
      { source: '/sedes/punta-de-mata.html', destination: '/punta-de-mata.html' },
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
      { source: '/sedes/index.html', destination: '/', permanent: true },
      { source: '/sedes/maturin.html', destination: '/maturin.html', permanent: true },
      { source: '/sedes/punta-de-mata.html', destination: '/punta-de-mata.html', permanent: true },
      { source: '/sedes/el-tigre.html', destination: '/el-tigre.html', permanent: true },
      { source: '/sedes/suites.html', destination: '/suites.html', permanent: true },
      { source: '/sedes/vive-karina.html', destination: '/vive-karina.html', permanent: true },
      { source: '/sedes/restaurante.html', destination: '/restaurante.html', permanent: true },
      { source: '/sedes/gastronomia.html', destination: '/gastronomia.html', permanent: true },
      { source: '/sedes/business.html', destination: '/business.html', permanent: true },
      { source: '/sedes/fundacion.html', destination: '/fundacion.html', permanent: true },
      { source: '/sedes/faqs.html', destination: '/faqs.html', permanent: true },
      { source: '/sedes/contacto.html', destination: '/contacto.html', permanent: true },
      { source: '/sedes/terminos.html', destination: '/terminos.html', permanent: true },
      { source: '/sedes/privacidad.html', destination: '/privacidad.html', permanent: true },
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
