import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import ScrollTopArrow from "./components/ScrollTopArrow/ScrollTopArrow";

let app = document.createElement("div");
app.id = "app";

document.body.appendChild(app);

class App extends React.Component {
  render() {
    return (
      <div className="pageBody">
        <Hero />
        <Projects />
        <Footer />
        <ScrollTopArrow />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
