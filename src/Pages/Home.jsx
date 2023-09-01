import React from "react";
import image from "../images/mountain.jpg";
import facemain from "../images/face-3.png";
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
            <div className="left ">
              <LeftGrid />
            </div>
            <div className="leftnew">
              <LeftGridNew />
            </div>
          </div>

          <div className="middle col-lg-9 col-10">
            <div className="main-image">
              <img src={image} style={{ height: "60vh", width: "100%" }} />
            </div>

            <div className="middle-top">
              <div className="top-image">
                <img
                  src={image}
                  alt=""
                  style={{ height: "53vh", width: "100%" }}
                />
              </div>
              <img
                src={facemain}
                alt=""
                className="main-topimage"
                style={{ height: "65vh", width: "" }}
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

              <div className="row">
                <div
                  className=" col-6 history"
                  style={{
                    width: "65vh",
                    padding: "30px",
                    marginBottom: "2vh",
                  }}
                >
                  <h6 className="tit">
                    Sabaragamuwa University Of Sri Lanka-Computing And
                    Information Systems(CIS)
                  </h6>
                  <p className="small-text text-muted">Undergraduate</p>
                  <button className="btnh text-muted">oct 2019-oct 2024</button>
                  <p className="pr">
                    The Department of Computing and Information Systems (DCIS)
                    at the Faculty of Applied Sciences, Sabaragamuwa University
                    of Sri Lanka was established in 2011 while the BScHons
                    Degree Programme in Computing and Information Systems was
                    initiated back in 2008.
                  </p>
                  {/* <a href="#" class="linkh">
                  MORE
                </a> */}
                </div>
              </div>

              {/*---------------------------------
             -----MyService Section-------- 
             -----------------------------------*/}

              <h5 className="maintopic">My Services</h5>
              <div className="row" style={{ marginBottom: "3vh" }}>
                <div className="col-10 hi " style={{ marginBottom: "2vh" }}>
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
