// 투두리스트 년도 시간 표시 
const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");

clockTitle.style.color = "#fff";

function getTime() {
  const date = new Date();
  const years = date.getFullYear();
  const months = date.getMonth();
  const days = date.getDay();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${years}년 ${months < 10 ? 
    `0${months}` : months}월 ${days < 10 ? `0${days}` : days }일 \n ${hours < 10 ?  
      `0${hours}` : hours}시 : ${minutes < 10 ? 
      `0${minutes}` : minutes }분 : ${seconds < 10 ? 
        `0${seconds}` : seconds}초`;
}

function init() {
  getTime();
  setInterval(getTime, 1000)
}
init()