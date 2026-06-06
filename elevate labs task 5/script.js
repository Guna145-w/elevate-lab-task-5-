// Hamburger Menu

const menuToggle =
document.getElementById("menu-toggle");

const navbar =
document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Dark Mode

const themeBtn =
document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️";
    }
    else{
        themeBtn.innerHTML = "🌙";
    }

});

// Image Slider

const images = [
"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200",
"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200",
"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200"
];

let current = 0;

setInterval(() => {

    current++;

    if(current >= images.length){
        current = 0;
    }

    document.getElementById("slider-img").src =
    images[current];

}, 3000);

// Form Validation

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let message =
    document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields.");
        return;
    }

    alert("Message Sent Successfully!");
});

// SpaceX API

fetch("https://api.spacexdata.com/v4/launches/latest")
.then(response => response.json())
.then(data => {

    document.getElementById("launch-data")
    .innerHTML = `
        <h3>${data.name}</h3>
        <p><strong>Date:</strong> ${data.date_utc}</p>
    `;

})
.catch(error => {

    document.getElementById("launch-data")
    .innerHTML =
    "Unable to load SpaceX data.";

});