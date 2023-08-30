import React from "react";
import image from "../images/16.jpg";
import image1 from "../images/fashion1.png";
import image2 from "../images/metait2.png";
import image3 from "../images/note1.png";
import image4 from "../images/statics1.png";
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

              <h5 className="portname">Web Develpment</h5>
              <div className=" portfolio mt-3 mb-3">
                <h6 className="indi ">Individual Projects</h6>

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
