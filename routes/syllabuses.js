const express = require('express')
const router = express.Router()

const SyllabusService = require('../app/service/ClassroomService/SyllabusService')
const SyllabusController = require('../app/controller/ClassroomController/SyllabusController')

const syllabusService = new SyllabusService()
const syllabusController = new SyllabusController(syllabusService)
const { verifyAccessToken } = require('../app/utils/token')

router.use(verifyAccessToken)
router.post('/', syllabusController.addModuleToClassroom)
router.delete('/', syllabusController.removeModuleFromClassroom)

module.exports = router
