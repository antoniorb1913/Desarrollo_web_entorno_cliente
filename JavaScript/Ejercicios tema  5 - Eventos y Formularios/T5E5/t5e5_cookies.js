window.onload = function() {
    let valorGuardado = leerCookie("contadorErrores");
    if (valorGuardado !== "") {
        document.getElementById('intentos').value = valorGuardado;
    }
};

function sumarError() {
    let campo = document.getElementById('intentos');
    let total = parseInt(campo.value) + 1;
    campo.value = total;
    crearCookie("contadorErrores", total, 7);
}

document.getElementById('formBolsas').addEventListener('submit', function(e) {
    e.preventDefault();

    const fecha = document.getElementById('fecha').value;
    const cocinero = document.getElementById('cocinero').value;
    const destinatario = document.getElementById('destinatario').value;
    const gramos = document.getElementById('gramos').value;
    const composicion = document.getElementById('composicion').value;
    const cuenta = document.getElementById('cuenta').value;
    const cuentaLimpiaInput = document.getElementById('cuentaLimpia');


    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(fecha)) {
        sumarError();
        return alert("Fecha: usa dd/mm/aaaa");
    }
    
    if (!/^[A-Z]{2}[^A-Z0-9]\d{4}$/.test(cocinero)) {
        sumarError();
        return alert("Cocinero: Formato erróneo (ej. WW$1234)");
    }

    if (!/^[A-Z]{2,3}_[a-z]+:\d{4}$/.test(destinatario)) {
        sumarError();
        return alert("Destinatario: Formato erróneo (ej. NM_alburquerque:1234)");
    }

    if (gramos < 100 || gramos > 5000) {
        sumarError();
        return alert("Gramos: Debe estar entre 100 y 5000");
    }

    if (!/^\d+g([A-Z]{1,2}\d*)+$/.test(composicion)) {
        sumarError();
        return alert("Composición: Formato erróneo (ej. 200gC3OH7)");
    }

    if (!/^[A-Z]{2}\d{2}-\d{12}-\d{4}$/.test(cuenta)) {
        sumarError();
        return alert("Cuenta: Formato erróneo (XX00-123456789012-0000)");
    }

    let val1 = cuenta.charCodeAt(0) - 64;
    let val2 = cuenta.charCodeAt(1) - 64;
    let sumaLetras = parseInt(cuenta.substring(2, 4));

    if (val1 + val2 !== sumaLetras) {
        sumarError();
        return alert("Cuenta: La suma de las letras no coincide");
    }

    let bloque1 = cuenta.substring(5, 11);
    let bloque2 = cuenta.substring(11, 17);
    let control = cuenta.substring(18, 22);

    const calc = (b) => {
        let s = 0;
        for (let n of b) s += parseInt(n);
        return Math.floor(s / 6).toString().padStart(2, '0');
    };

    let check = calc(bloque1) + calc(bloque2);

    if (control !== check) {
        sumarError();
        return alert("Cuenta: Los dígitos de control no son correctos");
    }

    cuentaLimpiaInput.value = cuenta.replace(/-/g, "");
    alert("¡Lote registrado correctamente!");
});


document.getElementById('btnReiniciar').addEventListener('click', function() {
    borrarCookie("contadorErrores");
    document.getElementById('intentos').value = 0;
});