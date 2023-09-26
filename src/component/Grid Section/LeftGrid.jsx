import React from "react";
import faceimg from "../../images/face-6.jpg";
import html from "../../images/icons8-html-240.png";
import css from "../../images/icons8-css-240.png";
import Boostrap from "../../images/icons8-bootstrap-240.png";
import javascript from "../../images/icons8-javascript-240.png";
import react from "../../images/icons8-react-js-200.png";
import laravel from "../../images/icons8-laravel-96.png";
import tailwind from "../../images/icons8-tailwind-css-240.png";
import nextjs from "../../images/nextjs.256x256.png";

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

        <div class="flex-wrapper">
          <div class="single-chart">
            <img src={html} alt="" style={{ width: "70px" }} />
            <p
              style={{ color: "#fff", marginRight: "" }}
              className="text-center"
            >
              HTML
            </p>
          </div>
          <div class="single-chart">
            <img src={css} alt="" style={{ width: "70px" }} />
            <p
              style={{ color: "#fff", marginRight: "" }}
              className="text-center"
            >
              CSS
            </p>
          </div>
          <div class="single-chart">
            <img src={javascript} alt="" style={{ width: "70px" }} />
            <p
              style={{ color: "#fff", marginRight: "" }}
              className="text-center"
            >
              Java Script
            </p>
          </div>
        </div>

        <div class="flex-wrapper">
          <div class="single-chart">
            <img src={react} alt="" style={{ width: "70px" }} />
            <p
              style={{ color: "#fff", marginRight: "" }}
              className="text-center"
            >
              React.js
            </p>
          </div>
          <div class="single-chart">
            <img src={nextjs} alt="" style={{ width: "70px" }} />
            <p
              style={{ color: "#fff", marginRight: "" }}
              className="text-center"
            >
              Next.js
            </p>
          </div>
          <div class="single-chart">
            <img src={Boostrap} alt="" style={{ width: "70px" }} />
            <p
              style={{ color: "#fff", marginRight: "" }}
              className="text-center"
            >
              Bootstrap
            </p>
          </div>
        </div>

        <div class="flex-wrapper">
          <div class="single-chart">
            <img src={tailwind} alt="" style={{ width: "70px" }} />
            <p
              style={{ color: "#fff", marginRight: "" }}
              className="text-center"
            >
              Tailwind CSS
            </p>
          </div>

          <div class="single-chart">
            <img src={laravel} alt="" style={{ width: "70px" }} />
            <p
              style={{ color: "#fff", marginRight: "" }}
              className="text-center"
            >
              Laravel
            </p>
          </div>
        </div>

        <hr style={{ color: "darkgrey" }} />
        <div className="listpro " style={{ color: "darkgrey" }}>
          <p className="small">
            {" "}
            <FaCheck style={{ color: " #FFC107", marginRight: "10px" }} />
            Frontend Services(Html,CSS,Bootstrap,Tailwind CSS,Java
            Script,React.js) Knowledge
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
              href="https://www.linkedin.com/in/dinithi-rathnayake-887126202/"
              style={{ color: "darkgrey" }}
            >
              <FaLinkedin className="iconf" />
            </a>

            <a
              href="https://www.facebook.com/dinithi.rathnayake.942?mibextid=ZbWKwL"
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
