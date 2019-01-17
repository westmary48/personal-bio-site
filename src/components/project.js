import $ from 'jquery';
import projectsData from '../data/projectsData';

const createProjectCards = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    if (project.available === true) {
      newString += `
    newString += <div class ="statement">;
    newString += <h6>${project.title}</h6>;
    newString += <img>${project.screenshot}</img>;
    newString += <h6>${project.description}</h6>;
    newString += <h6>${project.technologiesUsed}</h6>;
    newString += <h6>${project.available}</h6>;
    newString += <a href=${project.url}>Click here</a>;
    newString += <h6>${project.githubUrl}</h6>;
    newString += </div>`;
    }
    $('#projectsPage').html(newString);
  });
};

const initializeProjectsView = () => {
  projectsData.getAllProjectsDb().then((data) => {
    createProjectCards(data.data);
  }).catch((error) => {
    console.error(error);
  });
};
export default { createProjectCards, initializeProjectsView };
