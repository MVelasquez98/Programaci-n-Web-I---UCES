// funciones anonimas
const saludo = function () {
  console.log("Hola Mundo");
};

saludo();

const button = document.querySelector("button");

//button.addEventListener('click', saludo)
/*button.addEventListener('click', function(){
    console.log("Hola Mundo")
})*/

// arrow functions (funciones flecha =>)
button.addEventListener("click", () => {
  alert("Hola Mundo");
});

document.addEventListener("keydown", (event) => {
  console.log(`Tecla presionada ${event.key}`);
});

const form = document.querySelector("form");

form.addEventListener('submit',(event)=>{
    event.preventDefault()// evita que el formulario se envie por post
    console.log('Formulario enviado')
})

const elemento1 = document.getElementById('elemento_uno')
const coordenadas = document.getElementById('coordenadas')
elemento1.addEventListener('mouseover',(event)=>{
    elemento1.style.backgroundColor='green'
    const x= event.offsetX
    const y = event.offsetY
    coordenadas.textContent= `Coordenadas: (X:${x} -- Y:${y})`
})
elemento1.addEventListener('mouseout',()=>{
    elemento1.style.backgroundColor='red'
})