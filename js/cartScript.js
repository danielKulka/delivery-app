let modal = document.querySelectorAll('.product');
let del = document.querySelectorAll('.bi-trash');

for (let i=0; i < del.length; i++){
  del[i].addEventListener('click', function(event){
    if(!event.target.classList.contains('.bi-trash')){
      modal[i].remove();
    }
  })
};