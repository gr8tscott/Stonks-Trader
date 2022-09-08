const Router = require('express').Router()
const controller = require('../controllers/userController')

Router.get('/user', controller.GetUser)

module.exports = Router
