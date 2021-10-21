/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let section3 = document.getElementById('section3');

let navSection1 = document.getElementById('nav-section1');
let navSection2 = document.getElementById('nav-section2');
let navSection3 = document.getElementById('nav-section3');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

/* -------------------------------- */

// open/close the nav bar list when you press on the toggle button
function openMenu() {
    let ulState = document.getElementById("navbar__list");
    
    if (ulState.style.display == '') {
        ulState.style.display = 'block';
    } else {
        ulState.style.display = '';
    }
}

// when you click on sections in the nav bar
document.addEventListener('click', function(e) {
    if (e.target.id == "nav-section1") {
        section1.scrollIntoView({behavior: "smooth"});
    } else if (e.target.id == "nav-section2") {
        section2.scrollIntoView({behavior: "smooth"});
    } else if (e.target.id == "nav-section3") {
        section3.scrollIntoView({behavior: "smooth"});
    }
});

// avtivating the section in the nav bar while scrolling
document.addEventListener('scroll', function() {
    // subtracting from 40 (the heigth of the nav bar)
    if (window.scrollY >= section1.offsetTop - 40 && window.scrollY < section2.offsetTop - 40) {
        navSection1.className = 'active';
        navSection2.className = '';
        navSection3.className = '';
    } else if (window.scrollY >= section2.offsetTop - 40 && window.scrollY < section3.offsetTop - 40) {
        navSection1.className = '';
        navSection2.className = 'active';
        navSection3.className = '';
    } else if (window.scrollY >= section3.offsetTop - 40 && window.scrollY < section3.offsetTop + section3.offsetHeight - 40) {
        navSection1.className = '';
        navSection2.className = '';
        navSection3.className = 'active';
    } else {
        navSection1.className = '';
        navSection2.className = '';
        navSection3.className = '';
    }
});