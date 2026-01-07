function calcularIMC() {
    let altura = prompt("Ingresa tu altura en METROS (ej: 1.70):");
    let peso = prompt("Ingresa tu peso en kg:");

    peso = parseFloat(peso);
    altura = parseFloat(altura);
    
    let imc = peso / (altura * altura);

    const imcs = ["Delgadez severa", "Delgadez moderada", "Delgadez aceptable", "Peso normal", "Sobrepeso", "Obeso (Tipo I)", "Obeso (Tipo II)", "Obeso (Tipo III)"];
    

    let rIMC;
    if (imc < 16.00) {
        rIMC = imcs[0];
    } else if (imc >= 16.00 && imc <= 16.99) {
        rIMC = imcs[1];
    } else if (imc >= 17.00 && imc <= 18.49) {
        rIMC = imcs[2];
    } else if (imc >= 18.50 && imc <= 24.99) {
        rIMC = imcs[3];
    } else if (imc >= 25.00 && imc <= 29.99) {
        rIMC = imcs[4];
    } else if (imc >= 30.00 && imc <= 34.99) {
        rIMC = imcs[5];
    } else if (imc >= 35.00 && imc <= 39.99) {
        rIMC = imcs[6];
    } else {
        rIMC = imcs[7];
    }

    let resultadoIMC = document.getElementById("resultadoIMC");
    resultadoIMC.innerHTML = "<h3>Tu IMC es: </h3>";
    
    for (let i = 0; i < imcs.length; i++) {
        if (imcs[i] === rIMC) {
            resultadoIMC.innerHTML += "<p><strong>" + imcs[i] + "</strong></p>";
        } else {
            resultadoIMC.innerHTML += "<p>" + imcs[i] + "</p>";
        }
    }
}