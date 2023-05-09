function mostrarLocalidade(dados){
  let location = document.querySelector(".li-location");
  if(dados.erro){
    alert("cep não encontrado");
    return;
  }
  else{
  location.innerHTML = dados.localidade;
  cep.style.display = "none";
  }
}

function consultaCep(){
  let cep = document.querySelector("#cep").value;
  if (cep.length != 8){
    alert("O cep precisa ter 8 digitos");
    return;
  }
  
  let url = `https://viacep.com.br/ws/${cep}/json/`;
  fetch(url).then(function(response){
    response.json().then(function(data){
      mostrarLocalidade(data);
    });
  });
}
