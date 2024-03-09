"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./Style.module.css";
import { Pagination, Navigation } from "swiper/modules";

function FeCard() {
  const datas = [
    {
      img: "https://media-assets.grailed.com/prd/detail-page/ba0a537963b94639a95d060fd78d20a7?w=378&h=230&fit=clip&q=40&auto=format",
      title: "On location:Berlin",
      collectionName: "CURTED COLLECTONS",
      path: "Shop a curated selection of the best of HELIOT",
    },
    {
      img: "https://media-assets.grailed.com/prd/misc/bd83ecd60f7c4104b24de3aca504bba2?w=1600&fit=clip&q=90&auto=format",
      title: "Kintweare Essentials",
      collectionName: "STREET STYLE",
      path: "Shop a curated selection of the best of HELIOT",
    },

    {
      img: "https://media-assets.grailed.com/prd/misc/61b30e1cb1934deea578bca185449aa8?w=1600&fit=clip&q=90&auto=format",
      title: "EveryThing Vintage",
      collectionName: "CURTED COLLECTONS",
      path: "Shop a curated selection of the best of HELIOT",
    },
    {
      img: "https://media-assets.grailed.com/prd/misc/2be1e00a21434e3ea82c835d02c0a0bd?w=1600&fit=clip&q=90&auto=format",
      title: "Post-Sneaker World",
      collectionName: "CURTED COLLECTONS",
      path: "Shop a curated selection of the best of HELIOT",
    },
    {
      img: "https://media-assets.grailed.com/prd/misc/2be1e00a21434e3ea82c835d02c0a0bd?w=1600&fit=clip&q=90&auto=format",
      title: "Post-Sneaker World",
      collectionName: "CURTED COLLECTONS",
      path: "Shop a curated selection of the best of HELIOT",
    },
    {
      img: "https://media-assets.grailed.com/prd/misc/2be1e00a21434e3ea82c835d02c0a0bd?w=1600&fit=clip&q=90&auto=format",
      title: "Post-Sneaker World",
      collectionName: "CURTED COLLECTONS",
      path: "Shop a curated selection of the best of HELIOT",
    },
  ];
  return (
    <>

    <div    style={{width:"100%",height:"100%"}}>
  <div>
    <h2 style={{margin:"20px 12rem"}}>Releted Collection</h2>
  <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
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
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        className={style.swiper}
      >
        {datas.map((x) => {
          return (
            <SwiperSlide key={x._id} className={style.swiperslide}>

               <div className={style.Card}>
               <div className={style.imgaeCol}>
                  <img src={x.img} alt="" />
                </div>

                <div className={style.desc}>
                  <h2>{x.title} {'->'}</h2>
                  <p>{x.path}</p>

                </div>
               </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
  </div>
    </div>
    </>
  );
}

export default FeCard;
