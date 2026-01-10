window.onload = function() {
    let formulario = document.getElementById("formDiscos");

    formulario.addEventListener("submit", function(event) {

        let nombre = document.getElementById("nombre");
        let lblNombre = document.getElementById("lblNombre");
        
        let grupo = document.getElementById("grupo");
        let lblGrupo = document.getElementById("lblGrupo");

        let anio = document.getElementById("anio");
        let lblAnio = document.getElementById("lblAnio");

        let estanteria = document.getElementById("estanteria");
        let lblEstanteria = document.getElementById("lblEstanteria");

        let todoCorrecto = true;


        if (campo20(nombre.value) == false) {
            todoCorrecto = false;
            nombre.style.borderColor = "red";
            lblNombre.style.color = "red";
        } else {
            nombre.style.borderColor = "";
            lblNombre.style.color = "";
        }


        if (campo20(grupo.value) == false) {
            todoCorrecto = false;
            grupo.style.borderColor = "red";
            lblGrupo.style.color = "red";
        } else {
            grupo.style.borderColor = "";
            lblGrupo.style.color = "";
        }


        if (anio.value.length != 4 || isNaN(anio.value)) {
            todoCorrecto = false;
            anio.style.borderColor = "red";
            lblAnio.style.color = "red";
        } else {
            anio.style.borderColor = "";
            lblAnio.style.color = "";
        }

        if (estanteria.value != "" && isNaN(estanteria.value)) {
            todoCorrecto = false;
            estanteria.style.borderColor = "red";
            lblEstanteria.style.color = "red";
        } else {
            estanteria.style.borderColor = "";
            lblEstanteria.style.color = "";
        }

        if (todoCorrecto == false) {
            event.preventDefault(); 

        }
    });
};

function campo20(valor) {
    if (valor.trim() == "" || valor.length > 20) {
        return false;
    }
    return true;
}