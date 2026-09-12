import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: 3000,
    open: false,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'politica-privacidad.html'),
        svc_cv: resolve(__dirname, 'servicios/computer-vision-inteligencia-artificial.html'),
        svc_mobility: resolve(__dirname, 'servicios/movilidad-geoai.html'),
        svc_saas: resolve(__dirname, 'servicios/enterprise-saas-laravel-octane.html'),
        svc_win: resolve(__dirname, 'servicios/software-nativo-windows.html'),
        case_khodia: resolve(__dirname, 'casos/khodia.html'),
        case_haltsense: resolve(__dirname, 'casos/haltsense.html'),
        case_dfiesta: resolve(__dirname, 'casos/dfiestaklozet.html'),
        case_stickynotes: resolve(__dirname, 'casos/stickynotes.html'),
        case_oura: resolve(__dirname, 'casos/oura-js.html'),
      },
    },
  },
});
