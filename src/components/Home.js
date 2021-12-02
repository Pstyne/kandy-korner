import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./customer/CustomerProvider";
import { PropsAndState } from "./PropsAndState";

export const Home = () => {
  const { customers, getCustomers } = useContext(CustomerContext);

  useEffect(() => {
    getCustomers()
  }, []);

  const customerName = customers.length ? customers.find(c => c.id === parseInt(localStorage.getItem('kandy_customer'))).name : '';
  return (
  <>
    <h2>Kandy Korner</h2>
    <small>We have Kandy</small>
    <address>
      <div>Visit Us at the Korner Location</div>
      <div>500 Kandy Way</div>
    </address>
    <PropsAndState yourName={customerName} />
  </>
)};