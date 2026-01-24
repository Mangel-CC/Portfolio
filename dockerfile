# Etapa 1: Build React
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servidor Nginx
FROM nginx:alpine

# Borra config default
RUN rm -rf /usr/share/nginx/html/*

# Copia build
COPY --from=build /app/dist /usr/share/nginx/html

# Expone puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
