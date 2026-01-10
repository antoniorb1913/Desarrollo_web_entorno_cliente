let carta1 = null;
let cartasBloqueadas = false;

window.onload = function() {
    
    let todasLasFotos = document.getElementsByTagName("img");
    for (let i = 0; i < todasLasFotos.length; i++) {
        todasLasFotos[i].style.visibility = "hidden";
    }
    let celdas = document.getElementsByTagName("td");

    for (let i = 0; i < celdas.length; i++) {
        celdas[i].onclick = gestionarClick;
    }
};

function gestionarClick() {
    if (cartasBloqueadas == true || this.getAttribute("fija") == "si") {
        return;
    }
    let fotoActual = this.querySelector("img");
    fotoActual.style.visibility = "visible";

    if (carta1 == null) {
        carta1 = this;
    } 
    else {
        let personaje1 = carta1.getAttribute("data-personaje");
        let personaje2 = this.getAttribute("data-personaje");

        if (personaje1 == personaje2) {
            carta1.setAttribute("fija", "si");
            this.setAttribute("fija", "si");

            let marcador = document.getElementById("puntos");
            marcador.value = parseInt(marcador.value) + 1;

            carta1 = null;
        } 
        else {

            cartasBloqueadas = true;
            let celdaAnterior = carta1;
            let celdaActual = this;

            setTimeout(function() {
                celdaAnterior.querySelector("img").style.visibility = "hidden";
                celdaActual.querySelector("img").style.visibility = "hidden";
                
                carta1 = null;
                cartasBloqueadas = false;
            }, 500);
        }
    }
}