import React from "react";
import style from "./Style.module.css";
import datas from "./data.js";
function Card() {
  return (
    <div className={style.section}>
      <h2 className={style.heading}>Featured Collections & Stories</h2>
      <div className={style.wrapper}>
        {datas.map((x) => {
          return (
            <div className={style.Card} key={x.title}>
              <div className={style.imgaeCol}>
                <img src={x.img} alt="" />
                <h2 className={style.title}>{x.title}</h2>
              </div>

              <div className={style.desc}>
                <h4>{x.collectionName}</h4>
                <button>SHOP + FOLLOW</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
