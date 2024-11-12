// Peticion GET
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));

// obtener info estatica local
const usarJson = async () => {
  const response = await fetch("./api/productos.json");
  const productos = await response.json();
  console.log(productos);
  crearTarjeta(productos);
};

const divContainer = document.getElementById("container");
const crearTarjeta = (productos) => {
  divContainer.innerHTML = "";
  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.innerHTML = `${producto.nombre}`;
    divContainer.appendChild(card);
  });
};

const button = document.getElementById("mostrarProductos");
button.addEventListener("click", usarJson);

// local Storage
localStorage.setItem("usuario","matias")

console.log(localStorage.getItem("usuario"))

const gustosHelados = [{nombre:"Crema de Cielo"},{nombre:"Tramontana"},{nombre:"Dulce de leche"}]
localStorage.setItem("gustosHelados", JSON.stringify(gustosHelados))
console.log(JSON.parse(localStorage.getItem("gustosHelados")))