import React from 'react'
import SellPro from '@/components/sellprofille/SellPro'
export default function page({ params: {id} }) {
  return (
    <div>
      
      <SellPro userID={id} />
     
    </div>
  )
}
