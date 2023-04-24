/* 
    condicionales del desafio
    a = ai
    e = enter
    i = imes
    o = ober
    u = ufat
*/

function encriptador() {
  const texto = document.getElementById("inputtexto").value.toLowerCase();
  const textoEncriptado = texto
    .replace(/e/ig, "enter")
    .replace(/o/ig, "ober")
    .replace(/i/ig, "imes")
    .replace(/a/ig, "ai")
    .replace(/u/ig, "ufat");

  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = textoEncriptado;
  document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
  const textoEncriptado = document.getElementById("inputtexto").value.toLowerCase();
  const textoDesencriptado = textoEncriptado
    .replace(/enter/ig, "e")
    .replace(/ober/ig, "o")
    .replace(/imes/ig, "i")
    .replace(/ai/ig, "a")
    .replace(/ufat/ig, "u");

  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = textoDesencriptado;
  document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
  const contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand("copy");
  alert("El texto se ha copiado al portapapeles.");
}