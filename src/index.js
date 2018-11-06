import 'jquery';
import 'bootstrap';
import './index.scss';

import createProjectCards from '../javascripts/components/project';
import addEvents from '../javascripts/helpers/events';

const initializeApp = () => {
  addEvents();
  createProjectCards();
};

export default initializeApp;
