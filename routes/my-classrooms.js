const express = require('express')
const router = express.Router()

const MyClassroomService = require('../app/service/ClassroomService/MyClassroomService')
const MyClassroomController = require('../app/controller/ClassroomController/MyClassroomController')

const myClassroomService = new MyClassroomService()
const myClassroomController = new MyClassroomController(myClassroomService)
const { verifyAccessToken } = require('../app/utils/token')

router.use(verifyAccessToken)
router.get('/', myClassroomController.getMyClassroom)
router.post('/', myClassroomController.saveClassroom)
router.delete('/:id', myClassroomController.deleteMyClassroom)

module.exports = router
