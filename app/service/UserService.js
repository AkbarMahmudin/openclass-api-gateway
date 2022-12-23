const axios = require('axios')
require('dotenv').config()

class UserService {
  #axios
  #baseUrl = process.env.USER_SERVICE_URL
  #timeout = process.env.TIMEOUT || 5000 // == 5s

  constructor () {
    this.#axios = axios.create({
      baseURL: this.#baseUrl,
      timeout: this.#timeout
    })

    this.getUser = this.getUser.bind(this)
    this.createUser = this.createUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.createAuthentication = this.createAuthentication.bind(this)
  }

  async getUser (userId = null) {
    const { data: response, status: statusCode } = await this.#axios.get(`/users/${userId || ''}`)

    return {
      response, statusCode
    }
  }

  async createUser (payload) {
    const { data: response, status: statusCode } = await this.#axios.post('/users', payload)

    return {
      response, statusCode
    }
  }

  async updateUser (userId, payload) {
    const { data: response, status: statusCode } = await this.#axios.put(`/users/${userId}`, payload)

    return {
      response, statusCode
    }
  }

  async createAuthentication (payload) {
    const { data: response, status: statusCode } = await this.#axios.post('/users/auth', payload)

    return {
      response, statusCode
    }
  }
}

module.exports = UserService
