import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "./ProductProvider";
import { ProductCard } from "./ProductCard";
import "./Product.css";
import { ProductTypeContext } from "../productType/ProductTypeProvider";
import { CustomerCandyContext } from "../customercandy/CustomerCandyProvider";

export const ProductList = () => {
  // This state changes when `getProducts()` is invoked below
  const { products, getProducts, searchTerm } = useContext(ProductContext);
  const { productTypes, getProductTypes } = useContext(ProductTypeContext);
  const { addCustomersCandies } = useContext(CustomerCandyContext);

  const [ filteredProducts, setFiltered ] = useState([]);

  //useEffect - reach out to the world for something
  useEffect(() => {
    getProductTypes().then(getProducts);
  }, []);

  useEffect(() => {
    if (searchTerm !== '') {
      const subset = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setFiltered(subset);
    } else {
      setFiltered(products);
    }
  }, [searchTerm, products]);

  return (
    <div className="products">
      {
        filteredProducts.map(product => {
          const productType = productTypes.find(pt => pt.id === product.productTypeId);
          return <ProductCard key={product.id} 
                              product={product} 
                              productType={productType}
                              purchaseCandy={addCustomersCandies} />
        })
      }
    </div>
  );
}