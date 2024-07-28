document.querySelector("#Login").onclick = function validPassword() {
  const inputEmail = document.querySelector("#email").value;
  const inputPassword = document.querySelector("#password").value;
  var message = document.querySelector("#message");
  var color = document.querySelector("#message").style;
  if (inputEmail.includes("@" && ".com") == false) {
    color.color = "red";
    message.innerHTML = "The email isn't valid!";
  } else {
    if (inputPassword == "") {
      color.color = "red";
      message.innerHTML = "Your password is empty!";
    } else {
      color.color = "red";
      message.innerHTML = "Succesfuly logged in.";
    }
  }
};

document.querySelector(".material-symbols-outlined").onclick =
  function switchingEye() {
    if (
      document.querySelector("#password").getAttribute("type") == "password"
    ) {
      document.querySelector("#password").setAttribute("type", "text");
      document.querySelector(".material-symbols-outlined").innerHTML =
        "visibility_off";
    } else if (
      document.querySelector("#password").getAttribute("type") == "text"
    ) {
      document.querySelector("#password").setAttribute("type", "password");
      document.querySelector(".material-symbols-outlined").innerHTML =
        "visibility";
    }
  };
