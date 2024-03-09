import Public from '@/components/profile/public/Public'
import React from 'react'

export default function page({ params: {id} }) {
  return (
    <div>
      
      <Public sellerID={id} />
   
    </div>
  )
}
