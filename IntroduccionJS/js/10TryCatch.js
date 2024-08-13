// Control de errores

const n1 = 10;
const n3 = 30;

try {
    console.log(n1); // Este debería imprimirse correctamente
    console.log(n2); // Esto lanzará un error porque n2 no está definida
    
} catch (error) {
    console.error("Se ha producido un error:", error.message);
    console.error("Stack trace:", error.stack);
    
    // Opcional: realizar alguna acción en caso de error
    if (error instanceof ReferenceError) {
        console.error("Error de referencia detectado. Asegúrate de que todas las variables estén definidas.");
    } else {
        console.error("Un tipo de error inesperado ocurrió.");
    }
    
} finally {
    console.log("El bloque try-catch ha finalizado su ejecución.");
}

console.log(n3); // Este debería imprimirse correctamente si el script continúa
