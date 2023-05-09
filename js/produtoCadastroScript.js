let loginButton = document.querySelector('#submit')

let loginCheck = function(){
  let nameValue = document.querySelector('#product-name').value;
  let descriptionValue = document.querySelector('#product-description').value;
  let registerValue = document.querySelector('#register').value;
  let productValue = document.querySelector('#un-price').value;
  let barValue = document.querySelector('#bar-code').value;
  const empty = nameValue === ""||descriptionValue === "" ||registerValue === "" ||productValue === "" ||barValue === "";
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

  document.querySelector('#product-name').value = "";
  document.querySelector('#product-description').value = "";
  document.querySelector('#register').value = "";
  document.querySelector('#un-price').value = "";
  document.querySelector('#bar-code').value = "";
};

loginButton.addEventListener('click', loginCheck);