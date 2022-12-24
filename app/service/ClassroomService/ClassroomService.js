const axios = require('axios')

class ClassroomService {
  #axios
  #baseUrl = process.env.CLASSROOM_SERVICE_URL
  #timeout = process.env.TIMEOUT || 5000 // == 5s

  constructor () {
    this.#axios = axios.create({
      baseURL: this.#baseUrl,
      timeout: this.#timeout
    })

    this.getClassroom = this.getClassroom.bind(this)
    this.createClassroom = this.createClassroom.bind(this)
    this.updateClassroom = this.updateClassroom.bind(this)
    this.deleteClassroom = this.deleteClassroom.bind(this)
  }

  async getClassroom (classroomId, query) {
    let url = '/classrooms'

    if (classroomId) {
      url += `/${classroomId}`
    }

    if (query) {
      query.owner && (url += `?owner=${query.owner}`)
    }
    const { data: response, status: statusCode } = await this.#axios.get(url)

    return { response, statusCode }
  }

  async createClassroom (payload) {
    const url = '/classrooms'

    const { data: response, status: statusCode } = await this.#axios.post(url, payload)

    return { response, statusCode }
  }

  async updateClassroom (classroomId, payload) {
    const url = `/classrooms/${classroomId}`

    const { data: response, status: statusCode } = await this.#axios.put(url, payload)

    return { response, statusCode }
  }

  async deleteClassroom (classroomId, ownerId) {
    const url = `/classrooms/${classroomId}?owner=${ownerId}`

    const { data: response, status: statusCode } = await this.#axios.delete(url)

    return { response, statusCode }
  }
}

module.exports = ClassroomService
