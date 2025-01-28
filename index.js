// Select the elements
let homeGoal = document.getElementById('home');
let guestGoal = document.getElementById('guest');

// Separate score counters
let homeScore = 0;
let guestScore = 0;

// Home team functions
function add1PointHome() {
    homeScore += 1;
    homeGoal.textContent = homeScore; 
}

function add2PointHome() {
    homeScore += 2;
    homeGoal.textContent = homeScore;
}

function add3PointHome() {
    homeScore += 3;
    homeGoal.textContent = homeScore;
}

// Guest team functions
function add1PointGuest() {
    guestScore += 1;
    guestGoal.textContent = guestScore; 
}

function add2PointGuest() {
    guestScore += 2;
    guestGoal.textContent = guestScore;
}

function add3PointGuest() {
    guestScore += 3;
    guestGoal.textContent = guestScore;
}
