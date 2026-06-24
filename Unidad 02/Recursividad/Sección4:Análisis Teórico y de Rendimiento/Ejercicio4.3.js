function factorialCola(n, acumulador = 1) {
    // Caso base: hemos llegado al final
    if (n <= 1) {
        return acumulador;
    }
    
    // La multiplicación ocurre ANTES de la llamada, no al retornar.
    return factorialCola(n - 1, n * acumulador);
}

// Validación
console.log(factorialCola(5)); // 120 (5 * 4 * 3 * 2 * 1)
console.log(factorialCola(0)); // 1