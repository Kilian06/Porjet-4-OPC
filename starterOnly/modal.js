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
var inputFirst = document.getElementById('first');
var inputLast = document.getElementById('last');
let inputEmail = document.getElementById('email');
const inputBirthdate = document.getElementById('birthdate');
const inputQuantity = document.getElementById('quantity');
const inputLocation = document.querySelectorAll('input[name="location"]');
const inputCheckbox1 = document.getElementById("checkbox1");
const inputCheckbox2 = document.getElementById("checkbox2")


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


  
//Défniition des Regex



// Vérification unitaire onchange
function verifForm(){
  const mailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const birthdateRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
const QuantityRegex = /^[0-9]+$/;
  if(inputFirst.value.length < 2){
    var inputFirsterr = ("Le Prenom saisie n'est pas valide.\n");
    console.log(inputFirsterr)
  }
  else{
    var inputFirsterr = "";
  }
  if(inputLast.value.length < 2){
    var inputLasterr = ("Le nom saisie n'est pas valide.\n");
    console.log(inputLasterr)
  }
  else{
    var inputLasterr = ""

  }
let testMail = inputEmail.value;
var resultTestMail = mailregex.test(testMail)
if(resultTestMail === true){
  var inputEmailErr = ""

  }
  else
  {
    var inputEmailErr = "L'email saisi n'est pas valide\n"
    console.log(inputEmailErr);

  }
  let testDate = inputBirthdate.value;
  var resultTestDate = birthdateRegex.test(testDate)
  if(resultTestDate === true){
    var inputDateErr = ""}
    else
    {
      var inputDateErr = "La date saisie n'est pas valide.\n"
      console.log(inputDateErr)
      console.log(inputBirthdate.value);
  
    }
    let testqt = inputQuantity.value;
    var resultTestQt = QuantityRegex.test(testqt)
    if(resultTestQt === true){
      
      var inputQuantityErr = ""
    }
      else
      {
        var inputQuantityErr = "La quantité saisie n'est pas valide\n"
        console.log(inputQuantityErr);
    
      }

      if(document.querySelectorAll('input[name="location"]:checked').length > 0){
      var inputLocationErr = ""
      }
      else{
        var inputLocationErr = "Selectionner une ville\n"
      }

      
    if(inputCheckbox1.checked === true){
      var inputCheckbox1Err = ""
    }else{
      var inputCheckbox1Err = "Veuillez accepter les conditions d'utilisation";
      console.log(inputCheckbox1Err);
    };
    if(inputFirsterr + inputLasterr +inputEmailErr + inputDateErr + inputQuantityErr + inputLocationErr + inputCheckbox1Err === "")
    {
console.log(inputFirsterr + inputLasterr +inputEmailErr + inputDateErr + inputQuantityErr + inputLocationErr + inputCheckbox1Err) 
    }
else{
  console.log(inputFirsterr + inputLasterr +inputEmailErr + inputDateErr + inputQuantityErr + inputLocationErr + inputCheckbox1Err) 

  alert(inputFirsterr + inputLasterr +inputEmailErr + inputDateErr + inputQuantityErr + inputLocationErr + inputCheckbox1Err)
    };
  }





// Fermeture de la mal et reset valeur input
closeConst.addEventListener('click', event => {
  console.log("ok")
  modalbg.style.display="none"
})


// function verifPrenom(){
//   if(inputFirst.value.length < 2){
//     var inputFirsterr = ("Le Prenom saisie n'est pas valide, il manque " + (2- inputFirst.value.length) +" caracteres");
//     console.log(inputFirsterr)
//   }
//   else{
//   }
// }

// function verifNom(){
//   if(inputLast.value.length < 2){
//     var inputLasterr = ("Le nom saisie n'est pas valide, il manque " + (2- inputLast.value.length) +" caracteres");
//     console.log(inputLasterr)
//   }
//   else{
//   }
// }

// function verifEmail(){
// let testMail = inputEmail.value;
// var resultTestMail = mailregex.test(testMail)
// if(resultTestMail === true){
//   }
//   else
//   {
//     var inputEmailErr = "L'email saisi n'est pas valide"
//     console.log(inputEmailErr);

//   }
// }

// function verifDate(){
//   let testDate = inputBirthdate.value;
//   var resultTestDate = birthdateRegex.test(testDate)
//   if(resultTestDate === true){
//     }
//     else
//     {
//       var inputDateErr = "La date saisie n'est pas valide"
//       console.log(inputDateErr);
  
//     }
//   }

//   function verifQt(){
//     let testqt = inputQuantity.value;
//     var resultTestQt = QuantityRegex.test(testqt)
//     if(resultTestQt === true){
//       }
//       else
//       {
//         var inputQuantityErr = "La quantité saisie n'est pas valide"
//         console.log(inputQuantityErr);
    
//       }
//   }



//   function verifLocation(){
//     for (const radioButton of inputLocation){
//       if (radioButton.checked){
//         console.log(radioButton.value + "est selectionné")
//       }
//       else{
//         const inputLocationErr = "Selectionner une ville";
//         console.log(inputLocationErr);
//       }
//     }
//   }

//   function verifConditions(){
//     if(inputCheckbox1.checked === true){

//     }else{
//       const inputCheckbox1Err = "Veuillez accepter les conditions d'utilisation";
//       console.log(inputCheckbox1Err);
//     }
//   }

//   function recapVerif(){
//     function verifPrenom();
//   alert(inputFirsterr)
//   }
