import React from "react";
import "./Products.css";

const Products = () => {
  const loansData = [
    { id: 1, image: "/Images/personal_loan.jpg", name: "Personal Loan" },
    { id: 2, image: "/Images/Credit_Card.jpg", name: "Credit Card" },
    { id: 3, image: "/Images/LAMF.jpg", name: "Loan against Mutual Fund" },
    { id: 4, image: "/Images/Business_Loan.jpg", name: "Business Loan" },
    { id: 5, image: "/Images/Home_Loan.jpg", name: "Home Loan" },
    { id: 6, image: "/Images/STPL.jpg", name: "Short Term Personal Loan" },
    { id: 7, image: "/Images/Gold_Loan.jpg", name: "Gold Loan" },
    { id: 8, image: "/Images/Loan_Against.jpg", name: "Loan Against Property" },
    {id: 9,image: "/Images/Home_loan_BL.jpg",name: "Home Loan Balance Transfer"},
    { id: 10, image: "/Images/Health_Insurance.jpg", name: "Health Insurance" },
  ];

  return (
    <div className="products">
      <div className="products-container">
        {/* Heading */}
        <div className="head-text">
          <h2>
            Bringing you the <span className="highlight">Best Products</span>
            <br />
            from Top Banks & Financial{" "}
            <span className="underline">Institutions</span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {loansData.map((loan) => (
            <div key={loan.id} className="product-card">
              <img src={loan.image} alt={loan.name} className="product-image" />
              <p className="product-name">{loan.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
