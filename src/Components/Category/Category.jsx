import React from "react";
import { catagoryData } from "./CategoryFunction";
import CategoryCard from "./CategoryCard";
import styles from "./category.module.css";

function Category() {
  return (
    <section className={styles.category_container}>
      {catagoryData.map((infos, i) => (
        <CategoryCard key={i} data={infos} />
      ))}
    </section>
  );
}

export default Category;
