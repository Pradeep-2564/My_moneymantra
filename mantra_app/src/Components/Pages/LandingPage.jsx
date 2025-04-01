import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import CreditCards from "../Navbar/Credit Cards/Credit Cards";
import Header from "../Home/Home";
import Products from "../Products/Products";

const LandingPage = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Header />
          <Products/>
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
