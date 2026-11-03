import React, { useState } from "react";
import "./TechStack.css";
import { Fade, Flip, Zoom } from "react-awesome-reveal";
const TechStack = () => {
  const data = [
    {name: "SAP SD Consultant",},
    {name: "Order-to-Cash (O2C)",},
    {name: "Pricing Procedures",},
    {name: "Billing & Credit Mgmt",},
    {name: "LE-TRA Shipments",},
    {name: "GST & E-Invoicing",},
    {name: "Output Determination",},
    {name: "IDoc / EDI / OData",},
    {name: "RICEFW (FS, FUT, SIT, UAT)",},
    {name: "SolMan, ServiceNow, HP ALM",},
    {name: "LSMW, MASS, SQVI",},
  ];

  const colors = ["#001CCE", "#FF1042", "#8181F7", "#4B088A", "#FF8042", "#1F618D","#FF1042", "#8181F7","#FF8042","#001CCE", "#FF1042"];;

  const [showMoreTechStack, setShowMoreTechStack] = useState(6);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container techstack-section" id="techstack">
      <div className="section-title">
        <h5>Core Skills</h5>
        <span className="line"></span>
      </div>

      <div className="row justify-content-center">
      {data.slice(0, showMoreTechStack).map((item, index) => (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
          <Fade direction="right" triggerOnce>
            <div className={index === 0 ? "tech-content-marked tech-content" : "tech-content"}>
              <span className="tech-number" style={{ backgroundColor: colors[index % colors.length] }}>
                {index + 1}</span>
              <p>{item.name}</p>
            </div>
          </Fade>
        </div>
        ))}
      </div>

      {showMoreTechStack >= data.length ? null : (
        <Zoom triggerOnce>
          <span className="load-more-tech-stack" onClick={loadMore}>
            Load More
          </span>
        </Zoom>
      )}
    </div>
  );
};

export default TechStack;
