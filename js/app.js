var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});



//START FOOTER
const getyear = document.getElementById("getyear");

const date = new Date();

getyear.innerText = date.getFullYear();

//End Footer













