const express = require('express')
const router = express.Router()

const ModuleService = require('../app/service/PostService/ModuleService')
const ModuleController = require('../app/controller/PostController/ModuleController')

const moduleService = new ModuleService()
const moduleController = new ModuleController(moduleService)
const { verifyAccessToken } = require('../app/utils/token')

router.use(verifyAccessToken)
router.get('/', moduleController.getModule)
router.get('/:id', moduleController.getModule)
router.post('/', moduleController.createModule)
router.put('/:id', moduleController.updateModule)
router.put('/:id/add-materials', moduleController.addMaterialToModule)
router.put('/:id/remove-materials', moduleController.removeMaterialFromModule)
router.delete('/:id', moduleController.deleteModule)

module.exports = router
