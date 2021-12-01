import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { ProductProvider } from "./product/ProductProvider";
import { ProductList } from "./product/ProductList"

export const ApplicationViews = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />

    <Route path="/locations" element={
      <LocationProvider>
        <LocationList />
      </LocationProvider>
    } />

    <Route path="/products" element={
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    } />
  </Routes>
);