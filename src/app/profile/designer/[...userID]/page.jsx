import Public from '@/components/profile/public/Public'
import React from 'react'

export default function page({ params: {userID} }) {
  return (
    <div>
      
      <Public sellerID={userID} />
   
    </div>
  )
}
