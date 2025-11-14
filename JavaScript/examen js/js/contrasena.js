function vContrasena() {
    let contrasena = prompt("Dime la contraseña: ");
    let resultados = document.getElementById("resultadoC");
    
    let longitud = contrasena.length >= 8 && contrasena.length <= 16;
    let mayuscula = /[A-Z]/.test(contrasena);
    let minuscula = /[a-z]/.test(contrasena);
    let numero = /[0-9]/.test(contrasena);
    let caracterEspecial = /[-_@#$%&]/.test(contrasena);
    
    if (longitud && mayuscula && minuscula && numero && caracterEspecial) {
        resultados.innerHTML = "Contraseña segura";
    } else {
        resultados.innerHTML = "Contraseña no segura";
    }
}