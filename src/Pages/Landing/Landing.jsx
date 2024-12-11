import React from "react";
import CarouselE from "../../Components/Carousel/Carousel";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";
import Layout from "../../Components/Layout/Layout";

const Landing = () => {
  return (
    <Layout>
      <CarouselE />
      <Category />
      <Product />
    </Layout>
  );
};

export default Landing;
