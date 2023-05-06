//script para remover item isolado do carrinho
let modal = document.querySelectorAll('.product');
let del = document.querySelectorAll('.bi-trash');

for (let i=0; i < del.length; i++){
  let deleteProduct = function(event){
    if(!event.target.classList.contains('.bi-trash')){
      modal[i].remove();     
    }
  };
  del[i].addEventListener('click', deleteProduct);
};

//script para remover todos os itens do carrinho
let removeProducts = document.querySelector(".bi-cart-x");
let products = document.querySelector("#products-section");
let deleteProducts = function(){
  products.remove();
}
removeProducts.addEventListener("click", deleteProducts);


// script para incrementar e decrementar a quantidade de produtos
let less = document.getElementsByClassName("bi-dash-square");
let plus = document.getElementsByClassName('bi-plus-square');


for(let i=0; i < plus.length; i++){
  let plusIndex = plus[i];
  let plusFunction =  function(event){
    let productText = event.target;
    let display = productText.parentElement.children[1];
    let displayNumber = display.innerHTML;
    let productNumber = parseInt(displayNumber);
    if(productNumber < 5){
    productNumber++;
    display.innerHTML = productNumber;  
  }}
  plusIndex.addEventListener("click", plusFunction);
};


for(let i=0; i < less.length; i++){
  let lessIndex = less[i];
  let lessFunction =  function(event){
    let productText= event.target;
    let display = productText.parentElement.children[1];
    let displayNumber = display.innerHTML;
    let productNumber = parseInt(displayNumber);
    if(productNumber > 1){
    productNumber--;
    display.innerHTML = productNumber;  
  }}
  lessIndex.addEventListener("click", lessFunction);
};