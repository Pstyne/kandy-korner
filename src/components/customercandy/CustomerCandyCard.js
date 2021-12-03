import React from "react";

export const CustomerCandyCard = ({ candy }) => {
  return (
    <>
      <tr>
        <td>{candy.name}</td>
        <td>{candy.quantity}</td>
        <td>${candy.total}</td>
      </tr>
    </>
  );
}