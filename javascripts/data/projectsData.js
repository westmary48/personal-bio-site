import axios from 'axios';

const loadProjects = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:8088/')
    .done((data) => {
      resolve(data);
    })
    .fail((error) => {
      reject(error);
    });
});

export default loadProjects;
