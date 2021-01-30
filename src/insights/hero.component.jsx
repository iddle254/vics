import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";

function HeroComponent() {
  return (
    <Container>
      <Card>
        <CardImg
          alt="..."
          src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
          top
        ></CardImg>
        <CardBody>
          <CardTitle className=" h2 mb-0">
            China and US to face off amid tensions in the South China sea
          </CardTitle>
          <small className=" text-muted">
            by John Snow on Oct 29th at 10:23 AM
          </small>
          <CardText className=" mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
            voluptatum corporis odio rem officia ipsam! Tempore tenetur
            cupiditate rem non dolorem voluptates omnis magnam aliquam modi
            voluptas neque, nisi eum!
          </CardText>
          <Button
            className=" px-0"
            color="link"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            View article
          </Button>
        </CardBody>
      </Card>
    </Container>
  );
}

export default HeroComponent;
