// Async - Await

// manejar los diferntes ejemplos (ignorar)

function appDecision(clave) {
    if (clave == 1){
        app();
    } else if (clave == 2) {
        app2();
    }
    console.log("Este codigo no se bloquea..");
    for (let i = 0; i < 11; i++) {
        console.log(i);
    }
}

// Funciones a utilizar con asyn / await:

function descargarNuevosCliente() {
    return new Promise(resolve => {
        console.log("Descargando cliente...");

        setTimeout(() => {
            resolve(["Los clientes fueron descargados."]);
        }, 5000);
    });
}

function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log("Descargando pedidos...");

        setTimeout(() => {
            resolve("Los pedidos fueron descargados.");
        }, 3000);
    });
}

// Con una sola consulta asyn /await

async function app() {
    try {
        const clientes = await descargarNuevosCliente();
        console.log(clientes);
    } catch (error) {
        console.log(error);
    }
    
}

// Para trabajar con mas de dos consultas async await:

async function app2() {
    try {
        // Van a ejecutarse las dos al mismo tiempo
        const resultado = await Promise.all([descargarNuevosCliente(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
    
}

// Llamar al menu que se quiera

// appDecision(1); // Probar con ejemplo simple
appDecision(2); // Probar con ejemplo de dos consultas