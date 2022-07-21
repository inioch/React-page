import React from "react";
import "./Main.css";
import Carousel from "react-bootstrap/Carousel";
import photo from "../Img/placeholder.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  return (
    <Carousel>
      <Carousel.Item interval={5000} bsPrefix="carousel-item">
        <img className="d-block w-100" src={photo} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={photo} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={photo} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Main;
