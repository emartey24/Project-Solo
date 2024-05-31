import React from "react";
import Carousel from "react-bootstrap/Carousel";
import enter from "../Images/enter.jpg";
import headliner from '../Images/headliner.jpg';
import tech from '../Images/tech.jpg';



function CarouselPage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={headliner}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Headlines</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={enter}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Entertainment WorldNews</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={tech}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Tech WorldNews</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
