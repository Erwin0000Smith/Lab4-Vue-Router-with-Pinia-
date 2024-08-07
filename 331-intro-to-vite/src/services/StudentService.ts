import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/phiriya652115030/mock-server-2/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
//getStudents
export default {
  getEvents() {
    return apiClient.get('/students')
  }
}