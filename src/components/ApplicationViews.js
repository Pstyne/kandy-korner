import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { ProductProvider } from "./product/ProductProvider";
import { ProductList } from "./product/ProductList"
import { ProductTypeProvider } from "./productType/ProductTypeProvider";

export const ApplicationViews = () => (
  <LocationProvider>
    <ProductTypeProvider>
      <ProductProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/locations" element={<LocationList />} />

          <Route path="/products" element={<ProductList />} />
        </Routes>
      </ProductProvider>
    </ProductTypeProvider>
  </LocationProvider>
);