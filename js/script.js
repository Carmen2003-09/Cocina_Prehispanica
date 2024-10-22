window.onload = function() {
    // Mostrar alerta para ingresar el nombre
    let nombre = prompt("Ingresa tu nombre:");
    if (nombre) {
        alert(`¡Bienvenido a la Cocina Mexicana Prehispánica, ${nombre}!`);
    }

    // Verificar si el navegador soporta LocalStorage
    if (typeof(Storage) !== "undefined") {

        // Verificar si la variable 'visitas' ya existe en localStorage
        if (localStorage.visitas) {
            // Incrementar el número de visitas
            localStorage.visitas = Number(localStorage.visitas) + 1;
        } else {
            // Si es la primera vez, inicializar el contador de visitas
            localStorage.visitas = 1;
        }

        // Mostrar el número de visitas en el elemento con id "contador"
        document.getElementById("contador").innerHTML = `Número de visitas: ${localStorage.visitas}`;
    } else {
        // Si el navegador no soporta LocalStorage, mostrar un mensaje de error
        console.log("Lo siento, tu navegador no soporta Web Storage...");
    }
};
