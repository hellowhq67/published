import React from "react";
import style from "./Style.module.css";
const data = [
  {
      img:"https://media-assets.grailed.com/prd/misc/e4433879e1a343c7abbf0622172fc9c6?w=180&h=180&fit=clip&q=40&auto=format",
      title:" Avant-Garde",
      path:""
  
  },
  {
      img:"https://media-assets.grailed.com/prd/misc/5b6e3ab2cee64febbf18b4c32ee0a391?w=180&h=180&fit=clip&q=40&auto=format",
      title:"  Gorpcore",
      path:""
  
  },
  {
      img:"https://media-assets.grailed.com/prd/misc/989dea3c058e4aa28748c5e9f3b5a33b?w=180&h=180&fit=clip&q=40&auto=format",
      title:" Luxury",
      path:""
  
  },
  {
      img:"https://media-assets.grailed.com/prd/misc/6b6aad653b294100a1b4d6cbfdfbc92a?w=180&h=180&fit=clip&q=40&auto=format",
      title:"Streetwear",
      path:""
  
  },
  {
      img:"https://media-assets.grailed.com/prd/misc/4ca087743724466faa59f27cca079459?w=180&h=180&fit=clip&q=40&auto=format",
      title:" Vintage",
      path:""
  
  },
  {
      img:"https://media-assets.grailed.com/prd/misc/51c2779baccb4980a633ccc11fdc99de?w=180&h=180&fit=clip&q=40&auto=format",
      title:" Y2K",
      path:""
      
  }
  ]
  
export default function Mensweare() {
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
