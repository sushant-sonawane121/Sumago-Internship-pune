var form = document.getElementById("form");

var fname = document.getElementById("name").value.trim();
var email = document.getElementById("email").value.trim();
var phone = document.getElementById("phone").value.trim();
var gender = document.getElementById("gender").value.trim();
var message = document.getElementById("message").value.trim();

function validateForm(e) {
  e.preventDefault();

  if (
    fname === "" ||
    email === "" ||
    phone === "" ||
    gender === "" ||
    message === ""
  ) {
    alert("Please fill in all fields");
    return false;
  }

  alert(typeof phone);

  return true;
}
