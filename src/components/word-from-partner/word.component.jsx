import React from "react";
import {
  CardColumns,
  Card,
  CardTitle,
  CardText,
  Button,
  CardImg,
  Container,
  Row,
  Col,
  Jumbotron,
} from "reactstrap";

const style = { width: "300px" };
const messageCard = {
  display: "flex",
  flex: 1,
  flexDirection: "row",
};

function Word() {
  return (
    <Container>
      <Jumbotron fluid>
        {/* <CardColumns> */}
        {/* <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
              width: "100%",
            }}
          > */}

        <CardTitle
          tag="h4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "25px",
          }}
        >
          Message from the partners
        </CardTitle>
        <hr />
        <div style={messageCard}>
          <Row>
            <Col>
              <img
                alt="..."
                className=" img-fluid rounded shadow-lg"
                src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-3.jpg"
                style={style}
              ></img>
            </Col>
            <Col>
              <Row>
                <Col>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button
                    style={{
                      marginTop: "25px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    Button
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/* </div> */}
        {/* </Card> */}
        {/* </CardColumns> */}
      </Jumbotron>
    </Container>
  );
}

export default Word;
