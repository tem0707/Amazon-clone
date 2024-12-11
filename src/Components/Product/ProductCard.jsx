import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import styles from "./Product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({ product, flex, render_desc, renderAdd }) {
  const { id, image, title, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id,
        image,
        title,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${styles.Card_container} ${
        flex ? styles.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="image" />
      </Link>
      <div>
        <h3>{title}</h3>
        {render_desc && (
          <div className={styles.Card_description}>{description}</div>
        )}
        <div className={styles.Card_rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />

          {/* rating counter */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}

          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={styles.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
