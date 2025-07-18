import React from "react";
import "../App.css";
import webdev from "../assets/webdev.jpeg";
import mobapp from "../assets/mobapp.jpeg";
import clouddev from "../assets/clouddev.jpeg";

const services = [
  { title: "Web Development", img: webdev },
  { title: "Mobile Apps", img: mobapp },
  { title: "Cloud & DevOps", img: clouddev },
];

const Services = () => (
  <section className="page-section" id="services">
    <h2>Our Services</h2>
    <div className="cards-grid">
      {services.map((s, i) => (
        <div className="card fade-in delay-1" key={i}>
          <img src={s.img} alt={s.title} style={{ width: "100%" }} />
          <h3 style={{ padding: "15px" }}>{s.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
