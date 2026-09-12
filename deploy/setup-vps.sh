#!/bin/bash
# ==============================================================================
# Script de Despliegue Automatizado para Altikore en Hostinger VPS KVM 2
# Sistema Operativo recomendado: Ubuntu 22.04 / 24.04 LTS o Debian 12
# ==============================================================================

set -e

echo "🚀 Iniciando configuración de Altikore en VPS Hostinger..."

# 1. Actualizar repositorios del sistema
sudo apt update && sudo apt upgrade -y

# 2. Instalar Nginx, Git, Node.js y Certbot
sudo apt install -y nginx git curl certbot python3-certbot-nginx

# 3. Instalar Node.js LTS (si no está instalado)
if ! command -v node &> /dev/null; then
    echo "📦 Instalando Node.js 20 LTS..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
fi

# 4. Instalar PM2 globalmente para gestión de procesos
sudo npm install -g pm2

# 5. Configurar directorio del proyecto
PROJECT_DIR="/var/www/altikore"
echo "📂 Preparando directorio $PROJECT_DIR..."

if [ ! -d "$PROJECT_DIR" ]; then
    sudo mkdir -p $PROJECT_DIR
    sudo chown -R $USER:$USER $PROJECT_DIR
    echo "Clona tu repositorio aquí con: git clone <TU_REPO> $PROJECT_DIR"
fi

cd $PROJECT_DIR

# 6. Instalar dependencias y compilar
echo "🔨 Compilando proyecto con Tailwind v4 y Vite..."
npm install
npm run build

# 7. Iniciar o reiniciar servicio de API con PM2
echo "⚡ Configurando proceso de contacto con PM2..."
pm2 start deploy/ecosystem.config.cjs || pm2 restart altikore-api
pm2 save

# 8. Configurar Nginx
echo "🌐 Configurando Nginx..."
sudo cp deploy/nginx.conf /etc/nginx/sites-available/altikore
sudo ln -sf /etc/nginx/sites-available/altikore /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Probar sintaxis de Nginx
sudo nginx -t
sudo systemctl reload nginx

echo "✅ Despliegue completado con éxito."
echo "🔒 Para habilitar SSL gratuito con tu dominio, ejecuta:"
echo "   sudo certbot --nginx -d altikore.tech -d www.altikore.tech"
