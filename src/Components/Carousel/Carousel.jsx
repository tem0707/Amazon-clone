import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Carousel.module.css";

function CarouselE() {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItem, i) => {
          return <img key={i} src={imageItem} alt="images" />;
        })}
      </Carousel>

      <div className={styles.hero__img}></div>
    </>
  );
}

export default CarouselE;
