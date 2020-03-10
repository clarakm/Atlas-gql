const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require("graphql");
const axios = require("axios");

const OrderType = new GraphQLObjectType({
  name: "Order",
  fields: () => ({
    name: { type: GraphQLString },
    order: { type: GraphQLString },
    date: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    orders: {
      type: new GraphQLList(OrderType),
      resolve(parent, args) {
        return axios.get("/orders").then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
