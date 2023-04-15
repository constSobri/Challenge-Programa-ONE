let btnEn = document.getElementById('btn-encriptar')
let btnDes = document.getElementById('btn-desencriptar')
let entrada = document.getElementById('entrada')
let dibujo = document.getElementById('dibujo')
let areaCopy = document.getElementById('area-salida')
let copy = document.getElementById('copy')
let nose = document.getElementById('nose')
let salida = document.getElementById('salida')

function encriptar(texto) {
    let mensaje = "";
    return mensaje = texto.replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
}
  

function desencriptar(textoEncriptado) {
    let mensajeEncriptado = "";
    return mensajeEncriptado = textoEncriptado.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function esEncriptado(texto) {
    return /enter|imes|ai|ober|ufat/.test(texto);
}
  

btnEn.addEventListener('click', () => {
    dibujo.style.display = 'none'
    nose.style.display = 'none'
    let enDes = entrada.value
    if(esEncriptado(enDes) == false) {
        salida.value = ''
        salida.value += encriptar(enDes)
        salida.style.pointerEvents = 'initial'
    }
    else {
        alert('ERROR: Este mensaje esta encriptado, debes desencriptarlo.' )
    }
} )

btnDes.addEventListener('click', () => {
    dibujo.style.display = 'none'
    nose.style.display = 'none'
    let enDes = entrada.value
    if(esEncriptado(enDes) == true) {
        salida.value = ''
        salida.value += desencriptar(enDes)
        salida.style.pointerEvents = 'initial'
    }
    else {
        alert('ERROR: Este mensaje NO esta encriptado, debes encriptarlo.' )
    }
} )

areaCopy.addEventListener('mouseover', () => {
    copy.style.display = 'initial'
    console.log('A')
} )

areaCopy.addEventListener('mouseout', () => {
    copy.style.display = 'none'
    console.log('A')
} )

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(salida.value)
    copy.style.color = 'green'
    if (window.innerWidth > 1200) {
    alert('Mensaje copiado')
    }
})