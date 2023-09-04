import React from "react";
import image1 from "../../images/school1.png";
import image2 from "../../images/scl2.png";
import image3 from "../../images/scl3.png";
import image4 from "../../images/scl4.png";
import image5 from "../../images/scl5.png";
import image6 from "../../images/scl6.png";
import image from "../../images/bg-1.jpg";
import LeftGrid from "../../component/Grid Section/LeftGrid";
import "../../component/Portfolio.css";
import LeftGridNew from "../../component/Grid Section/LeftGridNew";
import { Link } from "react-router-dom";

function Portfolio10() {
  return (
    <div>
      <div className="header-bar">
        {" "}
        <nav className="headernav">
          <ul>
            <li style={{ color: "#fff" }}>
              <Link
                to="/"
                style={{ textDecoration: "none", color: " #FFC107" }}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: " #FFC107" }}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                style={{ textDecoration: "none", color: " #FFC107" }}
              >
                Portfolio
              </Link>
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
              <img src={image} style={{ height: "90vh", width: "100%" }} />
            </div>

            <div className="middle-top">
              {/*---------------------------------
             -----Portfolio1 Information-------- 
             -----------------------------------*/}

              <h5
                className="maintopic"
                style={{
                  color: " #FFC107",
                }}
              >
                More Details ...
              </h5>

              <div>
                <p style={{ color: "darkgray" }}>
                  Description :{" "}
                  <span style={{ color: "#fff" }}>
                    Created a website for school (Frontend-part)
                  </span>{" "}
                </p>
                <p style={{ color: "darkgray" }}>
                  Used Technologies :{" "}
                  <span style={{ color: "#fff" }}>
                    HTML,CSS,Bootstrap,Java script,Firebase
                  </span>
                </p>
              </div>

              <div className="card-group ">
                <div className="card bg-dark ">
                  <img
                    src={image1}
                    className=""
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="card bg-dark ">
                  <img
                    src={image2}
                    className=""
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>

              <div className="card-group ">
                <div className="card bg-dark ">
                  <img
                    src={image3}
                    className=""
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="card bg-dark ">
                  <img
                    src={image4}
                    className=""
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>

              <div className="card-group ">
                <div className="card bg-dark ">
                  <img
                    src={image5}
                    className=""
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="card ">
                  <img
                    src={image6}
                    className=""
                    style={{ objectFit: "contain" }}
                  />
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

export default Portfolio10;
