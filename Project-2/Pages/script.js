let count = 0;

const DisplayList = () => {
    let ulItems = document.querySelector(".ul");
    if (count === 0) {
        ulItems.style.display = "flex";
        count++;
    } else {
        ulItems.style.display = "none";
        count--;
    }
};

// Select elements
const locationElement = document.querySelector("#location"); // Corrected ID for location
const nameElement = document.querySelector("#name");

// Retrieve data from localStorage and set it to the elements
locationElement.textContent = localStorage.getItem("Location") || "Unknown Location";
nameElement.textContent = localStorage.getItem("Name") || "Anonymous";

// Optionally log for debugging
console.log(localStorage.getItem("Name"));
console.log(localStorage.getItem("Location"));



// log out ke liye hai ye
let isVisible = false; 
const toggleLogout = () => {
    const log = document.querySelector("#logout");
    if (!isVisible) {
        log.style.display = "flex"; 
        isVisible = true; 
    } else {
        log.style.display = "none"; 
        isVisible = false; 
    }
};


const ClosePage=()=>{
    localStorage.clear()
     location.href = "../Login.html";
}