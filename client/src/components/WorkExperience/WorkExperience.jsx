import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "DOZCO India Pvt. Ltd.",
      position: "SAP SD Functional Consultant",
      year: "Mar 2026 - Present",
      points: [
        "Enhancement and production support in SAP S/4HANA for Automobile & Manufacturing.",
        "Built plant-wise invoice number range by Financial Year and Plant Code.",
        "Automated bank account determination in sales orders/quotations via custom TMG table.",
        "Created a custom transaction for user-wise maximum discount restriction.",
        "Configured pricing procedures, condition types, access sequences and custom TCS tax routines.",
      ],
      techskills: [
        { techname: "S/4HANA" },
        { techname: "Pricing" },
        { techname: "Smart Forms" },
        { techname: "Enhancements" },
      ],
    },
    {
      companyname: "Soft Talent Software Technologies",
      position: "SAP SD / LE Consultant (Client: ITC Limited)",
      year: "Feb 2025 - Feb 2026",
      points: [
        "Managed 20+ SD/LE incidents weekly with ~95% SLA compliance.",
        "Led SAP Excise Duty implementation for Unmanufactured Tobacco (J1IIN).",
        "Enhanced credit management for Agri policy (Insurance, BG, LC, Advances).",
        "Automated LE-TRA shipment cost processing (VI04/VI11) end to end.",
        "Implemented GSTN validation at billing; worked on EDI/IDoc interfaces.",
      ],
      techskills: [
        { techname: "LE-TRA" },
        { techname: "Credit Mgmt" },
        { techname: "GST" },
        { techname: "IDoc/EDI" },
      ],
    },
    {
      companyname: "Tata Consultancy Services (TCS)",
      position: "SAP SD Consultant (Client: Carrier)",
      year: "Jan 2021 - Jan 2025",
      points: [
        "Enhanced sales order workflows, reducing processing time by ~25%.",
        "Resolved 20-30 SD tickets monthly within SLA on S/4HANA.",
        "Configured condition tables, access sequences and condition types.",
        "Supported O2C, cross-module integration, RICEF issues and upgrade testing.",
        "Daily production support and RICEF functional unit testing.",
      ],
      techskills: [
        { techname: "O2C" },
        { techname: "Pricing" },
        { techname: "S/4HANA" },
        { techname: "Support" },
      ],
    },
  ];

  const colors = ["#800000", "#FF8042", "#001CCE", "#4B088A"];

  return (
    <div className="container workexperience-section" id="workexperience">
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF1042">
          {data.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tec, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <ul className="experience-points">
                {item.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
