var contagem = document.querySelector('span')
var original = document.querySelector('#original')
var modificado = document.querySelector('#modificado')
var efeito = document.querySelector('#efeito')

efeito.addEventListener('change', function() {
    if(efeito.value == "uppercase") modificado.value = original.value.toUpperCase()
    else modificado.value = original.value.toLowerCase()
})

original.addEventListener('keyup', () => {
    contagem.innerHTML = original.value.length
    if(efeito.value == "uppercase") modificado.value = original.value.toUpperCase()
    else modificado.calue = original.value.toLowerCase()
})