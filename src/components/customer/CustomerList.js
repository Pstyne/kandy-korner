import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider";
import { CustomerCard } from "./CustomerCard";
import { CustomerCandyContext } from "../customercandy/CustomerCandyProvider";
import "./Customer.css";

export const CustomerList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext);
  const { customersCandies, getCustomersCandies } = useContext(CustomerCandyContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    getCustomers().then(getCustomersCandies);
  }, []);

  const sortedByPurchases = customers.sort((a, b) => {
    const aPurchaseLength = customersCandies.filter(candy => candy.customerId === a.id).length;
    const bPurchaseLength = customersCandies.filter(candy => candy.customerId === b.id).length;
    return bPurchaseLength - aPurchaseLength;
  });

  return (
    <div className="customers">
      {
        sortedByPurchases.map(customer => {
          const customerCandies = customersCandies.filter(candy => candy.customerId === customer.id);
          return <CustomerCard key={customer.id} customer={customer} candies={customerCandies}/>
        })
      }
    </div>
  );
}