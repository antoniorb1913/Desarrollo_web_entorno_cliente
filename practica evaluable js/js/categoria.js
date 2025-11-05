function calcularCategoria() {
    let year = prompt("Ingresa tu año de nacimiento (ej: 2010)");
    
    // Validar que se ingresó un valor
    if (year === null || year === "") {
        return;
    }
    
    // Convertir a número
    year = parseInt(year);
    const currentYear = 2025;
    const edad = currentYear - year;
    
    // Validar que el año sea razonable
    if (year < 1900 || year > currentYear) {
        alert("Año no válido");
        return;
    }
    
    const categorias = ["Micros", "Prebenjamín", "Benjamín", "Alevín", "Infantil", "Cadete", "Juvenil", "Junior", "Sub-23", "Senior", "Veterano"];
    
    let categoria;
    if (edad <= 5) {
        categoria = categorias[0];
    }
    else if (edad <= 7) {
        categoria = categorias[1];
    }
    else if (edad <= 9) {
        categoria = categorias[2];
    }
    else if (edad <= 11) {
        categoria = categorias[3];
    }
    else if (edad <= 13) {
        categoria = categorias[4];
    }
    else if (edad <= 15) {
        categoria = categorias[5];
    }
    else if (edad <= 18) {
        categoria = categorias[6];
    }
    else if (edad <= 20) {
        categoria = categorias[7];
    }
    else if (edad <= 23) {
        categoria = categorias[8];
    }
    else if (edad <= 39) {
        categoria = categorias[9];
    } else {
        categoria = categorias[10];
    }

    let resultadoCat = document.getElementById("resultadoCat");
        resultadoCat.innerHTML = "<p><strong>Tu categoría es: </strong></p>";

    for (let i = 0; i < categorias.length; i++) {
        if (categorias[i] === categoria) {
            resultadoCat.innerHTML += "<p><strong>" + categorias[i] + "</strong></p>";
        } else {
            resultadoCat.innerHTML += "<p>" + categorias[i] + "</p>";
        }
    }
}