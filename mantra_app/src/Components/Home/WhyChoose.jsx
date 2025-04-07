import React from "react";
import "./WhyChoose.css";
import { Typography } from "@mui/material";
const WhyChoose = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <Typography sx={{
          fontFamily: "Manrope, sans-serif !important",
          padding: 5,
          marginBottom: '-10px',
          fontSize: "2.3rem",
          fontWeight: "700",
          color: "black",
          lineHeight: 0.99,
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            position: "absolute",
            right: 40,
            borderRadius: "5px",
            bottom: "30px",
            width: "145px",
            height: "4px",
            backgroundColor: "#3593b0",
          },
        }}>
        Why Choose Us
      </Typography>
      <div className="choose-container">
    
        <div className="choose-content">

          <div className="choose-item">
            <div className="choose-text">
              <h3>Fast Disbursal</h3>
              <p>
              Our team helps customers <br /> make informed loan
                <br />decisions. 
              </p>
            </div>

            <div className="choose-icon">
              <span className="circle1"></span>
              <span className="line1"></span>
            </div>
            <div>
              <img src="/Images/fast.jpg" alt="img" />
            </div>
          </div>

          <div className="choose-item">
            <div>
              <img src="/Images/safe.jpg" alt="img" />
            </div>
            <div className="choose-icon">
              <span className="circle2 middel"></span>
              <span className="line2 middel"></span>
            </div>
            <div className="choose-text">
              <h3>
                <span className="">Safe & Secure</span>
              </h3>
              <p>
                <span>Applying for loans and credit cards</span>
                <br />
                <span>through MyMoneyMantra is</span>
                <br />
                <span>100% safe and secure.</span>
              </p>
            </div>
          </div>
          <div className="choose-item">
            <div className="choose-text">
              <h3>
                <span className="">Personalised</span>
              </h3>
              <p>
                <span>We curate the best available</span>
                <br />
                <span>offers from banks, NBFCs &</span>
                <br />
                <span>financial institutions</span>
              </p>
            </div>
            <div className="choose-icon">
              <span className="circle3 last-circle"></span>
            </div>
            <div>
              <img src="/Images/personalized.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
