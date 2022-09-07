const burger = document.querySelector('.burger')
const Headerbar = document.querySelector('#Headerbar')

burger.addEventListener('click', () =>{
    Headerbar.classList.toggle('active')
    burger.classList.toggle('active')
})