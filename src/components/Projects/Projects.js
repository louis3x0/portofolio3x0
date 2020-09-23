import React from "react";

const Projects = () => {
  return (
    <>
      <div className="projects-section">
        <div className="left-section">
          <p>Frontend</p>
          <h3>Patagonia web page clone with React</h3>
          <p className="git">
            I've made a frontpage clone of Patagonia using React and CSS
            flexbox. The slider was made without any framework i know is not so
            nice but it was made in 1 day
          </p>
          <a
            className="gith"
            href="https://github.com/louis3x0/patagonia-frontend"
          >
            Github
          </a>
          <a
            className="gith-w"
            href="https://github.com/louis3x0/patagonia-frontend"
          >
            Website
          </a>{" "}
        </div>
        <div className="right-section">
          <img
            src="https://i.ibb.co/SBjnXbG/Screenshot-from-2020-09-23-10-20-21.png"
            alt=""
          />
        </div>
      </div>
      <div className="projects-section section-2">
        <div className="right-section">
          <img
            src="https://im7.ezgif.com/tmp/ezgif-7-1916ec2ca625.gif"
            alt=""
          />
        </div>
        <div className="left-section">
          <p>Frontend + Backend</p>
          <h3>Bookshop</h3>
          <p className="git">
            I've made a MERN stack book shop with admin and user. This project
            was made in my free time and some features are: Login/Signup system,
            User/admin dashboard, product page with related products. This app
            is not finished yet
          </p>
          <a className="gith" href="https://github.com/louis3x0/bookshop">
            Github
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
