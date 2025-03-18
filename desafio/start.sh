#!/bin/bash
echo "Starting Next.js on port 3000..."
cd /app/frontend && npm start &  # Inicia o Next.js na porta 3000
echo "Starting Spring Boot on port 8080..."
cd /app && java -jar app.jar     # Inicia o Spring Boot na porta 8080
