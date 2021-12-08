// 첫번째 입력 
const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}


function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN)
  form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN)
  greeting.classList.add(SHOWING_CN)
  greeting.innerText = `${text}`
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null) {
    // hi is not
    askForName();
  } else {
    // he is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init()