import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container,
} from "reactstrap";

const style = { height: "150px" };

function Vision() {
  return (
    <Container>
      <CardDeck>
        <Card>
          <img
            alt="..."
            className=" img-fluid rounded shadow-lg"
            src="https://www.uni-europa.org/wp-content/uploads/2017/01/pillar-697x370.jpg"
            style={style}
          ></img>
          <CardBody>
            <CardTitle tag="h5">Mission</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        <Card>
          <img
            alt="..."
            className=" img-fluid rounded shadow-lg"
            src="https://static.thenounproject.com/png/353994-200.png"
            style={style}
          ></img>
          <CardBody>
            <CardTitle tag="h5">Vision</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <img
            alt="..."
            className=" img-fluid rounded shadow-lg"
            src="https://lh3.googleusercontent.com/proxy/Emy5b1A3nqXrblMLgkQIfwlSS9zKRunm1pXF7dccjDTExiJHJu0IJJyhKRBKUgDHF5hhUkthuDWNWLRyFyAlh5L0mVEyjrm0YWfIavVZEyCkfRNnMd8CeVVllSWEMksUX-ImCx7ANxFJKiYIP9ystwzryY3n0rCJ8MzqoZk"
            style={style}
          ></img>
          <CardBody>
            <CardTitle tag="h5">Our Credibility</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </Container>
  );
}

export default Vision;
