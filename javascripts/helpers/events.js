import $ from 'jquery';

const projectEvent = () => {
    $('#navToBio').on('click',()=>{
        $('#technologiesPage').closest('navLinks').hide()
        $('#projectsPage').closest('navLinks').show()
        $('#bioPage').closest('navLinks').hide()
    })
}

const bioEvent = () => {
    $('#navToProjects').on('click',()=>{
        $('#technologiesPage').closest('navLinks').hide()
        $('#projectsPage').closest('navLinks').hide()
        $('#bioPage').closest('navLinks').show()
    })
}
const techEvent = () => {
    $('#navToTechnologies').on('click',()=>{
        $('#technologiesPage').closest('navLinks').show()
        $('#projectsPage').closest('navLinks').hide()
        $('#bioPage').closest('navLinks').hide()
    })
}
const addEvents = () => {
    bioEvent();
    projectEvent();
    techEvent();
};

export default addEvents;