// Fetch Api

// especificar menu

function appMenus(llave) {
    if (llave == 1){
        obtenerEmpleados();
    } else if (llave == 2){
        obtenerEmpleados2();
    }
}

// Sin asyn / await

function obtenerEmpleados() {
    const archivo = 'empleados.json';
    fetch(archivo)
        .then(resultado => resultado.json())
        .then(datos => {
            const {empleados} = datos;
            empleados.forEach(empleado => {
                console.log(empleado);

                
            });
        })
}

// Con asyn / await

async function obtenerEmpleados2() {
    const archivo = 'empleados.json';
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos)
}



// Menus
// appMenus(1) // Sin asyn / await
appMenus(2) // Con asyn / await