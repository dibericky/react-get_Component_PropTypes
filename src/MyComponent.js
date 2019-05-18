import React, { Component } from "react";
import PropTypes from "prop-types";

export default class MyComponent extends Component {
  static propTypes = {
    msg: PropTypes.string.isRequired,
    foo: PropTypes.func,
    bar: PropTypes.oneOf(["a,b,c"]),
    lorem: PropTypes.arrayOf(
      PropTypes.shape({
        a: PropTypes.string,
        b: PropTypes.string
      })
    )
  };
  render() {
    return <h2>{"Demo"}</h2>;
  }
}
