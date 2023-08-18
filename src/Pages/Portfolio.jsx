import React from "react";
import image from "../images/16.jpg";
import emailjs from "emailjs-com";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import LeftGrid from "../component/Grid Section/LeftGrid";
import "../component/Contact.css";
import { IconContext } from "react-icons";
import LeftGridNew from "../component/Grid Section/LeftGridNew";
import { Link } from "react-router-dom";
import "../component/Portfolio.css";

function Portfolio() {
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

            <div className="portfolio-top">
              {/*---------------------------------
             -----Portfolio  Information-------- 
             -----------------------------------*/}

              <h5 className="portname">Web Develpment</h5>
              <div className=" portfolio mt-3 mb-3">
                <h6 className="indi ">Individual Projects</h6>
                <div className="row ">
                  <div className="port1 col-md-3 col-xs-12 p-2  mx-auto d-block">
                    {" "}
                    <img src={image} className="portimg " />
                  </div>
                  <div className="port2 col-md-3 col-xs-12 p-2  mx-auto d-block">
                    {" "}
                    <img src={image} className="portimg" />
                  </div>
                  <div className="port2 col-md-3 col-xs-12 p-2  mx-auto d-block">
                    {" "}
                    <img src={image} className="portimg" />
                  </div>
                </div>

                <div className="row ">
                  <div className="port1 col-md-3 col-xs-12 p-2  mx-auto d-block">
                    {" "}
                    <img src={image} className="portimg " />
                  </div>
                  <div className="port2 col-md-3 col-xs-12 p-2  mx-auto d-block">
                    {" "}
                    <img src={image} className="portimg" />
                  </div>
                  <div className="port2 col-md-3 col-xs-12 p-2  mx-auto d-block">
                    {" "}
                    <img src={image} className="portimg" />
                  </div>
                </div>

                <h6 className=" group mt-5">Group Projects</h6>
                <div className="row ">
                  <div className="port1 col-md-3 col-xs-12 p-2  mx-auto d-block">
                    {" "}
                    <img src={image} className="portimg " />
                  </div>
                  <div className="port2 col-md-3 col-xs-12 p-2  mx-auto d-block">
                    {" "}
                    <img src={image} className="portimg" />
                  </div>
                  <div className="port2 col-md-3 col-xs-12 p-2  mx-auto d-block">
                    {" "}
                    <img src={image} className="portimg" />
                  </div>
                </div>

                <div className="row ">
                  <div className="port1 col-md-3 col-xs-12 p-2  mx-auto d-block">
                    {" "}
                    <img src={image} className="portimg " />
                  </div>
                  <div className="port2 col-md-3 col-xs-12 p-2  mx-auto d-block">
                    {" "}
                    <img src={image} className="portimg" />
                  </div>
                  <div className="port2 col-md-3 col-xs-12 p-2  mx-auto d-block">
                    {" "}
                    <img src={image} className="portimg" />
                  </div>
                </div>
              </div>

              {/*---------------------------------
             -----Getin Touch-------- 
             -----------------------------------*/}

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

export default Portfolio;
