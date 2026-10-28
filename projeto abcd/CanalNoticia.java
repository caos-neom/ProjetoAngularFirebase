import java.util.List;
import java.util.ArrayList;

public class CanalNoticia {
    List<Observer> inscritos = new ArrayList<>();

    public void inscrever(Observer pessoa){
        inscritos.add(pessoa);
    }

    public void publicarNoticia(String noticia){
        System.out.println("Canal Noticia publicou" + noticia);

        for(Observer pessoa : inscritos){
            pessoa.atualizar(noticia);
        }
    }
}
