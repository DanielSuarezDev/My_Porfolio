/* console.log(window.matchMedia('(prefers-color-scheme: dark)')); */

const check = document.querySelector('#checkbox');


if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  check.setAttribute('checked', true)
};


check.addEventListener('change', function (event) {
  if (this.checked) {
    document.body.classList.remove('is-light-mode')
    document.body.classList.add('is-dark-mode')
  } else {
    document.body.classList.remove('is-dark-mode')
    document.body.classList.add('is-light-mode')
  }
});


let animado = document.querySelectorAll('.animado');

function mostrar() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animado.length; i++) {
    let altura = animado[i].offsetTop;
    if (altura - 300 < scrollTop) {
      animado[i].style.opacity = 1;
      animado[i].classList.add("mostrarTop");
    }
  }
}

window.addEventListener('scroll', mostrar);


const iconMenu = document.querySelector('#icon-menu')
 menu = document.querySelector('#menu') 

iconMenu.addEventListener('click', (e) => {
  // alteramos el estilo para el menu y body
  menu.classList.toggle('active')
  document.body.classList.toggle('opacity')
  // alteramos el atribute src para el icono del menu
  const ruteAcutal = e.target.getAttribute('src')

  if(ruteAcutal === 'images/icons/navBar/delete.svg'){
    e.target.setAttribute('src', 'images/icons/navBar/menu.svg')  
  }else {
    e.target.setAttribute('src', 'images/icons/navBar/delete.svg')
  }
})