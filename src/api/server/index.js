import axios from 'axios'

export default {
  fetchList () {
    console.log('Serve')
    return axios
      .get('https://jsonplaceholder.typicode.com/')
      .then(response => response.data)
  }
}
