const boton_no = document.querySelector(".boton_no")

const boton_si = document.querySelector(".boton_si")

let valor = 20

function agrandar(){
    valor = valor * 1.25
    boton_si.style.fontSize = `${valor}px`
}

boton_no.addEventListener("click", agrandar)