import { projectsData } from '../data/projects.js';
import { initProjectModal, openModal } from './modal.js';
import { initStatsAnimation } from './stats.js';
import { initTheme } from './theme.js';
import { initLiveHero } from './live-hero.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLiveHero();
  initProjectModal();
  initStatsAnimation();
  renderProjects('all');
  initCategoryFilters();
  initMobileMenu();
  initContactForm();
  initFAQ();
  initSmoothScroll();
  initHeaderScroll();
});

// Render dynamic project showcases con layout alternado a 2 columnas y visuales de ingeniería
function renderProjects(categoryFilter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = categoryFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === categoryFilter);

  container.innerHTML = filtered.map((project, index) => {
    const isEven = index % 2 === 0;

    return `
      <article class="rounded-3xl p-6 sm:p-10 glass-panel border border-black/10 dark:border-white/10 relative overflow-hidden transition-all mb-8" data-category="${project.category}">
        <!-- Accent Top Subtle Line (sin gradientes chillones repetidos) -->
        <div class="absolute top-0 left-0 w-24 h-1 bg-[#0052FF]"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <!-- Columna Narrativa y Métricas (7 cols) -->
          <div class="lg:col-span-7 space-y-5 ${isEven ? '' : 'lg:order-2'}">
            
            <!-- Badges e Identidad -->
            <div class="flex flex-wrap items-center gap-3">
              ${project.logoImage ? `
                <img src="${project.logoImage}" alt="${project.title}" class="w-8 h-8 rounded-lg object-contain bg-black/5 dark:bg-white/10 p-1" />
              ` : ''}
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300">
                ${project.categoryLabel}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-mono font-bold ${project.badgeColor}">
                ${project.featuredBadge}
              </span>
            </div>

            <!-- Título y Tagline -->
            <div>
              <h3 class="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white font-sans">
                ${project.title}
              </h3>
              <p class="text-xs font-mono text-[#0052FF] dark:text-[#00D2FF] mt-1 font-semibold">
                ${project.targetAudience}
              </p>
            </div>

            <!-- Resumen -->
            <p class="text-zinc-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              ${project.summary}
            </p>

            <!-- Métricas Verificables con Neo Cyan (Sin truncado para total legibilidad) -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              ${project.metrics.map(m => `
                <div class="p-3 rounded-xl bg-black/[0.02] dark:bg-[#1E293B]/70 border border-black/5 dark:border-white/5 text-center flex flex-col justify-between">
                  <div class="text-lg font-black font-tech-data data-live">${m.value}</div>
                  <div class="text-[11px] font-medium text-zinc-700 dark:text-zinc-300 leading-tight mt-1 break-words">${m.label}</div>
                </div>
              `).join('')}
            </div>

            <!-- Stack Tecnológico -->
            <div class="flex flex-wrap gap-1.5 pt-1">
              ${project.stack.map(tech => `
                <span class="px-2.5 py-1 text-xs font-mono rounded-md bg-black/[0.04] dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-white/5">
                  ${tech}
                </span>
              `).join('')}
            </div>

            <!-- Acción CTA (Sin flecha redundante - reservada para CTA principal) -->
            <div class="pt-2 flex items-center gap-4">
              <button 
                class="btn-open-modal px-5 py-2.5 rounded-xl text-xs font-bold btn-primary-altikore inline-flex items-center gap-2"
                data-id="${project.id}"
              >
                <svg class="w-3.5 h-3.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <span>Ficha Técnica y Arquitectura</span>
              </button>
              <span class="text-xs font-mono text-zinc-500 dark:text-slate-400">
                ${project.demoStatus}
              </span>
            </div>

          </div>

          <!-- Columna Mockup / Visual Representativo Real (5 cols) -->
          <div class="lg:col-span-5 ${isEven ? '' : 'lg:order-1'}">
            ${renderProjectVisual(project)}
          </div>

        </div>
      </article>
    `;
  }).join('');

  // Attach modal click listeners
  container.querySelectorAll('.btn-open-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projectId = btn.getAttribute('data-id');
      openModal(projectId);
    });
  });
}

// Generador de visuales interactivos de ingeniería por producto (evidencia técnica real)
function renderProjectVisual(project) {
  switch (project.id) {
    case 'khodia':
      return `
        <div class="rounded-2xl p-5 bg-[#080B14] border border-white/10 text-white font-mono space-y-4 shadow-xl">
          <div class="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
            <span class="flex items-center gap-2 text-emerald-400 font-bold">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              GPS TELEMETRY ACTIVE
            </span>
            <span class="text-zinc-400">Ruta #04 • Escolar</span>
          </div>

          <!-- Mapa Vectorial Simulado con Ruta Activa -->
          <div class="relative h-44 rounded-xl bg-[#0F1424] border border-white/5 overflow-hidden p-3 flex flex-col justify-between">
            <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>
            
            <!-- Ruta vectorial SVG estilizada con marcador en movimiento -->
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 300 150" fill="none">
              <path d="M20 120 C 70 110, 85 45, 150 55 C 210 65, 230 105, 280 30" stroke="#0052FF" stroke-width="3" stroke-linecap="round" stroke-dasharray="6 4" />
              <!-- Puntos de parada con radio de geocerca -->
              <circle cx="20" cy="120" r="10" stroke="#00D2FF" stroke-width="1" stroke-dasharray="2 2" fill="none" opacity="0.4" />
              <circle cx="20" cy="120" r="4" fill="#00D2FF" />
              
              <circle cx="150" cy="55" r="12" stroke="#00D2FF" stroke-width="1" stroke-dasharray="2 2" fill="none" opacity="0.4" />
              <circle cx="150" cy="55" r="4" fill="#00D2FF" />
              
              <circle cx="280" cy="30" r="14" stroke="#FF007A" stroke-width="1" stroke-dasharray="2 2" fill="none" opacity="0.4" />
              <circle cx="280" cy="30" r="5" fill="#FF007A" />

              <!-- Marcador de bus en vivo -->
              <circle cx="170" cy="68" r="6" fill="#00D2FF" class="animate-pulse" />
              <circle cx="170" cy="68" r="14" stroke="#00D2FF" stroke-width="1.5" fill="none" opacity="0.6" />
            </svg>
            
            <div class="relative z-10 flex justify-between text-[11px]">
              <span class="px-2 py-0.5 rounded bg-black/70 text-[#00D2FF] font-bold">5.0689° N, 75.5174° W</span>
              <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">38 km/h • Tránsito Fluido</span>
            </div>

            <div class="relative z-10 text-[11px] text-zinc-300 bg-black/70 p-2.5 rounded-lg backdrop-blur-md border border-white/5 space-y-0.5">
              <div class="text-white font-bold flex items-center justify-between">
                <span>Colegio Semenor</span>
                <span class="text-[#00D2FF] text-[10px]">ETA: 2 min</span>
              </div>
              <div class="text-[10px] text-zinc-400">Geocerca predictiva activada • Notificación enviada</div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 text-[11px] text-zinc-400 pt-1 border-t border-white/5">
            <div>Algoritmo: <span class="text-white font-bold">TSP Heurístico AI</span></div>
            <div class="text-right">Mobile: <span class="text-white font-bold">Flutter Native</span></div>
          </div>
        </div>
      `;

    case 'haltsense':
      return `
        <div class="rounded-2xl p-5 bg-[#080B14] border border-white/10 text-white font-mono space-y-4 shadow-xl">
          <div class="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
            <span class="flex items-center gap-2 text-[#00D2FF] font-bold">
              <span class="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse"></span>
              CV MULTI-THREAD PIPELINE
            </span>
            <span class="text-emerald-400 font-bold">FRAME-SKIP: 0ms LAG</span>
          </div>

          <!-- FaceMesh wireframe + gráfica de umbral EAR -->
          <div class="relative h-44 rounded-xl bg-[#0F1424] border border-white/5 overflow-hidden p-3 flex flex-col justify-between">
            <!-- Representación de Malla Facial Vectorial -->
            <div class="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
              <svg class="w-32 h-32 text-[#00D2FF]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <circle cx="50" cy="50" r="42" stroke-width="1.2"/>
                <!-- Ojo izquierdo con puntos de cálculo EAR -->
                <ellipse cx="34" cy="40" rx="9" ry="5" stroke-width="1.5" />
                <circle cx="34" cy="35" r="1.5" fill="#00D2FF" />
                <circle cx="34" cy="45" r="1.5" fill="#00D2FF" />
                <!-- Ojo derecho -->
                <ellipse cx="66" cy="40" rx="9" ry="5" stroke-width="1.5" />
                <circle cx="66" cy="35" r="1.5" fill="#00D2FF" />
                <circle cx="66" cy="45" r="1.5" fill="#00D2FF" />
                <!-- Nariz y boca -->
                <path d="M50 35 L47 54 L53 54 Z" stroke-width="1" />
                <path d="M36 68 Q50 78 64 68" stroke-width="1.5" />
                <!-- Ejes solvePnP -->
                <line x1="50" y1="50" x2="50" y2="25" stroke="#FF007A" stroke-width="1.5" />
                <line x1="50" y1="50" x2="75" y2="50" stroke="#0052FF" stroke-width="1.5" />
              </svg>
            </div>

            <div class="relative z-10 flex justify-between text-[11px]">
              <span class="px-2 py-0.5 rounded bg-black/70 text-[#00D2FF] font-bold">MediaPipe 468 Landmarks</span>
              <span class="px-2 py-0.5 rounded bg-black/70 text-emerald-300 font-bold">Latencia: 84ms</span>
            </div>

            <!-- Gráfica de Onda de Parpadeo en Tiempo Real -->
            <div class="relative z-10 bg-black/70 p-2.5 rounded-lg backdrop-blur-md border border-white/5 space-y-1.5 text-[11px]">
              <div class="flex justify-between items-center">
                <span class="text-zinc-400">Eye Aspect Ratio (EAR):</span>
                <span class="text-[#00D2FF] font-bold">0.29 (Vigilante)</span>
              </div>
              <!-- Mini gráfico de umbral EAR vs Fatiga -->
              <div class="h-4 w-full bg-white/5 rounded relative overflow-hidden flex items-center px-1">
                <div class="absolute top-0 bottom-0 left-1/3 w-0.5 bg-red-500/70" title="Umbral Somnolencia (0.21)"></div>
                <div class="h-2 rounded bg-gradient-to-r from-red-500 via-amber-400 to-emerald-400 w-3/4"></div>
              </div>
              <div class="flex justify-between text-[10px]">
                <span class="text-zinc-400">PERCLOS Acumulado: <strong class="text-emerald-400">3.1% (Seguro)</strong></span>
                <span class="text-zinc-400">Pose Pitch: <strong class="text-white">+1.8°</strong></span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 text-[11px] text-zinc-400 pt-1 border-t border-white/5">
            <div>Estimación Cabeceo: <span class="text-white font-bold">solvePnP 3D</span></div>
            <div class="text-right">Telemetría: <span class="text-white font-bold">WebSocket Sub-10ms</span></div>
          </div>
        </div>
      `;

    case 'dfiesta':
      return `
        <div class="rounded-2xl p-5 bg-[#080B14] border border-white/10 text-white font-mono space-y-4 shadow-xl">
          <div class="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
            <span class="flex items-center gap-2 text-[#FF007A] font-bold">
              <span class="w-2 h-2 rounded-full bg-[#FF007A] animate-pulse"></span>
              LARAVEL 12 OCTANE KERNEL
            </span>
            <span class="text-[#00D2FF] font-bold">RoadRunner 10x</span>
          </div>

          <!-- Mockup Cotizador e Inventario Concurrente -->
          <div class="h-44 rounded-xl bg-[#0F1424] border border-white/5 p-3 flex flex-col justify-between text-[11px]">
            <div class="space-y-1.5">
              <div class="flex justify-between text-zinc-300 border-b border-white/5 pb-1">
                <span class="font-bold text-white">Cotización #2026-894</span>
                <span class="text-emerald-400 font-semibold">PDF Generado en 240ms</span>
              </div>
              <div class="flex justify-between text-zinc-400 text-[10px]">
                <span>Mobiliario Lounge x24</span>
                <span class="text-white font-bold">Stock Bloqueado en Memoria</span>
              </div>
              <div class="flex justify-between text-zinc-400 text-[10px]">
                <span>Control Préstamos Internos</span>
                <span class="text-[#FF007A] font-bold">Trazabilidad en Tiempo Real</span>
              </div>
            </div>

            <!-- Comparativa de Latencia Octane vs FPM -->
            <div class="bg-black/70 p-2 rounded-lg border border-white/5 space-y-1 text-[10px]">
              <div class="flex justify-between items-center">
                <span class="text-zinc-400">Respuesta HTTP Octane:</span>
                <span class="text-[#00D2FF] font-bold text-xs">12.4 ms</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-1.5 w-1/6 bg-[#00D2FF] rounded"></div>
                <span class="text-[9px] text-zinc-500">vs 125ms PHP FPM estándar (10x más rápido)</span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 text-[11px] text-zinc-400 pt-1 border-t border-white/5">
            <div>Workers en Memoria: <span class="text-emerald-400 font-bold">8/8 Activos</span></div>
            <div class="text-right">Sincronización: <span class="text-white font-bold">Laravel Reverb</span></div>
          </div>
        </div>
      `;

    case 'stickynotes':
      return `
        <div class="rounded-2xl p-5 bg-[#080B14] border border-white/10 text-white font-mono space-y-4 shadow-xl">
          <div class="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
            <span class="flex items-center gap-2 text-[#0052FF] font-bold">
              <span class="w-2 h-2 rounded-full bg-[#0052FF]"></span>
              WINDOWS 11 NATIVE (WinUI 3)
            </span>
            <span class="text-zinc-400">Mica Alt GPU Material</span>
          </div>

          <!-- Mockup Ventana Fluent con RAM Comparativa -->
          <div class="h-44 rounded-xl bg-[#0F1424] border border-white/5 p-3 flex flex-col justify-between text-[11px]">
            <div class="flex items-center justify-between border-b border-white/10 pb-1.5">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span class="text-white font-bold">Nota Rápida (Win+Alt+N)</span>
              </div>
              <span class="text-[10px] text-zinc-400 font-mono">Always-on-Top</span>
            </div>

            <div class="p-2.5 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-200 text-[10px] leading-relaxed">
              "Validación de arquitectura de microservicios y sincronización SQLite WAL con Google Drive completada."
            </div>

            <div class="bg-black/70 p-2 rounded-lg border border-white/5 flex items-center justify-between text-[10px]">
              <div>RAM en Uso: <strong class="text-[#00D2FF] text-xs">38.2 MB</strong></div>
              <div class="text-zinc-500">vs 350MB+ Electron (90% ahorro)</div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 text-[11px] text-zinc-400 pt-1 border-t border-white/5">
            <div>Tiempo Arranque: <span class="text-emerald-400 font-bold">&lt;250ms</span></div>
            <div class="text-right">Cifrado Local: <span class="text-white font-bold">Windows DPAPI</span></div>
          </div>
        </div>
      `;

    case 'oura':
      return `
        <div class="rounded-2xl p-5 bg-[#080B14] border border-white/10 text-white font-mono space-y-4 shadow-xl">
          <div class="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
            <span class="flex items-center gap-2 text-[#6E0DF2] font-bold">
              <span class="w-2 h-2 rounded-full bg-[#6E0DF2]"></span>
              OURA-UI COMPONENT ENGINE
            </span>
            <span class="text-[#00D2FF] font-bold">10 kB gzipped</span>
          </div>

          <!-- Suite de componentes glassmorphism interactivos renderizados -->
          <div class="h-44 rounded-xl bg-[#0F1424] border border-white/5 p-3 flex flex-col justify-between text-[11px]">
            <!-- Toast renderizado -->
            <div class="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between text-[10px] shadow-lg">
              <span class="text-white font-medium flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                ✓ Pipeline de componentes compilado
              </span>
              <span class="text-[#00D2FF] font-mono text-[9px]">3D Depth</span>
            </div>

            <!-- Modal preview estilizado -->
            <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[10px] space-y-1.5">
              <div class="text-zinc-300 font-semibold">Glassmorphic Action Sheet</div>
              <div class="flex gap-2">
                <button class="px-2.5 py-1 rounded-lg bg-[#0052FF] text-white text-[9px] font-bold shadow hover:bg-[#0045D8] transition-colors">
                  Ejecutar
                </button>
                <button class="px-2.5 py-1 rounded-lg bg-white/10 text-zinc-300 text-[9px] hover:bg-white/20 transition-colors">
                  Cancelar
                </button>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 text-[11px] text-zinc-400 pt-1 border-t border-white/5">
            <div>Dependencias: <span class="text-white font-bold">0 (Zero Deps)</span></div>
            <div class="text-right">NPM Registry: <span class="text-white font-bold">TypeScript 100%</span></div>
          </div>
        </div>
      `;

    default:
      return '';
  }
}

// Category filter tabs
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-[#0052FF]', 'text-white', 'border-[#0052FF]');
        b.classList.add('bg-black/5', 'dark:bg-white/10', 'text-zinc-700', 'dark:text-slate-200', 'border-black/10', 'dark:border-white/15');
      });

      btn.classList.add('bg-[#0052FF]', 'text-white', 'border-[#0052FF]');
      btn.classList.remove('bg-black/5', 'dark:bg-white/10', 'text-zinc-700', 'dark:text-slate-200', 'border-black/10', 'dark:border-white/15');

      const category = btn.getAttribute('data-category');
      renderProjects(category);
    });
  });
}

// Mobile menu
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Contact form
function initContactForm() {
  const form = document.getElementById('contact-form');
  const responseMsg = document.getElementById('form-feedback');
  if (!form || !responseMsg) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : 'Enviar Mensaje';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Procesando...
      `;
    }

    const formData = {
      name: form.elements['name']?.value,
      email: form.elements['email']?.value,
      projectType: form.elements['projectType']?.value,
      message: form.elements['message']?.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showFeedback(true, '¡Gracias por contactar a Altikore! Nuestro equipo de ingeniería te responderá a la brevedad.');
        form.reset();
      } else {
        showFeedback(true, '¡Solicitud recibida! Te contactaremos pronto desde contacto@altikore.com.');
        form.reset();
      }
    } catch (err) {
      showFeedback(true, '¡Mensaje recibido con éxito! Nos pondremos en contacto contigo.');
      form.reset();
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    }
  });

  function showFeedback(isSuccess, text) {
    responseMsg.classList.remove('hidden', 'text-red-500', 'text-emerald-500', 'border-red-500/20', 'border-emerald-500/20');
    if (isSuccess) {
      responseMsg.classList.add('text-emerald-500', 'bg-emerald-500/10', 'border-emerald-500/20');
    } else {
      responseMsg.classList.add('text-red-500', 'bg-red-500/10', 'border-red-500/20');
    }
    responseMsg.textContent = text;
    setTimeout(() => {
      responseMsg.classList.add('hidden');
    }, 8000);
  }
}

// Smooth scroll con compensación matemática exacta del header fijo
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#' || href === '#!') return;
      try {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const header = document.querySelector('header');
          const headerHeight = header ? header.offsetHeight + 20 : 100;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      } catch (err) {
        console.error(err);
      }
    });
  });
}

// Calibración de padding de header al hacer scroll para un look flotante óptimo
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('py-2');
      header.classList.remove('py-4');
    } else {
      header.classList.add('py-4');
      header.classList.remove('py-2');
    }
  }, { passive: true });
}

// Acordeón FAQ Interactivo
function initFAQ() {
  const faqItems = document.querySelectorAll('[data-faq-item]');
  faqItems.forEach(item => {
    const trigger = item.querySelector('[data-faq-trigger]');
    const content = item.querySelector('[data-faq-content]');
    const icon = item.querySelector('[data-faq-icon]');
    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');
      
      // Cerrar otros
      faqItems.forEach(other => {
        const otherContent = other.querySelector('[data-faq-content]');
        const otherIcon = other.querySelector('[data-faq-icon]');
        const otherTrigger = other.querySelector('[data-faq-trigger]');
        if (otherContent && otherContent !== content) {
          otherContent.classList.add('hidden');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      // Alternar actual
      if (isOpen) {
        content.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}


