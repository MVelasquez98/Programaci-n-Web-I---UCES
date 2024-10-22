class Libro {
  constructor(titulo, autor, genero, urlImagen, anio, valoracion, id) {
    this.titulo = titulo.toUpperCase();
    this.autor = autor.toUpperCase();
    this.genero = genero;
    this.anio = parseInt(anio);
    this.valoracion = parseInt(valoracion);
    this.id = id;
    if (urlImagen == "") {
      this.urlImagen = "www.wikipedia.com/api/img/1234";
    } else {
      this.urlImagen = urlImagen;
    }
  }
  valorar(raiting){
    this.valoracion=raiting
  }
}

export default Libro
