import firebase from 'firebase/app';

import apiKeys from '../db/apiKeys.json';

import createProjectCards from '../javascripts/components/project';
import getAllProjectsDb from '../javascripts/data/projectsData';
import addEvents from '../javascripts/helpers/events';

const getAllProjects = () => {
  getAllProjectsDb.getAllProjectsDb()
    .then((allProjectsArray) => {
      createProjectCards(allProjectsArray);
    })
    .catch((error) => {
      console.error('Error in getting teams', error);
    });
};

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  addEvents();
  getAllProjects();
};

export default initializeApp;
