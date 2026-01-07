// Array global de países
let paises = ["España", "Francia", "Italia", "Alemania", "Portugal", "Reino Unido"];

// Función para mostrar resultados en la página
function mostrarEnPagina(titulo, contenido) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML += "<h3>" + titulo + "</h3>";
    resultado.innerHTML += "<p>" + contenido + "</p>";
    resultado.innerHTML += "<hr>";
}

// 1. Mostrar número de países
function mostrarNumeroPaises() {
    let numero = paises.length;
    mostrarEnPagina("Número de países", "Total: " + numero + " países");
    alert("Número de países: " + numero);
}

// 2. Mostrar todos los países
function mostrarTodosPaises() {
    let listado = "";
    for (let i = 0; i < paises.length; i++) {
        listado += (i + 1) + ". " + paises[i] + "<br>";
    }
    mostrarEnPagina("Listado de países", listado);
}

// 3. Mostrar países al revés
function mostrarPaisesReves() {
    let listado = "";
    for (let i = paises.length - 1; i >= 0; i--) {
        listado += (paises.length - i) + ". " + paises[i] + "<br>";
    }
    mostrarEnPagina("Países en orden inverso", listado);
}

// 4. Mostrar países ordenados (sin ordenar el array original)
function mostrarPaisesOrdenados() {
    let ordenados = paises.slice().sort();
    let listado = "";
    for (let i = 0; i < ordenados.length; i++) {
        listado += (i + 1) + ". " + ordenados[i] + "<br>";
    }
    mostrarEnPagina("Países ordenados alfabéticamente", listado);
}

// 5. Añadir país al principio
function añadirPrincipio() {
    let pais = prompt("Introduce el país a añadir al principio:");
    if (pais) {
        paises.unshift(pais);
        mostrarEnPagina("Añadir al principio", "País '" + pais + "' añadido al principio");
        alert("País '" + pais + "' añadido al principio");
    }
}

// 6. Añadir país al final
function añadirFinal() {
    let pais = prompt("Introduce el país a añadir al final:");
    if (pais) {
        paises.push(pais);
        mostrarEnPagina("Añadir al final", "País '" + pais + "' añadido al final");
        alert("País '" + pais + "' añadido al final");
    }
}

// 7. Borrar país del principio
function borrarPrincipio() {
    if (paises.length > 0) {
        let paisBorrado = paises.shift();
        mostrarEnPagina("Borrar del principio", "País '" + paisBorrado + "' borrado del principio");
        alert("País '" + paisBorrado + "' borrado del principio");
    } else {
        alert("No hay países para borrar");
    }
}

// 8. Borrar país del final
function borrarFinal() {
    if (paises.length > 0) {
        let paisBorrado = paises.pop();
        mostrarEnPagina("Borrar del final", "País '" + paisBorrado + "' borrado del final");
        alert("País '" + paisBorrado + "' borrado del final");
    } else {
        alert("No hay países para borrar");
    }
}

// 9. Mostrar elemento por posición
function mostrarPorPosicion() {
    let posicion = parseInt(prompt("Introduce la posición (1-" + paises.length + "):"));
    if (posicion >= 1 && posicion <= paises.length) {
        let pais = paises[posicion - 1];
        mostrarEnPagina("País en posición " + posicion, pais);
        alert("En la posición " + posicion + " está: " + pais);
    } else {
        alert("Posición no válida");
    }
}

// 10. Mostrar posición por elemento
function mostrarPosicionPorNombre() {
    let pais = prompt("Introduce el nombre del país:");
    let posicion = paises.indexOf(pais);
    if (posicion !== -1) {
        mostrarEnPagina("Posición del país", "El país '" + pais + "' está en la posición " + (posicion + 1));
        alert("El país '" + pais + "' está en la posición " + (posicion + 1));
    } else {
        mostrarEnPagina("Posición del país", "El país '" + pais + "' no se encuentra");
        alert("El país '" + pais + "' no se encuentra");
    }
}

// 11. Mostrar intervalo
function mostrarIntervalo() {
    let inicio = parseInt(prompt("Posición inicial (1-" + paises.length + "):"));
    let fin = parseInt(prompt("Posición final (1-" + paises.length + "):"));
    
    if (inicio >= 1 && fin <= paises.length && inicio <= fin) {
        let listado = "";
        for (let i = inicio - 1; i <= fin - 1; i++) {
            listado += (i + 1) + ". " + paises[i] + "<br>";
        }
        mostrarEnPagina("Intervalo " + inicio + "-" + fin, listado);
    } else {
        alert("Intervalo no válido");
    }
}

// Función principal simple
function iniciarApp() {
    let opcion = prompt(
        "Elige una opción:\n" +
        "1. Mostrar número de países\n" +
        "2. Mostrar todos los países\n" +
        "3. Mostrar países al revés\n" +
        "4. Mostrar países ordenados\n" +
        "5. Añadir país al principio\n" +
        "6. Añadir país al final\n" +
        "7. Borrar país del principio\n" +
        "8. Borrar país del final\n" +
        "9. Mostrar país por posición\n" +
        "10. Mostrar posición por país\n" +
        "11. Mostrar intervalo\n" +
        "12. Salir\n" +
        "Tu opción:"
    );

    if (opcion === "1") mostrarNumeroPaises();
    else if (opcion === "2") mostrarTodosPaises();
    else if (opcion === "3") mostrarPaisesReves();
    else if (opcion === "4") mostrarPaisesOrdenados();
    else if (opcion === "5") añadirPrincipio();
    else if (opcion === "6") añadirFinal();
    else if (opcion === "7") borrarPrincipio();
    else if (opcion === "8") borrarFinal();
    else if (opcion === "9") mostrarPorPosicion();
    else if (opcion === "10") mostrarPosicionPorNombre();
    else if (opcion === "11") mostrarIntervalo();
    else if (opcion === "12") {
        mostrarEnPagina("Fin", "Aplicación terminada");
        alert("¡Hasta pronto!");
        return;
    }
    else alert("Opción no válida");

    // Volver a mostrar el menú
    iniciarApp();
}

iniciarApp();