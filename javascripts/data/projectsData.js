import $ from 'jquery';

const loadLocations = () => {
  const projectsPromise = new Promise((resolve, reject) => {
    $.get('http://localhost:8088/')
      .done((data) => {
        resolve(data);
      })
      .fail((error) => {
        reject(error);
      });
  });

  return projectsPromise;
};