'use client'
import React from 'react'

export default function Feedback({data}) {
  return (
    <div>
      {data.map((x)=>{
        return(
          <>
          <p>{x.bacth}</p>
          
          </>
        )
      })

      }
    </div>
  )
}
