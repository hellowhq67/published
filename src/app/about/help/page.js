import React from 'react'
import style from './style.module.css'
import Navbar from '@/components/Navigations/Navbar';

export default function page() {

    const data = [

        {
            title: "  What's New at Grailed",
            desc: 'Find announcements for product updates and new features here.'


        },
        {
            title: 'Grailed 101',
            desc: 'Your most popular questions, answered!'


        },
        {
            title: 'Grailed Protection',
            desc: 'Trust & safety for Grailed users.'


        },
        {

            title: 'Buying',
            desc: 'Buy safely with help from world-class curators and community self-policing.'

        },
        {

            title: 'Selling',
            desc: 'Ready to sell your Grails? Weve made it easy with these tips'

        },
        {

            title: 'Manage my Account',
            desc: 'Get help logging in, verifying your account, messages and more.'
        },

    ];
   
    return (
        <>
        <Navbar/>
            <div className={style.section}>
                <div
                    className={style.bannerCOl}
                    style={{
                        backgroundImage:
                            "url('https://images.ctfassets.net/bdvz0u6oqffk/6Nt6EReVvGm6QkCuGyqkK/68ea21684b8178c18ffc60d66e26d032/about-hero.jpg')",
                    }}
                >
                    <input type="text" name="" id="" placeholder='how can we help' />
                </div>
                <div className={style.wrap}>
             
                </div>
                <div className={style.wrapper}>
                    {data.map((x) => {
                        return (
                            <>
                                <div className={style.card}>
                                    <h2>{x.title}</h2>
                                    <p>{x.desc}</p>


                                </div>
                            </>
                        )
                    })

                    }
                </div>
          <div style={{padding:'2rem'}}>
            <h2>Promoted Artivcles</h2>
          <div className={style.wrap}>
                  {data.map((x)=>{
                    return(
                        <>
                        <div className={style.links}>
                        <h2>{x.desc}</h2>
                        </div>
                        </>
                    )
                  })

                  }
                </div>
          </div>
            </div>

        </>
    )
}
