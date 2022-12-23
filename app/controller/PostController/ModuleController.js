class ModuleController {
  #service

  constructor (service) {
    this.#service = service

    this.getModule = this.getModule.bind(this)
    this.createModule = this.createModule.bind(this)
    this.createModule = this.createModule.bind(this)
    this.updateModule = this.updateModule.bind(this)
    this.addMaterialToModule = this.addMaterialToModule.bind(this)
    this.removeMaterialFromModule = this.removeMaterialFromModule.bind(this)
    this.deleteModule = this.deleteModule.bind(this)
  }

  async getModule (req, res, next) {
    try {
      const { id: moduleId } = req.params
      const { response, statusCode } = await this.#service.getModule(moduleId || null)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async createModule (req, res, next) {
    try {
      const { response, statusCode } = await this.#service.createModule(req.body)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async updateModule (req, res, next) {
    try {
      const { id: moduleId } = req.params
      const { response, statusCode } = await this.#service.updateModule(moduleId, req.body)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async addMaterialToModule (req, res, next) {
    try {
      const { id: moduleId } = req.params
      const { response, statusCode } = await this.#service.addMaterialToModule(moduleId, req.body)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async removeMaterialFromModule (req, res, next) {
    try {
      const { id: moduleId } = req.params
      const { response, statusCode } = await this.#service.removeMaterialFromModule(moduleId, req.body)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async deleteModule (req, res, next) {
    try {
      const { id: moduleId } = req.params
      const { response, statusCode } = await this.#service.deleteModule(moduleId)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ModuleController
