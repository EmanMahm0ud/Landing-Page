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

// building nav bar dynamically  
let ul = document.getElementById('navbar__list');
for (let i = 0; i < 4; i++) {
    let newList = document.createElement('li');
    newList.id = 'nav-section' + String(i+1);
    newList.innerText = 'Section ' + String(i+1);
    
    ul.appendChild(newList);
}


// declaring variables
let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let section3 = document.getElementById('section3');
let section4 = document.getElementById('section4');

let navSection1 = document.getElementById('nav-section1');
let navSection2 = document.getElementById('nav-section2');
let navSection3 = document.getElementById('nav-section3');
let navSection4 = document.getElementById('nav-section4');

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
    } else if (e.target.id == "nav-section4") {
        section4.scrollIntoView({behavior: "smooth"});
    }
});

// avtivating the section in the nav bar while scrolling
document.addEventListener('scroll', function() {
    // subtracting from 40 (the heigth of the nav bar)
    if (section1.getBoundingClientRect().top < 40 && section1.getBoundingClientRect().bottom > 40) {
        navSection1.classList.add('active');
        navSection2.classList.remove('active');

        section1.classList.add('active');
        section2.classList.remove('active');
    } else if (section2.getBoundingClientRect().top < 40 && section2.getBoundingClientRect().bottom > 40) {
        navSection2.classList.add('active');
        navSection1.classList.remove('active');
        navSection3.classList.remove('active');

        section2.classList.add('active');
        section1.classList.remove('active');
        section3.classList.remove('active');
    } else if (section3.getBoundingClientRect().top < 40 && section3.getBoundingClientRect().bottom > 40) {
        navSection3.classList.add('active');
        navSection2.classList.remove('active');
        navSection4.classList.remove('active');

        section3.classList.add('active');
        section2.classList.remove('active');
        section4.classList.remove('active');
    } else if (section4.getBoundingClientRect().top < 40 && section4.getBoundingClientRect().bottom > 40) {
        navSection4.classList.add('active');
        navSection3.classList.remove('active');

        section4.classList.add('active');
        section3.classList.remove('active');
    } else {
        navSection1.classList.remove('active');
        navSection4.classList.remove('active');

        section1.classList.remove('active');
        section4.classList.remove('active');
    }
});