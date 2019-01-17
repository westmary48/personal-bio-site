import $ from 'jquery';
import 'bootstrap';
import './tech.scss';
import ajax from '../../images/AJAX.png';
import boot from '../../images/BOOT.svg';
import css from '../../images/CSS3.png';
import fb from '../../images/firebase.png';
import git from '../../images/git.png';
import github from '../../images/github.png';
import html5 from '../../images/html.png';
import jq from '../../images/jquery2.png';
import js from '../../images/js.jpg';
import npm from '../../images/npm.png';
import r from '../../images/react.png';
import sass from '../../images/Sass.png';
import web from '../../images/theweb.png';

const techPage = () => {
  const techString = `
  <h1 id="tech-header">TECHNOLOGIES</h1>
  <div id=tech-icons>
  <img id="tech1" src="${ajax}" alt="AJAX">
  <img id="tech1" src="${boot}" alt="Bootstrap">
  <img id="tech1" src="${css}" alt="CSS">
  <img id="tech1" src="${fb}" alt="Firebase">
  <img id="tech1" src="${git}" alt="Git">
  <img id="tech1" src="${github}" alt="Github">
  <img id="tech1" src="${html5}" alt="HTML 5">
  <img id="tech1" src="${js}" alt="JavaScript">
  <img id="tech1" src="${jq}" alt="jQuery">
  <img id="tech1" src="${npm}" alt="NPM">
  <img id="tech1" src="${r}" alt="React">
  <img id="tech1" src="${sass}" alt="SASS">
  <img id="tech1" src="${web}" alt="Webpack">
  </div>
 `;
  $('#technologiesPage').html(techString);
};

export default techPage;
