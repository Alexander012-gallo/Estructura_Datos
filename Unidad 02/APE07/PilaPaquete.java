package Unidad 02.APE07;

public class PilaPaquete {
    private Paquete [] stack;
    private int top;

    public PilaPaquete(int capacidad) {
        this.stack = new Paquete[capacidad];
        this.top = -1;// Por que empezamos en -1 /pila vacia
    }
    public void push(Paquete p) {
        if (top == stack.length -1){
            System.out.println("Pila llena");
            return;
        }
        top++;
        stack[top] = p;
    }
    public Paquete pop() {
        if (top == -1){
            System.out.println("Pila vacía");
            return null;
        }
        Paquete elemento = stack[top];
        stack[top] = null;
        top --;
        return elemento;
    }
}
