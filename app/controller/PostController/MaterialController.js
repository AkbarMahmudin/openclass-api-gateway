class MaterialController {
  #service

  constructor (service) {
    this.#service = service

    this.getMaterial = this.getMaterial.bind(this)
    this.getMyMaterial = this.getMyMaterial.bind(this)
    this.createMaterial = this.createMaterial.bind(this)
    this.updateMaterial = this.updateMaterial.bind(this)
    this.deleteMaterial = this.deleteMaterial.bind(this)
  }

  async getMaterial (req, res, next) {
    try {
      const { id: materialId } = req.params
      const { response, statusCode } = await this.#service.getMaterial(materialId || null, req.query || null)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async getMyMaterial (req, res, next) {
    try {
      const { userId } = req.user
      const { response, statusCode } = await this.#service.getMaterial(null, { author: userId })

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async createMaterial (req, res, next) {
    try {
      const { response, statusCode } = await this.#service.createMaterial({
        ...req.body,
        authorId: req.user.userId
      })

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async updateMaterial (req, res, next) {
    try {
      const { id: materialId } = req.params
      const { response, statusCode } = await this.#service.updateMaterial(materialId, {
        ...req.body,
        authorId: req.user.userId
      })

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async deleteMaterial (req, res, next) {
    try {
      const { id: materialId } = req.params
      const { response, statusCode } = await this.#service.deleteMaterial(materialId)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = MaterialController
