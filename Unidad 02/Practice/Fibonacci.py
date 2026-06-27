import time

def fibonacci_sin_cache(n):
    if n <= 1:
        return n
    return fibonacci_sin_cache(n-1) + fibonacci_sin_cache(n-2)

def fibonacci_con_cache(n, cache):
    if n in cache:
        return cache[n]
    if n <= 1:
        return n
    cache[n] = fibonacci_con_cache(n-1, cache) + fibonacci_con_cache(n-2, cache)
    return cache[n]

# Prueba experimental
n = 35

# -------- Sin memoización --------
inicio = time.perf_counter()
resultado1 = fibonacci_sin_cache(n)
tiempo1 = time.perf_counter() - inicio

# -------- Con memoización --------
cache = {}
inicio = time.perf_counter()
resultado2 = fibonacci_con_cache(n, cache)
tiempo2 = time.perf_counter() - inicio

print("Fibonacci calculado:", resultado1)

print("\n--- Algoritmo tradicional ---")
print("Tiempo:", tiempo1, "segundos")

print("\n--- Algoritmo con Memoización ---")
print("Tiempo:", tiempo2, "segundos")

print("\nCantidad de valores almacenados en Hash:")
print(len(cache))

print("\nMejora obtenida:")

print(tiempo1 / tiempo2, "veces más rápido")