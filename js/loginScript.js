let loginButton = document.querySelector('#submit')

let loginCheck = function(){
  let loginValue = document.querySelector('#login').value;
  let senhaValue = document.querySelector('#senha').value;
  const empty = loginValue === ""||senhaValue === "";
  if(empty){
    alert("Você não preencheu os campos!")
  }
  else{
    document.querySelector('#mensage-ok').insertAdjacentHTML(
      'afterend',
      `<div class='login-ok'>
        <span>LOGIN EFETUADO COM SUCESSO!</span>
      </div>
      `
    )
    let mensageTimer = document.querySelector('.login-ok');
    setTimeout(() => {
      mensageTimer.style.display='none';
    }, 3000);
  }

  document.querySelector('#login').value = "";
  document.querySelector('#senha').value = "";
};

loginButton.addEventListener('click', loginCheck);