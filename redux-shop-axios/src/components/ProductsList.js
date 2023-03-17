import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductDesign from "./ProductDesign";
import axios from "axios";
import { setProducts } from "../Redux/actions/ProductActions";

const ProductsList = () => {
  const products = useSelector((state) => state);
  console.log(products);

  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    console.log(res.data);
    dispatch(setProducts(res.data));
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="ui grid container">
      <ProductDesign />
    </div>
  );
};

export default ProductsList;
