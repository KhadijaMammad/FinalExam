import React from "react";
import "../assets/styles/footer.css";

export default function Footer() {
  return (
    <>
      <div className="container">
        <div className="footer-page">
          <div className="footer-main">
            <div style={{ width: "300px" }} className="footer-first">
              <div className="footer-heading">
                <h1 style={{ lineHeight: "4.5rem" }}>About Us</h1>
                <p className="footer-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  facere laudantium magnam voluptatum autem. Amet aliquid
                  nesciunt veritatis aliquam.
                </p>
              </div>
            </div>
            <div className="footer-second">
              <h1 style={{ lineHeight: "4.5rem" }}>Quick Links</h1>
              <ul className="footer-lists">
                <li>About Us</li>
                <li>Services</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="footer-third">
              <h1 style={{ lineHeight: "4.5rem" }}>Follow Us</h1>
              <div className="footer-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="footer-finish">
              <p>
                Copyright ©2025 All rights reserved | This template is made with{" "}
                <i class="fa-solid fa-heart"></i> by Colorlib
              </p>
            </div>
        </div>
      </div>
    </>
  );
}
