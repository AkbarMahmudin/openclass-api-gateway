const axios = require('axios')

class MyClassroomService {
  #axios
  #baseUrl = process.env.CLASSROOM_SERVICE_URL
  #timeout = process.env.TIMEOUT || 5000 // == 5s

  constructor () {
    this.#axios = axios.create({
      baseURL: this.#baseUrl,
      timeout: this.#timeout
    })
    this.url = '/my-classrooms'

    this.saveClassroom = this.saveClassroom.bind(this)
    this.getMyClassroom = this.getMyClassroom.bind(this)
    this.deleteMyClassroom = this.deleteMyClassroom.bind(this)
  }

  async saveClassroom (payload) {
    const { data: response, status: statusCode } = await this.#axios.post(this.url, payload)

    return { response, statusCode }
  }

  async getMyClassroom (userId) {
    const { data: response, status: statusCode } = await this.#axios.get(this.url, { userId })

    return { response, statusCode }
  }

  async deleteMyClassroom (myClassroomId, userId) {
    const { data: response, status: statusCode } = await this.#axios.delete(`${this.url}/${myClassroomId}`, {
      data: { userId }
    })

    return { response, statusCode }
  }
}

module.exports = MyClassroomService
