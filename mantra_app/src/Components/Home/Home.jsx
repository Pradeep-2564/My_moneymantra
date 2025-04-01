import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './Home.css'
 
const banners = [
  {
    id: 1,
    title: "Unlock Your Dreams",
    highlight: "with Personal Loan",
    bannerImage:'/Images/banner.png',
    description: "Flexible terms and competitive rates to help you fund your next big purchase or dream vacation.",
    image: "/Images/slider1.jpg",
    buttonText: "Compare & Apply",
  },
  {
    id: 2,
    title: "Instant Loan up to ₹5",
    highlight: " lakhs in 5 minutes from Poonawalla Fincorp",
    bannerImage:'/Images/banner.png',
    image: "/Images/slider2.jpg",
    link: "https://instant-pocket-loan.poonawallafincorp.com",
    buttonText: "Apply Now",
  },
  {
    id: 3,
    title: "Your New",
    highlight: "Home Journey Begins Here",
    bannerImage:'/Images/banner.png',
    description: "You simply find Dream Home, we will work towards making it reality. Get assistance even after disbursement.",
    image: "/Images/slider3.jpg",
    buttonText: "Compare & Apply",
  },
  {
    id: 4,
    title: "Credit Card with",
    highlight:'Endless Possibilities',
    bannerImage:'/Images/banner.png',
    description: "Compare the top cards in categories like shopping, travel, luxury and Apply for the best suitable Credit Card.",
    image: "/Images/slider4.jpg",
    buttonText: "Compare & Apply",
  },
];
 
const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <Box className="header-container" sx={{ width: "100%", position: "relative", margin: "0 auto" }}>
      <Box className="banner-wrapper" sx={{ width: "100%", height: "650px", position: "relative", overflow: "hidden" }}>
        <Box className="banners-container" sx={{ width: "100%", height: "100%", position: "relative" }}>
          {banners.map((banner, index) => (
            <Box
              key={index}
              className={`banner ${index === currentIndex ? "active" : ""}`}
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: `url(${banner.image}) center/cover no-repeat`,
                opacity: index === currentIndex ? 1 : 0,
                transition: "opacity 0.8s ease-in-out",
              }}
            >
              {/* Banner Content */}
              <Box className="banner-content">
                <Box className="banner-text-container" >
                  <Typography className="banner-title" variant="h3" fontWeight={800}>
                    {banner.title}{" "}
                    <Typography component="span" className="highlight" sx={{ color: "#ffcc33", fontWeight: 800 }}>
                      {banner.highlight}
                    </Typography>
                    <img src={banner.bannerImage} alt="" />
                  </Typography>
                  {banner.description && (
                    <Typography className="banner-description" variant="h6" sx={{ mt: 2 }}>
                      {banner.description}
                    </Typography>
                  )}
                  <button
                    href={banner.link}
                    className="banner-button"
                    sx={{
                      mt: 3,
                      background: "#2288a0",
                      color: "#fff",
                      px: 4,
                      py: 1,
                      borderRadius: 2,
                      fontWeight: 600,
                      "&:hover": { background: "#ffcc33", color: "#222" },
                      border: 'none',
                    }}
                  >
                    {banner.buttonText}
                    <NavigateNextIcon/>
                  </button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
 
        {/* Dots Navigation */}
        <Box className="dots-container" sx={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 1 }}>
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
  );
};
 
export default Header;
 
 
 