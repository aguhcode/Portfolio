// Manejo del envío del formulario
document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue al enviar

    // Obtención de los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const detalle = document.getElementById('detalle').value;

    // Validar y enviar la información
    if (nombre && email && detalle) {
        // Aquí puedes agregar el código para enviar los datos a un servidor o manejarlos como desees
        Toastify({
            text: "Formulario enviado con éxito",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
    } else {
        // Si faltan campos requeridos
        Toastify({
            text: "Por favor, completa todos los campos requeridos",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
        }).showToast();
    }
});

// Manejo del botón de limpiar (opcional)
document.getElementById('limpiarBtn').addEventListener('click', function() {
    Toastify({
        text: "Formulario limpiado",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
    }).showToast();
});
