import React from "react";
import image2 from "../../images/metait2.png";
import image3 from "../../images/metait3.png";
import image4 from "../../images/metait4.png";
import image5 from "../../images/metait5.png";
import image6 from "../../images/metait6.png";
import image7 from "../../images/metait7.png";
import image8 from "../../images/metait8.png";
import image9 from "../../images/metait9.png";
import image10 from "../../images/metait10.png";
import image from "../../images/mountain.jpg";
import LeftGrid from "../../component/Grid Section/LeftGrid";
import "../../component/Portfolio.css";
import LeftGridNew from "../../component/Grid Section/LeftGridNew";
import { Link } from "react-router-dom";

function Portfolio2() {
  return (
    <div>
      <div className="header-bar">
        {" "}
        <nav className="headernav">
          <ul>
            <li style={{ color: "#fff" }}>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-bar">
        <div className="row grid-container">
          {/*---------------------------------
             -----Left Grid Section-------- 
             -----------------------------------*/}
          <div className="col-lg-3 col-1">
            <div className="left ">
              <LeftGrid />
            </div>
            <div className="leftnew">
              <LeftGridNew />
            </div>
          </div>

          <div className="middle col-lg-9 col-10">
            <div className="main-image">
              <img src={image} style={{ height: "65vh", width: "100%" }} />
            </div>

            <div className="middle-top">
              {/*---------------------------------
             -----Portfolio1 Information-------- 
             -----------------------------------*/}

              <h5
                className="maintopic"
                style={{
                  color: "#e3882d",
                }}
              >
                More Details ...
              </h5>

              <div>
                <p style={{ color: "darkgray" }}>
                  Description :{" "}
                  <span style={{ color: "#fff" }}>
                    Create mobile response metait web site for metait company
                  </span>{" "}
                </p>
                <p style={{ color: "darkgray" }}>
                  Used Technologies :{" "}
                  <span style={{ color: "#fff" }}>HTML,CSS,Boostrap</span>
                </p>
              </div>

              <div className="row" style={{ marginBottom: "40px" }}>
                <div className="col-md-3 col-xs-12 p-2  mx-auto d-block subport">
                  <div className="middlesub">
                    <img src={image2} className="portimage" />
                  </div>
                </div>
                <div className="col-md-3 col-xs-12 p-2  mx-auto d-block subport">
                  <div className="middlesub">
                    <img src={image3} className="portimage" />
                  </div>
                </div>
                <div className="col-md-3 col-xs-12 p-2  mx-auto d-block subport">
                  <div className="middlesub">
                    <img src={image4} className="portimage" />
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginBottom: "40px" }}>
                <div className="col-md-3 col-xs-12 p-2  mx-auto d-block subport">
                  <div className="middlesub">
                    <img src={image5} className="portimage" />
                  </div>
                </div>
                <div className="col-md-3 col-xs-12 p-2  mx-auto d-block subport">
                  <div className="middlesub">
                    <img src={image6} className="portimage" />
                  </div>
                </div>
                <div className="col-md-3 col-xs-12 p-2  mx-auto d-block subport">
                  <div className="middlesub">
                    <img src={image7} className="portimage" />
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginBottom: "40px" }}>
                <div className="col-md-3 col-xs-12 p-2  mx-auto d-block subport">
                  <div className="middlesub">
                    <img src={image8} className="portimage" />
                  </div>
                </div>
                <div className="col-md-3 col-xs-12 p-2  mx-auto d-block subport">
                  <div className="middlesub">
                    <img src={image9} className="portimage" />
                  </div>
                </div>
                <div className="col-md-3 col-xs-12 p-2  mx-auto d-block subport">
                  <div className="middlesub">
                    <img src={image10} className="portimage" />
                  </div>
                </div>
              </div>

              {/*---------------------------------
             -----Footer Section-------- 
             -----------------------------------*/}

              <div
                className="main-footer"
                style={{ color: "darkgrey ", paddingTop: "2.5vh" }}
              >
                <p style={{ paddingLeft: "3vh" }} className="dini text-muted">
                  © 2022 All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio2;
