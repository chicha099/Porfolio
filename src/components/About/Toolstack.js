import React from "react";
import { Col, Row } from "react-bootstrap";
import s from "./About.module.css";
import {
  SiTrello,
  SiVisualstudiocode,
  SiFirebase,
  SiPostman,
  SiHeroku,
  SiAdobephotoshop,
  SiFigma
} from "react-icons/si";
import {
  IoLogoVercel
} from "react-icons/io5";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
        <p className={s.techLabel}>Trello</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p className={s.techLabel}>Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className={s.techLabel}>VSC</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className={s.techLabel}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <p className={s.techLabel}>Heroku</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoVercel />
        <p className={s.techLabel}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
        <p className={s.techLabel}>AdobePhotoshop</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
