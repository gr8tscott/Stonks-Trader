const Router = require('express').Router()
const controller = require('../controllers/userController')

Router.get('/user', controller.GetUser)
Router.post('/adduser', controller.createUser)
Router.delete('/:user_d', controller.deleteUser)
Router.put('/:user_id', controller.updateUser)

module.exports = Router
