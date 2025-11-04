function calcularFCM() {
    let edad, sexo;
    let datosValidos = false;
    
    // Validar edad
    while (!datosValidos) {
        edad = prompt("Ingresa tu edad (1-120):");
        edad = parseInt(edad);
        
        
        // Validar sexo
        sexo = prompt("Ingresa tu sexo (H para Hombre, M para Mujer):").toUpperCase();
        
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