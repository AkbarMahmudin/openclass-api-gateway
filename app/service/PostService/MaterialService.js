const axios = require('axios')

class MaterialService {
  #axios
  #baseUrl = process.env.POST_SERVICE_URL
  #timeout = process.env.TIMEOUT || 5000 // == 5s

  constructor () {
    this.#axios = axios.create({
      baseURL: this.#baseUrl,
      timeout: this.#timeout
    })

    this.getMaterial = this.getMaterial.bind(this)
    this.createMaterial = this.createMaterial.bind(this)
    this.updateMaterial = this.updateMaterial.bind(this)
    this.deleteMaterial = this.deleteMaterial.bind(this)
  }

  async getMaterial (materialId, query) {
    let url = '/materials'
    // Filter By Material ID
    if (materialId) {
      url += `/${materialId}`
    } else if (query.author) { // Filter By User ID : filter berdasarkan author materi
      url += `?author=${query.author}`
    }
    const { data: response, status: statusCode } = await this.#axios.get(url)

    return { response, statusCode }
  }

  async createMaterial (payload) {
    const { data: response, status: statusCode } = await this.#axios.post('/materials', payload)

    return { response, statusCode }
  }

  async updateMaterial (materialId, payload) {
    const { data: response, status: statusCode } = await this.#axios.put(`/materials/${materialId}`, payload)

    return { response, statusCode }
  }

  async deleteMaterial (materialId) {
    const { data: response, status: statusCode } = await this.#axios.delete(`/materials/${materialId}`)

    return { response, statusCode }
  }
}

module.exports = MaterialService
