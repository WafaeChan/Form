


var inputsfield= Array.from(document.querySelectorAll('input'))
var passwordfield= document.querySelector('.password')
var sendbutton= document.querySelector('.send')
var fullname= document.querySelector('.name')
var addressfield= document.querySelector('.address')
var emailfield= document.querySelector('.email')
var commentsfield= document.querySelector('.commentsinput')
let emptyx= ""


sendbutton.addEventListener('click', function(){

  if (fullname.value == emptyx || passwordfield.value == emptyx || addressfield.value == emptyx || emailfield.value == emptyx || commentsfield.value == emptyx) {
    alert ('Field cannot be blank!')
  }
  else { return true }

  const emailx= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailx.test(emailfield.value)) { return true }
  else { 
    alert ('Email not valid!');
    return false }

}
)


sendbutton.addEventListener('click', function(){

  const password= /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;

  let pw= passwordfield.value
  if (password.test(pw)) { return true }
  else { 
    alert ('Password must be a combination of charatacters, numbers and at least a capital letter!');
    return false
  }

}
)

sendbutton.addEventListener('click', function(){

  if (passwordfield.length < 8) { 
    alert ('Password must contain at least 8 characters!')
    return false }
  else { 
    return true 
  }
  })



