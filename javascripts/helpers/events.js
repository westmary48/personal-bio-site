import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import {createProjectCards} from './projects.js'

const projectEvent = () => {
    $('#navToBio').on('click',(event)=>{
        $('#technologiesPage').hide()
        $('#projectsPage').show()
        $('#bioPage').hide()
    })
}

const bioEvent = () => {
    $('#navToProjects').on('click',(event)=>{
        $('#technologiesPage').hide()
        $('#projectsPage').hide()
        $('#bioPage').show()
    })
}
const techEvent = () => {
    $('#navToTechnologies').on('click',(event)=>{
        $('#technologiesPage').show()
        $('#projectsPage').hide()
        $('#bioPage').hide()
    })
}
// const bioEvent = () => {
//     $('#navToProjects').on('click',()=>{
//         $('#technologiesPage').closest('fullPage').hide()
//         $('#projectsPage').closest('fullPage').hide()
//         $('#bioPage').closest('fullPage').show()
//     })
// }
const addEvents = () => {
    bioEvent();
    projectEvent();
    techEvent();
    createProjectCards();

};

addEvents()

// const bioEvent = () => {
//     document.getElementById('navToBio').addEventListener('click', function(event) {
//         event.preventDefault()
//         document.getElementById('technologiesPage').classList.add('hideStuff')
//         document.getElementById('projectsPage').classList.add('hideStuff')
//         document.getElementById('bioPage').classList.remove('hideStuff')
//     })
// };
// const projectEvent = () => {
//     document.getElementById('navToProjects').addEventListener('click', function(event) {
//         event.preventDefault()
//         document.getElementById('technologiesPage').classList.add('hideStuff')
//         document.getElementById('projectsPage').classList.remove('hideStuff')
//         document.getElementById('bioPage').classList.add('hideStuff')
//     })
// };
// const techEvent = () => {
//     document.getElementById('navToTechnologies').addEventListener('click', function(event) {
//         event.preventDefault()
//         document.getElementById('bioPage').classList.add('hideStuff')
//         document.getElementById('projectsPage').classList.add('hideStuff')
//         document.getElementById('technologiesPage').classList.remove('hideStuff')
//     })
// };



// const addEvents = () => {
//     bioEvent();
//     projectEvent();
//     techEvent();
// };

// addEvents();

export default addEvents;