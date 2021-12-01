import React from "react";
import "./Product.css";

export const ProductCard = ({ product }) => (
  <section className="product">
    <h3 className="product__name">{product.name}</h3>
    <div className="product__breed">{product.breed}</div>
    <address className="location__address">{product.location.name}</address>
  </section>
);