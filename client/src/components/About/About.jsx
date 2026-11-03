import React from "react";
import "./About.css";
import ProfilePic from "../../Image/a.jpg";
import { Fade, Flip, Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="container about-section" id="about">
    <div className="row align-items-center">
      {/* LEFT: photo */}
      <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
        <Fade direction="up" triggerOnce>
          <div className="about-image">
            <div className="about-image-ring">
              <img src={ProfilePic} alt="Vaman Kumar Tamarana" />
            </div>
          </div>
        </Fade>
      </div>

      {/* RIGHT: text */}
      <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
        <div className="about-details">
          <Flip direction="horizontal" triggerOnce>
            <div className="about-title">
              <h5>About Me</h5>
              <span className="line"></span>
            </div>
          </Flip>

          <Fade direction="right" triggerOnce>
          <p>
            SAP SD Consultant with 5+ years delivering Order-to-Cash on SAP
            ECC 6.0 and S/4HANA for ITC Limited, DOZCO, Hawle Austria and
            Carrier. I turn business requirements into RICEFW specifications
            (FS, FUT, SIT, UAT), working with ABAP, MM and FI teams on user
            exits, pricing routines, IDoc/EDI and OData interfaces,
            GST/E-Invoicing controls, and LE-TRA shipment-cost automation.
            Recent focus: S/4HANA enhancements and RISE with SAP methodology.
          </p> 
          <div className="about-stats">
              <div className="stat-card">
                <h3>5+</h3>
                <span>Years Experience</span>
              </div>
              <div className="stat-card">
                <h3>4</h3>
                <span>Enterprise Clients</span>
              </div>
              <div className="stat-card">
                <h3>ECC + S/4 HANA</h3>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;
