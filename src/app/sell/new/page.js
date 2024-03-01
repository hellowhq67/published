import SellForm from '@/components/sellfrom/SellForm'
import React from 'react'
import Navbar from '@/components/Navigations/Navbar'
import NestedMenu from '@/components/Navigations/NestedMenu'

export default function page() {
    return (
        <div>
            <Navbar />
            <div style={{ margin: "4rem 0px", borderBottom: "1px solid black" }}>
                <NestedMenu />
            </div>
            <SellForm />
        </div>
    )
}
