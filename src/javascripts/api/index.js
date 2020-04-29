const isDev = process.env.NODE_ENV === 'development';
const API_URL = isDev ? (process.env.DEV_API || '') : '/api';

module.exports = {
  getPhotos: () => fetch(`${API_URL}/galleries`).then(resp => resp.json()),
};