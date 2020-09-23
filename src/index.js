import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import ScrollTopArrow from "./components/ScrollTopArrow/ScrollTopArrow";

let app = document.createElement("div");
app.id = "app";
var meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width,height=device-height initial-scale=1";

document.body.appendChild(app);
document.getElementsByTagName("head")[0].appendChild(meta);
document.title = "Portofolio";

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
