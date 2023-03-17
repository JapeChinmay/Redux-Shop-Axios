import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductDesign = () => {
  const products = useSelector((state) => state.allProducts.products);

  const List = products?.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div
              className="card"
              style={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",

                borderRadius: "4px",
                border: " 2px rgba(188, 26, 246, 0.8) solid",
              }}
            >
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{List}</>;
};

export default ProductDesign;
