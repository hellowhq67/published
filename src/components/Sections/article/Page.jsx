import React from "react";
import style from "./style.module.css";
export default function Page() {
  const data = [
    {
      img: "https://media-assets.grailed.com/prd/article/114a5bfd5dca4b0d865a968d45c36aa1?w=480&fit=clip&auto=format",
      title: "The Drop",
      desc: "Seller Spotlight: 4gseller",
    },
    {
      img: "https://media-assets.grailed.com/prd/article/780f969cc37d49d180f7442933cc55b5?w=480&fit=clip&auto=format",
      title: "The Drop",
      desc: "Grailed x Round Two NYC",
    },
    {
      img: "https://media-assets.grailed.com/prd/article/fba47ed09202463d83b730c6fc9d83f3?w=480&fit=clip&auto=format",
      title: "Surfaced",
      desc: "Our Favorite Plain T-Shirt Brands Right Now",
    },
    {
      img: "https://media-assets.grailed.com/prd/article/ddcbcd56c3fd4d63a9a11dc467534bde?w=480&fit=clip&auto=format",
      title: "Shipping",
      desc: "Grailed Guides: Tips on How to Shop Sustainably",
    },
  ];
  return (
    <div className={style.Main}>
      <div className={style.mainCol}>
        <h2>Releted Articel</h2>
        <div className={style.wrapper}>
          {data.map((x) => {
            return (
              <div className={style.card}>
                <img src={x.img} alt="" />
                <div className={style.desc}>
                  <p>{x.title}</p>
                  <h2>{x.desc}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
