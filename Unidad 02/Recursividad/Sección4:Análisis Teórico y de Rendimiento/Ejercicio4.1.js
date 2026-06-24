const cache = {};

function fibonacci(n) {
    if (n <= 1) return n;

    // Si ya se calcula el valor, lo obtenemos del caché
    if (cache[n]) return cache[n];

    // Si no se calculam,  se guarda en caché y retornamos
    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return cache[n];
}

console.log(fibonacci(50)); // Resultado inmediato