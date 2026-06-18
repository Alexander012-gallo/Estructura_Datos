public class Paquete {
    private int id;
    private int CodigoPostal;

    public Paquete  (int id, int CodigoPostal ) {
        this.id = id;
        this.CodigoPostal = CodigoPostal;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getCodigoPostal() {
        return CodigoPostal;
    }
    public void setCodigoPostal(int codigoPostal) {
        CodigoPostal = codigoPostal;
    }
}