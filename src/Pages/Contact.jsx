import React, { useRef } from "react";
import image from "../images/bg-2.jpg";
import emailjs from "emailjs-com";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import LeftGrid from "../component/Grid Section/LeftGrid";
import "../component/Contact.css";
import { IconContext } from "react-icons";
import LeftGridNew from "../component/Grid Section/LeftGridNew";
import { Link } from "react-router-dom";

function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_osvo7ri",
        "template_5pz0fw8",
        form.current,
        "3KqiOVEydz1heFUNA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message: " + error.text);
        }
      );

    e.target.reset();
  }

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
             -----Contact Information-------- 
             -----------------------------------*/}

              <div className="row contact">
                <h5 className="maintopic">Contact Information</h5>
                <div className="col-6 mx-auto d-block boxc">
                  <div className="row">
                    <div className="col-6">
                      <p style={{ color: "#fff" }}>Country:</p>
                      <p style={{ color: "#fff" }}>City:</p>
                      <p style={{ color: "#fff" }}> Street:</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted" style={{ marginLeft: "40%" }}>
                        Sri Lanka
                      </p>
                      <p className="text-muted" style={{ marginLeft: "40%" }}>
                        Bandarawela
                      </p>
                      <p className="text-muted" style={{ marginLeft: "40%" }}>
                        Neluwa
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mx-auto d-block boxc">
                  <div className="row">
                    <div className="col-6">
                      <p style={{ color: "#fff" }}>Email:</p>
                      <p style={{ color: "#fff" }}>Contact number:</p>
                      <p style={{ color: "#fff" }}>Whatsapp:</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted">
                        dinithinayanamali98@gmail.com
                      </p>
                      <p className="text-muted" style={{ marginLeft: "40%" }}>
                        071 *******
                      </p>
                      <p className="text-muted" style={{ marginLeft: "40%" }}>
                        071 *******
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/*---------------------------------
             -----Getin Touch-------- 
             -----------------------------------*/}

              <h5
                className="maintopic"
                style={{
                  marginTop: "5vh",
                }}
              >
                Contact me
              </h5>

              <div className="form">
                <IconContext.Provider value={{ fontsize: "5px" }}>
                  <form ref={form} className="form" onSubmit={sendEmail}>
                    <div className="form-group">
                      <FaUserAlt className="iconc" />
                      <input type="hidden" name="contact_number" />

                      <input
                        id="name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="form-group">
                      <FaAt className="iconc" />

                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your email"
                      />
                    </div>

                    <div className="form-group">
                      <FaEnvelope className="iconc" />

                      <textarea
                        id="message"
                        name="message"
                        className="form-control msg"
                        placeholder="Message..."
                      />
                    </div>
                    <button type="submit" className="btnc ">
                      Send Message
                    </button>
                  </form>
                </IconContext.Provider>
              </div>

              <br />
              <br />

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

export default Contact;
