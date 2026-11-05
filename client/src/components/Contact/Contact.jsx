import React, { useState } from "react";
import "./Contact.css";
import { Fade } from "react-awesome-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEmail } from "react-icons/md";
import {
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt,
  FaRegCopy,
  FaDownload,
} from "react-icons/fa";




const EMAIL = "vamansapsd@gmail.com";
const PHONE = "+917989410491";
const LINKEDIN = "https://www.linkedin.com/in/vaman-kumar/"; // <-- update
const ENGAGEMENTS = ["Full-time", "Contract", "Freelance", "Support & Maintenance"];

const Contact = () => {
  const [type, setType] = useState("Full-time");

  const mailLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `SAP SD Opportunity: ${type}`
  )}&body=${encodeURIComponent(
    "Hi Vaman,\n\nI came across your portfolio and would like to discuss...\n\nRegards,"
  )}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Could not copy. Please select it manually.");
    }
  };

  const cards = [
    { icon: <MdEmail size={28} />, label: "Email", value: EMAIL, href: mailLink },
    { icon: <FaPhoneAlt size={24} />, label: "Call", value: "+91 79894 10491", href: `tel:${PHONE}` },
    { icon: <FaWhatsapp size={28} />, label: "WhatsApp", value: "Chat now", href: `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent("Hi Vaman, I saw your SAP SD portfolio.")}`, external: true },
    { icon: <FaLinkedin size={28} />, label: "LinkedIn", value: "Connect with me", href: LINKEDIN, external: true },
  ];

  return (
    <div className="container contact-section" id="contactsection">
      <div className="section-title">
        <h5>Let's Connect</h5>
        <span className="line"></span>
      </div>

      <Fade direction="up" triggerOnce>
        <p className="contact-intro">
          Open to SAP SD / LE opportunities: S/4HANA implementation, rollout,
          and support. Pick an engagement type and reach out on your preferred
          channel.
        </p>

        <div className="engagement-chips">
          {ENGAGEMENTS.map((e) => (
            <button
              key={e}
              type="button"
              className={e === type ? "chip chip-active" : "chip"}
              onClick={() => setType(e)}
            >
              {e}
            </button>
          ))}
        </div>

        <div className="row contact-cards">
          {cards.map((c) => (
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={c.label}>
              <a
                className="contact-card"
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                <span className="contact-card-icon">{c.icon}</span>
                <h6>{c.label}</h6>
                <p>{c.value}</p>
              </a>
            </div>
          ))}
        </div>

        <div className="contact-actions">
          <button type="button" className="contact-btn" onClick={copyEmail}>
            <FaRegCopy /> Copy Email
          </button>
          <a className="contact-btn contact-btn-outline" href="/Vaman_SAP_SD_Resume.pdf" download="Vaman_SAP_SD_Resume.pdf">
            <FaDownload /> Download Resume
          </a>
        </div>
      </Fade>

      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Contact;