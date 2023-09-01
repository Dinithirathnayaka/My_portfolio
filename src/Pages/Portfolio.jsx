import React from "react";
import image from "../images/16.jpg";
import image1 from "../images/fashion1.png";
import image2 from "../images/metait2.png";
import image3 from "../images/note1.png";
import image4 from "../images/statics1.png";
import image5 from "../images/chatbot1.png";
import image6 from "../images/janux1.png";
import image7 from "../images/pizza11.png";
import image8 from "../images/pizza7.png";
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

              <h4 className="portname">Web Develpment</h4>
              <div className=" portfolio mt-3 mb-3">
                <h5 className="indi " style={{ color: "#e3882d" }}>
                  Individual Projects
                </h5>

                <div className="card-group m-3">
                  <div className="card bg-dark m-3">
                    <img src={image1} className="" />
                    <div className="card-body">
                      <p className="card-text">
                        Mobile response website for fashion design store
                      </p>
                      <Link to="/portfolio/portfolio1" className="readmore">
                        READ MORE
                      </Link>
                    </div>
                  </div>
                  <div className="card bg-dark m-3">
                    <img src={image2} className="" />
                    <div className="card-body">
                      <p className="card-text">
                        Mobile response metait website for metait company
                      </p>
                      <Link to="/portfolio/portfolio2" className="readmore">
                        READ MORE
                      </Link>
                    </div>
                  </div>
                  <div className="card bg-dark m-3">
                    <img src={image3} className="" />
                    <div className="card-body">
                      <p className="card-text">
                        Note creating app for keep notes
                      </p>
                      <Link to="/portfolio/portfolio3" className="readmore">
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card-group m-3">
                  <div className="card bg-dark m-3">
                    <img src={image4} className="" />
                    <div className="card-body">
                      <p className="card-text">Statictis Table</p>
                      <Link to="/portfolio/portfolio4" className="readmore">
                        READ MORE
                      </Link>
                    </div>
                  </div>
                  <div className="card bg-dark m-3">
                    <img src={image2} className="" />
                    <div className="card-body">
                      <p className="card-text">
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </p>
                      <Link to="/portfolio/portfolio2" className="readmore">
                        READ MORE
                      </Link>
                    </div>
                  </div>
                  <div className="card bg-dark m-3">
                    <img src={image3} className="" />
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                      </p>
                      <Link to="/portfolio/portfolio3" className="readmore">
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>

                <h5 className=" group mt-5" style={{ color: "#e3882d" }}>
                  Group Projects
                </h5>
                <div className="card-group m-3">
                  <div className="card bg-dark m-3">
                    <img src={image5} className="" />
                    <div className="card-body">
                      <p className="card-text">Authenticated ChatBot System</p>
                      <Link to="/portfolio/portfolio5" className="readmore">
                        READ MORE
                      </Link>
                    </div>
                  </div>
                  <div className="card bg-dark m-3">
                    <img src={image2} className="" />
                    <div className="card-body">
                      <p className="card-text">
                        Mobile response metait website for metait company
                      </p>
                      <Link to="/portfolio/portfolio2" className="readmore">
                        READ MORE
                      </Link>
                    </div>
                  </div>
                  <div className="card bg-dark m-3">
                    <img src={image3} className="" />
                    <div className="card-body">
                      <p className="card-text">
                        Note creating app for keep notes
                      </p>
                      <Link to="/portfolio/portfolio3" className="readmore">
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>

                <h5 className=" group mt-5" style={{ color: "#e3882d" }}>
                  Developing Projects
                </h5>
                <div className="card-group m-3">
                  <div className="card bg-dark m-3">
                    <img src={image6} className="" />
                    <div className="card-body">
                      <p className="card-text">
                        Admin Panel for Janux Accademy{" "}
                      </p>
                      <Link to="/portfolio/portfolio6" className="readmore">
                        READ MORE
                      </Link>
                    </div>
                  </div>
                  <div className="card bg-dark m-3">
                    <img src={image7} className="" />
                    <div className="card-body">
                      <p className="card-text">SpiceCraft pizza website</p>
                      <Link to="/portfolio/portfolio7" className="readmore">
                        READ MORE
                      </Link>
                    </div>
                  </div>
                  <div className="card bg-dark m-3">
                    <img src={image8} className="" />
                    <div className="card-body">
                      <p className="card-text">SpiceCraft Admin panel</p>
                      <Link to="/portfolio/portfolio8" className="readmore">
                        READ MORE
                      </Link>
                    </div>
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
