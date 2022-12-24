class MyClassroomController {
  #service

  constructor (service) {
    this.#service = service

    this.saveClassroom = this.saveClassroom.bind(this)
    this.getMyClassroom = this.getMyClassroom.bind(this)
    this.deleteMyClassroom = this.deleteMyClassroom.bind(this)
  }

  async saveClassroom (req, res, next) {
    try {
      const { userId } = req.user
      const { response, statusCode } = await this.#service.saveClassroom({
        ...req.body,
        userId
      })

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async getMyClassroom (req, res, next) {
    try {
      const { userId } = req.user
      const { response, statusCode } = await this.#service.getMyClassroom(userId)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async deleteMyClassroom (req, res, next) {
    try {
      const { id: myClassroomId } = req.params
      const { userId } = req.user
      const { response, statusCode } = await this.#service.deleteMyClassroom(myClassroomId, userId)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = MyClassroomController
