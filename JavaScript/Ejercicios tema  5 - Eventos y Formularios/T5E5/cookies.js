function crearCookie(nombre, valor, dias) {
    let d = new Date();
    d.setTime(d.getTime() + (dias * 24 * 60 * 60 * 1000));
    document.cookie = nombre + "=" + valor + ";expires=" + d.toUTCString() + ";path=/";
}

function leerCookie(nombre) {
    let nombreEQ = nombre + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nombreEQ) == 0) return c.substring(nombreEQ.length, c.length);
    }
    return "";
}

function borrarCookie(nombre) {
    document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}