# Altikore — Landing Page Corporativa de Alta Precisión

Landing page corporativa de alto impacto para **Altikore S.A.S.**, diseñada con estética *Dark Glassmorphism & Deep Tech*, construida con **Tailwind CSS v4** y **Vite**, y optimizada para producción en un **VPS KVM 2 en Hostinger** (8 GB RAM, 2 vCPU, 100 GB SSD) con **Nginx** nativo.

---

## 🌟 Proyectos Integrados en el Portafolio

1. **Khodia (`apuerta`)**: Ecosistema de movilidad inteligente, telemetría satelital y optimización de rutas con IA para el transporte escolar (*Flutter, Node.js, Prisma, Python FastAPI, Prometheus/Grafana*).
2. **HaltSense**: Monitor biométrico de fatiga y somnolencia industrial en tiempo real mediante visión artificial (*Python, OpenCV, MediaPipe FaceMesh, DeepFace, React 19, WebSockets*).
3. **DFiestaKlozet (`dfiesta-laravel`)**: ERP empresarial y motor de cotizaciones/alquileres de alta concurrencia (*Laravel 12, Laravel Octane, RoadRunner, Laravel Reverb WebSockets, Tailwind CSS*).
4. **StickyNotes para Windows 11**: Software de escritorio nativo de arranque ultra-rápido con diseño Fluent (Mica Alt), SQLite WAL y sincronización cloud (*C#, .NET 8, WinUI 3, DPAPI, Google Drive API*).
5. **Oura.js (`oura`)**: Librería open-source de componentes y notificaciones glassmorphism con cero dependencias y 10 kB gzipped (*TypeScript, Vite, Vitest, i18n 10 idiomas*).

---

## 💻 Desarrollo Local en tu Máquina

### 1. Requisitos
- Node.js 18+ o 20+ LTS instalado.
- npm o pnpm.

### 2. Instalación de dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo con Hot-Reload
```bash
npm run dev
```
Abre en tu navegador `http://localhost:3000` para ver la landing page interactiva con Tailwind v4.

### 4. Compilar para producción
```bash
npm run build
```
Los archivos optimizados y minificados se generarán en la carpeta `dist/`.

### 5. Probar el backend de formulario localmente (opcional)
```bash
npm run server
```

---

## 🚀 Despliegue en tu VPS KVM 2 de Hostinger (Sin Contenedores)

Tu VPS KVM 2 con 8 GB de RAM y 2 vCPU ejecutará esta web consumiendo apenas **~20 MB de memoria RAM**, dejando más del 95% del servidor libre para alojar tus APIs o proyectos futuros.

### Paso 1: Conectarte por SSH a tu VPS
```bash
ssh root@IP_DE_TU_VPS
```

### Paso 2: Subir o clonar tu proyecto
```bash
sudo mkdir -p /var/www/altikore
sudo chown -R $USER:$USER /var/www/altikore
cd /var/www/altikore

# Si usas Git:
# git clone <URL_DE_TU_REPOSITORIO> .
```

### Paso 3: Ejecutar el script automatizado
Hemos incluido un script en la carpeta `deploy/`:
```bash
chmod +x deploy/setup-vps.sh
./deploy/setup-vps.sh
```
El script se encarga de:
- Instalar Nginx, Node.js 20 LTS, Certbot y PM2.
- Compilar la web con `npm run build`.
- Iniciar el servicio de correo con PM2 (`pm2 start deploy/ecosystem.config.cjs`).
- Configurar Nginx con compresión Gzip, cabeceras de seguridad y proxy reverso para `/api/`.

### Paso 4: Habilitar Certificado SSL Gratuito (HTTPS)
Una vez que el dominio apunte a la IP de tu VPS:
```bash
sudo certbot --nginx -d altikore.com -d www.altikore.com
```

¡Listo! Tu web corporativa estará en línea en `https://altikore.com` con velocidad de carga de milisegundos.

---

## 📁 Estructura del Proyecto

```
Altikore/
├── index.html                   # HTML semántico con SEO, OpenGraph y Schema.org
├── package.json                 # Dependencias (Tailwind v4, Vite, Express, Nodemailer)
├── vite.config.js               # Configuración Vite con plugin @tailwindcss/vite
├── src/
│   ├── style.css                # @import "tailwindcss"; y tokens de marca @theme
│   ├── data/
│   │   └── projects.js          # Datos exhaustivos de los 5 proyectos reales
│   └── js/
│       ├── modal.js             # Lógica del modal de análisis técnico por proyecto
│       ├── stats.js             # Animación de contadores de métricas
│       └── main.js              # Controlador de filtros, menú responsive y formulario
├── server/
│   └── contact-server.js        # Endpoint /api/contact con Nodemailer para SMTP Hostinger
└── deploy/
    ├── nginx.conf               # Configuración de Nginx optimizada con Gzip y Cache
    ├── ecosystem.config.cjs     # Configuración de PM2 para persistencia
    └── setup-vps.sh             # Script de puesta en marcha en 1 clic
```
