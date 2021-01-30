import React from "react";
// import { Jumbotron, Button, Container } from "reactstrap";
import {
  Container,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from "reactstrap";

function BannerComponent() {
  return (
    <Container>
      {/* <Jumbotron>
        <h1 className="display-3">About us</h1>
        <p className="lead">The team</p>
        <hr className="my-2" />
        <p>To learn more about us</p>
        <p className="lead">
          <Button color="primary">Visit gallery</Button>
        </p>
      </Jumbotron> */}
      <Card className=" bg-dark text-white border-0">
        <CardImg
          alt="..."
          src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg"
        ></CardImg>
        <CardImgOverlay className=" d-flex align-items-center">
          <div>
            <CardTitle className=" h2 text-white mb-2">About us</CardTitle>
            <CardText>The team</CardText>
            {/* <CardText className=" text-sm font-weight-bold">
              Last updated 3 mins ago
            </CardText> */}
          </div>
        </CardImgOverlay>
      </Card>
    </Container>
  );
}

export default BannerComponent;
