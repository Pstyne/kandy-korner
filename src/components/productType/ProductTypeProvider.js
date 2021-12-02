import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const ProductTypeContext = createContext();

// This component establishes what data can be used.
export const ProductTypeProvider = (props) => {
  const [productTypes, setProductTypes] = useState([]);

  const getProductTypes = () => {
    return fetch("http://localhost:8088/productTypes")
    .then(res => res.json())
    .then(setProductTypes);
  }

  /*
      You return a context provider which has the
      `products` state, `getProducts` function,
      and the `addProduct` function as keys. This
      allows any child elements to access them.
  */
  return (
    <ProductTypeContext.Provider value={{
      productTypes, getProductTypes
    }}>
      {props.children}
    </ProductTypeContext.Provider>
  );
}