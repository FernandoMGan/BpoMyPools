// Funcion para donar a Bpo Change
function mostrarFormDonateBpo() {
    // Redirige a la página de donación
    window.location.href = "http://www.bpochange.com.ar/donate/modaling-donate.html";
}

// Función para ocultar la ventana emergente y volver atrás en el historial del navegador
function browserPushToBack() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    // Utiliza history.back() para volver atrás en la historia del navegador
    history.back();
}

// Función para mostrar la ventana emergente
function mostrarVentanaEmergente() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Función para ocultar la ventana emergente
function ocultarVentanaEmergente() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Función para redirigir a PayPal con el monto deseado
function donar(monto) {
    // Reemplaza 'tu-cuenta-paypal' con tu nombre de usuario o dirección de PayPal
    window.location.href = "https://www.paypal.com/paypalme/bpochange/" + monto;
}
