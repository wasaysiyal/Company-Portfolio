import React from "react";
import tech from "../assets/tech.jpg"; 

const Home = () => (
  <div
    className="hero"
    style={{
      backgroundImage: `url(${tech})`,
    }}
  >
    <div className="hero-content">
      <h1 className="fade-in">Empowering Digital Growth</h1>
      <p className="fade-in delay-1">
        Custom web, mobile & cloud solutions for your business success.
      </p>
      <a href="/services" className="btn-primary fade-in delay-2">
        Explore Services
      </a>
    </div>
  </div>
);

export default Home;
