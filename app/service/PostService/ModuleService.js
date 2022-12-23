const axios = require('axios')

class ModuleService {
  #axios
  #baseUrl = process.env.POST_SERVICE_URL
  #timeout = process.env.TIMEOUT || 5000 // == 5s

  constructor () {
    this.#axios = axios.create({
      baseURL: this.#baseUrl,
      timeout: this.#timeout
    })

    this.getModule = this.getModule.bind(this)
    this.createModule = this.createModule.bind(this)
    this.updateModule = this.updateModule.bind(this)
    this.addMaterialToModule = this.addMaterialToModule.bind(this)
    this.removeMaterialFromModule = this.removeMaterialFromModule.bind(this)
    this.deleteModule = this.deleteModule.bind(this)
  }

  async getModule (moduleId) {
    let url = '/modules'

    if (moduleId) {
      url += `/${moduleId}`
    }

    const { data: response, status: statusCode } = await this.#axios.get(url)

    return { response, statusCode }
  }

  async createModule (payload) {
    const url = '/modules'
    const { data: response, status: statusCode } = await this.#axios.post(url, payload)

    return { response, statusCode }
  }

  async updateModule (moduleId, payload) {
    const url = `/modules/${moduleId}`
    const { data: response, status: statusCode } = await this.#axios.put(url, payload)

    return { response, statusCode }
  }

  async addMaterialToModule (moduleId, payload) {
    const url = `/modules/${moduleId}/add-materials`
    const { data: response, status: statusCode } = await this.#axios.put(url, payload)

    return { response, statusCode }
  }

  async removeMaterialFromModule (moduleId, payload) {
    const url = `/modules/${moduleId}/remove-materials`
    const { data: response, status: statusCode } = await this.#axios.put(url, payload)

    return { response, statusCode }
  }

  async deleteModule (moduleId) {
    const url = `/modules/${moduleId}`
    const { data: response, status: statusCode } = await this.#axios.delete(url)

    return { response, statusCode }
  }
}

module.exports = ModuleService
