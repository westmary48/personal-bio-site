import $ from 'jquery';

const createProjectCards = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    newString += '<div class ="statement">';
    newString += `<h6>${project.title}</h6>`;
    newString += `<img>${project.screenshot}</img>`;
    newString += `<h6>${project.description}</h6>`;
    newString += `<h6>${project.technologiesUsed}</h6>`;
    newString += `<h6>${project.available}</h6>`;
    newString += `<a href=${project.url}>Click here</a>`;
    newString += `<h6>${project.githubUrl}</h6>`;
    newString += '</div>';
    //   if (project.available === true) {
    $('#projectsPage').html(newString);
  });
};

// const initializeProjectsView = () => {
//   projectsData.getAllProjectsDb().then((data) => {
//     createProjectCards(data.data);
//   }).catch((error) => {
//     console.error(error);
//   });
// };
export default createProjectCards;
