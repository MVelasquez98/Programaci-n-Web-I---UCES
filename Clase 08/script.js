import Persona from "./Persona.js"

// Variables
// Var no se usa más desde ES6
var variable;

//variables globales
let variable2 = "Matias";
variable2 = 2;
variable2 = true;

const variable3 = 2;
//Una constante no se puede cambiar
//variable3=3

// E/S

console.log("Hola Mundo");
console.log(variable2);

let nombre = prompt("Ingresa tu nombre por favor:");
alert("Bienvenido " + nombre);

let numero = prompt("Ingresa un número");
if (numero == 5) {
  console.log("Es 5");
} else {
  console.log("No es 5");
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let operacion;

while (operacion != "ESC") {
  operacion = prompt("Ingresa una operación (Escriba ESC para salir");
  switch (operacion) {
    case "suma":
      console.log("Realizar la suma");
      break;
    case "resta":
      console.log("Realizar la resta");
      break;
    default:
      console.log("operación desconocida");
  }
}

//Funciones

// variable global
let varGlobal = "Soy global";

function solicitarNombre() {
  //Ambito o scope de memoria
  // variable local
  let varLocal = "HolaSoy local";
  let nombre = prompt("Ingresa tu nombre");
  alert(nombre + varGlobal + varLocal);
  return varLocal;
}

//console.log(varLocal)
solicitarNombre();

function saludar(nombre, mensaje) {
  alert(mensaje + ", para: " + nombre);
}

saludar("Juan", "Aprobaste felicidades");
saludar("Roman", "Nos vemos la proxima mesa");
saludar("MArcelo", "Gracias totales");

//camelCase

//camelCaseEsUnaConvencion

//Estructura de datos
//objetos

let producto = {
  nombre: "Coca",
  precio: 200,
  cantidad: 5,
};

console.log(producto.cantidad) // 5
console.log(producto["precio"]) // 200

producto.cantidad= 6
producto["precio"]=300

let pedro = new Persona("pedro",40,"Abogado")
pedro.saludar()
pedro.describir()