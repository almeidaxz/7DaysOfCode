import axios from 'axios';

export default axios.create({
    baseURL: 'https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw',
    timeout: 10000
});