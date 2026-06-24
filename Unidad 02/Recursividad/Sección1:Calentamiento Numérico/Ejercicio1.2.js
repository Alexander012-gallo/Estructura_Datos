function potencia(base, exponente) {
    
    // TODO: Implementar algoritmo recursivo optimizado
    if (exponente === 0) {
        return 1;
    }

    // Caso recursivo para exponentes pares:
    if (exponente % 2 === 0) {
        const mitad = potencia(base, exponente / 2);
        return mitad * mitad;
    } 

    // Caso recursivo para exponentes impares:
    else {
        return base * potencia(base, exponente - 1);
    }
}

// Casos de prueba para validación
console.assert(potencia(2, 10) === 1024, "Error en potencia(2, 10)");
console.assert(potencia(5, 3) === 125, "Error en potencia(5, 3)");
console.assert(potencia(7, 0) === 1, "Error en potencia(7, 0)");
console.log("Ejercicio 1.2 superado.");