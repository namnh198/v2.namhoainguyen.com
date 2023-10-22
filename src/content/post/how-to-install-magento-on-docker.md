---
publishDate: 2022-20-03
title: How to install Magento on Docker
image: ./img/cai-dat-magento2-tren-docker.png
draft: false
part: 1
topics:
  - magento
---
Magento is an open source application to build eCommerce websites that is used to manage all store processes like "Shipping", "Billing", "Checkout" and more. 
It's using the main language PHP and MVC models as the foundation. With a relatively large platform like Magento, installing it to run take a lot of time with a lot of related configuration.
Therefore, you will ask yourself question

> Hmm. Just installing it takes to much time. Is there a faster way?

Wow! Amazing!!!... You found **docker** to help us do those jobs. It only takes time to configure at first, then it will be easier for everyone in the team or even new members to install the project later. Above all, it ensures that the working environment between members and between development and production is not too different.
But you do not understand "How to install & configuration Magento for Docker". Don't worry! I will help you step by step

## Some common prerequisites:

### Install Docker 

Obviously, the first step you have to do is to download and install Docker. Now the Docker platform is available on all operating system. Whether you are using any operating system, you can also install and start it up
You can see [this link](https://docs.docker.com/engine/install/) to download & install Docker

### Download Magento

According to Magento's documentation, there are 2 ways for you to get the source code of Magento 2
- Use **composer** to create project
```bash
composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition <install-directory-name>
```
- Use **GIT** download directly from the homepage at github or magento.com

### Necessary requirements when installing Magento

Regarding the operating system, of course it will be Linux (Ubuntu, Debian, CentOS,...) according to Magento's Docs, the do not guarantee running on Window or MacOS operating system. In fact, my experience is that even through it can be installed on these operating systems, its loading speed is quite slow, Linux is still the best choice. The operating system requires you must be installed:
- PHP >= 8.1 (should use version 8.2)
- Composer >= 2.2
- MySQL >= 8.0 or MariaDB >= 10.6
- Elasticsearch >= 7.17 or OpenSearch >= 2.5
- Redis >= 7.0 (Optional)
- RabbitMQ >= 3.11 (Optional)

## Build Docker 

The problem requirements are there, now let's get started

Using **docker-compose** each container will correspond to a software you must install

```yaml
version: '3.5'
services:
  nginx:
  #
  php:
    #
  mysql:
   #
  phpmyadmin:
   #
  elasticsearch:
   #
```

### PHP-FPM

```yaml

```

### Nginx

Next is the container for the Nginx web server, which is responsible for communicating with **PHP-FPM** and returning responses to the client. With this service, to take advantage of the ability to reuse existing images and reduce the need to build images, we do not need to use a custom Dockerfile, here we just need to use the nginx image and mount the config file:

```yaml
nginx:
    image: nginx:latest
    ports:
      - "80:80"
    volumes:
      - "./docker/config/nginx/:/etc/nginx/conf.d/"
      - "./docker/logs/nginx/:/var/log/nginx/"
      - "./:/var/www/html"
```

File Configuration Nginx

```
# default.conf
upstream fastcgi_backend {
    server php:9000;
}

server {
  listen 80;
  server_name _;
  set $MAGE_ROOT /var/www/html;
  set $MAGE_DEBUG_SHOW_ARGS 1;
  include /var/www/html/nginx.conf.sample;
}
```

### MySQL

Similarly, we can also use the mysql image directly and create users and databases via the init SQL file without needing a custom image:

```yaml
mysql:
    image: mysql:8.0
    restart: always
    command: --default-authentication-plugin=mysql_native_password
    environment:
      MYSQL_ALLOW_EMPTY_PASSWORD: "false"
      MYSQL_ROOT_PASSWORD: "root"
      MYSQL_DATABASE: magento
    volumes:
      - "./docker/data/mysql/:/var/lib/mysql/"
```

You can publish the port *3306* to connect to MySQL on the host machine or you can also use *phpmyadmin*

```yaml
phpmyadmin:
    image: phpmyadmin/phpmyadmin
    restart: always
    ports:
      - '8080:80'
    environment:
      PMA_HOST: mysql
```

Now you can access phpmyadmin with the path **http://localhost:8080**

```
user: root
password: root
```

### Elasticsearch

```yaml
elasticsearch:
  image: elasticsearch:7.17
  restart: always
  environment:
    - discovery.type=single-node
  volumes:
    - "./docker/data/elasticsearch/:/usr/share/elasticsearch/data/"
```

The full **docker-compose** file:
```yaml

```

### Install Magento

```bash
# Execute to docker container shell
docker-compose up -d
docker-compose exec -it php bash
```

```bash
# Installing Magento
php bin/magento setup:install \
    --base-url=http://magento.local \
    --db-host=mysql \
    --db-name=magento \
    --db-user=root \
    --db-password=root \
    --backend-frontname=admin \
    --admin-firstname=admin \
    --admin-lastname=admin \
    --admin-email=admin@example.com \
    --admin-user=admin \
    --admin-password=admin123 \
    --language=en_US \
    --currency=USD \
    --timezone=America/Chicago \
    --use-rewrites=1 \
    --elasticsearch-host=elasticsearch \
    --elasticsearch-port=9200
```

```bash
# Fix permission file & folder
chmod 777 -R .
```

Next, you create a domain name **magento.local** runnning on the **127.0.0.1** internal IP **etc/host**

It's done. Now go to the URL **magento.local** to see the results

## Fix authentication error when logging in admin

To fix this problem, you need to disable the module **Magento_TwoFactorAuth** by running the command

```bash
bin/magento module:disable Magento_TwoFactorAuth
bin/magento setup:di:compile
```

So it's done. Hope you will install successfully. If you have any questions or related errors, please leave a comment. See you in the next articles of the Series.
