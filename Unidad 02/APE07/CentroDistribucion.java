package Unidad 02.APE07;

import java.util.*;

public class CentroDistribucion {
    private ArrayList<Paquete> inventario = new ArrayList<>();
    private boolean uFIFO; // false = Lifo  - True = Fifo 

    public CentroDistribucion(boolean usarFIFO) {
        this.uFIFO = usarFIFO;
    }

    public void recibirPaquete(Paquete p) {
        inventario.add(p);
    }

    public Paquete despacharPaquete() {
        if (inventario.isEmpty()) return null;
        
        if (uFIFO) {
            return inventario.remove(0);     // FIFO: el primero en entrar
        } else {
            return inventario.remove(inventario.size() - 1); // LIFO: el último en entrar
        }
    }

    public void ordenarPorCodigoPostal() {
        inventario.sort(Comparator.comparingInt(Paquete::getCodigoPostal));
    }

    public int tamañoInventario() {
        return inventario.size();
    }

    public static void main(String[] args) {
        int[] tamaños = {50000, 70000, 1000000};
        
        for (int tamaño : tamaños) {
            System.out.println("---------------------------------------------");
            System.out.println("      " + String.format("%d", tamaño) + " paquetes");
            System.out.println("---------------------------------------------");
            
            // Probar LIFO
            testearEstrategia(tamaño, false);
            
            // Probar FIFO
            testearEstrategia(tamaño, true);
        }
    }
    
    private static void testearEstrategia(int cantidad, boolean fifo) {
        CentroDistribucion centro = new CentroDistribucion(fifo);
        Random random = new Random(42);
        
        String nombre = fifo ? "FIFO" : "LIFO";
        System.out.println("\n Estrategia: " + nombre);
        
        // Cargar paquetes
        long inicio = System.nanoTime();
        for (int i = 0; i < cantidad; i++) {
            int cp = 110101 + random.nextInt(50);
            centro.recibirPaquete(new Paquete(i, cp));
        }
        long carga = (System.nanoTime() - inicio) / 1_000_000;
        
        // Ordenar
        inicio = System.nanoTime();
        centro.ordenarPorCodigoPostal();
        long ordenacion = (System.nanoTime() - inicio) / 1_000_000;
        
        // Despachar un paquete
        inicio = System.nanoTime();
        Paquete despachado = centro.despacharPaquete();
        long despacho = (System.nanoTime() - inicio) / 1_000_000;
        
        System.out.println("Carga:      " + carga + " ms");
        System.out.println("Ordenación: " + ordenacion + " ms (" + String.format("%3f", ordenacion/1000.0) + " seg)");
        System.out.println("Despacho:   " + despacho + " ms");
        System.out.println("Último despachado: ID " + despachado.getId() + " | CP " + despachado.getCodigoPostal());
    }
}