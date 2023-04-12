let btnEn = document.getElementById('btn-encriptar')
let btnDes = document.getElementById('btn-desencriptar')
let entrada = document.getElementById('entrada')
let dibujo = document.getElementById('dibujo')
let areaCopy = document.getElementById('area-salida')
let copy = document.getElementById('copy')
let nose = document.getElementById('nose')
let salida = document.getElementById('salida')

function encriptar(texto) {
    let textoEncriptado = "";
    const cifrado = ['a', 'b', 'o', 'u'];
  
    for (let i = 0; i < texto.length; i++) {
      textoEncriptado += texto[i] + cifrado[i % cifrado.length];
    }
    console.log(textoEncriptado)
    return textoEncriptado;
  }
  

  function desencriptar(textoEncriptado) {
    let texto = "";

    for (let i = 0; i < textoEncriptado.length; i += 2) {
      texto += textoEncriptado[i];
    }
    console.log(texto)
    return texto;
  }

  function esEncriptado(texto) {
    const indices = [texto[1], texto[3], texto[5], texto[7]];
    const cifrado = ['a', 'b', 'o', 'u'];
  
    const sonIguales = indices.every((valor, indice) => valor === cifrado[indice]);
  
    return sonIguales;
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