package Unidad 02.APE07;

public class GestorRutas {
    public static void ordenar(Paquete[] datos){
        //TODO: Implementar inicialmente un metodo de ordencion Burbuja
        if (datos == null || datos.length <= 1)
            return;
        for (int i = 0; i < datos.length -1; i++){
            for (int j = 0; j < datos.length - 1 - i; j++){
                if (datos[j] != null && datos [j + 1] != null){
                    if (datos[j].getCodigoPostal() > datos[j + 1].getCodigoPostal()){
                        Paquete temp = datos[j];
                        datos[j] = datos [j + 1];
                        datos[j + 1] = temp;
                    }
                }
            }
        }
    }

}
