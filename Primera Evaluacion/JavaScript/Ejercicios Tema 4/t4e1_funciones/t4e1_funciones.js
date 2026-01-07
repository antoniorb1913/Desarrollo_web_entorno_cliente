function calcularIMC() {
    let altura = prompt("Ingresa tu altura en METROS (ej: 1.70):");
    let peso = prompt("Ingresa tu peso en kg:");

    // Validar que se ingresaron datos
    if (altura === null || peso === null || altura === "" || peso === "") {
        alert("Debes ingresar ambos valores");
        return;
    }

    peso = parseFloat(peso);
    altura = parseFloat(altura);
    
    // Validar que son números válidos y positivos
    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        alert("Por favor ingresa valores numéricos válidos y positivos");
        return;
    }
    
    let imc = peso / (altura * altura);

    const imcs = ["Delgadez severa", "Delgadez moderada", "Delgadez aceptable", "Peso normal", "Sobrepeso", "Obeso (Tipo I)", "Obeso (Tipo II)", "Obeso (Tipo III)"];
    
    let rIMC;
    if (imc < 16.00) {
        rIMC = imcs[0];
    } else if (imc <= 16.99) {
        rIMC = imcs[1];
    } else if (imc <= 18.49) {
        rIMC = imcs[2];
    } else if (imc <= 24.99) {
        rIMC = imcs[3];
    } else if (imc <= 29.99) {
        rIMC = imcs[4];
    } else if (imc <= 34.99) {
        rIMC = imcs[5];
    } else if (imc <= 39.99) {
        rIMC = imcs[6];
    } else {
        rIMC = imcs[7];
    }

    let resultadoIMC = document.getElementById("resultadoIMC");
    resultadoIMC.innerHTML = "<h3>Tu IMC es: " + imc.toFixed(2) + "</h3>";
    
    for (let i = 0; i < imcs.length; i++) {
        if (imcs[i] === rIMC) {
            resultadoIMC.innerHTML += "<p><strong>" + imcs[i] + "</strong></p>";
        } else {
            resultadoIMC.innerHTML += "<p>" + imcs[i] + "</p>";
        }
    }
}

function calcularFCM() {
    let edad, sexo;
    let datosValidos = false;
    
    while (!datosValidos) {
        // Validar edad
        let inputEdad = prompt("Ingresa tu edad (1-120):");
        if (inputEdad === null) return; // Usuario canceló
        
        edad = parseInt(inputEdad);
        
        // Validar que la edad es un número válido
        if (isNaN(edad) || edad < 1 || edad > 120) {
            alert("Edad inválida. Debe ser un número entre 1 y 120.");
            continue;
        }
        
        // Validar sexo
        let inputSexo = prompt("Ingresa tu sexo (H para Hombre, M para Mujer):");
        if (inputSexo === null) return; // Usuario canceló
        
        sexo = inputSexo.toUpperCase();
        
        if (sexo === 'H' || sexo === 'M') {
            datosValidos = true;
        } else {
            alert("Sexo inválido. Debe ser H o M.");
        }
    }
    
    // Calcular FCM (Fórmula: 220 - edad)
    let fcm = 220 - edad;
    
    // Calcular zonas
    let zonaRecuperacion = `(${Math.round(fcm * 0.60)}-${Math.round(fcm * 0.70)} ppm)`;
    let zonaAerobica = `(${Math.round(fcm * 0.70)}-${Math.round(fcm * 0.80)} ppm)`;
    let zonaAnaerobica = `(${Math.round(fcm * 0.80)}-${Math.round(fcm * 0.90)} ppm)`;
    let lineaRoja = `(${Math.round(fcm * 0.90)}-${Math.round(fcm)} ppm)`;
    
    // Mostrar resultados
    let resultadoFCM = document.getElementById("resultadoFCM");
    resultadoFCM.innerHTML = `
        <h2>Resultados para ${sexo === 'H' ? 'Hombre' : 'Mujer'} de ${edad} años</h2>
        <p><strong>Frecuencia Cardiaca Máxima:</strong> ${fcm} ppm</p>
        <h3>Zonas de entrenamiento:</h3>
        <p><strong>Zona de recuperación (60%-70%):</strong> ${zonaRecuperacion}</p>
        <p><strong>Zona aeróbica (70%-80%):</strong> ${zonaAerobica}</p>
        <p><strong>Zona anaeróbica (80%-90%):</strong> ${zonaAnaerobica}</p>
        <p><strong>Línea roja (90%-100%):</strong> ${lineaRoja}</p>
    `;
}

function calcularCategoria() {
    let yearInput = prompt("Ingresa tu año de nacimiento (ej: 2010)");
    
    // Validar que se ingresó un valor
    if (yearInput === null || yearInput === "") {
        return;
    }
    
    // Convertir a número
    let year = parseInt(yearInput);
    const currentYear = 2025;
    const edad = currentYear - year;
    
    // Validar que el año sea razonable
    if (isNaN(year) || year < 1900 || year > currentYear) {
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
    resultadoCat.innerHTML = "<p><strong>Tu categoría es: " + categoria + "</strong></p>";

    for (let i = 0; i < categorias.length; i++) {
        if (categorias[i] === categoria) {
            resultadoCat.innerHTML += "<p><strong>" + categorias[i] + "</strong></p>";
        } else {
            resultadoCat.innerHTML += "<p>" + categorias[i] + "</p>";
        }
    }
}

function generarHorarios() {
    let html = "<h3>Horario Mañana</h3><table border='1'>";
    html += "<tr><th>Hora</th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th></tr>";
    
    for (let h = 9; h <= 13; h += 2) {
        html += "<tr><th>" + h + ":00-" + (h+2) + ":00</th>";
        for (let d = 0; d < 5; d++) {
            html += "<td></td>";
        }
        html += "</tr>";
    }
    html += "</table>";

    html += "<h3>Horario Tarde</h3><table border='1'>";
    html += "<tr><th>Hora</th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th><th>Sábado</th><th>Domingo</th></tr>";
    
    for (let h = 16; h <= 20; h++) {
        html += "<tr><th>" + h + ":00-" + (h+1) + ":00</th>";
        for (let d = 0; d < 7; d++) {
            html += "<td></td>";
        }
        html += "</tr>";
    }
    html += "</table>";

    document.getElementById("resultadoH").innerHTML = html;
}