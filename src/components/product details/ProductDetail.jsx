"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./style.module.css";
import Rating from "@mui/material/Rating";
import Slider from "@/components/Sections/Slider/Slider";
import ProductSider from "../ProdctSider/ProductSider";
import Navbar from "../Navigations/Navbar";
import NestedMenu from "../Navigations/NestedMenu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
function ProductDetail({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/products/${productId}`
        );
        setProduct(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "5rem" }}>
        <NestedMenu />
      </div>
      <div className={styles.wrapper}>
        <ProductSider
          productImage1={product.productImage1}
          productImage2={product.productImage2}
          productImage3={product.productImage3}
          productImage4={product.productImage4}
          productImage5={product.productImage4}
        />

        <div className={styles.details}>
          <span className={styles.vendor}>{product.vendor}</span>
          <p className={styles.designerName}>{product.designers}</p>

          <p>{product.productName}</p>
          <p>
            <span className={styles.size}>SIZE:</span>
            {product.size}
          </p>
          <p>
            <span>Color:</span>
            {product.color}
          </p>
          <p>
            <span>Condition:</span>
            {product.condition}
          </p>
          <h1 className={styles.price}>${product.floorPrice}</h1>
          <span>Shipping: {product.shippings}</span>
          <button className={styles.btn1}>PURCHASE</button>

          <button className={styles.btn2}>Follow</button>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.swiperslide}>
              <Link style={{textDecoration:"none"}} href={`/profile/designer/${product.userId}`}>
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {product.userName}
                </div>
                <span style={{ margin: "10px 0px" }}>
                  {" "}
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  />{" "}
                  3reivews
                </span>
                <div style={{ margin: "10px 0px" }}>
                  9 Transactions <span>12 items for sell</span>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperslide}>
            <Link style={{textDecoration:"none"}} href={`/profile/designer/${product.userId}`}>
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {product.userName}
                </div>
                <span style={{ margin: "10px 0px" }}>
                  {" "}
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  />{" "}
                  4reivews
                </span>
                <div style={{ margin: "10px 0px" }}>
                  9 Transactions <span>4 items for sell</span>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperslide}>
            <Link style={{textDecoration:"none"}} href={`/profile/designer/${product.userId}`}>
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {product.userName}
                </div>
                <span style={{ margin: "10px 0px" }}>
                  {" "}
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  />{" "}
                  4reivews
                </span>
                <div style={{ margin: "10px 0px" }}>
                  9 Transactions <span>4 items for sell</span>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>

          <h2>Description</h2>

          <p>{product.description}</p>
          <div>
            <h2>Measurements</h2>
            <p>send massage to seller</p>
            <button className={styles.btn2}>REQUEST MEASUREMENTS</button>
          </div>
        </div>
      </div>

      <div className={styles.sugcol1}>
        <h2 style={{ textAlign: "center" }}>releted product</h2>
        <Slider />
      </div>
    </>
  );
}

export default ProductDetail;
