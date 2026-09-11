// Momento Hero: Consola de Telemetría e Ingeniería en Vivo de Altikore

export function initLiveHero() {
  const tabs = document.querySelectorAll('[data-hero-tab]');
  const panels = document.querySelectorAll('[data-hero-panel]');
  if (!tabs.length || !panels.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-hero-tab');

      // Update tabs styling
      tabs.forEach(t => {
        t.classList.remove('bg-[#0052FF]', 'text-white', 'shadow-md');
        t.classList.add('text-zinc-400', 'hover:text-white', 'hover:bg-white/5');
      });
      tab.classList.add('bg-[#0052FF]', 'text-white', 'shadow-md');
      tab.classList.remove('text-zinc-400', 'hover:text-white', 'hover:bg-white/5');

      // Update panels
      panels.forEach(p => {
        if (p.getAttribute('data-hero-panel') === target) {
          p.classList.remove('hidden');
        } else {
          p.classList.add('hidden');
        }
      });
    });
  });

  // Animación de latido sutil en datos numéricos vivos (Neo Cyan)
  simulateLiveTelemetry();
}

function simulateLiveTelemetry() {
  const earVal = document.getElementById('telemetry-ear');
  const latVal = document.getElementById('telemetry-latency');
  const gpsCoord = document.getElementById('telemetry-gps');

  if (!earVal && !latVal && !gpsCoord) return;

  setInterval(() => {
    // Fluctuación realista de EAR en HaltSense (0.27 - 0.31)
    if (earVal) {
      const ear = (0.27 + Math.random() * 0.04).toFixed(2);
      earVal.textContent = ear;
    }

    // Fluctuación de latencia de visión artificial (<90ms)
    if (latVal) {
      const lat = Math.floor(78 + Math.random() * 9);
      latVal.textContent = `${lat}ms`;
    }

    // Variación sutil de GPS en Khodia
    if (gpsCoord) {
      const lat = (5.0689 + (Math.random() - 0.5) * 0.0004).toFixed(4);
      const lng = (-75.5174 + (Math.random() - 0.5) * 0.0004).toFixed(4);
      gpsCoord.textContent = `${lat}° N, ${Math.abs(lng)}° W`;
    }
  }, 2200);
}
