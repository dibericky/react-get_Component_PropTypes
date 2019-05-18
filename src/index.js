import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import MyComponent from "./MyComponent";

function App() {
  return (
    <div className="App">
      <h2>{"MyComponent PropTypes are in the console"}</h2>
    </div>
  );
}

console.log(MyComponent.propTypes);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
