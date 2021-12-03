import React from "react";
import "./Customer.css";

export const CustomerCard = ({ customer, candies }) => (
  <section className="customer">
    <h3 className="customer__name">{customer.name}</h3>
    <p>Candies Purchased: {candies.length}</p>
  </section>
);