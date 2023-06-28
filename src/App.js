import Selector from "./Selector";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <article className="card1">
          <header className="header1">
            <div>
              <img src="IMG_2863.png" alt="star" />
            </div>
          </header>

          <section className="text">
            <h1>Avalie nosso serviço.</h1>
            <p>
              Por favor conte um pouco como foi sua experiência ao usar nosso
              serviço. Todo retorno é importante para nós melhorarmos!
            </p>
          </section>

          <div className="selector">
            <Selector quant="5" />
          </div>

          <section className="button">
            <a href="#">Avaliar</a>
          </section>
        </article>

        <article className="card2">
          <header className="header2">
            <div>
              <img src="IMG_2864.png" alt="imagem card 2" />
            </div>
          </header>

          <section className="nota">
            <p className="orange-text">Você deu a nota 4 de 5</p>
          </section>

          <section className="text">
            <h1>Obrigado!</h1>
            <p>
              Estamos felizes e agradecidos por usar parte do seu tempo para dar
              sua opinião. Se precisar de ajuda pode nos procurar.
            </p>
          </section>

          <section className="avaliar-btn">
            <a href="#" className="orange-text">
              Avaliar novamente
            </a>
          </section>
        </article>
      </div>
    </div>
  );
}
