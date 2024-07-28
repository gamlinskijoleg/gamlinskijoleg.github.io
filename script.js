document.querySelector("#Signup").onclick = function validPassword() {
  const inputEmail = document.querySelector("#email").value;
  const inputPassword = document.querySelector("#password").value;
  const inputConfPassword = document.querySelector("#confirm-password").value;
  var message = document.querySelector("#message");
  var color = document.querySelector("#message").style;
  if (inputEmail.includes("@" && ".com") == false) {
    color.color = "red";
    message.innerHTML = "The email isn't valid!";
  } else {
    if (inputPassword == "" || inputConfPassword == "") {
      color.color = "red";
      message.innerHTML = "Your password is empty!";
    } else {
      if (inputConfPassword == inputPassword) {
        color.color = "red";
        message.innerHTML = "Succesfuly signed up.";
      } else {
        color.color = "red";
        message.innerHTML = "Your passwords don't match!";
      }
    }
  }
};

document.querySelector(".material-symbols-outlined").onclick = function () {
  if (
    document.querySelector("#confirm-password").getAttribute("type") ==
    "password"
  ) {
    document.querySelector("#confirm-password").setAttribute("type", "text");
    document.querySelector(".material-symbols-outlined").innerHTML =
      "visibility_off";
  } else if (
    document.querySelector("#confirm-password").getAttribute("type") == "text"
  ) {
    document
      .querySelector("#confirm-password")
      .setAttribute("type", "password");
    document.querySelector(".material-symbols-outlined").innerHTML =
      "visibility";
  }
};
