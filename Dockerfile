# ==============================================================================
# Dockerfile Multietapa Ultraligero para Altikore S.A.S. (Coolify Ready)
# Node.js 20 Alpine: Build de Vite + Servidor Express para estáticos y API
# ==============================================================================

# Etapa 1: Compilación de Frontend con Vite y Tailwind v4
FROM node:20-alpine AS builder
WORKDIR /app

# Instalar dependencias completas
COPY package*.json ./
RUN npm ci

# Copiar código fuente y compilar
COPY . .
RUN npm run build

# Etapa 2: Entorno de ejecución de producción
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Instalar únicamente dependencias de producción
COPY package*.json ./
RUN npm ci --omit=dev

# Copiar el backend de contacto y los archivos compilados del frontend
COPY server/ ./server/
COPY --from=builder /app/dist ./dist

# Exponer el puerto configurado para Traefik / Coolify
EXPOSE 3000

# Iniciar servidor
CMD ["node", "server/contact-server.js"]
