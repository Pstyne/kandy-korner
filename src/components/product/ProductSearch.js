import { useContext } from "react";
import { ProductContext } from "./ProductProvider";

export const ProductSearch = () => {
  const { setSearchTerm } = useContext(ProductContext);
  return (
    <>
      <label>Search Products</label>
      <input onKeyUp={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search for Available Products" />
    </>
  );
}