import React, { useState, useRef, useEffect } from "react";
import Card from "../Card/Card";

const Navbar = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-title">
          <h1>
            Hello{" "}
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/2950/2950033.svg"
              alt=""
              className="hello"
            />
          </h1>
        </div>
        <div className="sub-hero">
          <span className="sub-hero-text">
            Hello, my name is Louis and i am curently searching for a job. I am
            a FullStack web developer from Romania and i love coding.
          </span>
        </div>
      </div>
      <main>
        <section className="cards">
          <Card>
            <div className="image-logo">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/2497/2497424.svg"
                alt=""
              />{" "}
            </div>
            <div className="card-text">Frontend</div>
            <div className="card-sub-text">
              Developing amazing interfaces and responsive for frontend.
            </div>
          </Card>
          <Card>
            <div className="image-logo">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/3231/3231329.svg"
                alt=""
              />{" "}
            </div>
            <div className="card-text">Backend</div>
            <div className="card-sub-text">Building Rest APIs with Express</div>
          </Card>{" "}
          <Card>
            <div className="image-logo">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/2906/2906010.svg"
                alt=""
              />{" "}
            </div>
            <div className="card-text">Optimization</div>
            <div className="card-sub-text">
              Best optimization for a fast website
            </div>
          </Card>
        </section>
      </main>
      <div className="subcard-text">
        <span className="s-text">
          I am an experienced fullstack web developer interested in building
          usable,useful,well constructed websites. Interested in continuation of
          learning and cooperation with excellent people.
        </span>
        <div className="skills">
          <p className="t-skills">Skills</p>
          <div className="content-1">
            <ul className="languages">
              <div className="languages-list">
                <li className="t-languages">Languages</li>
                <li>JavaScript (ES6)</li>
                <li>HTML</li>
                <li>CSS/SASS/GRID</li>
                <li className="mb-1">SQL</li>
              </div>
            </ul>
            <ul className="frameworks">
              <div className="frameworks-list">
                <li className="t-frameworks">FRAMEWORKS</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Wordpress</li>
                <li>Node</li>
              </div>
            </ul>
          </div>
          <div className="content-2">
            <ul className="tools">
              <div className="tools-list">
                <li className="t-tools">TOOLS</li>
                <li>Bash</li>
                <li>Git & Github</li>
                <li>MongoDB</li>
                <li className="mb-2">Postman</li>
              </div>
            </ul>
            <ul className="design">
              <div className="design-list">
                <li className="t-design">DESIGN</li>
                <li>inDesign</li>
                <li>InVision</li>
                <li>Adobe XD</li>
                <li>Adobe Photoshop</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
