window.onload = () => {
    const container = document.getElementById('container-botones');
    const galeria = document.getElementById('galeria');
    const contadoresDiv = document.getElementById('contadores');

    // --- 1. Botón Generar ---
    const btnGenerar = document.createElement('button');
    btnGenerar.textContent = "Generar personaje";
    container.appendChild(btnGenerar);

    btnGenerar.onclick = () => {
        let opcion = prompt("Elija el nombre del personaje: 1. Sanji, 2. Zoro, 3. Nami, 4. Luffy");
        let nombreImg = "";

        switch(opcion) {
            case '1': 
                nombreImg = "sanji.jpeg"; 
                break;
            case '2': 
                nombreImg = "zoro.jpeg"; 
                break;
            case '3': 
                nombreImg = "nami.jpeg"; 
                break;
            case '4': 
                nombreImg = "luffy.jpeg"; 
                break;
            default: 
                alert("Opción no válida");
                return;
        }

        const img = document.createElement('img');
        img.src = `imagenes/${nombreImg}`;
        img.classList.add('personaje-img');
        img.alt = nombreImg.split('.')[0]; 
        galeria.appendChild(img);
    };

    // --- 2. Botón Borrar ---
    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = "Borrar personaje";
    container.appendChild(btnBorrar);

    btnBorrar.onclick = () => {
        if (galeria.lastElementChild) {
            galeria.removeChild(galeria.lastElementChild);
        }
    };

    // --- 3. Botones de Conteo (No Sanji, No Zoro, etc.) ---
    const personajes = ["sanji", "zoro", "nami", "luffy"];

    personajes.forEach(p => {
        const btn = document.createElement('button');
        btn.textContent = `Numero de ${p.charAt(0).toUpperCase() + p.slice(1)}`;
        contadoresDiv.appendChild(btn);

        btn.onclick = () => {
            // Contamos los nodos que tengan el atributo alt correspondiente
            const cantidad = document.querySelectorAll(`img[alt="${p}"]`).length;
            alert(`Hay ${cantidad} imágenes de ${p}`);
        };
    });
};