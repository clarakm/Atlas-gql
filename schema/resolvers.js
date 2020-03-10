const Order = require("../db/CoffeeModel");

const resolvers = {
  Query: {
    hello: () => "hello",
    getOrders: (parent, args) => {
      return Order.find({});
    }
  },
  Mutation: {
    createOrder: async (parent, { name }) => {
      const order = new Order({ name });
      await order.save();
      console.log(order);
      return order;
    }
  }
};

module.exports = resolvers;
