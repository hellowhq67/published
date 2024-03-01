"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import axios from "axios"; // Import axios for data fetching
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import style from "./Style.module.css";

// Initialize Swiper core components
SwiperCore.use([Pagination]);

export default function Slider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products when component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/products");
      setProducts(response.data.products.slice(0, 6)); // Slice to get only 6 products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className={style.wrapper}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.productID}>
            <div className={style.ProductSildes}>
              {/* Use Link component from Next.js for client-side navigation */}
              <Link
               style={{textDecoration:"none",color:"black"}} href={`/listlings/${product.productID}`}
            
              >
                <div className={style.link}>
                  <div className={style.imgCol}>
                    <img src={product.productImage1} alt="" />
                    <span className={style.tags}>{product.vendor}</span>
                  </div>
                  <div className={style.descCol}>
                    <p className={style.title}>
                      {product.productName.slice(0, 15)}...
                    </p>
                    <p>{product.description.slice(0, 25)}</p>
                  </div>
                </div>
              </Link>
              <div className={style.priceCol}>
                <p className={style.price}>
                  ${product.price}{" "}
                  <span className={style.floorPrice}>
                    ${product.floorPrice}
                  </span>
                </p>
                <button className={style.btn}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5" // Change to strokeWidth instead of stroke-width
                    stroke="currentColor"
                    width={24}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
