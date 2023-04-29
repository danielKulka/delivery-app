let loginButton = document.querySelector('#submit')

loginButton.addEventListener('click',function(){
  let loginValue = document.querySelector('#login').value;
  let senhaValue = document.querySelector('#senha').value;
  if(loginValue === ""||senhaValue === ""){
    alert("Você não preencheu os campos!")
  }
  else{
    alert("LOGIN REALIZADO COM SUCESSO")
  }
});