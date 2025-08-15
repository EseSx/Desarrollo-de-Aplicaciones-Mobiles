import { Header } from "../components/Header";
import "../styles/Home.css";
import "../styles/App.css";

export default function Home() {
  return (
    <>
      <Header />

      <h3 className="introduccion">
        Sobrevive al destino trazado por las cartas y tus decisiones. <br /> En
        Last Draw, cada ronda lanza entre 2 y 8 cartas de tarot sobre la mesa.
        Cada carta tiene un efecto diferente: algunas te ayudan, otras te
        condenan. cada tirada es un paso hacia la supervivencia o la muerte
        directa.
        <br /> ¿Cuántos turnos podrás resistir la suerte del tarot?
      </h3>

      <h3 className="texto">
        La verdad es que esta página y este juego se me ocurrieron gracias a un
        juego de PS2: Persona 3 FES. Quise aprovechar esa inspiración como una
        forma de expresar mi punto de vista filosófico sobre el destino y lo que
        nos forma como individuos. Es raro, ya sé... pero bueno, ¿cuándo no hago
        cosas raras? Si no soy excéntrico, no soy yo. <br /> Mucha gente cree
        que el destino y la individualidad están profundamente relacionados, y
        no es una idea rara: varios enfoques sobre ambos conceptos se conectan.
        Por ejemplo, la idea de que nacemos con una psique fija, algo inmutable;
        que somos como somos y vivimos como vivimos. Como el destino: único para
        cada persona e imposible de cambiar. <br /> También existe la
        perspectiva de que el entorno moldea nuestro destino, que somos un
        constructo social. Personalmente, creo que la verdad está en un punto
        medio. Pienso que de la combinación entre la individualidad y el entorno
        nacen nuestras reacciones, y que es a través de nuestras decisiones que
        forjamos tanto nuestro destino como nuestra forma de ser. <br /> Eso es
        lo que quise representar con este juego: las posibilidades que nos da la
        vida, y cómo la muerte —como símbolo del final— está siempre presente en
        cada situación. Pero también cómo, a pesar de eso, siempre existen
        formas de retrasar ese final, e incluso de retomar una situación que
        creemos finalizada. <br /> Si tuviera que definir este juego con una
        frase, sería: "Memento mori". No como un recordatorio para temer, sino
        para vivir. Para tomar decisiones, avanzar, no quedarse quieto. Para no
        frenar por nada ni por nadie. <br />
        Me gusta abrirme en este tipo de proyectos; me da libertad para
        expresarme sin sentir que estoy agobiando a alguien con mis
        pensamientos. Es mi forma de expresarme... es como mi psicólogo
        jajajaja. <br /> Gracias por leer.
      </h3>

      <h3 className="texto">
        Disfruta del juego y, si es la primera vez que jugas, te recomiendo leer
        las reglas.
      </h3>
    </>
  );
}
