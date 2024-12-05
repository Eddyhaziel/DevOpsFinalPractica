# Usa la imagen oficial de nginx
FROM nginx:latest

# Copia el archivo index.html al directorio predeterminado de nginx
COPY index.html /usr/share/nginx/html/index.html

# Expone el puerto 80 para servir la página
EXPOSE 80

# Comando para ejecutar nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
