// script.js

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color
function changeBackgroundColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
}

// Add onclick event to call changeBackgroundColor() function
document.addEventListener('click', changeBackgroundColor);


const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
let currentIndex = 0;

const nameDisplay = document.getElementById("name-display");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");

function updateNameDisplay() {
    nameDisplay.textContent = names[currentIndex];
}

function showNextName() {
    currentIndex = (currentIndex + 1) % names.length;
    updateNameDisplay();
}

function showPreviousName() {
    currentIndex = (currentIndex - 1 + names.length) % names.length;
    updateNameDisplay();
}

previousBtn.addEventListener("click", showPreviousName);
nextBtn.addEventListener("click", showNextName);

// Initial display
updateNameDisplay();
