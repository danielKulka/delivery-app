//script para favoritar o coração
let heart = document.querySelector('.bi-heart-fill');

heart.addEventListener('click', function(event){
  if(!event.target.nodeName == "I"){
    event.target.classList.toggle("red");
  }
});

// script para incrementar e decrementar a quantidade de produtos
let less = document.querySelector(".bi-dash-square");
let productText = document.querySelector('#number');
let plus = document.querySelector('.bi-plus-square');
let productNumber = parseInt(productText.textContent);

less.addEventListener('click',function(){
  if(productNumber>1){
  productNumber--;
  productText.innerHTML = productNumber;
  }
});

plus.addEventListener('click',function(){
  productNumber++;
  productText.innerHTML = productNumber;
});

console.log(less,productText,plus);
console.log(productNumber);