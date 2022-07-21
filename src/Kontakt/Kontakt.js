import React from "react";
import mapa from "../Img/Mapa.PNG";
import "./Kontakt.css";
import {
  BsFillTelephoneFill,
  BsFillPinMapFill,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";

const Kontakt = () => {
  return (
    <div className="mains">
      <div className="left">
        <img alt="map" className="map" src={mapa} />
        <a
          rel="noreferrer"
          target={"_blank"}
          href="https://www.google.pl/maps/dir//Pr%C4%85dnicka+58,+31-215+Krak%C3%B3w/@50.0839738,19.9353314,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47165a561a129711:0x41336f83ea123709!2m2!1d19.9375201!2d50.0839738!3e0"
        >
          Sprawdź jak dojechać
        </a>
      </div>
      <div className="right">
        <h3>Kontakt</h3>
        <a className="hrefs">
          <BsFillPinMapFill /> Prądnicka 58 Kraków
        </a>
        <a className="hrefs" href="tel:534929231">
          <BsFillTelephoneFill /> 534929231
        </a>
        <a
          className="hrefs"
          href="https://www.instagram.com/girls_place058/?fbclid=IwAR3kGYzognkKrVY8Id87ORtsBRUP7nlwZS6FgrCYMuQ_Ix_MMAFQ7utbuRA"
        >
          <BsInstagram /> Instagram
        </a>
        <a
          className="hrefs"
          href="https://www.facebook.com/search/top?q=%F0%9D%93%96%F0%9D%93%B2%F0%9D%93%BB%F0%9D%93%B5%F0%9D%93%BC%20%F0%9D%93%9F%F0%9D%93%B5%F0%9D%93%AA%F0%9D%93%AC%F0%9D%93%AE"
        >
          <BsFacebook /> Facebook
        </a>
      </div>
    </div>
  );
};
export default Kontakt;
