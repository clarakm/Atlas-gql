const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String!
    getOrders: [Order]
  }
  type Order {
    id: ID!
    name: String!
    order: String!
    date: String!
  }
  type Mutation {
    createOrder(name: String): Order!
  }
`;

module.exports = typeDefs;
