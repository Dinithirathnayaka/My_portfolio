import React from "react";
import image from "../images/mountain.jpg";
import image2 from "../images/bg-2.jpg";
import facemain from "../images/face-5.png";
import { Link } from "react-router-dom";
import LeftGrid from "../component/Grid Section/LeftGrid";
import LeftGridNew from "../component/Grid Section/LeftGridNew";
import "../component/History.css";

function Home() {
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

      <div className="  main-bar">
        <div className="row grid-container">
          {/*---------------------------------
             -----Left Grid Section-------- 
             -----------------------------------*/}

          <div className=" col-lg-3 col-1">
            <div className="lefthistory ">
              <LeftGrid />
            </div>
            <div className="leftnew">
              <LeftGridNew />
            </div>
          </div>

          <div className="middle col-lg-9 col-10">
            <div className="main-image">
              <img src={image2} style={{ height: "100vh", width: "100%" }} />
            </div>

            <div className="middle-top">
              <div className="top-image">
                <img
                  src={image2}
                  alt=""
                  style={{ height: "60vh", width: "100%" }}
                />
              </div>
              <img
                src={facemain}
                alt=""
                className="main-topimage"
                style={{ height: "60vh", width: "" }}
              />
              <h1>
                Hello !!
                <br />
                I'm Dinithi Rathnayake,
              </h1>

              {/*---------------------------------
             -----Perform Section-------- 
             -----------------------------------*/}

              <div
                className=" row perform "
                style={{ marginTop: "35vh" }}
              ></div>

              {/*---------------------------------
             -----Education Section-------- 
             -----------------------------------*/}

              <h5 className="maintopic">Education</h5>

              <div className="row mainhistory">
                <div className=" col-md-6 col-xs-12 history">
                  <h6 className="tit">
                    Sabaragamuwa University Of Sri Lanka-Computing And
                    Information Systems(CIS)
                  </h6>
                  <p className="small-text text-muted">Undergraduate</p>

                  <p className="pr">
                    I am an undergraduate from the Department of Computing and
                    Information Systems at the Faculty of Computing,
                    Sabaragamuwa University of Sri Lanka.
                  </p>
                </div>

                <div className=" col-md-6 col-xs-12  history">
                  <h6 className="tit mb-3">
                    Sabaragamuwa University Of Sri Lanka-CODL <br />
                    Certificate Course in English
                  </h6>
                  <p
                    className="small-text text-center mt-1"
                    style={{
                      backgroundColor: "#ffc107",
                      width: "100px",
                      borderRadius: "20px",
                    }}
                  >
                    Completed
                  </p>
                  <button className="btnh">October 2018-April 2019</button>
                  <p className="pr">
                    I completed a Certificate Course in English at the Center
                    for Open and Distance Learning (CODL), Sabaragamuwa
                    University of Sri Lanka.
                  </p>
                </div>
              </div>

              {/*---------------------------------
             -----MyService Section-------- 
             -----------------------------------*/}

              <h5 className="maintopic">My Services</h5>
              <div className="row" style={{ padding: "30px" }}>
                <div className="col-md-4 col-xs-12 hi ">
                  <h6 className="subtopic">Web Development</h6>
                  <p className="content text-muted">
                    I can develop the web application with best performance and
                    very smoothly for your organization.
                  </p>
                </div>
              </div>

              {/*---------------------------------
             -----Footer Section-------- 
             -----------------------------------*/}

              <div
                className="main-footer"
                style={{ color: "darkgrey ", paddingTop: "2.5vh" }}
              >
                <p style={{ paddingLeft: "5%" }} className="dini text-muted">
                  © 2023 All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
