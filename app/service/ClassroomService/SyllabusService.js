const axios = require('axios')

class SyllabusService {
  #axios
  #baseUrl = process.env.CLASSROOM_SERVICE_URL
  #timeout = process.env.TIMEOUT || 5000 // == 5s

  constructor () {
    this.#axios = axios.create({
      baseURL: this.#baseUrl,
      timeout: this.#timeout
    })
    this.url = '/syllabuses'

    this.addModuleToClassroom = this.addModuleToClassroom.bind(this)
    this.removeModuleFromClassroom = this.removeModuleFromClassroom.bind(this)
  }

  async addModuleToClassroom (payload) {
    const { data: response, status: statusCode } = await this.#axios.post(this.url, payload)

    return { response, statusCode }
  }

  async removeModuleFromClassroom (payload) {
    const { data: response, status: statusCode } = await this.#axios.delete(this.url, {
      data: payload
    })

    return { response, statusCode }
  }
}

module.exports = SyllabusService
