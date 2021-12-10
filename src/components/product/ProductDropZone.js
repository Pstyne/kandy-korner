import { useContext } from "react";
import { CustomerCandyContext } from "../customercandy/CustomerCandyProvider";


export const ProductDropZone = () => {
  const { addCustomersCandies } = useContext(CustomerCandyContext);

  return (
    <>
      <span
        style={{
          border: '2px solid goldenrod',
          padding: '15px'
        }}

        onDragOver={(e) => {
          e.preventDefault();
          e.target.style.borderColor = 'green';
          e.target.innerText = 'OOOHHH YUMMY';
        }}

        onDragLeave={(e) => {
          e.preventDefault();
          e.target.style.borderColor = 'goldenrod';
          e.target.innerText = 'Drop Item Here';
        }}

        onDrop={(e) => {
          e.preventDefault();
          const product = JSON.parse(e.dataTransfer.getData('application/json'));
          e.target.style.borderColor = 'goldenrod';
          e.target.innerText = 'Added to Cart';
          setTimeout(() => e.target.innerText = 'Drop Item Here', 5000);
          addCustomersCandies({
            productId: product.id,
            customerId: parseInt(localStorage.getItem('kandy_customer'))
          });
        }}
      >Drop Item Here</span>
    </>
  );
}