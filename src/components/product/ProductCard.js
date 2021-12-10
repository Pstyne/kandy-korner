import React from "react";
import "./Product.css";

export const ProductCard = ({ product, productType, purchaseCandy }) => (
  <section className="product">
    <h3 
      className="product__name"
      draggable={true}
      onDragStart={(e) => {
        const clone = e.target.cloneNode(true);
        clone.style.display = 'inline';
        e.dataTransfer.setData('application/json', JSON.stringify(product));
        e.dataTransfer.setDragImage(e.target, 50, 10);
      }}
      onDrag={(e) => {
        e.target.closest('.product').style.borderColor = 'green';
      }}
      onDragEnd={(e) => {
        e.target.closest('.product').style.borderColor = 'goldenrod';
      }}
      >{product.name}</h3>
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