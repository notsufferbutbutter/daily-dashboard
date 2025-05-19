const form = document.getElementById("form");
const inputName = document.querySelector("form input");
const greeting =  document.getElementById("greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"


function onSubmit(event) {
    event.preventDefault();
    usernameInput = inputName.value
    localStorage.setItem("USERNAME_KEY", usernameInput)
    form.classList.add(HIDDEN_CLASSNAME)
    showGreeting(usernameInput)
}

function showGreeting(usernameInput) {
    greeting.innerText = `Hello ${usernameInput}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}


const username = localStorage.getItem("USERNAME_KEY")
if(username === null) {
    form.classList.remove(HIDDEN_CLASSNAME)
    form.addEventListener("submit", onSubmit);
} 
else if(username != null) {
    showGreeting(username)
}

