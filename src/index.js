import React from "react";
import ReactDOM from "react-dom";

let app = document.createElement("div");
app.id = "app";

document.body.appendChild(app);

class App extends React.Component {
  render() {
    return (
      <div className="pageBody">
        <h1>test</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
