function validateForm(e) {
  const nickname = document.getElementById("nickname").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;
  const password = document.getElementById("password").value;
  const terms = document.getElementById("terms").checked;
  e.preventDefault();

  if (
    nickname.length === 0 ||
    email.length === 0 ||
    dob.length === 0 ||
    password.length === 0 ||
    !terms
  ) {
    alert(" Please fill in all the fields.");
    return false;
  }

  if (nickname.length === 0) {
    alert("Name field cannot be empty.");
    return false;
  }

  if (email.indexOf("@") === -1 || email.indexOf(".com") === -1) {
    alert("Email address must be valid (example@example.com).");
    return false;
  }

  if (dob.length === 0) {
    alert("Date of birth must be filled.");
    return false;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  if (!terms) {
    alert("Please agree to the terms and conditions.");
    return false;
  }

  document.getElementById("nickname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("password").value = "";
  document.getElementById("terms").checked = false;

  return true;
}
