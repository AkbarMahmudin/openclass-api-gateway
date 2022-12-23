const express = require('express')
const router = express.Router()

const MaterialService = require('../app/service/PostService/materialService')
const MaterialController = require('../app/controller/PostController/materialController')

const materialService = new MaterialService()
const materialController = new MaterialController(materialService)
const { verifyAccessToken } = require('../app/utils/token')

router.use(verifyAccessToken)
router.get('/my-materials', materialController.getMyMaterial)
router.get('/:id', materialController.getMaterial)
router.get('/', materialController.getMaterial)
router.post('/', materialController.createMaterial)
router.put('/:id', materialController.updateMaterial)
router.delete('/:id', materialController.deleteMaterial)

module.exports = router
