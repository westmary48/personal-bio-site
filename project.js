

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const createProjectCards = () => {
    let newString = '';
    for(let i=0; i<projects.length; i++){
        newString += `<div class ="statement">`;
        newString += `<h6>${projects[i].title}</h6>`;
        newString += `<img>${projects[i].screenshot}</img>`;
        newString += `<h6>${projects[i].description}</h6>`;
        newString += `<h6>${projects[i].technologiesUsed}</h6>`;
        newString += `<h6>${projects[i].available}</h6>`;
        newString += `<a href=${projects[i].url}>Click here</a>`;
        newString += `<h6>${projects[i].githubUrl}</h6>`;
        newString += `</div>`;
        if (projects[i].available === true) {
        printToDom(newString, 'projectsPage');
        }
    }        
};
createProjectCards();

const bioEvent = () => {
    document.getElementById('navToBio').addEventListener('click', function(event) {
        event.preventDefault()
        document.getElementById('technologiesPage').classList.add('hideStuff')
        document.getElementById('projectsPage').classList.add('hideStuff')
        document.getElementById('bioPage').classList.remove('hideStuff')
    })
};
const projectEvent = () => {
    document.getElementById('navToProjects').addEventListener('click', function(event) {
        event.preventDefault()
        document.getElementById('technologiesPage').classList.add('hideStuff')
        document.getElementById('projectsPage').classList.remove('hideStuff')
        document.getElementById('bioPage').classList.add('hideStuff')
    })
};
const techEvent = () => {
    document.getElementById('navToTechnologies').addEventListener('click', function(event) {
        event.preventDefault()
        document.getElementById('bioPage').classList.add('hideStuff')
        document.getElementById('projectsPage').classList.add('hideStuff')
        document.getElementById('technologiesPage').classList.remove('hideStuff')
    })
};



const addEvents = () => {
    bioEvent();
    projectEvent();
    techEvent();
};

addEvents();





