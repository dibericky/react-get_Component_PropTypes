import React from "react";
import ReactDOM from "react-dom";

import MyComponent from "./MyComponent";
import logPropTypes from "./logPropTypes";

function App() {
  return <h2>{"MyComponent's PropTypes are in the console"}</h2>;
}

logPropTypes(MyComponent);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
