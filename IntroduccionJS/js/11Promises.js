// Promises

// Refleja un valor que podra estar disponible ahora, en un futuro o nunca. Similar al comun concepto de promesa

const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if (auth){
        resolve("Usuario autenticado."); // El promise se cumple
    } else{
        reject("No se pudo iniciar sesion."); // El promise no se se cumple
    }
});
usuarioAutenticado
    .then(resultado => console.log("Desde el promise:", resultado))
    .catch(resultado => console.log("Desde el promise:", resultado));

// En los primises existen 3 valores posibiles:
    // Pending: No se ha cumplido pero tampoco se ha rechazado, esta en espera
    // Fulfilled: Se cumplio el promise
    // Reject: No se pudo cumplir

// Ejemplo de promises y notificaciones
const boton = document.querySelector('#boton');
boton.addEventListener('click', function () {
    // Pedir permiso para mostrar notificaciones
    Notification.requestPermission()
        .then(resultado => {
            console.log("El resultado es:" + resultado);
            // Crear una notificación solo si el permiso es concedido
            if (resultado === 'granted') {
                new Notification('Esta es una notificación', {
                    body: 'Código con Felipe'
                });
            }
        })
        .catch(error => console.log("Error al solicitar permiso de notificación:", error));
});