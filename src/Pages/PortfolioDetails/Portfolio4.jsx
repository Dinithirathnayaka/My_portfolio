import React from "react";
import image1 from "../../images/statics1.png";
import image2 from "../../images/statics2.png";
import image from "../../images/mountain.jpg";
import LeftGrid from "../../component/Grid Section/LeftGrid";
import "../../component/Portfolio.css";
import LeftGridNew from "../../component/Grid Section/LeftGridNew";
import { Link } from "react-router-dom";

function Portfolio4() {
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
                  <span style={{ color: "#fff" }}>Statistics Table</span>{" "}
                </p>
                <p style={{ color: "darkgray" }}>
                  Used Technologies :{" "}
                  <span style={{ color: "#fff" }}>
                    HTML,CSS,Boostrap,javascript
                  </span>
                </p>
              </div>

              <div className="row" style={{ marginBottom: "40px" }}>
                <div className="col-md-3 col-xs-12 p-2  mx-auto d-block subport">
                  <div className="middlesub">
                    <img src={image1} className="portimage" />
                  </div>
                </div>
                <div className="col-md-3 col-xs-12 p-2  mx-auto d-block subport">
                  <div className="middlesub">
                    <img src={image2} className="portimage" />
                  </div>
                </div>
                <div className="col-md-3 col-xs-12 p-2  mx-auto d-block subport">
                  <div className="middlesub"></div>
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

export default Portfolio4;
