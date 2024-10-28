let elementoTitulo = document.getElementById("titulo")

console.log(elementoTitulo)

elementoTitulo.innerText = "Titulo modificado"

const parrafos = document.getElementsByClassName('parrafos')
for (let parrafo of parrafos){
    //alert(parrafo.innerHTML)
}

const nuevoElemento = document.createElement('p')
nuevoElemento.innerHTML='Este es un nuevo parrafo'

document.getElementById('contenedor').appendChild(nuevoElemento)