class UserController {
  #service

  constructor (service) {
    this.#service = service

    this.getUser = this.getUser.bind(this)
    this.createUser = this.createUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.createAuthentication = this.createAuthentication.bind(this)
  }

  async getUser (req, res, next) {
    try {
      const { id: userId } = req.params
      let params = null
      if (userId) params = userId
      const { response, statusCode } = await this.#service.getUser(params)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async createUser (req, res, next) {
    try {
      const { response, statusCode } = await this.#service.createUser(req.body)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async updateUser (req, res, next) {
    try {
      const { id: userId } = req.params
      const { response, statusCode } = await this.#service.updateUser(userId, req.body)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }

  async createAuthentication (req, res, next) {
    try {
      const { response, statusCode } = await this.#service.createAuthentication(req.body)

      return res.json(statusCode, response)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController
