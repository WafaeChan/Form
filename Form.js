


var inputsfield= Array.from(document.querySelectorAll('input'))
var sendbutton= document.querySelector('.sends')
let emptyx= ""


sendbutton.addEventListener('click', function(){

  for (i = 0; i < inputsfield.length; i++) {
    let x= inputsfield[i].value
if (x= emptyx) {
  alert ('Please fill empty field!')
}
else { return true }
}
})

