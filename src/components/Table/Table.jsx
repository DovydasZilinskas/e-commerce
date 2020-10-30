import React from "react";
import * as S from "./Table.style";

function Table({ products }) {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products &&
          products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price / 100} Eur</td>
            </tr>
          ))}
      </tbody>
    </S.Table>
  );
}

export default Table;
