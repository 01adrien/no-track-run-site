#!/bin/bash

set -e  # stoppe le script au premier echec
PROJECT_DIR="/var/www/test.notrackrun.eu"
cd "$PROJECT_DIR"
git pull
composer install
npm install
npm run build
sudo chown -R www-data:www-data "$PROJECT_DIR/dist"
echo "==> Deploiement termine"