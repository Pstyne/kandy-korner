import React from "react";
import { PropsAndState } from "./PropsAndState";

export const Home = () => (
  <>
    <h2>Kandy Korner</h2>
    <small>We have Kandy</small>
    <address>
      <div>Visit Us at the Korner Location</div>
      <div>500 Kandy Way</div>
    </address>
    <PropsAndState yourName={"Andy"} />
  </>
);