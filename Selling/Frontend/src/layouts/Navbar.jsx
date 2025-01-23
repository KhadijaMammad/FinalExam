import React from "react";
import '../assets/styles/navbar.css'
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="first-section">
            <div className="left">
              <div className="first-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
              <div className="connect">
                <div className="first-telephone">
                  <i style={{color: "orange"}} class="fa-solid fa-phone"></i>
                  <p>(+1) 234 5678 9101</p>
                </div>
                <div className="first-email">
                  <i style={{color: 'orange'}} class="fa-solid fa-envelope"></i>
                  <p>shop@yourdomain.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="second-section">
            <div className="second-logo">
                <h1>Selling<span style={{width:"8px", color:"orange"}}>.</span></h1>
            </div>
            <div className="second-lists">
                <ul>
                   <NavLink to={"./notpage"} className="list">Home</NavLink>
                   <NavLink className="list">Products</NavLink>
                   <NavLink className="list">About Us</NavLink>
                   <NavLink className="list">Specials</NavLink>
                   <NavLink className="list">Testimonials</NavLink>
                   <NavLink className="list">Blog</NavLink>
                   <NavLink className="list">Contact</NavLink>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
