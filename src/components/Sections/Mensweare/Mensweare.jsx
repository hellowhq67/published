import React from "react";
import data from "./data.js";
import style from "./Style.module.css";
export default function Mensweare() {
  return (
    <>
      <h2 className={style.title}>Shop Menswear</h2>
      <div className={style.wrapper}>
        {data.map((x) => {
          return (
            <>
              <div className={style.card}>
                <img src={x.img} alt="" />
                <h4>{x.title}</h4>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
