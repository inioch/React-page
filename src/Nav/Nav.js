import React, { useState } from "react";
import "./Nav.css";
import logo from "../Img/diamoncik.png";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";

const Nav = () => {
  //Nav styl
  const [displays, setdisplays] = useState("none");

  //Bool na Nav
  const [checkNavState, setcheckNavstate] = useState(true);

  //pojawianie sie paska menu
  const handleNone = () => {
    if (checkNavState) {
      setcheckNavstate(!checkNavState);
      setdisplays("none");
    } else {
      setdisplays("flex");
      setcheckNavstate(!checkNavState);
    }
  };
  // warunek wielkosci

  return (
    <>
      <div id="navs" className="navs">
        <div className="navs">
          <Link className="items" to="/paznokcie">
            PAZNOKCIE
          </Link>
          <Link className="items" to="/makeup">
            MAKEUP
          </Link>
          <Link className="items" to="/promocje">
            PROMOCJE
          </Link>
          <Link className="items" to="/React-page/">
            <img className="logo" alt="logo" src={logo} />
          </Link>
          <Link className="items" to="/onas">
            O NAS
          </Link>
          <Link className="items" to="/cennik">
            CENNIK
          </Link>
          <Link className="items" to="/kontakt">
            KONTAKT
          </Link>
        </div>
      </div>
      <div id="navs-sm" className="navs-sm">
        <button onClick={handleNone} className="icon-small">
          <BsList />
        </button>
        <div className="navs-sma" id="navsma" style={{ display: displays }}>
          <Link onClick={handleNone} className="itemsa-sm" to="/paznokcie">
            PAZNOKCIE
          </Link>
          <Link onClick={handleNone} className="itemsa-sm" to="/makeup">
            MAKEUP
          </Link>
          <Link onClick={handleNone} className="itemsa-sm" to="/promocje">
            PROMOCJE
          </Link>
          <Link onClick={handleNone} className="itemsa-sm" to="/onas">
            O NAS
          </Link>
          <Link onClick={handleNone} className="itemsa-sm" to="/cennik">
            CENNIK
          </Link>
          <Link onClick={handleNone} className="itemsa-sm" to="/kontakt">
            KONTAKT
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
