import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import s from "./About.module.css";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPostgresql,
  DiGit,
  DiHtml5,
  DiScrum,
  DiCss3
} from "react-icons/di";
import { SiRedux } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className={s.techLabel}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className={s.techLabel}>NodeJs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className={s.techLabel}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p className={s.techLabel}>Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p className={s.techLabel}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p className={s.techLabel}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className={s.techLabel}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <p className={s.techLabel}>PosgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
        <p className={s.techLabel}>Scrum</p>
      </Col>
    </Row>
  );
}

export default Techstack;
