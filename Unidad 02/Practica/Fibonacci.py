import time

# Algoritmo recursivo tradicional (sin optimización)
def fibonacci_sin_cache(n):
    # Caso base: F(0) = 0, F(1) = 1
    if n <= 1:
        return n

    # Llamadas recursivas sin almacenamiento
    return fibonacci_sin_cache(n-1) + fibonacci_sin_cache(n-2)


# Algoritmo optimizado con memoización (uso de tabla hash)
def fibonacci_con_cache(n, cache):
    # Verifica si el valor ya fue calculado
    if n in cache:
        return cache[n]

    # Caso base
    if n <= 1:
        return n

    # Cálculo y almacenamiento en cache
    cache[n] = fibonacci_con_cache(n-1, cache) + fibonacci_con_cache(n-2, cache)

    return cache[n]


# ----------------- Prueba experimental -----------------
n = 40

# -------- Sin memoización --------
inicio = time.perf_counter()
resultado1 = fibonacci_sin_cache(n)
tiempo1 = time.perf_counter() - inicio

# -------- Con memoización --------
cache = {}
inicio = time.perf_counter()
resultado2 = fibonacci_con_cache(n, cache)
tiempo2 = time.perf_counter() - inicio


# ----------------- Resultados -----------------
print("Fibonacci calculado:", resultado1)

print("\n--- Algoritmo tradicional ---")
print("Tiempo:", tiempo1, "segundos")

print("\n--- Algoritmo con Memoización ---")
print("Tiempo:", tiempo2, "segundos")

print("\nCantidad de valores almacenados en Hash:")
print(len(cache))

print("\nMejora obtenida:")
print(tiempo1 / tiempo2, "veces más rápido")