import React from "react";
import Card from "./Card";
import "../assets/styles/home.css";
import About from "./About";


export default function Home() {
  return (
    <>
      <div className="container">
        <div className="home-page">
          <div className="home-text">
            <h1>Shop With Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam assumenda ea quo cupiditate facere deleniti fuga
              officia.
            </p>
            <div className="home-button">
            <button className="shop">Shop Now</button>
            <button className="club">Club MemberShip</button>
            </div>
           
          </div>
        </div>
      </div>

      <Card />
      <About/>
    </>
  );
}
