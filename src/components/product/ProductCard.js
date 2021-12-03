import React from "react";
import "./Product.css";

export const ProductCard = ({ product, productType, purchaseCandy }) => (
  <section className="product">
    <h3 className="product__name">{product.name}</h3>
    <div className="product__price">${product.price}</div>
    <div className="product__type">{productType.name}</div>
    <button 
      id={product.id} 
      onClick={() => purchaseCandy({ 
        productId: product.id, 
        customerId: parseInt(localStorage.getItem('kandy_customer')) 
      })}>
      Purchase
    </button>
  </section>
);