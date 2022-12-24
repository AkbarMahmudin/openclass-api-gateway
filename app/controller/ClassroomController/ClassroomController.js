class ClassroomController {
  #service

  constructor (service) {
    this.#service = service

    this.getClassroom = this.getClassroom.bind(this)
    this.getMyCreatedClassroom = this.getMyCreatedClassroom.bind(this)
    this.createClassroom = this.createClassroom.bind(this)
    this.updateClassroom = this.updateClassroom.bind(this)
    this.deleteClassroom = this.deleteClassroom.bind(this)
  }

  async getClassroom (req, res, next) {
    try {
      const { id: classroomId } = req.params
      const { response, statusCode } = await this.#service.getClassroom(classroomId || null, req.query)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async getMyCreatedClassroom (req, res, next) {
    try {
      const { userId } = req.user
      const { response, statusCode } = await this.#service.getClassroom(null, {
        owner: userId
      })

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async createClassroom (req, res, next) {
    try {
      const { response, statusCode } = await this.#service.createClassroom({
        ...req.body,
        ownerId: req.user.userId
      })

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async updateClassroom (req, res, next) {
    try {
      const { id: classroomId } = req.params
      const { response, statusCode } = await this.#service.updateClassroom(classroomId, {
        ...req.body,
        ownerId: req.user.userId
      })

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async deleteClassroom (req, res, next) {
    try {
      const { id: classroomId } = req.params
      const { response, statusCode } = await this.#service.deleteClassroom(classroomId, req.user.userId)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ClassroomController
