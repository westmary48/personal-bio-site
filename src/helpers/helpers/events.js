import $ from 'jquery';
import 'bootstrap';

import initializeProjectsView from '../components/project';

const homePage = () => {
  $('#home').click(() => {
    const e = document.getElementById('home');// same thing
    e.addEventListener('click', () => { window.location.reload(); });
  });
};

const projectEvent = () => {
  $('#navToProjects').on('click', () => {
    $('#technologiesPage').hide();
    $('#projectsPage').show();
    $('#bioPage').hide();
  });
};

const bioEvent = () => {
  $('#navToBio').on('click', () => {
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#bioPage').show();
  });
};
const techEvent = () => {
  $('#navToTechnologies').on('click', () => {
    $('#technologiesPage').show();
    $('#projectsPage').hide();
    $('#bioPage').hide();
  });
};

const addEvents = () => {
  bioEvent();
  projectEvent();
  techEvent();
  initializeProjectsView();
  homePage();
};

addEvents();

export default addEvents;
