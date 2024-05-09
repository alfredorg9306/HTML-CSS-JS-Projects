const buscar = document.querySelector('.btn');
const inputsearch = document.querySelector('.container-search');
const input = document.querySelector('.search');

buscar.addEventListener('click',()=>{
    inputsearch.classList.toggle('active')
    input.focus();

})