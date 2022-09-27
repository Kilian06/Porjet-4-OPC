function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeConst = document.getElementById("closeModal");
const inputFirst = document.getElementById("first");
const inputLast = document.getElementById("last");
const inputEmail = document.getElementById("email");
const inputBirthdate = document.getElementById("birthdate");
const inputQuantity = document.getElementById("quantity");
const inputCheckbox1 = document.getElementById("checkbox1");
const inputCheckbox2 = document.getElementById("checkbox2")


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Fermeture de la mal et reset valeur input
closeConst.addEventListener('click', event => {
  console.log("ok")
  modalbg.style.display="none"
  inputFirst.value='';
  inputLast.value='';
  inputEmail.value='';
  inputBirthdate.value='';
  inputQuantity.value='';
})
  

