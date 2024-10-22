import Libro from "./Libro.js"

let catalogo=[]
function guardarLibro(){
 let titulo = prompt("Ingresa el titulo del libro")   
 let autor = prompt("Ingresa el autor del libro")   
 let genero = prompt("Ingresa el genero del libro")   
 let url = prompt("Ingresa el url del libro")   
 let valoracion = prompt("Ingresa el valoracion del libro")   
 let id = prompt("Ingresa el id del libro")   
 const libro = new Libro(titulo, autor, genero, url, valoracion, id)
 catalogo.push(libro)
 console.log(catalogo)
}

guardarLibro()

