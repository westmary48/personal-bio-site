import $ from 'jquery';
import './projects.scss';


const createProjectCards = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    newString += '<div class="fullPage">';
    newString += `<h3>${project.title}</h3>`;
    newString += `<img src="${project.screenshot}"></>`;
    newString += `<p>${project.description}</p>`;
    newString += `<p>${project.technologiesUsed}</p>`;

    newString += `<a href=${project.url}>Click here to go
 to the demo</a><br><br>`;
    newString += `<a href=${project.githubUrl}>Click here to
 go to this project's repository</a><br><br>`;
    newString += '</div>';
    $('#projectsPage').html(newString);
  });
};


export default createProjectCards;
