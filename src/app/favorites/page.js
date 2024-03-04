'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navigations/Navbar'
import NestedMenu from '@/components/Navigations/NestedMenu'
import style from './style.module.css'
export default function page() {
    const [activeTab, setActiveTab] = useState('Listing');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div>
            <Navbar />
            <div style={{ marginTop: '4rem ', border: '1px solid black', width: "100vw" }}>
                <NestedMenu />
            </div>
            <div style={{ textAlign: "center", padding: "2rem" }}>
                <h1>FAVORTES</h1>
                <p>You will be notified when your favorite listings drop in price or are relisted.</p>
            </div>
            <div className={style.flexbox}>
                <div onClick={() => handleTabClick('Listing')} className={activeTab === 'Listing' ? style.activeTab : style.tab}>Listing</div>
                <div onClick={() => handleTabClick('Searches')} className={activeTab === 'Searches' ? style.activeTab : style.tab}>Searches</div>
                <div onClick={() => handleTabClick('Designers')} className={activeTab === 'Designers' ? style.activeTab : style.tab}>Designers</div>
                <div onClick={() => handleTabClick('Seller')} className={activeTab === 'Seller' ? style.activeTab : style.tab}>Seller</div>
            </div>
            {activeTab === 'Listing' && <div
                className={style.tabtext}
            >
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={100}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>

                </div>

                <p>You haven't favorited any items yet! <br />
                    Explore Grailed and favorite items to get notified if they drop in price.</p>
                <button style={{ padding: '10px 20px', background: "none" }}>BROWSE</button>
            </div>}
            {activeTab === 'Searches' &&
                <div
                    className={style.tabtext}
                >
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={100}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                    </div>

                    <p>You haven't  any items yet! <br />
                        Explore Grailed and favorite items to get notified if they drop in price.</p>
                    <button style={{ padding: '10px 20px', background: "none" }}>BROWSE</button></div>}
            {activeTab === 'Designers' &&
                <div
                    className={style.tabtext}
                >
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={100}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                    </div>

                    <p>You haven't favorited any items yet! <br />
                        Explore Grailed and favorite items to get notified if they drop in price.</p>
                    <button style={{ padding: '10px 20px', background: "none" }}>BROWSE</button></div>
            }
            {activeTab === 'Seller' &&
                <div
                    className={style.tabtext}
                >
                    
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={100}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>

                </div>

                <p>You haven't favorited any items yet! <br />
                    Explore Grailed and favorite items to get notified if they drop in price.</p>
                <button style={{ padding: '10px 20px', background: "none" }}>BROWSE</button>
                </div>
            }

        </div >
    )
}
