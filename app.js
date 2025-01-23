
// Array para almacenar amigos
let listaAmigos = [];

//funcion para agregrar amigos a la lista
function añadirAmigos() {
  let nombre = document.getElementById("amigo").value;

  if (nombre == " ") {
    alert("Por favor Ingrese el Nombre de un Amigo");
  } else {
    listaAmigos.push(nombre);
    //limpiar
    document.getElementById("amigo").value = " ";
    actualizarLista();
  }
  console.log(listaAmigos);
}

//función para actualizar la lista de amigos
function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  limpiarLista();
  for (let i = 0; i < listaAmigos.length; i++) {
    lista.innerHTML += `<li> ${listaAmigos[i]} </li>`;
  }
}

//funcion para seleccionar un amigo
function sortearAmigo() {
  if (listaAmigos == "") {
    alert("Lista de amigos vacia");
  } else {
    let lista = document.getElementById("listaAmigos");
    limpiarLista();
    let amigoSeleccionado =
      listaAmigos[parseInt(Math.random() * listaAmigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h3>El amigo seleccionado es: ${amigoSeleccionado}</h3>`;
  }
}

//función para limpiar la lista listaAmigos
function limpiarLista() {
  document.getElementById("listaAmigos").innerHTML = "";
}
