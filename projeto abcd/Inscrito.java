public class Inscrito implements Observer {
    String nome;
    String dispositivo;

    public Inscrito(String nome, String dispositivo){
        this.nome = nome;
        this.dispositivo = dispositivo;
    }

    @Override
    public void atualizar (String noticia) {
        System.out.println(this.nome + "recebeu aa noticia" + noticia + "no seu" + this.dispositivo);
    }
}
