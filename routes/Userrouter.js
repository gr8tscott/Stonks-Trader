const Router = require('express').Router()
const controller = require('../controllers/UserController.js')

Router.get('/user', controller.getUser)
Router.post('/adduser', controller.createUser)
Router.delete('/:user_id', controller.deleteUser)
Router.put('/:user_id', controller.updateUser)

module.exports = Router
