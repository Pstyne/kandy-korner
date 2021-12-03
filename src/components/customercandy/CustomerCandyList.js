import React, { useEffect, useContext } from "react";
import { CustomerCandyCard } from "./CustomerCandyCard";
import { CustomerCandyContext } from "./CustomerCandyProvider";
export const CustomerCandyList = () => {
  const { customersCandies, getCustomersCandies } = useContext(CustomerCandyContext);

  useEffect(() => {
    getCustomersCandies();
  }, []);

  return (
    <>
      <h2>My Order</h2>
      <table>
        <thead>
          <tr>
            <td>Candy</td>
            <td>Quantity</td>
            <td>Price/unit</td>
          </tr>
        </thead>
        <tbody>
          {
            customersCandies.length ? customersCandies.map(candy => <CustomerCandyCard key={candy.id} candy={candy.product} />) : ''
          }
        </tbody>
      </table>
    </>
  );
}