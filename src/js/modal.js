import { projectsData } from '../data/projects.js';

let currentOpenModalId = null;

export function initProjectModal() {
  const modalContainer = document.getElementById('project-modal-container');
  if (!modalContainer) return;

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentOpenModalId) {
      closeModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
    if (e.target.id === 'project-modal-backdrop' || e.target.closest('#modal-close-btn') || e.target.closest('#modal-close-btn-footer')) {
      closeModal();
    }
  });

  // Delegación de eventos global para cualquier botón de ficha técnica
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-open-modal');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      const projectId = btn.getAttribute('data-id');
      if (projectId) {
        openModal(projectId);
      }
    }
  });
}

export function openModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modalContainer = document.getElementById('project-modal-container');
  const modalContent = document.getElementById('project-modal-content');
  if (!modalContainer || !modalContent) return;

  currentOpenModalId = projectId;
  document.body.style.overflow = 'hidden';

  modalContent.innerHTML = `
    <!-- Header con gradiente oficial de Altikore -->
    <div class="relative p-6 sm:p-8 border-b border-black/10 dark:border-white/10 bg-gradient-to-r from-[#0052FF]/10 via-[#6E0DF2]/10 to-[#FF007A]/10">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          ${project.logoImage ? `<img src="${project.logoImage}" alt="${project.title}" class="w-8 h-8 rounded-lg object-contain bg-white/10 p-1" />` : ''}
          <span class="px-3 py-1 text-xs font-semibold rounded-full bg-white/70 dark:bg-white/10 border border-black/10 dark:border-white/15 text-zinc-900 dark:text-zinc-100">
            ${project.categoryLabel}
          </span>
          <span class="px-3 py-1 text-xs font-bold rounded-full ${project.badgeColor}">
            ${project.featuredBadge}
          </span>
        </div>
        <button id="modal-close-btn" class="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10" aria-label="Cerrar ficha técnica">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <h2 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mt-4 font-sans">
        ${project.title}
      </h2>
      <p class="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base mt-2 font-medium">
        ${project.tagline}
      </p>

      <!-- Target Audience Banner -->
      <div class="mt-4 p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 text-xs flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
        <span class="font-bold text-[#0052FF] dark:text-[#00D2FF] uppercase tracking-wider font-mono">Orientado a:</span>
        <span>${project.targetAudience}</span>
      </div>
    </div>

    <!-- Body -->
    <div class="p-6 sm:p-8 space-y-8 max-h-[72vh] overflow-y-auto">
      <!-- Visión General -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-[#0052FF] dark:text-[#00D2FF] mb-2 font-mono">Resumen Ejecutivo</h4>
        <p class="text-zinc-700 dark:text-zinc-200 text-base leading-relaxed">
          ${project.summary}
        </p>
      </div>

      <!-- Diagrama de Arquitectura de Flujo -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-[#0052FF] dark:text-[#00D2FF] mb-3 font-mono">Pipeline & Arquitectura del Sistema</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${project.architecture.map((arch, idx) => `
            <div class="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10">
              <div class="text-xs font-bold font-mono text-[#FF007A] mb-1">${arch.step}</div>
              <p class="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">${arch.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Métricas Clave Grid -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-[#0052FF] dark:text-[#00D2FF] mb-3 font-mono">Métricas y Resultados Comprobables</h4>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${project.metrics.map(m => `
            <div class="p-3.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.08] text-center">
              <div class="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white font-mono">${m.value}</div>
              <div class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">${m.label}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Desafío y Solución de Ingeniería -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-5 rounded-xl bg-red-500/[0.05] border border-red-500/20">
          <div class="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm mb-2 font-mono">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            El Desafío Técnico
          </div>
          <p class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            ${project.challenge}
          </p>
        </div>
        <div class="p-5 rounded-xl bg-[#0052FF]/[0.05] border border-[#0052FF]/20">
          <div class="flex items-center gap-2 text-[#0052FF] dark:text-[#00D2FF] font-bold text-sm mb-2 font-mono">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            La Solución de Altikore
          </div>
          <p class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            ${project.solution}
          </p>
        </div>
      </div>

      <!-- Highlights / Capacidades -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-[#0052FF] dark:text-[#00D2FF] mb-3 font-mono">Capacidades Técnicas Destacadas</h4>
        <ul class="space-y-2.5">
          ${project.highlights.map(h => `
            <li class="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF007A]/15 text-[#FF007A] shrink-0 mt-0.5 text-xs font-bold">✓</span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Stack Tecnológico -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-[#0052FF] dark:text-[#00D2FF] mb-3 font-mono">Stack & Herramientas de Misión Crítica</h4>
        <div class="flex flex-wrap gap-2">
          ${project.stack.map(tech => `
            <span class="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
              ${tech}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Footer / Acciones -->
      <div class="pt-5 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div class="text-xs text-zinc-500 dark:text-zinc-400">
          Estado: <span class="text-[#00D2FF] font-semibold">${project.demoStatus}</span> | Referencia: <span class="font-mono text-zinc-700 dark:text-zinc-300">${project.github}</span>
        </div>
        <div class="flex items-center gap-3">
          <a href="#contacto" id="modal-cotizar-btn" onclick="document.getElementById('project-modal-backdrop').click()" class="px-4 py-2 rounded-xl btn-primary-altikore text-xs font-bold shadow-md hover:opacity-95 transition-opacity">
            Cotizar Solución Similar
          </a>
          <button id="modal-close-btn-footer" class="px-4 py-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-zinc-900 dark:text-white text-xs font-semibold transition-all">
            Cerrar Ficha
          </button>
        </div>
      </div>
    </div>
  `;

  modalContainer.classList.remove('hidden');
  setTimeout(() => {
    modalContainer.classList.remove('opacity-0');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
  }, 10);
}

export function closeModal() {
  const modalContainer = document.getElementById('project-modal-container');
  const modalContent = document.getElementById('project-modal-content');
  if (!modalContainer || !modalContent) return;

  modalContainer.classList.add('opacity-0');
  modalContent.classList.remove('scale-100');
  modalContent.classList.add('scale-95');

  setTimeout(() => {
    modalContainer.classList.add('hidden');
    document.body.style.overflow = '';
    currentOpenModalId = null;
  }, 200);
}
