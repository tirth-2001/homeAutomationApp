import axios from 'axios'
import config from '../config'

class BackendService {
  async getSecurityStatus() {
    const response = await axios.get(`${config.BACKEND_API}/security`)
    return response.data
  }

  async updateSecurityStatus() {
    return await axios.put(`${config.BACKEND_API}/security`)
  }

  async updateBulbStatus() {
    return await axios.put(`${config.BACKEND_API}/bulb`)
  }

  async getSnapshot() {
    return await axios.get(`${config.BACKEND_API}/snapshot`)
  }

  async getTemp() {
    return await axios.get(`${config.BACKEND_API}/device-info`)
  }
}

export default new BackendService()
