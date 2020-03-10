const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const path = require("path");
const bodyParser = require("body-parser");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");
const Order = require("./db/CoffeeModel");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.use("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./client/index.html"));
});

app.use("/", (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));
