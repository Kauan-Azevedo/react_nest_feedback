import "../../index.css";
import style from "./home.module.css";

export function Home() {
  return (
    <>
      <div className={style["container"]}>
        <section>
          <h2>Bem-Vindo ao Feedbacks.</h2>
          <p>
            Aqui você poderá enviar e deixar registrado seu feedback sobre
            qualquer assunto, podendo se identificar ou manter-se anonimo, seu
            feedback sera salvo em uma API para outros usuários poderem ver o
            que você acha sobre diversos tópicos tanto quanto noticias,
            produtos, jogos, vídeos, filmes e series.
          </p>
          <div className={style["vantagens"]}>
            <div className={style["vantagem-card"]}>
              <div>
                <img src="/Comentarios.svg" alt="bolhas de dialogo" />
                <h3>Envie seu feedback.</h3>
              </div>
            </div>
            <div className={style["vantagem-card"]}>
              <div>
                <img src="/Person.svg" alt="Icone de um " />
                <h3>Se identifique ou se mantenha anônimo.</h3>
              </div>
            </div>
            <div className={style["vantagem-card"]}>
              <div>
                <img src="/Save.svg" alt="" />
                <h3>Salve seu feedback.</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
