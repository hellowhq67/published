import Modals from '@/components/authModal/Modals'
import React from 'react'

export default function page() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
  return (
    <div>
      <Modals/>
    </div>
  )
}
