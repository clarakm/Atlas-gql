import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import OrderItem from "./OrderItem.jsx";

const ORDERS_QUERY = gql`
  query {
    getOrders {
      name
      id
    }
  }
`;

const CoffeeList = () => {
  const { loading, error, data } = useQuery(ORDERS_QUERY);

  if (loading) return <h4>Loading ...</h4>;
  if (error) console.log(error);
  console.log("data", data);

  const display = data.getOrders.map(order => (
    <OrderItem key={order.id} order={order.name} />
  ));

  return (
    <div>
      <h1>All Orders</h1>
      {display}
    </div>
  );
};

export default CoffeeList;
