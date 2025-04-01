import React, { useState } from 'react';
import "./SignIn.css"
const SignIn = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    termsAccepted: false
  });

  const [errors, setErrors] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    termsAccepted: ''
  });

  const [showFullTerms, setShowFullTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      termsAccepted: e.target.checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({
      fullName: '',
      mobileNumber: '',
      email: '',
      termsAccepted: ''
    });

    // Form validation
    let isValid = true;
    let newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = 'Please enter a valid full name';
      isValid = false;
    }
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Please enter a valid mobile';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions';
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // Handle successful form submission (e.g., API call)
    console.log('Form submitted:', formData);
  };

  const toggleTerms = () => {
    setShowFullTerms(!showFullTerms);
  };

  return (
    <div className="signIn">
      <form onSubmit={handleSubmit}>
        <p>Full Name</p>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your Full Name"
        />
        {!errors.fullName ? (
            <p id='first-error'>Enter your Name as per PAN card</p>
            ) : (
            <span className="error">{errors.fullName}</span>
        )}

        <p>Mobile Number</p>
        <input
          type="text"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Enter your Mobile Number"
        />
        {!errors.mobileNumber ? (
            <p id='first-error'>Please enter your Mobile Number</p>
            ) : (
            <span className="error">{errors.mobileNumber}</span>
        )}

        <p>Email Address</p>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your Email ID"
        />
        {!errors.email ? (
            <p style={{ color: "red", fontSize: "12px"}}>Please enter your Personal E-mail ID</p>
            ) : (
            <span className="error">{errors.email}</span>
        )}

        <p className='terms-container'>
          I accept privacy policy and Terms and conditions. 
          {showFullTerms ? (
            <span>
              I appoint MyMoneyMantra as authorized representative to receive my credit information from Experian for the purpose of providing access to credit &amp; targeted offers ('End Use Purpose') as defined in the given terms.
              <a type="button" onClick={toggleTerms} style={{color:"blue"}}>Show Less</a>
            </span>
          ) : (
          
              <a type="button" onClick={toggleTerms} style={{color:"blue"}}>...Read More</a>
           
          )}
        </p>
        

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
