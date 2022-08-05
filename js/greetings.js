const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}



function paintGreetings(username) {
  greeting.innerText = `반가워요 ! "${username}"`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}




//사용자 이름 수정, 로컬스토리지-html출력내용 삭제 후 빈 배열 추가, 로그인 폼 히든 속성 제거
function cleanUsername() {
  localStorage.removeItem("username")
  document.querySelector("h1").innerHTML = '';
  username = [];
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}

function changeUsername() {
  document.getElementById("greeting").addEventListener("click",cleanUsername())
}
