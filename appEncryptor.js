

let resultadoActual = ''

//Funciones de encriptacion

function encriptador(textoRecibido) {
//  console.log("EJEC ENCRIPTADOR - TEXTO SIN ENCRIPTAR: " + textoRecibido2);

  arregloResultado = [];

  for (let index = 0; index < textoRecibido.length; index++) {
    switch (textoRecibido[index]) {
      case "a":
        arregloResultado.push("ai");
        break;
      case "e":
        arregloResultado.push("enter");
        break;
      case "i":
        arregloResultado.push("imes");
        break;
      case "o":
        arregloResultado.push("ober");
        break;
      case "u":
        arregloResultado.push("ufat");
        break;
      default:
        arregloResultado.push(textoRecibido[index]);
        break;
    }
  }
  // console.log(arregloResultado.join(""));
  return arregloResultado.join("");
}

function desEncriptador(textoRecibidoparaDesencriptar) {
  resultadoDeDesencriptacion = textoRecibidoparaDesencriptar
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  //console.log(resultadoDeDesencriptacion);
  return resultadoDeDesencriptacion;
}

// Funciones Generales

function copiar() {
copiarAlPortapapes()
}

function clickEncriptar() {
  ocultarElementosSeccionResultado();
  let resultadoEncriptacion = encriptador(obtenerDatosInput());
  modificarTextoResultado(resultadoEncriptacion);
}

function clickDesencriptar() {
  ocultarElementosSeccionResultado();
  let resultadoDescriptacion = desEncriptador(obtenerDatosInput());
  modificarTextoResultado(resultadoDescriptacion);
}

function obtenerDatosInput() {
  return document.getElementById("idTextoIngresado").value.toLowerCase();
}

function modificarTextoResultado(texto) {
  resultadoActual = texto
  let elementoHTML = document.getElementById("textoResultado");
  elementoHTML.innerHTML = texto;
  return;
}

function ocultarElementosSeccionResultado() {
  document.getElementById("muneco").style.display = "none";
  document.getElementById("textoInicialSeccionResultado1").style.display =
    "none";
  document.getElementById("textoInicialSeccionResultado2").style.display =
    "none";
}

function copiarAlPortapapes() {
  navigator.clipboard.writeText(resultadoActual).then(() => {
    Toastify({
      text: "Texto Copiado al Portapapeles",

      duration: 3000,
    }).showToast();
  });
}
