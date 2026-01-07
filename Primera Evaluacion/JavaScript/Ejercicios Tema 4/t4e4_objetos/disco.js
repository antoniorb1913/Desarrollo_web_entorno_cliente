// Clase Disco
class Disco {
    // Constructor con parámetros opcionales
    constructor(nombre = "", grupo = "", anio = "", tipo = "", localizacion = 0) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.anio = anio;
        this.tipo = tipo;
        this.localizacion = localizacion;
        this.prestado = false;
    }

    // Cambiar localización
    cambiarLocalizacion(nuevaLocalizacion) {
        this.localizacion = nuevaLocalizacion;
    }

    // Cambiar estado de prestado
    cambiarPrestado(estado) {
        this.prestado = estado;
    }

    // Mostrar toda la información
    mostrarInfo() {
        return `Nombre: ${this.nombre}<br>
                Grupo: ${this.grupo}<br>
                Año: ${this.anio}<br>
                Tipo: ${this.tipo}<br>
                Localización: Estantería ${this.localizacion}<br>
                Prestado: ${this.prestado ? 'Sí' : 'No'}`;
    }
}

// Array global de discos con algunos datos de ejemplo
let discos = [
    new Disco("Thriller", "Michael Jackson", "1982", "Pop", 1),
    new Disco("The Dark Side of the Moon", "Pink Floyd", "1973", "Rock", 2),
    new Disco("Back in Black", "AC/DC", "1980", "Rock", 1),
    new Disco("Nevermind", "Nirvana", "1991", "Grunge", 3)
];

// Función para mostrar resultados en la página
function mostrarEnPagina(titulo, contenido) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML += "<h3>" + titulo + "</h3>";
    resultado.innerHTML += "<p>" + contenido + "</p>";
    resultado.innerHTML += "<hr>";
}

// 1. Mostrar número de discos
function mostrarNumeroDiscos() {
    let numero = discos.length;
    mostrarEnPagina("Número de discos", "Total: " + numero + " discos");
    alert("Número de discos: " + numero);
}

// 2. Mostrar listado de discos
function mostrarListadoDiscos() {
    let opcion = prompt("¿Cómo quieres mostrar el listado?\n1. Orden normal\n2. Orden inverso\n3. Orden alfabético por nombre");
    
    let listado = "";
    let titulo = "";
    
    if (opcion === "1") {
        titulo = "Listado de discos (orden normal)";
        for (let i = 0; i < discos.length; i++) {
            listado += `<strong>${i + 1}. ${discos[i].nombre}</strong><br>`;
            listado += discos[i].mostrarInfo() + "<br><br>";
        }
    } else if (opcion === "2") {
        titulo = "Listado de discos (orden inverso)";
        for (let i = discos.length - 1; i >= 0; i--) {
            listado += `<strong>${discos.length - i}. ${discos[i].nombre}</strong><br>`;
            listado += discos[i].mostrarInfo() + "<br><br>";
        }
    } else if (opcion === "3") {
        titulo = "Listado de discos (orden alfabético)";
        let ordenados = discos.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
        for (let i = 0; i < ordenados.length; i++) {
            listado += `<strong>${i + 1}. ${ordenados[i].nombre}</strong><br>`;
            listado += ordenados[i].mostrarInfo() + "<br><br>";
        }
    } else {
        alert("Opción no válida");
        return;
    }
    
    mostrarEnPagina(titulo, listado);
}

// 3. Mostrar intervalo de discos
function mostrarIntervaloDiscos() {
    let intervalo = prompt("Introduce el intervalo en formato inicio-fin (ej: 2-4):");
    
    if (!intervalo || !intervalo.includes("-")) {
        alert("Formato incorrecto. Usa: inicio-fin");
        return;
    }
    
    let partes = intervalo.split("-");
    let inicio = parseInt(partes[0]) - 1;
    let fin = parseInt(partes[1]) - 1;
    
    if (isNaN(inicio) || isNaN(fin) || inicio < 0 || fin >= discos.length || inicio > fin) {
        alert("Intervalo no válido");
        return;
    }
    
    let listado = "";
    for (let i = inicio; i <= fin; i++) {
        listado += `<strong>${i + 1}. ${discos[i].nombre}</strong><br>`;
        listado += discos[i].mostrarInfo() + "<br><br>";
    }
    
    let titulo = "Intervalo de discos (" + (inicio + 1) + "-" + (fin + 1) + ")";
    mostrarEnPagina(titulo, listado);
}

// 4. Añadir disco
function añadirDisco() {
    let opcion = prompt("¿Dónde quieres añadir el disco?\n1. Al principio\n2. Al final");
    
    let nombre = prompt("Nombre del disco:");
    let grupo = prompt("Grupo o cantante:");
    let anio = prompt("Año de publicación:");
    let tipo = prompt("Tipo de música (rock, pop, punk, indie):");
    let localizacion = parseInt(prompt("Número de estantería:"));
    
    if (!nombre || !grupo || !anio || !tipo || isNaN(localizacion)) {
        alert("Datos incompletos o incorrectos");
        return;
    }
    
    let nuevoDisco = new Disco(nombre, grupo, anio, tipo, localizacion);
    let mensaje = "";
    
    if (opcion === "1") {
        discos.unshift(nuevoDisco);
        mensaje = "Disco '" + nombre + "' añadido al principio";
    } else if (opcion === "2") {
        discos.push(nuevoDisco);
        mensaje = "Disco '" + nombre + "' añadido al final";
    } else {
        alert("Opción no válida");
        return;
    }
    
    mostrarEnPagina("Añadir disco", mensaje);
    alert(mensaje);
}

// 5. Borrar disco
function borrarDisco() {
    let opcion = prompt("¿Dónde quieres borrar el disco?\n1. Al principio\n2. Al final");
    
    if (discos.length === 0) {
        alert("No hay discos para borrar");
        return;
    }
    
    let discoBorrado = null;
    let mensaje = "";
    
    if (opcion === "1") {
        discoBorrado = discos.shift();
        mensaje = "Disco '" + discoBorrado.nombre + "' borrado del principio";
    } else if (opcion === "2") {
        discoBorrado = discos.pop();
        mensaje = "Disco '" + discoBorrado.nombre + "' borrado del final";
    } else {
        alert("Opción no válida");
        return;
    }
    
    mostrarEnPagina("Borrar disco", mensaje);
    alert(mensaje);
}

// 6. Consultar disco
function consultarDisco() {
    let opcion = prompt("¿Cómo quieres consultar?\n1. Por posición\n2. Por nombre");
    
    if (opcion === "1") {
        let posicion = parseInt(prompt("Introduce la posición (1-" + discos.length + "):"));
        
        if (isNaN(posicion) || posicion < 1 || posicion > discos.length) {
            alert("Posición no válida");
            return;
        }
        
        let disco = discos[posicion - 1];
        mostrarEnPagina("Disco en posición " + posicion, `<strong>${disco.nombre}</strong><br>${disco.mostrarInfo()}`);
        alert("En la posición " + posicion + " está: " + disco.nombre);
        
    } else if (opcion === "2") {
        let nombre = prompt("Introduce el nombre del disco:");
        let encontrado = discos.find(disco => disco.nombre.toLowerCase() === nombre.toLowerCase());
        
        if (encontrado) {
            mostrarEnPagina("Consultar disco", `<strong>${encontrado.nombre}</strong><br>${encontrado.mostrarInfo()}`);
            alert("Disco encontrado: " + encontrado.nombre);
        } else {
            mostrarEnPagina("Consultar disco", "El disco '" + nombre + "' no se encuentra");
            alert("El disco '" + nombre + "' no se encuentra");
        }
    } else {
        alert("Opción no válida");
    }
}

// Función principal
function Discos() {
    let opcion = prompt(
        "=== GESTIÓN DE DISCOS ===\n" +
        "1. Mostrar número de discos\n" +
        "2. Mostrar listado de discos\n" +
        "3. Mostrar intervalo de discos\n" +
        "4. Añadir disco\n" +
        "5. Borrar disco\n" +
        "6. Consultar disco\n" +
        "7. Salir\n" +
        "Elige una opción (1-7):"
    );

    if (opcion === "1") mostrarNumeroDiscos();
    else if (opcion === "2") mostrarListadoDiscos();
    else if (opcion === "3") mostrarIntervaloDiscos();
    else if (opcion === "4") añadirDisco();
    else if (opcion === "5") borrarDisco();
    else if (opcion === "6") consultarDisco();
    else if (opcion === "7") {
        mostrarEnPagina("Fin", "Aplicación terminada");
        alert("¡Hasta pronto!");
        return;
    }
    else alert("Opción no válida");

    Discos();
}

// Iniciar la aplicación
Discos();