FROM php:7.3-apache

RUN a2enmod rewrite && a2enmod cache && a2enmod cache_disk
RUN apt-get update && apt-get install -y zlib1g-dev libzip-dev libmemcached-dev unzip

RUN docker-php-ext-install opcache && \
  docker-php-ext-install zip
  
RUN pecl install memcached

COPY opcache.ini /usr/local/etc/php/conf.d/opcache.ini

RUN pecl install apcu
RUN echo "extension=apcu.so" > /usr/local/etc/php/conf.d/apcu.ini && \
  echo "apc.shm_size=128M" >> /usr/local/etc/php/conf.d/apcu.ini
RUN echo "extension=memcached.so" > /usr/local/etc/php/conf.d/memcached.ini

COPY 000-default.conf /etc/apache2/sites-available/
