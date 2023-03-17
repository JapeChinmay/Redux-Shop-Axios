import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProd,
} from "../Redux/actions/ProductActions";

const ProductDetails = () => {
  const selectedproduct = useSelector((state) => state.selectedProduct);
  const { image, title, price, category, description } = selectedproduct;
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(id);

  const fetchProduct = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      });

    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    if (id !== "") {
      fetchProduct();
    }
    return () => {
      dispatch(removeSelectedProd());
    };
  }, [id]);

  console.log(selectedproduct);

  return (
    <div className="ui grid container" style={{ marginTop: "3rem" }}>
      {Object.keys(selectedproduct).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div
          className="ui placeholder segment"
          style={{
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",

            borderRadius: "4px",
            border: " 2px rgba(188, 26, 246, 0.8) solid",
          }}
        >
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
