


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













































// let sends= document.querySelector('.send')
// let emptyf= ""

// sends.onclick= function(){
//   let fullname= document.querySelector('.name')
//   if (fullname.value=emptyf) {
//       alert ('Please fill empty fields!')
//   }
//   else { return true }

// }

// sends.onclick= function(){
//   let addressf= document.querySelector('.address')
//   if (addressf.value=emptyf) {
//       alert ('Please fill empty fields!')
//   }
//   else { return true }

// }

// sends.onclick= function(){
//   let emailf= document.querySelector('.email')
//   if (emailf.value=emptyf) {
//       alert ('Please fill empty fields!')
//   }
//   else { return true }

// }

// sends.onclick= function(){
//   let passwordf= document.querySelector('.password')
//   if (passwordf.value=emptyf) {
//       alert ('Please fill empty fields!')
//   }
//   else { return true }

// }

// sends.onclick= function(){
//   let commentf= document.querySelector('.comments-input')
//   if (commentf.value=emptyf) {
//       alert ('Please fill empty fields!')
//   }
//   else { return true }

// }
