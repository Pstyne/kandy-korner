import React, { useEffect, useContext } from "react";
import { CustomerCandyCard } from "./CustomerCandyCard";
import { CustomerCandyContext } from "./CustomerCandyProvider";
export const CustomerCandyList = () => {
  const { customersCandies, getCustomersCandiesByCustomerId } = useContext(CustomerCandyContext);

  useEffect(() => {
    getCustomersCandiesByCustomerId();
  }, []);

  // Create a way to remember all of the candy items
  const memo = {};
  
  // Populate the memo object
  if (customersCandies.length) {
    // It will act like disposable objects
    let id = 0;
    customersCandies.forEach(candy => {
      // Check for existence and increase quantity if it does
      if (memo[candy.product.name]) {
        memo[candy.product.name].quantity++;
        parseFloat(memo[candy.product.name].total += memo[candy.product.name].price);
      
      // Otherwise lets make a new object with a default value
      // Mainly the quantity is whats important here 
      } else {
        memo[candy.product.name] = {}
        memo[candy.product.name]['quantity'] = 1;
        memo[candy.product.name]['price'] = candy.product.price;
        memo[candy.product.name]['total'] = candy.product.price
        memo[candy.product.name]['name'] = candy.product.name;
        memo[candy.product.name]['id'] = ++id;
      }
    });
  }

  // Initialize an order array for aggregated data
  const aggregatedOrder = [];
  
  // Push everything in the memo object to the new array
  // We will use this in the render function of the component
  for (const key in memo) {
    aggregatedOrder.push(memo[key]);
  }

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
            customersCandies.length ? aggregatedOrder.map(candy => <CustomerCandyCard key={candy.id} candy={candy} />) : ''
          }
        </tbody>
      </table>
    </>
  );
}