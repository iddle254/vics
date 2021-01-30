import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Card,
  CardTitle,
  CardBody,
  CardText,
} from "reactstrap";
import Footer from "../footer/footer.component";
import NavComponent from "../navbar/navbar.component";
import Reviews from "../reviews/reviews.component";
import MapBanner from "./map-banner.component";
const style = { width: "250px" };
const card_width = { width: "18rem" };

function Contact() {
  const [focus2, setFocus2] = React.useState(false);
  return (
    <>
      <NavComponent />
      <Container>
        {/* <MapBanner /> */}
        <Card>
          <Row>
            <Col>
              <p className="h3">Contact Us</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <div style={{ display: "flex" }}>
                <img
                  alt="..."
                  className=" img-fluid rounded shadow"
                  src="https://cdn1.expresscomputer.in/wp-content/uploads/2020/02/17172120/call-center.jpg"
                  style={style}
                ></img>

                <CardBody>
                  <p className="h4">Give us a ring</p>
                  <div>
                    <p className="h6">Becky</p>
                    <p className="h5">0726 789190</p>
                    <h6>Opening hours :</h6>
                    <h6>Mon - Fri, 8:00 - 10:00</h6>
                  </div>
                </CardBody>
              </div>
            </Col>

            <Col>
              <div style={{ display: "flex" }}>
                <img
                  alt="..."
                  className=" img-fluid rounded shadow"
                  src="https://lh3.googleusercontent.com/proxy/sAhB7uxDZGS7JEDmspqaHEAXB6wJcpR1ePZ7iSrlctRUUgBk13B4NK8p_7JH6wxHtnSU7BDTdeksvKwgfZiWo474o1Y8CWPkvqf25yqxhvfzRuCwPxKoZ7ZMdt3oOK6BkBEyTUWUKhBpCfLPIX-nhcBC722vBHw"
                  style={style}
                ></img>

                <CardBody>
                  <p className="h4">Location</p>
                  <div>
                    <p className="h6">xyz drive</p>
                    <p className="h5">Westlands</p>
                    <h6>Open in maps</h6>
                    {/* <h6>Mon - Fri, 8:00 - 10:00</h6> */}
                  </div>
                </CardBody>
              </div>
            </Col>
          </Row>
          <hr />

          <Form>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <Label for="message">Message</Label>
                  <Input
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Tell us something"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label" for="customCheck1">
                    I am not a robot
                  </label>
                </div>
              </Col>
              <Col sm="4">
                <Button color="default" type="button">
                  Send Message
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
      <Reviews />
      <Footer />
    </>
  );
}

export default Contact;
