import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Typography} from '@mui/material'
import "./MobileApp.css"
const MobileApp = () => {
  return (
    <div className='mobile-container'>
      <div className="mobile-content">
        <Typography
          variant="h2"
          sx={{
            fontSize: "3rem",
            lineHeight: "3.5rem",
            width: "47rem",
            fontWeight: "700",
            textAlign: "left",
            marginBottom: "4rem",
            paddingTop: "20px",
          }}
        >
          Download the
          <span
            style={{
              color: "#3593B0",
              fontWeight: "bolder",
              position: "relative",
              paddingBottom: "9px",
              display: "inline-block",
              left: 10,
            }}
          >
            MyMoneyMantra
            <span
              style={{
                position: "absolute",
                bottom: 0,
                left: 45,
                width: "88%",
                height: "3px",
                backgroundColor: "black",
                borderRadius: "5px",
              }}
            ></span>
          </span>
          <br></br>
          Mobile App
        </Typography>
        <p><CheckCircleIcon/>Enjoy a seamless experience.</p>
        <p><CheckCircleIcon/>Get exclusive Loans and Credit Card offers.</p>
        <p><CheckCircleIcon/>Track your credit score anytime anywhere.</p>
        <button><img src="/Images/app1.png" alt="logo" /></button>
        <button><img src="/Images/app2.png" alt="logo" /></button>
      </div>
      <div className="mobile-logo">
        <img src="/Images/MobileApp.png" alt="mobile" />
      </div>
    </div>
  )
}

export default MobileApp
