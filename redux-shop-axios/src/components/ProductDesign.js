import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const ProductDesign = () => {
  const products = useSelector(
    (state) => state.allProducts.initialState.products
  );

  const List = products.map((product, idx) => {
    return (
      <div className="four column wide">
        <div className="ui link cards">
          <div className="card">
            <div className="image"></div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default ProductDesign;
