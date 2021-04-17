import React from "react";
import Activitate from "./activitate";
import Container from "react-bootstrap/Container";

const act = {
  id: 1,
  ora: "10:00",
  titlu: "Întâlnire cu presa",
  loc: "Sala G114",
  descriere: "Nu este cazul"
};

export default function App() {
  const stergActiv = (id) => console.log("Sterg: " + id);

  const stil = {
    container: { maxWidth: "700px", marginTop: "40px" },
    h2: { textAlign: "center" }
  };

  return (
    <Container style={stil.container}>
      <h2 style={stil.h2}>Agenda</h2>
      <Activitate
        ora={act.ora}
        titlu={act.titlu}
        loc={act.loc}
        descriere={act.descriere}
        id={act.id}
        sterge={stergActiv}
      />
    </Container>
  );
}
