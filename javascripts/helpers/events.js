import $ from 'jquery';
import 'bootstrap';
import './index.scss';

const projectEvent = () => {
    $('#navToBio').on('click',()=>{
        $('#technologiesPage').closest('fullPage').hide()
        $('#projectsPage').closest('fullPage').show()
        $('#bioPage').closest('fullPage').hide()
    })
}

const bioEvent = () => {
    $('#navToProjects').on('click',()=>{
        $('#technologiesPage').closest('fullPage').hide()
        $('#projectsPage').closest('fullPage').hide()
        $('#bioPage').closest('fullPage').show()
    })
}
const techEvent = () => {
    $('#navToTechnologies').on('click',()=>{
        $('#technologiesPage').closest('fullPage').show()
        $('#projectsPage').closest('fullPage').hide()
        $('#bioPage').closest('fullPage').hide()
    })
}
const addEvents = () => {
    bioEvent();
    projectEvent();
    techEvent();
};

addEvents()

export default {addEvents};