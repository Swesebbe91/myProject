import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Weather from "../Weather";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <h2>{children}</h2>
      </main>
      <div className=""> {
        <Weather/> }
      </div>
      <Footer />
      
    </div>
  );
};

export default Layout;
