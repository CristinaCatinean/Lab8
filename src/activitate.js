import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Activitate = (props) => {
  const { ora, titlu, loc, descriere, id, sterge } = props;
  return (
    <Container>
      <Row>
        <Col sm={9}>
          <h4>
            {ora} - {titlu}
          </h4>
          <h6>Loc: {loc}</h6>
          <p>Descriere: {descriere} </p>
        </Col>
        <Col sm={3} className="d-flex align-items-center">
          <Button variant="primary" onClick={() => sterge(id)}>
            Sterge
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Activitate;
