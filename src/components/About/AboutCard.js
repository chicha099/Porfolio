import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useSelector } from 'react-redux';

function AboutCard() {
  const len = useSelector(state => state.len);

  return (
    len === "ES" ?
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hola a todos, Soy <span className="purple">Serafin Dericks </span>
              de <span className="purple"> Hamburgo, Alemania </span>
              y actualmente estoy viviendo en <span className="purple"> Buenos Aires, Argentina.</span>
              <br />Soy un desarrollador especializado en Front-end aunque tambien tengo experiencia trabajando como Full-Stack.
              <br />
              <br />
              Ademas de codear, hay otras actividades que disfruto hacer!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Jugar Videojuegos
              </li>
              <li className="about-activity">
                <ImPointRight /> Ayudar en un refugio para gatos sin hogar
              </li>
              <li className="about-activity">
                <ImPointRight /> Mirar Formula 1
              </li>
              <li className="about-activity">
                <ImPointRight /> Viajar
              </li>
            </ul>

            <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
              <br />"Sólo aquellos que creen en su camino
              <br />Acabarán brillando
              <br />Hasta que sus vidas se consuman
              <br />Por oponerse incluso a Dios"{" "}
            </p>
            <footer className="blockquote-footer">Fighting Gold</footer>
          </blockquote>
        </Card.Body>
      </Card>
      :
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple">Serafin Dericks </span>
              from <span className="purple"> Hamburg, Germany </span>
              and i'm currently living in <span className="purple"> Buenos Aires, Argentina.</span>
              <br />I am a Front-end developer although I also have experience working as Full-Stack Dev.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Playing Games
              </li>
              <li className="about-activity">
                <ImPointRight /> Sheltering Stray Cats
              </li>
              <li className="about-activity">
                <ImPointRight /> Watching F1
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling
              </li>
            </ul>

            <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
              <br />"Only those who believe their path
              <br />Will eventually shine
              <br />Until their lives burn out
              <br />Opposing even God"{" "}
            </p>
            <footer className="blockquote-footer">Fighting Gold</footer>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
