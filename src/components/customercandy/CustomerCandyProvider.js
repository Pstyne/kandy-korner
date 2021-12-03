import React, { createContext, useState } from "react"

export const CustomerCandyContext = createContext();

export const CustomerCandyProvider = (props) => {
  const [ customersCandies, setCustomersCandies ] = useState({});
  const currentCustomerId = localStorage.getItem('kandy_customer');

  const getCustomersCandies = () => {
    return fetch(`http://localhost:8088/customerscandies?customerId=${currentCustomerId}&_expand=product`)
    .then(res => res.json())
    .then(setCustomersCandies);
  }

  const addCustomersCandies = customersCandiesObj => {
    return fetch('http://localhost:8088/customerscandies', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customersCandiesObj)
    }).then(getCustomersCandies)
  }

  return (
    <CustomerCandyContext.Provider value={{
      customersCandies, getCustomersCandies, addCustomersCandies
    }}>
      {props.children}
    </CustomerCandyContext.Provider>
  );
}