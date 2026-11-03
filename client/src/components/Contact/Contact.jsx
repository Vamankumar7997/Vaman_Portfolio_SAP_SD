import React, { useState } from "react";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Fade, Flip, Zoom } from "react-awesome-reveal";

const Contact = () => {
  const API = import.meta.env.VITE_API_URL || "http://localhost:8000/sendmail";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobtypes, setJobtypes] = useState("Full-time");
  const [message, setMessage] = useState("");

  const sendemailInfo = () => {
    console.log("API URL:", API);
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        jobtypes,
        message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {

          toast.success("Your E-mail has been sent", {
            position: toast.POSITION.TOP_RIGHT,
          });

          setName("");
          setEmail("");
          setJobtypes("Full-time");
          setMessage("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container contact-section" id="contactsection">
      <div className="section-title">
        <h5>Contact Me</h5>
        <span className="line"></span>
      </div>

      <div className="row align-items-center contact-row">
        {/* LEFT: image */}
        <div className="col-xl-5 col-lg-5 col-md-12 col-12">
          <Fade direction="up" triggerOnce>
            <div className="contact-form-iamge">
              <img
                src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="contact form img"
              />
            </div>
          </Fade>
        </div>

      {/* RIGHT: form */}
      <div className="col-xl-7 col-lg-7 col-md-12 col-12">
      <Fade direction="right" triggerOnce>
        <div className="contact-form-design">
          <p>
            <a href="mailto:vamansapsd@gmail.com"></a>
          </p>
          <form>
            <div className="contact-form">
              <label className="form-lebel">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="contact-form">
                  <label className="form-lebel">E-mail</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Engagement Type</label>
                  <select
                    className="custom-select-tag"
                    value={jobtypes}
                    onChange={(e) => setJobtypes(e.target.value)}
                  >
                    <option>Full-time</option>
                    <option>Contract</option>
                    <option>Freelance</option>
                    <option>Support & Maintenance</option>
                  </select>
                </div>
                <div className="contact-form">
                  <label className="form-lebel">Message</label>
                  <textarea
                    rows="4"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="button-submit" onClick={sendemailInfo}>
                  <p>
                    Send <RiSendPlaneFill size={20} />
                  </p>
                </div>
              </form>
            </div>
          </Fade>
        </div>
      </div>
      <ToastContainer draggable autoClose={8000} />
      </div>
    );
};

export default Contact;
