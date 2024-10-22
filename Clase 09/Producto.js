class Producto {
  constructor(obj) {
    this.nombre = obj.nombre.toUpperCase();
    this.precio = parseFloat(obj.precio);
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
}
export default Producto

