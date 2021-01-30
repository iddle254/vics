import React from "react";
import { Jumbotron, Container } from "reactstrap";
const HeaderStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  flexDirection: "column",
};
function Banner() {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <div style={HeaderStyle}>
            <h1 className="display-3">Victor & Associates</h1>
            <p className="lead">
              Superior Legal Representation and Legal Services
            </p>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Banner;
