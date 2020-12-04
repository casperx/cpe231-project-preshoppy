import axios from 'axios';

const client = axios.create(
  {
    baseURL: 'https://afternoon-cove-79461.herokuapp.com/api'
  }
);

const Event = {
  getAll() {
    return client.get('/Events/getEvents');
  }
}

export { Event };
