import React from "react";
import { CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const blogs = [
    {
      title: "Key Highlights - Union Budget 2025-26",
      image: "/Images/Blog1.jpg",
      description:
        "Union Budget 2025 focuses on gareeb, youth, annadata & naari. No tax on income up to ₹12L, higher TDS limit for seniors & major reforms in credit & FDI. Boost for startups, urea production, and Atmanirbharta in pulses to strengthen the economy.",
      link: "/union-budget-2025",
    },
    {
      title: "Axis Bank Credit Card Cash Withdrawal Charges & Limit",
      image: "/Images/Blog2.jpg",
      description:
        "You can use your Axis Bank credit card for cash withdrawals just like a debit card from an ATM kiosk. The cash withdrawal feature of Axis Bank credit cards can be of great benefit, especially during emergencies. However, Axis Bank levies a limit for withdrawing cash with your credit card from an ATM.",
      link: "/axis-bank-credit-card",
    },
    {
      title: "How to Choose Personal Loan Tenure Wisely?",
      image: "/Images/Blog3.jpg",
      description:
        "When you choose a personal loan offer, there are many factors you consider, like loan amount, rate of interest, processing fee, etc. However, it is crucial to focus on choosing the right loan tenure so that you do not end up paying much more than you should. The right personal loan tenure should neither be too short nor too long.",
      link: "/personal-loan-tenure",
    },
  ];

const Blogs = () => {
  const navigate = useNavigate();

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
            bottom: "35px",
            width: "75px",
            height: "4px",
            backgroundColor: "#3593b0",
          },
        }}>
        Blogs
      </Typography>
      <Grid container spacing={6} justifyContent="space-between" alignItems="center">
        {blogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} style={{ display: "flex", justifyContent: "center" }}>
            <div onClick={() => navigate(blog.link)} style={{ width: "100%", maxWidth: "350px", cursor: "pointer" }}>
              <CardMedia
                component="img"
                height="180"
                width="100%"
                image={blog.image}
                alt={blog.title}
                style={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{width: '350px'}}>
                  {blog.description}
                </Typography>
              </CardContent>
            </div>
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h6"
        style={{ marginTop: "65px", cursor: "pointer", color: "#489db8", fontWeight: 'bold', fontSize:'24px'}}
        onClick={() => navigate("/blogs")}
      >
        View More
      </Typography>
    </div>
  );
};

export default Blogs;
