import React, { useState } from "react";
import "./MobileForm.css";

const MobileForm = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  
  // Validate and update the input
  const handleChange = (e) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setMobileNumber(value);
      setError(""); // Clear error when input is valid
    }
  };

  // Check if number is valid (10 digits)
  const handleSubmit = () => {
    if (mobileNumber.length < 10) {
      setError("Please enter a valid mobile number");
    } else {
      alert("Form submitted successfully!"); // You can replace this with API call
    }
  };

  return (
    <div className="mobile-form">
      <h5>Mobile Number</h5>
      <input
        type="text"
        placeholder="Enter your Mobile Number"
        value={mobileNumber}
        onChange={handleChange}
        maxLength={10} // Limit to 10 digits
      />
      {error && <p className="error-text">{error}</p>}
      <p id="mobile-para">*By clicking on proceed you agree to MMM consent</p>
      <button 
        onClick={handleSubmit} 
        disabled={mobileNumber.length === 0} // Disable button if input is empty
      >
        Get Link
      </button>
    </div>
  );
};

export default MobileForm;
