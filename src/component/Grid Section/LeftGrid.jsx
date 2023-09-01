import React from "react";
import faceimg from "../../images/face-4.jpg";
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
        <img src={faceimg} alt="" />

        <h6 className="text-cenetr">Dinithi Nayanamali Rathnayake</h6>
        <p>Web Developer </p>
        <p className="text-muted">
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
            <p>Age:</p>
          </div>
          <div
            className="col-6 text-muted text-end"
            style={{ color: "darkgrey" }}
          >
            <p>Sri Lanka</p>
            <p>Bandarawela</p>
            <p>25</p>
          </div>
        </div>
        <hr style={{ color: "darkgrey" }} />

        <div>
          <div class="flex-wrapper">
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart orange">
                <path
                  class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />

                <path
                  class="circle"
                  stroke-dasharray="100, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage"></text>
              </svg>
            </div>

            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart orange">
                <path
                  class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />

                <path
                  class="circle"
                  stroke-dasharray="100, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage"></text>
              </svg>
            </div>

            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart green">
                <path
                  class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  class="circle"
                  stroke-dasharray="100, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage"></text>
              </svg>
            </div>
          </div>

          <div className="name">
            <p style={{ color: "#fff", marginLeft: "" }}>HTML</p>
            <p style={{ color: "#fff", marginRight: "" }}>CSS</p>
            <p style={{ color: "#fff", marginRight: "" }}>Java Script</p>

            {/* <p style={{ color: "#fff" }}>Spanish</p> */}
          </div>
        </div>

        <div>
          <div class="flex-wrapper">
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart orange">
                <path
                  class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />

                <path
                  class="circle"
                  stroke-dasharray="100, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage"></text>
              </svg>
            </div>

            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart orange">
                <path
                  class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />

                <path
                  class="circle"
                  stroke-dasharray="100, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage"></text>
              </svg>
            </div>

            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart green">
                <path
                  class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  class="circle"
                  stroke-dasharray="100, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage"></text>
              </svg>
            </div>
          </div>

          <div className="name">
            <p style={{ color: "#fff", marginLeft: "" }}>React.js</p>
            <p style={{ color: "#fff", marginRight: "" }}>Boostrap</p>
            <p style={{ color: "#fff", marginRight: "" }}>Laravel</p>

            {/* <p style={{ color: "#fff" }}>Spanish</p> */}
          </div>
        </div>

        <hr style={{ color: "darkgrey" }} />
        <div className="listpro " style={{ color: "darkgrey" }}>
          <p className="small">
            {" "}
            <FaCheck style={{ color: " #FFC107", marginRight: "10px" }} />
            Frontend Services(Html,CSS,Boostrap,Java Script,React.js) Knowledge
          </p>
          <p className="small">
            {" "}
            <FaCheck style={{ color: " #FFC107", marginRight: "10px" }} />
            Backend Services(Node.js,Express.js) Knowledge
          </p>
          <p className="small">
            {" "}
            <FaCheck style={{ color: " #FFC107", marginRight: "10px" }} />
            Firebase Knowledge,Mongodb Konwledge
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
              href="http://www.linkedin.com/in/supun-nilakshana-916129202"
              style={{ color: "darkgrey" }}
            >
              <FaLinkedin className="iconf" />
            </a>

            <a
              href="https://www.facebook.com/supun.nilakshana.5"
              style={{ color: "darkgrey" }}
            >
              <FaFacebook className="iconf" />
            </a>
            <a
              href="https://github.com/supunnilakshana"
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
