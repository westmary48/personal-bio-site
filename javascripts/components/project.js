import $ from 'jquery';
import projectsData from '../data/projectsData';

const createProjectCards = (projects) => {
  let newString = '';
  for (let i = 0; i < projects.length; i += 1) {
    newString += '<div class ="statement">';
    newString += `<h6>${projects[i].title}</h6>`;
    newString += `<img>${projects[i].screenshot}</img>`;
    newString += `<h6>${projects[i].description}</h6>`;
    newString += `<h6>${projects[i].technologiesUsed}</h6>`;
    newString += `<h6>${projects[i].available}</h6>`;
    newString += `<a href=${projects[i].url}>Click here</a>`;
    newString += `<h6>${projects[i].githubUrl}</h6>`;
    newString += '</div>';
    if (projects[i].available === true) {
      $('#projectsPage').html(newString);
    }
  }
};

const initializeProjectsView = () => {
  projectsData.loadProjects().then((projects) => {
    createProjectCards(projects);
  }).catch((error) => {
    console.error(error);
  });
};
export default initializeProjectsView;
