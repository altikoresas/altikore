// Configuración PM2 para Altikore en VPS Hostinger
// Uso: pm2 start deploy/ecosystem.config.cjs
// Para inicio automático al reiniciar el VPS: pm2 startup && pm2 save

module.exports = {
  apps: [
    {
      name: 'altikore-api',
      script: './server/contact-server.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '150M',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
        SMTP_HOST: 'smtp.hostinger.com',
        SMTP_PORT: 465,
        SMTP_USER: 'gerencia@altikore.tech',
        SMTP_PASS: 'TU_PASSWORD_AQUI',
        NOTIFICATION_EMAIL: 'gerencia@altikore.tech'
      }
    }
  ]
};
