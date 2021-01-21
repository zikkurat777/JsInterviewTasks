// This code is iterating current menu element's letters case with the help of basic array methods and "for" cycle creating non-standard animation on mouse over/

"use strict";

//interval in milliseconds between letter case change
let delay = 210;

// technical function to provide correct delay realization
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


//assigning eventlistener to all menu elements with .navmenu class
document.querySelectorAll('.navmenu').forEach(item => {
  item.addEventListener('mouseover', menuHandler)
})

async function menuHandler(){

//getting context - what certain element called for this function
let menuElement = document.getElementById(this.id);

//getting content of menu element
let currentString = menuElement.innerHTML.toLowerCase();

//creating array from menu element
let stringArr = currentString.split("");


//step by step letter iteration to capitalize one letter at a time, except first one
for (let i = 0; i < stringArr.length; i++){

if(i !== 0){
  await sleep(delay);
	stringArr[i] = stringArr[i].toString().toUpperCase();
	stringArr[i-1] = stringArr[i-1].toString().toLowerCase();
  console.log(stringArr.join(''));
  menuElement.innerHTML = stringArr.join('');
  
  }
  //on last letter, returning capital letter to the first position
  if (i == stringArr.length-1){
  await sleep(delay);
  stringArr[i] = stringArr[i].toString().toLowerCase();
  stringArr[0] = stringArr[0].toString().toUpperCase();
  menuElement.innerHTML = stringArr.join('');
  }
}


}