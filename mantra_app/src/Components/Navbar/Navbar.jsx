import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from 'react-router-dom';
import MobileForm from './MobileForm';
import SignIn from './SignIn';

const Navbar = () => {

  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchRef = useRef(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchActive(false);
      }
    };
 
    document.addEventListener('click', handleClickOutside);
 
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
 
  const handleSearchClick = () => {
    setIsSearchActive((prev) => !prev);
  };

  const handleSignInClick = () => {
    setShowSignIn(!showSignIn); // Toggle the display of SignIn form
  };

  return (
      <div className="nav-container">
        <div className="logo">
          <img src="https://cdn2.mymoneymantra.com/dark_logo_028c7b2cf6.webp?format=avif&quality=80&width=196&height=40" alt="logo" id='logo'/>
        </div>

        <div>
          <ul className='list'>          
            <li><NavLink to="/credit">Credit Cards<ExpandMoreIcon/></NavLink>
            <ul className="dropdown-content">
                  <li className="list-icon"><Link to="/credit/hdfc">HDFC Bank Credit Card <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/credit/hdfc/">Swiggy Credit Card</Link></li>
                    <li><Link to="/credit/hdfc/">Tata Neu Credit Card</Link></li>
                    <li><Link to="/credit/hdfc/">HDFC Millennia Credit Card</Link></li>
                    <li><Link to="/credit/hdfc/">HDFC Freedom Credit Card</Link></li>
                    <li><Link to="/credit/hdfc/">HDFC IndianOil Credit Card</Link></li>
                    <li><Link to="/credit/hdfc/">HDFC MoneyBack Credit Card</Link></li>
                    <li><Link to="/credit/hdfc/">HDFC UPI RuPay Credit Card</Link></li>
                    <li><Link to="/credit/hdfc/">HDFC MoneyBack+ Credit Card</Link></li>
                  </ul>                  
                  </li>
                  <li className="list-icon"><Link to="/credit/sbi">SBI Credit Card <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/credit/sbi">SBI Prime Credit Card </Link></li>
                    <li><Link to="/credit/sbi">SimplyCLICK SBI Card</Link></li>
                    <li><Link to="/credit/sbi">SBI Elite Credit Card</Link></li>
                    <li><Link to="/credit/sbi">SimplySave SBI Card</Link></li>
                    <li><Link to="/credit/sbi">SBI PULSE Credit Card</Link></li>
                    <li><Link to="/credit/sbi">BPCL SBI Credit Card</Link></li>
                    <li><Link to="/credit/sbi">IRCTC RuPay Credit Card</Link></li>
                  </ul>                  
                  </li>
                  <li className="list-icon"><Link to="/credit/popular card">Popular Credit Card <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/credit/popular card">Pop Club Credit Card</Link></li>
                    <li><Link to="/credit/popular card">Anq Phi Credit Card</Link></li>
                    <li><Link to="/credit/popular card">Jupiter Credit Card</Link></li>
                    <li><Link to="/credit/popular card">OneCard Credit Card</Link></li>
                    <li><Link to="/credit/popular card">ZET Magnet FD Credit Card</Link></li>
                    <li><Link to="/credit/popular card">Rupicard Credit Card</Link></li>
                    <li><Link to="/credit/popular card">Kiwi Credit Card</Link></li>
                  </ul>   
                  </li>
                  <li className="list-icon"><Link to="/credit/idfc">IDFC Bank Credit Card <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/credit/idfc/">IDFC Wealth Credit Card</Link></li>
                    <li><Link to="/credit/idfc/">IDFC Millennia Credit Card</Link></li>
                    <li><Link to="/credit/idfc/">IDFC Classic Credit Card</Link></li>
                    <li><Link to="/credit/idfc/">IDFC WOW Credit Card</Link></li>
                    <li><Link to="/credit/idfc/">IDFC Select Credit Card</Link></li>
                  </ul>   
                  </li>
                  <li className="list-icon"><Link to="/credit/axis">Axis Bank Credit Card <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/credit/axis/">Airtel Axis Bank Credit Card</Link></li>
                    <li><Link to="/credit/axis/">Axis Bank LIC Signature Credit Card</Link></li>
                    <li><Link to="/credit/axis/">Axis Bank SELECT Credit Card</Link></li>
                    <li><Link to="/credit/axis/">Axis Bank Rewards Credit Card</Link></li>
                    <li><Link to="/credit/axis/">Axis Bank Neo Credit Card</Link></li>
                    <li><Link to="/credit/axis/">Axis Bank MY ZONE Credit Card</Link></li>
                    <li><Link to="/credit/axis/">Axis Bank Magnus Credit Card</Link></li>
                    <li><Link to="/credit/axis/">LIC Axis Platinum Credit Card</Link></li>
                    <li><Link to="/credit/axis/">Axis Bank ACE Credit Card</Link></li>
                    <li><Link to="/credit/axis/">IndianOil Axis Bank Credit Card</Link></li>
                  </ul>   
                  </li>
                  <li className="list-icon"><Link to="/credit/hsbc">HSBC Bank Credit card <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/credit/hsbc/">HSBC Visa Platinum Credit Card</Link></li>
                    <li><Link to="/credit/hsbc/">HSBC Live+ Credit Card</Link></li>
                    <li><Link to="/credit/hsbc/">HSBC Premier Credit Card</Link></li>
                    <li><Link to="/credit/hsbc/">HSBC Bank Smart Value Credit Card</Link></li>
                  </ul>   
                  </li>
                  <li className="list-icon"><Link to="/credit/au bank">AU Bank Credit Card <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/credit/au bank/">AU Bank LIT Credit Card</Link></li>
                    <li><Link to="/credit/au bank/">AU Bank Zenith Credit Card</Link></li>
                    <li><Link to="/credit/au bank/">AU Bank Vetta Credit Card</Link></li>
                    <li><Link to="/credit/au bank/">AU Bank Altura Credit Cards</Link></li>
                    <li><Link to="/credit/au bank/">AU Bank Altura Plus Credit Card</Link></li>
                  </ul>   
                  </li>
                  <li className="list-icon"><Link to="/credit/american express">American Express Credit Card <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/credit/american express">American Express Gold Credit Card</Link></li>
                    <li><Link to="/credit/american express">American Express SmartEarn Credit Card</Link></li>
                    <li><Link to="/credit/american express">American Express Payback Credit Card</Link></li>
                  </ul>   
                  </li>
                  <li className="list-icon"><Link to="/credit/icici">ICICI Bank Credit Card <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/credit/icici/">ICICI Bank Rubyx Credit Card</Link></li>
                    <li><Link to="/credit/icici/">ICICI Bank Coral Credit Card</Link></li>
                    <li><Link to="/credit/icici/">ICICI Bank Platinum Chip Credit Card</Link></li>
                    <li><Link to="/credit/icici/">ICICI Bank Expressions Credit Card</Link></li>
                    <li><Link to="/credit/icici/">ICICI Bank Coral Rupay Credit Card</Link></li>
                    <li><Link to="/credit/icici/">Amazon Pay ICICI Credit Card</Link></li>
                  </ul>   
                  </li>
                  <li className="list-icon"><Link to="/credit/induslnd">IndusInd Bank Credit Cards <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/credit/induslnd/">EazyDiner IndusInd Bank Platinum Credit Card</Link></li>
                    <li><Link to="/credit/induslnd/">IndusInd Bank Samman RuPay Credit Card</Link></li>
                    <li><Link to="/credit/induslnd/">IndusInd Bank Platinum RuPay Credit Card</Link></li>
                    <li><Link to="/credit/induslnd/">IndusInd Bank Nexxt Credit Card</Link></li>
                    <li><Link to="/credit/induslnd/">IndusInd Bank Platinum Visa Credit Card</Link></li>
                    <li><Link to="/credit/induslnd/">IndusInd Bank Aura Edge Credit Card</Link></li>
                  </ul>   
                  </li>
            </ul>
            </li>

            <li><NavLink to="/loans">Loan<ExpandMoreIcon/></NavLink>
            <ul className="dropdown-content">
                  <li className="list-icon"><Link to="/loans/">Personal Loan <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/loans/">KreditBee Personal Loan</Link></li>
                    <li><Link to="/loans/">Fibe Personal Loan</Link></li>
                    <li><Link to="/loans/">HDFC Jumbo Loan</Link></li>
                    <li><Link to="/loans/">Prefr Personal Loan </Link></li>
                    <li><Link to="/loans/">Poonawalla Personal Loan </Link></li>
                    <li><Link to="/loans/">Incred Personal Loan</Link></li>
                    <li><Link to="/loans/">L&T Finance Personal Loan</Link></li>
                    <li><Link to="/loans/">HSBC Personal Loan</Link></li>
                    <li><Link to="/loans/">Freo loan</Link></li>
                  </ul> 
                  </li>
                  <li className="list-icon"><Link to="/loans/">Business Loan <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/loans/">KreditBee Business Loan</Link></li>
                    <li><Link to="/loans/">Moneyview Business Loan</Link></li>
                    <li><Link to="/loans/">Prefr Business Loan</Link></li>
                    <li><Link to="/loans/">LendingKart Business Loan</Link></li>
                    <li><Link to="/loans/">IIFL Business Loan</Link></li>
                    <li><Link to="/loans/">Protium Business Loan</Link></li>
                    <li><Link to="/loans/">NeoGrowth Business Loan</Link></li>
                    <li><Link to="/loans/">Faircent Business Loan</Link></li>
                    <li><Link to="/loans/">SMFG India Business Loan</Link></li>
                    <li><Link to="/loans/">SBI Business Loan</Link></li>
                  </ul> 
                  </li>
                  <li className="list-icon"><Link to="/loans/">Home Loan <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/loans/">PNB Home Loan</Link></li>
                    <li><Link to="/loans/">Kotak Bank Home Loan</Link></li>
                    <li><Link to="/loans/">IDFC First Home Loan</Link></li>
                    <li><Link to="/loans/">Home First Home Loan</Link></li>
                    <li><Link to="/loans/">HDFC Bank Home Loan</Link></li>
                    <li><Link to="/loans/">Federal Bank Home Loan</Link></li>
                    <li><Link to="/loans/">Bajaj Finserv Home Loan</Link></li>
                    <li><Link to="/loans/">L&T Home Loan</Link></li>
                  </ul> 
                  </li>
                  <li className="list-icon"><Link to="/loans/">Gold Loan <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/loans/">SahiBandhu Gold Loan</Link></li>
                    <li><Link to="/loans/">InidaGold Loan</Link></li>
                    <li><Link to="/loans/">Muthoot Fincorp Gold Loan</Link></li>
                    <li><Link to="/loans/">Oro Gold Loan</Link></li>
                    <li><Link to="/loans/">Rupeek Gold Loan</Link></li>
                    <li><Link to="/loans/">DBS Bank Gold Loan</Link></li>
                  </ul> 
                  </li>
                  <li className="list-icon"><Link to="/loans/">Home Loan Balance Transfer <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/loans/">HDFC Bank Home Loan Balance Transfer</Link></li>
                    <li><Link to="/loans/">Kotak Home Loan Balance Transfer</Link></li>
                    <li><Link to="/loans/">Bajaj Finserv Home Loan Balance Transfer</Link></li>
                    <li><Link to="/loans/">IDFC First Home Loan Balance Transfer</Link></li>
                    <li><Link to="/loans/">Home First Home Loan Balance Transfer</Link></li>
                    <li><Link to="/loans/">Aditya Birla Home Loan Balance Transfer</Link></li>
                    <li><Link to="/loans/">PNB Housing Home Loan Balance Transfer</Link></li>
                  </ul> 
                  </li>
                  <li className="list-icon"><Link to="/loans/">Loan Against Property <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/loans/">HDFC Bank Loan Against Property</Link></li>
                    <li><Link to="/loans/">Federal Bank Loan Against Property</Link></li>
                    <li><Link to="/loans/">Kotak Mahindra Loan Against Property</Link></li>
                    <li><Link to="/loans/">IDFC First Loan Against Property</Link></li>
                    <li><Link to="/loans/">Home First Loan Against Property</Link></li>
                    <li><Link to="/loans/">Aditya Birla Housing Loan Against Property</Link></li>
                    <li><Link to="/loans/">Muthoot Fincorp Loan Against Property</Link></li>
                    <li><Link to="/loans/">Tata Capital Housing Loan Against Property</Link></li>
                  </ul> 
                  </li>
                  <li className="list-icon"><Link to="/loans/">Overdraft Facility <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/loans/">ICICI Bank Insta OD</Link></li>
                    <li><Link to="/loans/">Bajaj Overdraft Loan</Link></li>
                    <li><Link to="/loans/">SBI Overdraft Facility</Link></li>
                    <li><Link to="/loans/">HDFC Overdraft Facility</Link></li>
                    <li><Link to="/loans/">Kotak Overdraft Loan</Link></li>
                  </ul> 
                  </li>
                  <li className="list-icon"><Link to="/loans/">Loan On Credit Card <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/loans/">HDFC Bank Credit Card Loan</Link></li>
                    <li><Link to="/loans/">ICICI Bank Credit Card Loan</Link></li>
                    <li><Link to="/loans/">Axis Bank Credit Card Loan</Link></li>
                    <li><Link to="/loans/">SBI Credit Card Loan</Link></li>
                    <li><Link to="/loans/">Bajaj Insta EMI Card</Link></li>
                  </ul> 
                  </li>
                  <li className="list-icon"><Link to="/loans/">Personal Loan By Amount <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/loans/">1 Lakh Personal Loan</Link></li>
                    <li><Link to="/loans/">2 Lakh Personal Loan</Link></li>
                    <li><Link to="/loans/">3 Lakh Personal Loan</Link></li>
                    <li><Link to="/loans/">4 Lakh Personal Loan</Link></li>
                    <li><Link to="/loans/">5 Lakh Personal Loan</Link></li>
                    <li><Link to="/loans/">10 Lakh Personal Loan</Link></li>
                  </ul> 
                  </li>
                  <li className="list-icon"><Link to="/loans/">Personal Loan Interest Rates <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/loans/">Axis Bank Personal Loan Interest Rates</Link></li>
                    <li><Link to="/loans/">Bajaj Finance Personal Loan Interest Rates</Link></li>
                    <li><Link to="/loans/">HDFC Personal Loan Interest Rates</Link></li>
                    <li><Link to="/loans/">ICICI Personal Loan Interest Rates</Link></li>
                    <li><Link to="/loans/">IDFC FIRST Bank Personal Loan Interest Rates</Link></li>
                  </ul> 
                  </li>
            </ul>
            </li>

            <li><NavLink to="/Insurance">Insurance<ExpandMoreIcon/></NavLink>
            <ul className="dropdown-content">
                  <li><Link to="/Insurance/">Health Insurance</Link></li>
                  <li><Link to="/Insurance/">Life Insurance</Link></li>
            </ul>
            </li>

            <li><NavLink to="/emi-calculate">EMI Calculator<ExpandMoreIcon/></NavLink>
            <ul className="dropdown-content">
                  <li><Link to="/emi-calculate/">Home Loan EMI Calculator</Link></li>
                  <li><Link to="/emi-calculate/">Personal Loan EMI Calculator</Link></li>
                  <li><Link to="/emi-calculate/">Business Loan EMI Calculator</Link></li>
                  <li><Link to="/emi-calculate/">Compound Interest Calculator</Link></li>
                  <li><Link to="/emi-calculate/">Loan Prepayment Calculator</Link></li>
                  <li><Link to="/emi-calculate/">RD Calculator</Link></li>
                  <li><Link to="/emi-calculate/">FD Calculator</Link></li>
            </ul>
            </li>

            <li><NavLink to="/Credit score">Credit Score<ExpandMoreIcon/></NavLink>
            <ul className="dropdown-content">
                  <li><Link to="/Credit score/">Check CIBIL Score by Pan Card</Link></li>
                  <li className="list-icon"><Link to="/Credit score/">CIBIL Score for Banks <NavigateNextIcon/></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/Credit score/">SBI CIBIL Score</Link></li>
                    <li><Link to="/Credit score/">HDFC CIBIL Score</Link></li>
                    <li><Link to="/Credit score/">Bajaj CIBIL Score</Link></li>
                    <li><Link to="/Credit score/">ICICI CIBIL Score</Link></li>
                    <li><Link to="/Credit score/">IIFL CIBIL Score</Link></li>
                  </ul> 
                  </li>
                  <li><Link to="/Credit score/">Check Free CIBIL Score</Link></li>
                  <li><Link to="/Credit score/">Instant Loan Without CIBIL</Link></li>
                  <li><Link to="/Credit score/">CIBIL Score Range</Link></li>
                  <li><Link to="/Credit score/">CIBIL Score Calculation</Link></li>
                  <li><Link to="/Credit score/">How to Improve CIBIL Score</Link></li>
            </ul>
            </li>

            <li><NavLink to="/Blogs">Blogs</NavLink></li>
            <div className="search" ref={searchRef}>
              <input type="text" placeholder='Search...' className={isSearchActive ? 'active' : ''}/>
              <SearchIcon onClick={handleSearchClick}/>
            </div>

            <div className="btn">
              <button onClick={() => setIsFormOpen(!isFormOpen)}><img
              src="https://cdn2.mymoneymantra.com/app_icon_28a4c1d200.png?format=avif&quality=80"
              alt="img"
              id="contact-num"/>
              </button>
              <button onClick={handleSignInClick}>Sign In</button>
            </div>

          </ul>
        </div>
        {isFormOpen && (
        <div className="form-container">
          <MobileForm />
        </div>
      )}
       {showSignIn && <SignIn/>}
      </div>
  )
}

export default Navbar
