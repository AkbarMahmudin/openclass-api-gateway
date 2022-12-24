const express = require('express')
const router = express.Router()

const ClassroomService = require('../app/service/ClassroomService/ClassroomService')
const ClassroomController = require('../app/controller/ClassroomController/ClassroomController')

const classroomService = new ClassroomService()
const classroomController = new ClassroomController(classroomService)
const { verifyAccessToken } = require('../app/utils/token')

router.use(verifyAccessToken)
router.get('/my-created-classrooms', classroomController.getMyCreatedClassroom)
router.get('/', classroomController.getClassroom)
router.get('/:id', classroomController.getClassroom)
router.post('/', classroomController.createClassroom)
router.put('/:id', classroomController.updateClassroom)
router.delete('/:id', classroomController.deleteClassroom)

module.exports = router
