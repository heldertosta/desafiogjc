# Etapa 1: Construir o Frontend
FROM node:20 AS frontend-builder
WORKDIR /frontend
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Etapa 2: Construir o Backend
FROM maven:3.9.9-eclipse-temurin-17 AS backend-builder
WORKDIR /app
COPY desafio/pom.xml ./
COPY desafio/src ./src
RUN mvn clean package -DskipTests

# Etapa 3: Imagem Final
FROM eclipse-temurin:17-jdk-focal
WORKDIR /app

# Instalar Node.js no container final
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Copiar o frontend construído
COPY --from=frontend-builder /frontend /app/frontend
WORKDIR /app/frontend
RUN npm install --production

# Copiar o backend
COPY --from=backend-builder /app/target/*.jar /app/app.jar

# Copiar o script de inicialização
COPY desafio/start.sh /app/start.sh
RUN chmod +x /app/start.sh

# Expor ambas as portas
EXPOSE 3000 8080

CMD ["/app/start.sh"]
