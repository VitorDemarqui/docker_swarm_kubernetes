#importa php apache
FROM php:8-apache

#cria diretorio de trabalho
WORKDIR /var/www/html/

#copia tudo para diretorio raiz
COPY . .

#expoe porta 80
EXPOSE 80

#da permissao para o user
RUN chown -R www-data:www-data /var/www