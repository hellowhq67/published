import React from "react";
import data from "./data.js";
import style from "./Style.module.css";
export default function Womensweare() {
  return (
    <div className={style.conteiner}>
     <div className={style.Col}>
     <h2 className={style.title}>Shop by style</h2>
      <div>
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
      </div>
     </div>
    </div>
  );
}
