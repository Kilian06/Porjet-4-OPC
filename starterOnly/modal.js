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
const contentForm = document.querySelector(".content");
const submitBtn = document.querySelector(".btn-submit");
const viewContentSucess = document.querySelector(".contentsucess");



var inputFirst = document.getElementById("first");
var inputLast = document.getElementById("last");
var inputEmail = document.getElementById("email");
var inputBirthdate = document.getElementById("birthdate");
var inputQuantity = document.getElementById("quantity");
var inputLocation = document.querySelectorAll('input[name="location"]');
var inputCheckbox1 = document.getElementById("checkbox1");
var inputCheckbox2 = document.getElementById("checkbox2");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  console.log("ouverture de la modal");
}

submitBtn.addEventListener("click", verifForm);

// Vérification unitaire onchange
function verifForm(){
  var modalHeight = document.querySelector(".content").clientHeight;
  console.log(modalHeight);
  console.log("Vérification du formulaire de la modal");

  //Défniition des Regex

  const mailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const birthdateRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
  const QuantityRegex = /^[0-9]+$/;

// Vérification du prénom

  if(inputFirst.value.length < 2){
    var inputFirsterr = ("Le Prenom saisie n'est pas valide.\n");
    console.log(inputFirsterr);
    var inputFirsterrMsg = document.getElementById("prenomErr");
    inputFirsterrMsg.style.display ="block";
  }
  else{
    var inputFirsterr = "";
    let inputFirsterrMsg = document.getElementById('prenomErr');
    inputFirsterrMsg.style.display ="none";
  }

// Vérification du nom
  if(inputLast.value.length < 2){
    var inputLasterr = ("Le nom saisie n'est pas valide.\n");
    console.log(inputLasterr)
    let inputLasterrMsg = document.getElementById('nomErr');
    inputLasterrMsg.style.display ="block";
  }
  else{
    var inputLasterr = ""
    let inputLasterrMsg = document.getElementById('nomErr');
    inputLasterrMsg.style.display ="none";
  }

// Vérification du mail
  let testMail = inputEmail.value;
  var resultTestMail = mailregex.test(testMail)
  if(resultTestMail === true){
    var inputEmailErr = ""
    let inputMailerrMsg = document.getElementById('emailErr');
    inputMailerrMsg.style.display ="none";
  }
  else
  {
    var inputEmailErr = "L'email saisi n'est pas valide\n"
    console.log(inputEmailErr);
    let inputMailerrMsg = document.getElementById('emailErr');
    inputMailerrMsg.style.display ="block";
  }
// Vérification de la date de naissance
  let testDate = inputBirthdate.value;
  var resultTestDate = birthdateRegex.test(testDate)
  if(resultTestDate === true){
    var inputDateErr = ""
    let inputDateerrMsg = document.getElementById('birthdateErr');
    inputDateerrMsg.style.display ="none";}
    else
    {
      var inputDateErr = "La date saisie n'est pas valide.\n"
      console.log(inputDateErr)
      console.log(inputBirthdate.value);
      let inputDateerrMsg = document.getElementById('birthdateErr');
      inputDateerrMsg.style.display ="block";
  
    }
// Vérificagtion de la présence qu'une quantité
    let testqt = inputQuantity.value;
    var resultTestQt = QuantityRegex.test(testqt)
    if(resultTestQt === true){
      
      var inputQuantityErr = ""
      let inputQuantityErrMsg = document.getElementById('quantityErr');
      inputQuantityErrMsg.style.display ="none";
    }
      else
      {
        var inputQuantityErr = "La quantité saisie n'est pas valide\n"
        console.log(inputQuantityErr);
        let inputQuantityErrMsg = document.getElementById('quantityErr');
        inputQuantityErrMsg.style.display ="block";
    
      }
// Vérification de la selection d'une localisation
      if(document.querySelectorAll('input[name="location"]:checked').length > 0){
      var inputLocationErr = ""
      let inputLocationErrMsg = document.getElementById('locationErr');
      inputLocationErrMsg.style.display ="none";
      }
      else{
        var inputLocationErr = "Selectionner une ville\n"
        let inputLocationErrMsg = document.getElementById('locationErr');
        inputLocationErrMsg.style.display ="block";
      }

// Vérification de la checkbox 1

    if(inputCheckbox1.checked === true){
      var inputCheckbox1Err = ""
      let inputCheckbox1ErrMsg = document.getElementById('checkbox1Err');
      inputCheckbox1ErrMsg.style.display ="none";
    }else{
      var inputCheckbox1Err = "Veuillez accepter les conditions d'utilisation";
      console.log(inputCheckbox1Err);
      let inputCheckbox1ErrMsg = document.getElementById('checkbox1Err');
      inputCheckbox1ErrMsg.style.display ="block";
    };


    if(inputFirsterr + inputLasterr +inputEmailErr + inputDateErr + inputQuantityErr + inputLocationErr + inputCheckbox1Err === "")
    {
      
      console.log(modalHeight);
      viewContentSucess.style.height = modalHeight+"px";
      viewContentSucess.style.paddingTop = modalHeight / 2+"px";
      contentForm.style.display="none";
      viewContentSucess.style.display="block";
      console.log("normalement j'affiche que c'est bien recu")
      setTimeout(() => {
        console.log("Fermeture de la popin de confirmation");
        modalbg.style.display="none";
        contentForm.style.display="block";
        viewContentSucess.style.display="none";
      },3000)

    }
    else{
      alert(inputFirsterr + inputLasterr +inputEmailErr + inputDateErr + inputQuantityErr + inputLocationErr + inputCheckbox1Err)
    };
  }

// Fermeture de la modal
closeConst.addEventListener('click', event => {
  console.log("ok")
  modalbg.style.display="none"
})

