// 첫번째 입력 
const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser"; // localstorage
const SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}


function handleSubmit(event) {
  event.preventDefault(); // submit 으로 인한 새로고침 제거
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN)
  form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN)  // 입력하고 난 후input은 제거
  greeting.classList.add(SHOWING_CN) // className 추가 
  greeting.innerText = `${text}님의 ToDoList!!`
}

// localstorage 값 읽어오기
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