import React from "react";
import image from "../images/bg-1.jpg";
import image1 from "../images/fashion1.png";
import image2 from "../images/metait2.png";
import image3 from "../images/note1.png";
import image4 from "../images/statics1.png";
import image5 from "../images/chatbot1.png";
import image6 from "../images/janux1.png";
import image7 from "../images/pizza11.png";
import image8 from "../images/pizza7.png";
import image9 from "../images/pharmacy4.png";
import image10 from "../images/workout2.png";
import image11 from "../images/thai1.png";
import image12 from "../images/profile1.png";
import image13 from "../images/school1.png";
import LeftGrid from "../component/Grid Section/LeftGrid";
import "../component/Contact.css";
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

            <div className="portfolio-top">
              {/*---------------------------------
             -----Portfolio  Information-------- 
             -----------------------------------*/}

              <h4 className="portname">Web Develpment</h4>
              <div className=" portfolio mt-3 mb-3">
                <h5 className="indi " style={{ color: " #FFC107" }}>
                  Individual Projects
                </h5>

                <div className="card-group ">
                  <div className="card bg-dark">
                    <img
                      src={image1}
                      className=""
                      style={{ objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <p className="card-text">Fashion store website</p>
                      <Link
                        to="/portfolio/portfolio1"
                        className="readmore"
                        style={{ textDecoration: "none", color: " #FFC107" }}
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                  <div className="card bg-dark ">
                    <img
                      src={image2}
                      className=""
                      style={{ objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Metait company official website
                      </p>
                      <Link
                        to="/portfolio/portfolio2"
                        className="readmore"
                        style={{ textDecoration: "none", color: " #FFC107" }}
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card-group ">
                  <div className="card bg-dark ">
                    <img
                      src={image3}
                      className=""
                      style={{ objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <p className="card-text">Note creating app</p>
                      <Link
                        to="/portfolio/portfolio3"
                        className="readmore"
                        style={{ textDecoration: "none", color: " #FFC107" }}
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                  <div className="card bg-dark">
                    <img
                      src={image4}
                      className=""
                      style={{ objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <p className="card-text">Statictis Table</p>
                      <Link
                        to="/portfolio/portfolio4"
                        className="readmore"
                        style={{ textDecoration: "none", color: " #FFC107" }}
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card-group ">
                  <div className="card bg-dark ">
                    <img
                      src={image11}
                      className=""
                      style={{ objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <p className="card-text">Simple menu ordering website</p>
                    </div>
                  </div>
                  <div className="card bg-dark ">
                    <img
                      src={image12}
                      className=""
                      style={{ objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <p className="card-text">My profile</p>
                    </div>
                  </div>
                </div>

                <h5 className=" group mt-5" style={{ color: " #FFC107" }}>
                  Group Projects
                </h5>
                <div className="card-group ">
                  <div className="card bg-dark ">
                    <img
                      src={image5}
                      className=""
                      style={{ objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Cloud-based student information chatbot system
                      </p>
                      <Link
                        to="/portfolio/portfolio5"
                        className="readmore"
                        style={{ textDecoration: "none", color: " #FFC107" }}
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                  <div className="card bg-dark ">
                    <img
                      src={image13}
                      className=""
                      style={{ objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <p className="card-text">School Website</p>
                      <Link
                        to="/portfolio/portfolio11"
                        className="readmore"
                        style={{ textDecoration: "none", color: " #FFC107" }}
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>

                <h5 className=" group mt-5" style={{ color: " #FFC107" }}>
                  Developing Projects
                </h5>
                <div className="card-group ">
                  <div className="card bg-dark ">
                    <img
                      src={image6}
                      className=""
                      style={{ objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Admin Panel for Janux Academy{" "}
                      </p>
                      <Link
                        to="/portfolio/portfolio6"
                        className="readmore"
                        style={{ textDecoration: "none", color: " #FFC107" }}
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                  <div className="card bg-dark ">
                    <img
                      src={image7}
                      className=""
                      style={{ objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <p className="card-text">SpiceCraft pizza website</p>
                      <Link
                        to="/portfolio/portfolio7"
                        className="readmore"
                        style={{ textDecoration: "none", color: " #FFC107" }}
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card-group ">
                  <div className="card bg-dark ">
                    <img
                      src={image8}
                      className=""
                      style={{ objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        SpiceCraft website's admin panel
                      </p>
                      <Link
                        to="/portfolio/portfolio8"
                        className="readmore"
                        style={{ textDecoration: "none", color: " #FFC107" }}
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                  <div className="card bg-dark ">
                    <img
                      src={image9}
                      className=""
                      style={{ objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <p className="card-text">Pharmacy Tracking System</p>
                      <Link
                        to="/portfolio/portfolio9"
                        className="readmore"
                        style={{ textDecoration: "none", color: " #FFC107" }}
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card-group ">
                  <div className="card bg-dark " style={{ width: "auto" }}>
                    <img
                      src={image10}
                      className=""
                      style={{ objectFit: "contain" }}
                    />
                    <div className="card-body text-center">
                      <p className="card-text">Workout Buddy</p>
                      <Link
                        to="/portfolio/portfolio10"
                        className="readmore"
                        style={{ textDecoration: "none", color: " #FFC107" }}
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                  <div
                    className="card "
                    style={{ background: "transparent", outline: "none" }}
                  ></div>
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
