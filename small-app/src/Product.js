import React from "react";
import Name from "./Name";
import styles from "./Product.module.css";

function Product({ name, price }) {
  return (
    <div className={styles.product}>
      <Name name={name} />
      <h2 className={styles.price}>${price}</h2>
    </div>
  );
}

export default Product;
