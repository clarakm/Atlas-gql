import React, { Component } from "react";

import CoffeeOrder from "./components/CoffeeOrder.jsx";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Coffee Orders</h1>
        <CoffeeOrder />
      </div>
    );
  }
}

export default App;
