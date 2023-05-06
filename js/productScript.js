//script para favoritar o coração
let heart = document.querySelector('.bi-heart-fill');

let favorite = function(event){
  if(event.target.nodeName === "I"){
    event.target.classList.toggle("red");
  }
};
heart.addEventListener('click', favorite);

// script para incrementar e decrementar a quantidade de produtos
let less = document.querySelector(".bi-dash-square");
let productText = document.querySelector('#number');
let plus = document.querySelector('.bi-plus-square');
let productNumber = parseInt(productText.textContent);

let lessClick = function(){
  const moreThanZero = productNumber > 1;
  if(moreThanZero){
  productNumber--;
  productText.innerHTML = productNumber;
  }
};
less.addEventListener('click', lessClick);

let plusClick = function(){
  const lessThanFive = productNumber < 5;
  if(lessThanFive){
  productNumber++;
  productText.innerHTML = productNumber;
  }
};
plus.addEventListener('click', plusClick);