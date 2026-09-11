// Gestión de tema: Claro, Oscuro y Sistema (Preferencia del SO)

const THEME_KEY = 'altikore-theme';

export function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || 'system';
  applyTheme(savedTheme);

  // Escuchar cambios del sistema en tiempo real si el usuario eligió 'system'
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const currentPreference = localStorage.getItem(THEME_KEY) || 'system';
    if (currentPreference === 'system') {
      applyTheme('system');
    }
  });

  // Inicializar listeners del toggle en la interfaz
  setupThemeDropdown();
}

export function setTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
}

export function applyTheme(theme) {
  const isDark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  updateThemeUI(theme, isDark);
}

function updateThemeUI(theme, isDark) {
  const currentThemeText = document.getElementById('current-theme-label');
  const themeIcons = {
    sun: document.getElementById('theme-icon-sun'),
    moon: document.getElementById('theme-icon-moon'),
    system: document.getElementById('theme-icon-system'),
  };

  // Ocultar todos los iconos principales
  Object.values(themeIcons).forEach(icon => icon && icon.classList.add('hidden'));

  // Mostrar el icono correspondiente
  if (theme === 'system' && themeIcons.system) {
    themeIcons.system.classList.remove('hidden');
  } else if (isDark && themeIcons.moon) {
    themeIcons.moon.classList.remove('hidden');
  } else if (!isDark && themeIcons.sun) {
    themeIcons.sun.classList.remove('hidden');
  }

  // Marcar la opción activa en el dropdown si existe
  document.querySelectorAll('[data-theme-value]').forEach(el => {
    if (el.getAttribute('data-theme-value') === theme) {
      el.classList.add('text-electric-cobalt', 'font-bold');
    } else {
      el.classList.remove('text-electric-cobalt', 'font-bold');
    }
  });
}

function setupThemeDropdown() {
  const dropdownToggle = document.getElementById('theme-dropdown-toggle');
  const dropdownMenu = document.getElementById('theme-dropdown-menu');

  if (!dropdownToggle || !dropdownMenu) return;

  dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('hidden');
  });

  // Cerrar al hacer clic fuera
  document.addEventListener('click', () => {
    dropdownMenu.classList.add('hidden');
  });

  // Botones de selección de tema
  document.querySelectorAll('[data-theme-value]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const selected = btn.getAttribute('data-theme-value');
      setTheme(selected);
      dropdownMenu.classList.add('hidden');
    });
  });
}
