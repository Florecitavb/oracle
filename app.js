// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/ Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el nombre del input
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); // Elimina los espacios al inicio y al final

    // Verificar si el nombre no está vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre.");
        return; // Detener la ejecución si el campo está vacío
    }

    // Verificar si el nombre ya existe en la lista
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya ha sido añadido.");
        inputAmigo.value = ""; // Limpiar el input para ingresar otro nombre
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Mostrar el nombre en la lista visualmente
    const listaAmigos = document.getElementById("listaAmigos");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombreAmigo;
    listaAmigos.appendChild(nuevoElemento);

    // Limpiar el input para el siguiente amigo
    inputAmigo.value = "";
}

// Función para sortear a los amigos secretos
function sortearAmigo() {
    // Verificar si hay suficientes amigos para hacer el sorteo
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 amigos para realizar el sorteo.");
        return;
    }

    // Crear una copia del array para no modificar el original
    const amigosCopy = [...amigos];
    const resultados = [];

    // Asignar un amigo secreto de forma aleatoria
    while (amigosCopy.length > 0) {
        const amigo = amigosCopy.pop(); // Sacar un amigo de la lista
        const indiceAleatorio = Math.floor(Math.random() * amigosCopy.length);
        const amigoSecreto = amigosCopy.splice(indiceAleatorio, 1)[0]; // Seleccionar al azar y eliminarlo de la lista
        resultados.push(`${amigo} -> ${amigoSecreto}`); // Guardar la relación de amigo a amigo secreto
    }

    // Mostrar los resultados del sorteo
    const resultadoList = document.getElementById("resultado");
    resultadoList.innerHTML = ""; // Limpiar los resultados anteriores
    resultados.forEach(result => {
        const li = document.createElement("li");
        li.textContent = result;
        resultadoList.appendChild(li);
    });
}