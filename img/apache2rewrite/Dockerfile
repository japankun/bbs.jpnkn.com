FROM php:7.3-apache

RUN a2enmod rewrite && a2enmod cache && a2enmod cache_disk
RUN apt-get update && apt-get install -y zlib1g-dev libzip-dev

RUN docker-php-ext-install opcache && \
  docker-php-ext-install zip
COPY opcache.ini /usr/local/etc/php/conf.d/opcache.ini

RUN pecl install apcu
RUN echo "extension=apcu.so" > /usr/local/etc/php/conf.d/apcu.ini

COPY 000-default.conf /etc/apache2/sites-available/
