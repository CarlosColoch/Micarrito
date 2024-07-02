const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista anuncios.js */

function crearTarjetasProductosInicio(productos){
  //const productos = localStorage.getItem("anuncios");
  productos.forEach(producto => {
    const nuevaAnuncio = document.createElement("div");
    nuevaAnuncio.classList = "tarjeta-producto";
    nuevaAnuncio.innerHTML = `
    <img src="img/productos/${producto.id}.jpg" alt="Anuncio">
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>
    <button>Agregar al carrito</button>`

    contenedorTarjetas.appendChild(nuevaAnuncio);
    nuevaAnuncio.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(anuncios);

