import React, { Component } from "react";

import MyComponent from "./MyComponent";
class App extends Component {
  render() {
    const message = "클래스형 컴포넌트";
    return <div className="react">{message}</div>;
  }
}

export default App;
