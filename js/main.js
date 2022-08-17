// header

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// accordion

const accordion = document.getElementsByClassName("content-container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// form
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNode = document.querySelectorAll(".error");

function validateForm() {
  clearMessages();
  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorNode[0].innerText = "Name cannot be blank";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if (!emailIsValid(email.value)) {
    errorNode[1].innerText = "Invalid Email Address";
    email.classList.add("error-border");
    errorFlag = true;
  }

  if (message.value.length < 1) {
    errorNode[2].innerText = "Please enter the message";
    message.classList.add("error-border");
    errorFlag = true;
  }

  if (!errorFlag) {
    success.innerText = "Success!";
  }
}

function clearMessages() {
  for (let i = 0; i < errorNode.length; i++) {
    errorNode[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}
