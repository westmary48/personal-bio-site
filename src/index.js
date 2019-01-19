// import $ from 'jquery';
import 'bootstrap';
import firebase from 'firebase/app';
import './index.scss';

import apiKeys from '../db/apiKeys.json';

import events from './helpers/data/events';
import createProjectCards from './components/Projects/project';
import getAllProjectsFromDb from './helpers/data/projectsData';

const getAndPrintAllProjects = () => {
  getAllProjectsFromDb()
    .then((allProjectsArray) => {
      createProjectCards(allProjectsArray);
    })
    .catch((error) => {
      console.error('Error in getting projects', error);
    });
};

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  events.setEvents();
  getAndPrintAllProjects();
};

initializeApp();
