import React from "react";
import Aboutimage from "../assets/images/about_1.jpg";
import "../assets/styles/about.css"

export default function About() {
  return (
    <>
      <div className="container">
        <div className="about-section">
          <div className="about-left">
            <div className="about-image">
              <img src={Aboutimage} alt="" />
            </div>
            <div className="about-text">
              <h1>Trusted Merchant</h1>
              <p>for 50 years</p>
            </div>
          </div>
          <div className="about-right">
            <div className="heading">
                <p>Merchant Company</p>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur.
                     Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>
                <button style={{padding:"1rem", backgroundColor:"black", color:"white"}}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
