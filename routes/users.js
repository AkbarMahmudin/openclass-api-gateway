const express = require('express')
const router = express.Router()

const UserService = require('../app/service/UserService')
const UserController = require('../app/controller/UserController')

const userService = new UserService()
const userController = new UserController(userService)
const { verifyAccessToken } = require('../app/utils/token')

router.post('/', userController.createUser)
router.post('/auth', userController.createAuthentication)

router.use(verifyAccessToken)
router.get('/', userController.getUser)
router.get('/:id', userController.getUser)
router.get('/profiles', userController.getMyProfile)
router.put('/', userController.updateUser)

module.exports = router
