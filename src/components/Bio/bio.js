import $ from 'jquery';
import './aboutMe.scss';


const introBuilder = () => {
  let domString = '';
  domString += `<div>
   <h1>Mary West</h1>
   <hr>
   <h3>Software Developer</h3>
   </div>`;
  $('#intro').html(domString);
};

const bioBuilder = () => {
  let domString = '';
  domString += `<div>
  <div id='aboutHeader'>
   <h1>About Me</h1>
  </div>
  <hr>
  <div id='bioImage'>
  <img class='card-img-bio' src="${bioPhoto}">
  <div id='bioText'>
  <p>I am an aspiring software devleloper who comes from a sales background. I work at Aspire Health as a patient enrollment
  specialist and was just accepted into the accelerated program for becoming a supervisor at my current position. Prior
  to working at Aspire, I worked for a non profit called CenterStone and was a realtor. I would lke to be a front-end
  developer. I am looking for a career that keeps me on my toes and gives me the opportunity to grow and learn. I love
  that I am able to be creative and think critically. I enjoy solving problems. I have always been intrigued as to how
  much technology has changed and helps billions of peoples lives. Through virtual schools to connecting familys on social
  media technology is changing the way we think and do. I want to be a part of the industrial revoltuation and contribute
  to the change and evolution of the world.
  </p>
  </div>
  </div>
   </div>`;
  $('#bioPage').html(domString);
};


const initializeIntroPage = () => {
  introBuilder();
  bioBuilder();
};

export default initializeIntroPage;
