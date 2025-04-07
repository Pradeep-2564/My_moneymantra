import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./Home.css";

const banners = [
  {
    title: "Unlock Your Dreams with",
    highlight: "Personal Loan",
    banner: "/Images/banner.png",
    description: "Flexible terms and competitive rates to help you fund your next big purchase or dream vacation.",
    image: "/Images/slider1.jpg",
    buttonText: "Compare & Apply",
    route: "/personal-loan",
  },
  {
    title: "Instant Loan up to ₹5 lakhs in 5 minutes from",
    highlight: "Poonawalla Fincorp",
    banner: "/Images/banner.png",
    image: "/Images/slider2.jpg",
    buttonText: "Apply Now",
    route: "/poonawalla-loan",
  },
  {
    title: "Your New",
    highlight: "Home Journey Begins Here",
    banner: "/Images/banner.png",
    description: "You simply find Dream Home, we will work towards making it reality. Get assistance even after disbursement.",
    image: "/Images/slider3.jpg",
    buttonText: "Compare & Apply",
    route: "/home-loan",
  },
  {
    title: "Credit Card with Endless Possibilities",
    banner: "/Images/banner.png",
    description: "Compare the top cards in categories like shopping, travel, luxury and Apply for the best suitable Credit Card.",
    image: "/Images/slider4.jpg",
    buttonText: "Compare & Apply",
    route: "/credit-cards",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Pause auto-slide on hover

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <Box 
      className="header-container" 
      sx={{ width: "100%", position: "relative", margin: "0 auto" }}
    >
      <Box 
        className="banner-wrapper" 
        sx={{ width: "100%", height: "600px", position: "relative", overflow: "hidden" }}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box className="banners-container" sx={{ width: "100%", height: "100%", position: "relative" }}>
          {banners.map((banner, index) => (
            <Box
              key={index}
              className={`banner ${index === currentIndex ? "active" : ""}`}
              sx={{
                marginTop: "70px",
                position: "absolute",
                width: "100%",
                height: "90vh",
                background: `url(${banner.image}) center/cover no-repeat`,
                opacity: index === currentIndex ? 1 : 0,
                transition: "opacity 0.8s ease-in-out",
              }}
            >
              {/* Banner Content */}
              <Box 
                className="banner-content" 
                sx={{ position: "absolute", top: "42%", left: "0", transform: "translateY(-50%)" }}
              >
                <Box className="banner-text-container" sx={{ maxWidth: "550px", color: "black" }}>
                  <Typography 
                    className="banner-title" 
                    variant="h3" 
                    fontWeight={800} 
                    style={{ fontSize: "55px" }}
                  >
                    {banner.title}{" "}
                    <Typography 
                      component="span" 
                      className="highlight" 
                      sx={{ color: "#4A9B85", fontWeight: 800, fontSize: "55px" }}
                    >
                      {banner.highlight}
                    </Typography>
                    <img 
                      src={banner.banner} 
                      alt="" 
                      style={{ width: "75%", marginBottom: "40px" }} 
                    />
                  </Typography>

                  {banner.description && (
                    <Typography 
                      className="banner-description" 
                      variant="h6" 
                      style={{ fontSize: "28px", marginTop: "-28px" }}
                    >
                      {banner.description}
                    </Typography>
                  )}

                  <Button
                    component={Link}
                    to={banner.route}
                    className="banner-button"
                    sx={{
                      fontSize: 20,
                      background: "linear-gradient(to bottom right, #2980b9, #5aa3a3)",
                      color: "#fff",
                      px: 4,
                      mt: 2,
                      borderRadius: 2,
                      fontWeight: 600,
                    }}
                    style={{ textTransform: "capitalize", padding: "10px" }}
                  >
                    {banner.buttonText}
                    <NavigateNextIcon style={{ marginLeft: "50px" }} />
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}

          {/* Navigation Dots */}
          <Box 
            className="dots-container" 
            sx={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 1 }}
          >
            {banners.map((_, index) => (
              <Box
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: index === currentIndex ? "#fff" : "#64B59F",
                  cursor: "pointer",
                }}
              />
            ))}
          </Box>
        </Box> 
      </Box>
    </Box>
  );
};

export default Home;
