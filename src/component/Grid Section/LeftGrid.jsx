import React from "react";
import faceimg from "../../images/face-6.jpg";
import html from "../../images/html-5.png";
import css from "../../images/css-3.png";
import Boostrap from "../../images/boostrap.png";
import javascript from "../../images/java-script.png";
import react from "../../images/library.png";
import laravel from "../../images/laravel.png";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaCheck } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";

function LeftGrid() {
  return (
    <div>
      <div className="profile text-center">
        <div>
          <FaTimes className="togclose" />
        </div>
        <img src={faceimg} alt="" style={{ objectFit: "contain" }} />

        <h6 className="text-cenetr">Dinithi Nayanamali Rathnayake</h6>
        <p style={{ color: "#fff" }}>Web Developer </p>
        <p className="">
          {" "}
          Undergraduate in BSc Hons <br />
          in Computing and Information Systems
        </p>
      </div>
      {/*---------------------------------
             -----Left Grid Middle Section--------
             -----------------------------------*/}
      <div className="middle-pro" style={{ padding: "2.5vh" }}>
        <div className="row" style={{ color: "#fff", fontWeight: "bold" }}>
          <div className="col-6">
            <p>Recidence:</p>
            <p>City:</p>
          </div>
          <div
            className="col-6 text-muted text-end"
            style={{ color: "darkgrey" }}
          >
            <p>Sri Lanka</p>
            <p>Bandarawela</p>
          </div>
        </div>
        <hr style={{ color: "darkgrey" }} />

        <div>
          <div class="flex-wrapper">
            <div class="single-chart">
              <img src={html} alt="" style={{ width: "70px" }} />
            </div>

            <div class="single-chart">
              <img src={css} alt="" style={{ width: "70px" }} />
            </div>

            <div class="single-chart">
              <img
                src={javascript}
                alt=""
                style={{ width: "60px", marginTop: "15px" }}
              />
            </div>
          </div>

          <div className="name">
            <p style={{ color: "#fff", marginLeft: "" }}>HTML</p>
            <p style={{ color: "#fff", marginRight: "" }}>CSS</p>
            <p style={{ color: "#fff", marginLeft: "-30px" }}>Java Script</p>

            {/* <p style={{ color: "#fff" }}>Spanish</p> */}
          </div>
        </div>

        <div>
          <div class="flex-wrapper">
            <div class="single-chart">
              <img src={react} alt="" style={{ width: "70px" }} />
            </div>

            <div class="single-chart">
              <img src={Boostrap} alt="" style={{ width: "100px" }} />
            </div>

            <div class="single-chart" style={{ marginLeft: "50px" }}>
              <img
                src={laravel}
                alt=""
                style={{ width: "60px", marginTop: "10px" }}
              />
            </div>
          </div>

          <div className="name">
            <p style={{ color: "#fff", marginLeft: "" }}>React.js</p>
            <p style={{ color: "#fff", marginLeft: "-50px" }}>Bootstrap</p>
            <p style={{ color: "#fff", marginLeft: "-30px" }}>Laravel</p>

            {/* <p style={{ color: "#fff" }}>Spanish</p> */}
          </div>
        </div>

        <hr style={{ color: "darkgrey" }} />
        <div className="listpro " style={{ color: "darkgrey" }}>
          <p className="small">
            {" "}
            <FaCheck style={{ color: " #FFC107", marginRight: "10px" }} />
            Frontend Services(Html,CSS,Bootstrap,Java Script,React.js) Knowledge
          </p>
          <p className="small">
            {" "}
            <FaCheck style={{ color: " #FFC107", marginRight: "10px" }} />
            Backend Services(Node.js,Express.js) Knowledge
          </p>
          <p className="small">
            {" "}
            <FaCheck style={{ color: " #FFC107", marginRight: "10px" }} />
            Firebase Knowledge,Mongodb Knowledge
          </p>
          <p className="small">
            {" "}
            <FaCheck style={{ color: " #FFC107", marginRight: "10px" }} />
            GIT Knowledge
          </p>
        </div>

        <hr style={{ color: "darkgrey" }} />
        <div
          className="linkN text-muted"
          style={{
            color: "darkgrey",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        ></div>
      </div>

      {/*---------------------------------
             -----Left Grid Footer Section--------
             -----------------------------------*/}
      <div className="footer-pro">
        <IconContext.Provider
          value={{ textDecoration: "none" }}
          className="iconm"
        >
          <div className="pro-icon">
            <a
              href="https://www.linkedin.com/in/dinithi-rathnayaka-887126202/"
              style={{ color: "darkgrey" }}
            >
              <FaLinkedin className="iconf" />
            </a>

            <a
              href="https://www.linkedin.com/in/dinithi-rathnayaka-887126202/"
              style={{ color: "darkgrey" }}
            >
              <FaFacebook className="iconf" />
            </a>
            <a
              href="https://github.com/Dinithirathnayaka"
              style={{ color: "darkgrey" }}
            >
              <FaGithub className="iconf" />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default LeftGrid;
