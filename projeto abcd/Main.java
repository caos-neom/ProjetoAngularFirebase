

public class Main {
    public static void main(String[] args) {
        CanalNoticia canal = new CanalNoticia();

        Inscrito ana = new Inscrito ("ana","celular");
        Inscrito pedro = new Inscrito ("pedro","computador");
        Inscrito julia = new Inscrito ("julia","tablet");

        canal.inscrever(ana);
        canal.inscrever(pedro);
        canal.inscrever(julia);

        canal.publicarNoticia("as ferisa estão chegando")
    }
}
