import React from "react";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import "./KandyKorner.css";
import { Navigate, Route, Routes } from "react-router";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { CustomerProvider } from "./customer/CustomerProvider";

export const KandyKorner = () => (
  <CustomerProvider>
    <Routes>
      <Route path="/*" element={<ConditionalComponent /> } />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </CustomerProvider>
);

const ConditionalComponent = () => {
  if (localStorage.getItem("kandy_customer")) {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
}