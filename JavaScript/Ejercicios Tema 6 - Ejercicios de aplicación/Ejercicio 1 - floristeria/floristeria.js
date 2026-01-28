document.addEventListener("DOMContentLoaded", function () {

    // BOTÓN GENERAR
    let btnGenerar = document.createElement("button");
    btnGenerar.textContent = "Generar planta";
    document.body.insertBefore(btnGenerar, document.body.firstChild);

    btnGenerar.onclick = function () {
        let nombre = prompt("Nombre:");
        let ubicacion = prompt("Ubicación:");
        let ejemplares = prompt("Ejemplares:");
        let flor = prompt("¿Tiene flor? si/no:");

        let fila = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        td1.textContent = nombre;
        td2.textContent = ubicacion;
        td3.textContent = ejemplares;
        td4.textContent = flor;

        fila.appendChild(td1);
        fila.appendChild(td2);
        fila.appendChild(td3);
        fila.appendChild(td4);

        document.getElementById("tabla").appendChild(fila);
    };

    // BOTÓN BORRAR
    let btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar fila";
    document.body.insertBefore(btnBorrar, document.body.firstChild.nextSibling);

    btnBorrar.onclick = function () {
        let tabla = document.getElementById("tabla");
        if (tabla.lastElementChild) {
            tabla.removeChild(tabla.lastElementChild);
        }
    };

    // BOTÓN CONTAR FILAS
    let btnContar = document.createElement("button");
    btnContar.textContent = "Número de filas";
    document.body.appendChild(btnContar);

    btnContar.onclick = function () {
        let filas = document.getElementById("tabla")
            .getElementsByTagName("tr").length;
        alert(filas);
    };

});
