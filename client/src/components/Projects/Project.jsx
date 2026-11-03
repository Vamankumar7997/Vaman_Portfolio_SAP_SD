import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "LE-TRA Shipment Cost Automation",
      des:
        "Automated shipment cost processing by scheduling background jobs for cost calculation (VI04) and cost transfer (VI11), enabling automatic service PO creation, service entry sheet posting and service GRN. Reduced manual effort, avoided duplicate postings and improved financial posting accuracy.",
      techused: [
        { techname: "LE-TRA" },
        { techname: "VI04" },
        { techname: "VI11" },
        { techname: "Service PO" },
      ],
    },
    {
      name: "Excise Duty - Unmanufactured Tobacco",
      des:
        "Led end-to-end SAP Excise Duty implementation ensuring compliant J1IIN excise invoicing with accurate BED calculation through optimized pricing and excise determination.",
      techused: [
        { techname: "J1IIN" },
        { techname: "Pricing" },
        { techname: "Excise" },
        { techname: "BED" },
      ],
    },
    {
      name: "Credit Management Enhancements",
      des:
        "Enhanced credit management aligned with Agri credit policy covering Domestic Insurance, Bank Guarantee, Letter of Credit and Advance Payments, supporting the multi-entity ITC landscape (ABD, IIVL, Technico).",
      techused: [
        { techname: "Insurance" },
        { techname: "BG" },
        { techname: "LC" },
        { techname: "Advances" },
      ],
    },

    {
      name: "Warehousing Receipt Financing (Bill & Hold)",
      des:
        "Configured a new contract and sales order type, a new pricing procedure, 10 manual condition types (discounts and surcharges), and non-valuated inventory after PGI. Enabled 7 lakh MT of sales booked in 7 days.",
      techused: [
        { techname: "Contracts" },
        { techname: "Pricing" },
        { techname: "PGI" },
        { techname: "Billing" },
      ],
    },

    {
      name: "DOZCO S/4HANA Custom Enhancements",
      des:
        "Delivered mandatory Ship-to name/mobile validation for cash sales, plant-wise invoice number ranges, plant-based bank account determination via TMG, conditional Smart Form email notifications, and a user-wise maximum discount restriction transaction.",
      techused: [
        { techname: "S/4HANA" },
        { techname: "TMG" },
        { techname: "Smart Forms" },
        { techname: "Custom Tcode" },
      ],
    },

    {
      name: "GST Validation & Billing Accuracy",
      des:
        "Implemented GSTN validation controls at billing level, reducing billing and GST errors across sales processes.",
      techused: [
        { techname: "GST" },
        { techname: "E-Invoice" },
        { techname: "Billing" },
      ],
    },
  ];

  return (
    <div className="container" id="project">
      <div className="section-title">
        <h5>Key Achievements</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
