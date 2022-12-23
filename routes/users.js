const express = require('express')
const router = express.Router()

const UserService = require('../app/service/UserService')
const UserController = require('../app/controller/UserController')

const userService = new UserService()
const userController = new UserController(userService)

router.get('/', userController.getUser)
router.get('/:id', userController.getUser)
router.post('/', userController.createUser)
router.put('/:id', userController.updateUser)
router.post('/auth', userController.createAuthentication)

module.exports = router