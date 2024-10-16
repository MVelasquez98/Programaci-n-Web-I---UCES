class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar(){
    console.log("Hola, mi nombre es "+ this.nombre)
  }

  describir(){
    //Concatenar cadenas con ES6
    console.log(`Soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`)
  }
}

export default Persona
