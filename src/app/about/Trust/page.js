import React from 'react'
import style from './style.module.css'
import Navbar from '@/components/Navigations/Navbar'
import NestedMenu from '@/components/Navigations/NestedMenu'
export default function page() {
    return (
        <div>
            <Navbar />
            <div style={{ marginTop: "4rem", borderBottom: "1px solid black" }}>
                <NestedMenu />
            </div>
            <div className={style.main}>
                <div className={style.heading} >
                    <h1>TRUST</h1>
                    <p>The shared experiences between buyers and sellers on Grailed is our #1 priority <br /> We take actions that protect our community and prevent risk</p>
                </div>
                <div className={style.wrapper}>
                    <div className={style.card}>
                        <img src={'https://media-assets.grailed.com/prd/misc/qhxjLBDBQduQ6N8X8lHS_temp.jpg?w=380&fit=clip&q=40&auto=format'} alt="" />
                        <div>
                            <h1>Authentication</h1>
                            <p> Brand and marketplace experts take a handson approach to digital moderation</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src={'https://media-assets.grailed.com/prd/misc/HPRNqHO7SfiithppvUwg_temp.jpg?w=380&fit=clip&q=40&auto=format'} alt="" />
                        <div>
                            <h1>Legit Sellers</h1>
                            <p> Brand and marketplace experts take a handson approach to digital moderation</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img src={'https://media-assets.grailed.com/prd/misc/ioBgAoRUQq6xuQMMp4eZ_temp.jpg?w=380&fit=clip&q=40&auto=format'} alt="" />
                        <div>
                            <h1>Grailed Purchase Protection</h1>
                            <p>We want you to feel confident buying and selling on Grailed Thats why we offer Purchase Protection on qualifying orders In the rare case that something goes wrong with your </p>
                        </div>
                    </div>
                </div>

                 <div><h2>What the Grailed community is saying…</h2></div>
                <div className={style.wrapper}>
                    <div className={style.card}>
                        
                        <div>
                            <h1>Authentication</h1>
                            <p> Brand and marketplace experts take a handson approach to digital moderation</p>
                        </div>
                    </div>
                    <div className={style.card}>
                      
                        <div>
                            <h1>Legit Sellers</h1>
                            <p> Brand and marketplace experts take a handson approach to digital moderation</p>
                        </div>
                    </div>

                    <div className={style.card}>
                      
                        <div>
                            <h1>Grailed Purchase Protection</h1>
                            <p>We want you to feel confident buying and selling on Grailed Thats why we offer Purchase Protection on qualifying orders In the rare case that something goes wrong with your </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
