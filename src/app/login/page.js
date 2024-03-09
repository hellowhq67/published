import Modals from '@/components/authModal/Modals'
import  { useState } from 'react';
import React from 'react'

export default function page() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
  return (
    <div>
      <Modals/>
    </div>
  )
}
