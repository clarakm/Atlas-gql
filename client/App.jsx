import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

import CoffeeOrder from "./components/CoffeeOrder.jsx";
import CoffeeList from "./components/CoffeeList.jsx";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <h1>Coffee Orders</h1>
          <CoffeeOrder />
          <CoffeeList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
