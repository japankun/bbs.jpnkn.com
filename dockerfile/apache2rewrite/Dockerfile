FROM php:7.3-apache

RUN a2enmod rewrite && a2enmod cache && a2enmod cache_disk && a2enmod headers
RUN apt-get update && apt-get install -y zlib1g-dev libzip-dev libmemcached-dev unzip libssl-dev

RUN docker-php-ext-install opcache && \
  docker-php-ext-install zip

# opcache
COPY opcache.ini /usr/local/etc/php/conf.d/opcache.ini

# install & setting apcu
RUN pecl install apcu
COPY apcu.ini /usr/local/etc/php/conf.d/apcu.ini

# install & setting memcached
RUN pecl install memcached
COPY memcached.ini /usr/local/etc/php/conf.d/memcached.ini

# install & setting redis
RUN pecl install redis
COPY redis.ini /usr/local/etc/php/conf.d/redis.ini

COPY 000-default.conf /etc/apache2/sites-available/
