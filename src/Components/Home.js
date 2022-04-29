import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";


const Home = () => {
  return (
    <div>
      <div className="home">
        <img
          src="https://previews.123rf.com/images/belchonock/belchonock2002/belchonock200214990/140897945-young-woman-wearing-floral-print-skirt-and-straw-hat-on-beige-background-space-for-text.jpg?fj=1"
          className="homepic"
        ></img>
        <div className="hometext">
          <div className="text">
            <div className="saletag">SUMMER SALE </div>
            <br />
            <div>
              DON'T COMPROMISE ON STYLE! <br /> GET FLAT 30% OFF FOR NEW
              ARRIVALS
            </div>
          </div>
          <br />
          <Link to={"/products"} className="Link">
            Shop Now
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
