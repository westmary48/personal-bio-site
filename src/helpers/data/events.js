import $ from 'jquery';


const home = () => {
  $('#home').click(() => {
    const e = document.getElementById('home');
    e.addEventListener('click', () => { window.location.reload(); });
  });
};

const hideNonBioStuff = () => {
  $('#navToBio').click(() => {
    $('#bioPage').show();
    $('#projectsPage').hide();
    $('#technologiesPage').hide();
    $('#Projects').hide();
    $('#Bio').show();

  });
};

const hideNonTechStuff = () => {
  $('#navToTechnologies').click(() => {
    $('#bioPage').hide();
    $('#projectsPage').hide();
    $('#technologiesPage').show();
    $('#Projects').hide();
    $('#Bio').hide();

  });
};


const hideNonProjectStuff = () => {
  $('#navToProjects').click(() => {
    $('#bioPage').hide();
    $('#projectsPage').show();
    $('#technologiesPage').hide();
    $('#Projects').show();
    $('#Bio').hide();

  });
};


const setEvents = () => {
  hideNonTechStuff();
  hideNonBioStuff();
  hideNonProjectStuff();
  home();
};

export default { setEvents };
