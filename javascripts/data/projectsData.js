import $ from 'jquery';

const loadLocations = () => {
  const projectsPromise = new Promise((resolve, reject) => {
    $.get('http://localhost:3004/locations')
      .done((data) => {
        resolve(data);
      })
      .fail((error) => {
        reject(error);
      });
  });

  return projectsPromise;
};