import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Serafin Dericks </span>
            from <span className="purple"> Vienna, Austria </span>
            and i'm currently living in <span className="purple"> Buenos Aires, Argentina.</span>
            <br />I am a junior Fullstack Developer with Frontend preferences.
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
