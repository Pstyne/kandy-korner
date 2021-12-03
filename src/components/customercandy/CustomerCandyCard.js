import React from "react";

export const CustomerCandyCard = ({ candy }) => {
  return (
    <>
      <tr>
        <td>{candy.name}</td>
        <td>1</td>
        <td>${candy.price}</td>
      </tr>
    </>
  );
}