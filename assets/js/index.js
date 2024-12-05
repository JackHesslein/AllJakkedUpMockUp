//declare variables for each image that we want to link to a URL
const AJU = document.querySelector('.pfp');
const tSwift = document.querySelector('.pic1');
const whatThe = document.querySelector('.pic2');
const moonLanding = document.querySelector('.pic3');
const knife = document.querySelector('.pic4');
const toes = document.querySelector('.pic5');
const roadRage = document.querySelector('.pic6');


if (AJU) {
    AJU.addEventListener('click', () => {
        window.open('https://www.youtube.com/@AllJakkedUpPod');
    });
}

if (tSwift) {
    tSwift.addEventListener('click', () => {
        window.open('https://www.youtube.com/watch?v=F8iHWHt6HVM&t=37s');
    });
}

if (whatThe) {
    whatThe.addEventListener('click', () => {
        window.open('https://www.youtube.com/watch?v=Iem1ecq5EK8&t=29s');
    });
}

if (moonLanding) {
    moonLanding.addEventListener('click', () => {
      window.open('https://www.youtube.com/watch?v=yYYkzjNmIa8&t=588s');
    });
}

if (knife) {
    knife.addEventListener('click', () => {
        window.open('https://www.youtube.com/watch?v=ZIGW0J5NH0s&t=22s');
    });
}

if (toes) {
    toes.addEventListener('click', () => {
      window.open('https://www.youtube.com/watch?v=rE6OcWIX7pc&t=25s');
    });
}

if (roadRage) {
    roadRage.addEventListener('click', () => {
        window.open('https://www.youtube.com/watch?v=yqviWe0kvYM&t=266s');
    });
}

document.querySelector("form").onsubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Log to the console to confirm the event is firing
    console.log("Form submission prevented!");

    // Show an alert to the user
    alert("Thank you for joining the email list!");

    // Clear the form
    event.target.reset();
};

function saveFormToLocalStorage () {

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
};

localStorage.setItem("formData", JSON.stringify(formData));
};