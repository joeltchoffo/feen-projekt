# frontend/Dockerfile
# 1) Node-Basis
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# 2) Produktionsserver (Nginx)
FROM nginx:stable-alpine

# Statische Dateien vom Build kopieren
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: eigene nginx.conf, z.B. Umleitungen für SPA
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
