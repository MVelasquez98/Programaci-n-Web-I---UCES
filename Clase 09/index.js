import Producto from "./Producto.js"

const productos = 
[
    { id: 1, nombre: "Guaymallen", precio: 200 },
    { id: 2, nombre: "Capitan del espacio", precio: 500 },
    { id: 3, nombre: "Oreo", precio: 500 },
    { id: 3, nombre: "Jorgito", precio: 400 },
];

const listaProductosMapeados=[]
for(const producto of productos){
    listaProductosMapeados.push(new Producto(producto))
}

for(const producto of listaProductosMapeados){
    producto.sumaIva()
}

console.log(productos)
console.log(listaProductosMapeados)