import React, { useState } from "react";
import { Box, Typography, Collapse, IconButton, Grid, Divider } from "@mui/material";
import { Add, Minimize } from "@mui/icons-material";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const categories = [
  "Credit Card",
  "Personal Loan",
  "Home Loan",
  "Business Loan",
  "Credit Score",
  "Gold Loan",
];

const categoryContent = {
  "Credit Card": "IndusInd Bank Credit Card | Saraswat Bank Credit Card | Best RuPay Credit Cards | Best Airport Lounge Access Credit Cards | Best International Travel Credit Cards | Best Hotel Booking Credit Cards | Best Movie Ticket Booking Credits | Lifetime Free Credit Cards | Best Cashback Credit Cards | Best Credit Cards in India | Best Fuel Credit Cards | Best Reward Credit Cards | Best Shopping Credit Cards | Best Student Credit Cards | Best Travel Credit Cards | Balance Transfer Credit Card",
  "Personal Loan": "CashBean Personal Loan | Best Loan Apps | Best Student Loan Apps | Loan Without CIBIL Score | Loan Apps Without Salary Slip | PAN Card Personal Loan | Aadhaar Card Personal Loan | 10,000 Personal Loan | 15,000 Personal Loan |  20,000 Personal Loan | 30,000 Personal Loan | 50,000 Personal Loan | SBI Personal Loan EMI Calculator | Loan Prepayment Calculator | Personal Loan Interest Rates | Paytm Personal Loan Interest Rates | SBI Personal Loan Statement | L&T Finance Personal Loan Statement",
  "Home Loan": "Yes Bank Home Loan | UCO Bank Home Loan | Shriram Housing Finance Home Loan | SBI Home Loan | Repco Home Finance Home Loan | Reliance Home Finance Home Loan | RBL Home Loan | PNB Home Loan | Manappuram Home Finance | LIC Housing Finance | ICICI Bank Home Loan",
  "Business Loan": "Aditya Birla Business Loan | Axis Bank Business Loan | Bajaj Finserv Business Loan | BOB Business Loan | Bank of India Business Loan | Deutsche Bank Business Loan | Federal Bank Business Loan | HDFC Bank Business Loan | ICICI Bank Business Loan | IDFC Bank Business Loan | Indian Bank Business Loan | Kotak Bank Business Loan | RBL Bank Business Loan | Tata Capital Business Loan | Yes Bank Business Loan | Ziploan Business Loan",
  "Credit Score": "Check Free Credit Score | Free CIBIL Score Check | CIBIL Score Calculator | Pan Card CIBIL Score | SBI CIBIL Score | CIBIL Score for Personal Loan | CIBIL Score for Home Loan | CIBIL Score for Credit Card | TransUnion CIBIL Score | Experian Credit Score | Equifax Credit Score | CIBIL Dispute | CIBIL Score Range | How To Improve CIBIL Score | CIBIL Full Form",
  "Gold Loan": "Axis Bank Gold Loan | Bajaj Gold Loan | Bank of Baroda Gold Loan | Bank of India Gold Loan | Canara Bank Gold Loan | Federal Bank Gold Loan | ICICI Bank Gold Loan | IDBI Gold Loan | IIFL Gold Loan | Indian Bank Gold Loan | Kotak Bank Gold Loan | Manappuram Gold Loan | PNB Bank Gold Loan | SBI Gold Loan | UCO Bank Gold Loan | Union Bank of India Gold Loan"
};

const trendingCards = [
  "HDFC Freedom Credit Card",
  "HDFC Indian Oil Credit Card",
  "SBI Prime Credit Card",
  "SBI Elite Credit Card",
  "Axis Bank Neo Credit Card",
  "Axis Bank My Zone Credit Card",
  "HSBC Visa Platinum Credit Card",
  "HSBC Cashback Credit Card",
  "IDFC Millennia Credit Card",
  "AU Zenith Credit Card",
];

const Footer = () => {
  const [openTrending, setOpenTrending] = useState(false);
  const [openCategory, setOpenCategory] = useState(Array(categories.length).fill(false));

  const handleTrendingClick = () => setOpenTrending(!openTrending);
  const handleCategoryClick = (index) => {
    setOpenCategory((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <Box sx={{ bgcolor: "#2a9d8f", color: "white", p: 3, textAlign: "center" }}>
      {/* Trending Section */}
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Box display="flex" alignItems="center" justifyContent="center" onClick={handleTrendingClick} sx={{ cursor: "pointer" }}>
          <Typography variant="h6" fontWeight="bold">Trending on MMM</Typography>
          <IconButton color="inherit">{openTrending ? <KeyboardDoubleArrowDownIcon /> : <KeyboardDoubleArrowUpIcon />}</IconButton>
        </Box>
        <Collapse in={openTrending} timeout="auto" unmountOnExit>
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
            {trendingCards.map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Link to={`/credit-card/${card.replace(/ /g, "-").toLowerCase()}`} style={{ textDecoration: "none", color: "white" }}>
                  <Typography sx={{ mt: 1, textAlign: "center", "&:hover": { textDecoration: "underline" } }}>{card}</Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </Box>

      <Divider sx={{ bgcolor: "white", mt: 2, mb: 3 }} />
      {/* Category Sections */}
      <Grid container spacing={2} justifyContent="flex-start" sx={{ mb: 3}}>
        {categories.map((category, index) => (
          <Grid item key={category} style={{width:'290px'}}>
            <Box sx={{ width: "100%", bgcolor: "rgba(255, 255, 255, 0.2)", p: 2, borderRadius: "8px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }} onClick={() => handleCategoryClick(index)}>
              <Typography sx={{ fontWeight: "bold" }}>{category}</Typography>
              <IconButton color="inherit">{openCategory[index] ? <Minimize /> : <Add />}</IconButton>
            </Box>
            <Collapse in={openCategory[index]} timeout="auto" unmountOnExit>
              <Typography sx={{ mt: 1, p: 1, bgcolor: "rgba(255, 255, 255, 0.1)", borderRadius: "8px" }}>{categoryContent[category]}</Typography>
            </Collapse>
          </Grid>
        ))}
      </Grid>
      {/* Footer Links */}
      <Box>
        <Grid container spacing={2} justifyContent="center">
          {["About Us", "Meet the Team", "Careers", "Our Partners", "Press", "Privacy Policy", "Fraud Detection", "Sitemap", "Contact Us", "Experian T & C"].map((link) => (
            <Grid item key={link}>
              <Link to={`/${link.replace(/ /g, "-").toLowerCase()}`} style={{ textDecoration: "none", color: "white" }}>
                <Typography sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>{link}</Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Social Media Icons */}
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
        <IconButton color="inherit"><FacebookIcon /></IconButton>
        <IconButton color="inherit"><LinkedInIcon /></IconButton>
        <IconButton color="inherit"><TwitterIcon /></IconButton>
      </Box>

      <Typography sx={{ mt: 3 }}>© 2025 MyMoneyMantra. All rights reserved</Typography>
    </Box>
  );
};

export default Footer;
