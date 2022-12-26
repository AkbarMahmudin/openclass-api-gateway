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
      console.log(err)
      if (err.code === 'ECONNREFUSED') {
        return res.status(500).json({ status: 'error', message: 'service unavailable' })
      }

      const { status = 'fail', message = 'internal server error' } = err.response?.data

      return res.json(err.response?.status || 500, {
        status,
        message
      })
    }
  }

  async updateUser (req, res, next) {
    try {
      const { userId } = req.user
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
