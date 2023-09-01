import React from "react";
import image1 from "../../images/fashion1.png";
import image2 from "../../images/fashion2.png";
import image3 from "../../images/fashion3.png";
import image4 from "../../images/fashion4.png";
import image5 from "../../images/fashion5.png";
import image6 from "../../images/fashion6.png";
import image7 from "../../images/fashion7.png";
import image8 from "../../images/fashion8.png";
import image9 from "../../images/fashion9.png";
import image from "../../images/bg-1.jpg";
import LeftGrid from "../../component/Grid Section/LeftGrid";
import "../../component/Portfolio.css";
import LeftGridNew from "../../component/Grid Section/LeftGridNew";
import { Link } from "react-router-dom";

function Portfolio1() {
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
                    Create mobile response fashion design web site
                  </span>{" "}
                </p>
                <p style={{ color: "darkgray" }}>
                  Used Technologies :{" "}
                  <span style={{ color: "#fff" }}>HTML,CSS,Boostrap</span>
                </p>
              </div>

              <div className="card-group m-3">
                <div className="card bg-dark m-3">
                  <img src={image1} className="" />
                </div>
                <div className="card bg-dark m-3">
                  <img src={image2} className="" />
                </div>
                <div className="card bg-dark m-3">
                  <img src={image3} className="" />
                </div>
              </div>

              <div className="card-group m-3">
                <div className="card bg-dark m-3">
                  <img src={image4} className="" />
                </div>
                <div className="card bg-dark m-3">
                  <img src={image5} className="" />
                </div>
                <div className="card bg-dark m-3">
                  <img src={image6} className="" />
                </div>
              </div>

              <div className="card-group m-3">
                <div className="card bg-dark m-3">
                  <img src={image7} className="" />
                </div>
                <div className="card bg-dark m-3">
                  <img src={image8} className="" />
                </div>
                <div className="card bg-dark m-3">
                  <img src={image9} className="" />
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

export default Portfolio1;
