const express = require('express');
const routes = express.Router();
const path = require('path')
const homeController = require('./src/controllers/homeController')

routes.get('/', homeController.paginaInicial)


module.exports = routes;