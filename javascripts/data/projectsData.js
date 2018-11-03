import $ from 'jquery';

const loadLocations = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:8088/')
    .done((data) => {
      resolve(data);
    })
    .fail((error) => {
      reject(error);
    });
});

import axios from 'axios';

