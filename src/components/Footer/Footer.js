import React, { useState } from "react";
import Card from "../Card/Card";

const Navbar = () => {
  return (
    <>
      <div className="footer">
        <div className="left-footer">
          <span>Developed by</span>
          <span className="louis">
            Louis Aurel{" "}
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/nerd-face_1f913.png"
              alt=""
              className="nerd-face"
            />
          </span>
        </div>
        <div className="right-footer">
          <ul className="footer-list">
            <a href="mailto: louisrd1337@gmail.com" className="footer-item">
              Email
            </a>
            <a href="https://github.com/louis3x0" className="footer-item">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/louis-sardarescu-8b5a641b4/"
              className="footer-item"
            >
              Linkedin
            </a>
            <a
              className="footer-item"
              href="https://www.instagram.com/louis404__/"
            >
              Instagram
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
