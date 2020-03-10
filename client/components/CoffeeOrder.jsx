import React from "react";

const CoffeeOrder = () => {
  return (
    <form className="orderForm">
      <label className="order">
        Name:
        <input type="text" name="order" />
      </label>
      <label className="order">
        Order Here:
        <input type="text" name="order" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CoffeeOrder;
