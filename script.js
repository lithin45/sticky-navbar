const navbarElement = document.querySelector('.navbar');

const bootomconElement = document.querySelector('.bottom-container');


console.log(navbarElement.offsetHeight);
console.log(bootomconElement.offsetTop);

window.addEventListener('scroll', ()=>{
    if(window.scrollY >
        bootomconElement.offsetTop - navbarElement.offsetHeight - 50){
            navbarElement.classList.add('active')
        }else {
            navbarElement.classList.remove('active')
        }
})