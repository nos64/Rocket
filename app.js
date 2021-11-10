const btnOk = document.querySelector('.button-ok');
const powerCh = document.getElementById("ch1");
const egnitionCh  = document.getElementById("ch2");
const engen1 = document.getElementById("ran1");
const engen2 = document.getElementById("ran2");
const egnitionRange1 = document.getElementById("ran1");
const egnitionRange2 = document.getElementById("ran2");
import {speedRange, angileRange, launchBtn, rocket} from './rocketLaunch.js';
import {validate, passwordArea} from './checkPassword.js';

btnOk.addEventListener('click', () => {
    if (validate()) {
        let checkboxes = document.querySelectorAll(".checkbox");
        for (let i = 0, length = checkboxes.length; i < length; i++){
             checkboxes[i].disabled = false;
        }
        btnOk.disabled = true;
        passwordArea.disabled = true;
        }  else {
        alert("Enter Valid password")
   }
});
    
document.addEventListener('change', () => {
    if (powerCh.checked && egnitionCh.checked){
        engen1.disabled = false;
        engen2.disabled = false;
    }
})

document.addEventListener('change', () => {
    if (egnitionRange1.value==="100" && egnitionRange2.value==="100"){
        speedRange.disabled = false;
        angileRange.disabled = false;
        launchBtn.disabled = false;
        launchBtn.style.backgroundColor = "green";
         rocket.animate([
            { // current position of your rocket
                left: '-430px',
                top: '-450px'
               },
               { //  final position of your rocket
                   left: '-429px',
                   top: '-449px'
               }
               ], {
               // timing options
               duration: 150,
               iterations: 50000
               })
    }
});

