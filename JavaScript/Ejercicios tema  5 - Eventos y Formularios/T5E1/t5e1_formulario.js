window.onload = function() {

    // Ahora sí buscamos el formulario
    document.getElementById("formDiscos").onsubmit = function(event) {
        
        // Evita que la página se recargue
        event.preventDefault();

        const disco = {
            nombre: document.getElementById("nombre").value,
            grupo: document.getElementById("grupo").value,
            anio: document.getElementById("anio").value,
            tipo: document.getElementById("tipo").value,
            estanteria: document.getElementById("estanteria").value,
            prestado: document.getElementById("prestado").checked
        };

        console.log("Disco guardado:", disco);
        alert("Guardado: " + disco.nombre);
    };

};