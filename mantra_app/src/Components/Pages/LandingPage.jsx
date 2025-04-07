import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import CreditCards from "../Navbar/Credit Cards/Credit Cards";
import Header from "../Home/Home";
import Products from "../Products/Products";
import Partners from "../Home/Partners";
import WhyChoose from "../Home/WhyChoose";
import Blogs from "../Home/Blogs";
import Footer from "../Footer/Foote";
import MobileApp from "../Home/MobileApp";

const LandingPage = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Header />
          <Products/>
          <Partners/>
          <WhyChoose/>
          <MobileApp/>
          <Blogs/>
          <Footer/>
        </div>
      ),
    },
    { path: "/credit", element: ( <div><Navbar /><CreditCards /></div>)},
    {path: "/credit",element: (<div><Navbar /><Home /></div>)},
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default LandingPage;
