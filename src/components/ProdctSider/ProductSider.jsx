"use client";
import React, { useState } from "react";
import styles from "./style.module.css";

export default function ProductSider({ productImage1, productImage2, productImage3, productImage4, productImage5 }) {
  const [index, setIndex] = useState(0);
  const productImages = [productImage1, productImage2, productImage3, productImage4, productImage5];
  const totalImages = productImages.length;

  const goToPreviousImage = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };
  
  const goToNextImage = () => {
    setIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.ImageSider}>
     <div>
     <img style={{ width: "40vw", objectFit: "contain", overflow: "hidden" }} src={productImages[index]} alt="" />
      <button className={styles.prev} onClick={goToPreviousImage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
          />
        </svg>
      </button>
      <button className={styles.next} onClick={goToNextImage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
          />
        </svg>
      </button>
     </div>
      <div className={styles.imagewrapper}>
        {productImages.map((image, idx) => (
          <img key={idx} onClick={() => setIndex(idx)} src={image} alt="" />
        ))}
      </div>
    </div>
  );
}
