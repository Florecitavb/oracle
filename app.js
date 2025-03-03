// Array para almacenar los nombres de los amigos
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

// Función para sortear a un solo amigo secreto
function sortearAmigo() {
    // Verificar si hay suficientes amigos para hacer el sorteo
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 amigos para realizar el sorteo.");
        return;
    }

    // Seleccionar un amigo aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en un mensaje
    const resultadoList = document.getElementById("resultado");
    resultadoList.innerHTML = ""; // Limpiar resultados anteriores
    const mensajeResultado = `El amigo sorteado es: ${amigoSorteado}`;
    
    const li = document.createElement("li");
    li.textContent = mensajeResultado;
    resultadoList.appendChild(li);
}

