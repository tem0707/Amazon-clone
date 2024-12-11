import React from "react";
import { catagoryData } from "./CategoryFunction";
import CatagoryCard from "./CategoryCard";
import styles from "./Category.module.css";

function Catagory() {
  return (
    <section className={styles.category_container}>
      {catagoryData.map((infos, i) => (
        <CatagoryCard key={i} data={infos} />
      ))}
    </section>
  );
}

export default Catagory;
