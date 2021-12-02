import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { ProductProvider } from "./product/ProductProvider";
import { ProductList } from "./product/ProductList"
import { ProductTypeProvider } from "./productType/ProductTypeProvider";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeForm } from "./employee/EmployeeForm";

export const ApplicationViews = () => (
  <LocationProvider>
    <ProductTypeProvider>
      <ProductProvider>
        <EmployeeProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />

              <Route path="/locations" element={<LocationList />} />

              <Route path="/products" element={<ProductList />} />

              <Route path="/customers" element={<CustomerList />} />

              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/employees/create" element={<EmployeeForm />} />
            </Routes>
        </EmployeeProvider>
      </ProductProvider>
    </ProductTypeProvider>
  </LocationProvider>
);