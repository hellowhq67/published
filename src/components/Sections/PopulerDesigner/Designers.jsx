import React from 'react'
import data from './data.js'
import style from './Style.module.css'
export default function Designers() {

  return (
    <>
    <h2 className={style.title}>Populer Designer</h2>
    <div className={style.wrapper}>
        
        {data.map((x)=>{
          return(
              <>
              <div className={style.card}>
                  <img src={x.img} alt="" />
  
              </div>
              
              </>
          )
        })
  
        }
      </div>
    </>
   
  )
}
