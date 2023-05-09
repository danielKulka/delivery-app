let loginButton = document.querySelector('#submit')

let loginCheck = function(){
  let nameValue = document.querySelector('#name').value;
  let emailValue = document.querySelector('#email').value;
  let senhaValue = document.querySelector('#senha').value;
  const empty = nameValue === ""||emailValue === "" ||senhaValue === "";
  if(empty){
    alert("Você não preencheu os campos!")
  }
  else{
    document.querySelector('#mensage-ok').insertAdjacentHTML(
      'afterend',
      `<div class='login-ok'>
        <span>CADASTRO EFETUADO COM SUCESSO!</span>
      </div>
      `
    )
    let mensageTimer = document.querySelector('.login-ok');
    setTimeout(() => {
      mensageTimer.style.display='none';
    }, 3000);
  }

  document.querySelector('#name').value = "";
  document.querySelector('#email').value = "";
  document.querySelector('#senha').value = "";
};

loginButton.addEventListener('click', loginCheck);