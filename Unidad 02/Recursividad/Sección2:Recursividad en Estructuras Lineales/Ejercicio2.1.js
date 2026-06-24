function invertirArreglo(arr, inicio, fin) {
    
    // TODO: Identificar la condición de parada (Caso Base)
    if (inicio >= fin){
        return
    }

    // TODO: Realizar el intercambio e invocar la recursividad
    // Intercambio de elementos
    [arr[inicio], arr[fin]] = [arr[fin], arr[inicio]];

    // Se llama a la función moviendo los punteros hacia el centro
    invertirArreglo(arr, inicio + 1, fin - 1);

}

// Casos de prueba para validación
let miLista = [10, 20, 30, 40, 50];
invertirArreglo(miLista, 0, miLista.length - 1);
console.assert(JSON.stringify(miLista) === JSON.stringify([50, 40, 30, 20, 10]));
console.log("Ejercicio 2.1 superado.");