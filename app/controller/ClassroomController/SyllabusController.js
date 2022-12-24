class SyllabusController {
  #service

  constructor (service) {
    this.#service = service

    this.addModuleToClassroom = this.addModuleToClassroom.bind(this)
    this.removeModuleFromClassroom = this.removeModuleFromClassroom.bind(this)
  }

  async addModuleToClassroom (req, res, next) {
    try {
      const { response, statusCode } = await this.#service.addModuleToClassroom(req.body)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async removeModuleFromClassroom (req, res, next) {
    try {
      const { response, statusCode } = await this.#service.removeModuleFromClassroom(req.body)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = SyllabusController
