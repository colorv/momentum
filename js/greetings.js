const loginform = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintUserName(user) {
  loginform.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello , ${user}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintUserName(userName);
}
function userFind() {
  const localUserName = localStorage.getItem(USERNAME_KEY);
  if (localUserName !== null) {
    paintUserName(localUserName);
  } else {
    loginform.addEventListener("submit", onLoginSubmit);
  }
}

userFind();
