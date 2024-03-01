"use client"
import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import Navbar from '@/components/Navigations/Navbar'
import NestedMenu from '@/components/Navigations/NestedMenu'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Link from 'next/link';
import axios from 'axios';
import Footer from '@/components/Navigations/Footer'
export default function page() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [topsChecked, setTopsChecked] = useState(false); // State for tracking "TOPS" checkbox

  useEffect(() => {
    fetchProducts();
  }, []);


  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/products');
      // Filter products with category "TOPS" and department "MENSWEAR"
      const filteredProducts = response.data.products.filter(product => product.category === "TOPS" && product.department === "MENSWEAR");
      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters({ ...filters, [name]: checked });
    if (name === 'TOPS') {
      setTopsChecked(checked); // Update state of "TOPS" checkbox
    }
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    // Sorting logic
  };

  const filterProducts = (product) => {
    // Filter products based on selected filters
    for (const filter in filters) {
      if (filters[filter] && filter !== "minPrice" && filter !== "maxPrice") {
        // Filter logic based on selected checkboxes
        if (filter === "size") {
          if (!product.size.includes(filters[filter])) {
            return false;
          }
        } else if (filter === "minPrice") {
          if (parseInt(product.price) < parseInt(filters[filter])) {
            return false;
          }
        } else if (filter === "maxPrice") {
          if (parseInt(product.price) > parseInt(filters[filter])) {
            return false;
          }
        } else if (
          product.category !== filter &&
          product.subcategory !== filter &&
          product.designers !== filter &&
          product.conditon !== filter
        ) {
          return false;
        }
      }
    }
    // Check if "TOPS" checkbox is checked and filter accordingly
    if (topsChecked && product.category !== "TOPS") {
      return false;
    }
    return true;
  };

  return (

    <div>
      <Navbar />
      <div style={{ marginTop: '4rem ', border: '1px solid black', width: "100vw" }}>
        <NestedMenu />
      </div>
      

      <div className={style.wrapper2}>
    
        <span style={{ fontWeight: "bold" }}>{products.length} listings  <Link href=''>menswear{`>`}tops</Link></span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={{ background: "black", color: "white", border: "none", padding: "10px 25px", fontWeight: "bold" }}>Follow</button>
          <select className={style.selectFliter} onChange={handleSortChange}>
            <option value="">Sort By: Default</option>
            <option value="trending">Sort By: Trending</option>
            <option value="lowPrice">Sort By: Low Price</option>
            <option value="highPrice">Sort By: High Price</option>
            <option value="new">Sort By: New</option>
          </select>
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.productFilter}>
          <div className={style.sizeBox}>
            <p>Set up to filter out listings that are not in your size.</p>
            <button className={style.btn}>ADD MY SIZE</button>
          </div>

          <Accordion style={{ border: "none", background: "none" }} defaultExpanded>
            <AccordionSummary
              expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
              </svg>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{ fontWeight: "bold" }}>Department</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={style.checkbox}>
                <label style={style.label}><input type='checkbox' name="MENSWEAR" onChange={handleCheckboxChange} /> Meanswear</label>
                

              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ border: "none" }} defaultExpanded>
            <AccordionSummary
              expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
              </svg>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{ fontWeight: "bold" }}>Cetagory</Typography>
            </AccordionSummary>
            <Accordion style={{ border: 'none' }} defaultExpanded >
              <AccordionSummary
                expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                </svg>}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography style={{ fontWeight: 'bold', }}>menwear</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/*==================top==========================*/}
                <Accordion style={{ border: 'none' }} >
                  <AccordionSummary
                    expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                      <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                    </svg>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography style={{ fontWeight: 'bold', }}>top</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={style.checkbox}>
                      <span><input type='checkbox' name='TOPS' onChange={handleCheckboxChange} /> <span>All tops</span></span>
                      <span><input type='checkbox' name='LONG SLEEVE T-SHIRTS' onChange={handleCheckboxChange} /> <span>  LONG SLEEVE T-SHIRTS</span></span>
                      <span><input type='checkbox' name='POLOS' onChange={handleCheckboxChange} /> <span>POLOS</span></span>




                    </div>


                  </AccordionDetails>
                </Accordion>
          



              </AccordionDetails>
            </Accordion>
        
          </Accordion>

          <Accordion style={{ border: 'none' }} >
            <AccordionSummary
              expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
              </svg>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{ fontWeight: "bold" }}>Size</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={style.checkbox}>
                <span><input type='checkbox' name='26' onChange={handleCheckboxChange} /> <span>26</span></span>
                <span><input type='checkbox' name='27' onChange={handleCheckboxChange} /> <span>27</span></span>
                <span><input type='checkbox' name='29' onChange={handleCheckboxChange} /> <span>29</span></span>
                <span><input type='checkbox' name='30' onChange={handleCheckboxChange} /> <span>30</span></span>
                <span><input type='checkbox' name='42' onChange={handleCheckboxChange} /> <span>42</span></span>





              </div>
              <AccordionDetails>
                <div className={style.checkbox}>
                  <span><input type='checkbox' name='XXS/40' onChange={handleCheckboxChange} /> <span> XXS/40</span></span>
                  <span><input type='checkbox' name='XS/42' onChange={handleCheckboxChange} /> <span> XS/42</span></span>
                  <span><input type='checkbox' name=' S/44' onChange={handleCheckboxChange} /> <span>  S/44-46</span></span>
                  <span><input type='checkbox' name='L/53-54 ' onChange={handleCheckboxChange} /> L/53-54 <span></span></span>

                </div>


              </AccordionDetails>

            </AccordionDetails>
          </Accordion>
          <Accordion style={{ border: "none", background: "none" }} >
            <AccordionSummary
              expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
              </svg>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{ fontWeight: "bold" }}>Designer</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={style.checkbox}>
                <label style={style.label}><input type='checkBox' name='Gucchi' onChange={handleCheckboxChange} /> Gucchi</label>
                <label style={style.label}><input type='checkBox' name='Louis Vuitton' onChange={handleCheckboxChange} /> Louis Vuitton</label>
                <label style={style.label}><input type='checkBox' name='Jacquemus' onChange={handleCheckboxChange} /> Jacquemus</label>
                <label style={style.label}><input type='checkBox' name="Kapital" onChange={handleCheckboxChange} /> Kapital</label>
                <label style={style.label}><input type='checkBox' name='Loewe<' onChange={handleCheckboxChange} /> Loewe</label>






              </div>
            </AccordionDetails>
          </Accordion>




          <Accordion style={{ border: "none", background: "none" }} >
            <AccordionSummary
              expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
              </svg>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{ fontWeight: "bold" }}>Condition</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={style.checkbox}>
                <label style={style.label}><input type='checkBox' name='new' onChange={handleCheckboxChange} /> New</label>
                <label style={style.label}><input type='checkBox' name='used' onChange={handleCheckboxChange} /> Used</label>
                <label style={style.label}><input type='checkBox' name='gently_used' onChange={handleCheckboxChange} /> Gently Used</label>







              </div>
            </AccordionDetails>
          </Accordion>


        </div>

        <div className={style.productWrapprer}>

          {products.filter(filterProducts).map((x) => {
            return <>

              <div className={style.ProductSildes}>
                <Link style={{ textDecoration: "none", cursor: "pointer", color: "black" }} href={`/listlings/${x._id}`} passHref>
                  <div className={style.imgCol}>
                    <img src={x.productImage1} alt="" />
                    <span className={style.tags}>{x.vendor}</span>
                  </div>
                  <div className={style.descCol}>
                    <p className={style.title}>
                      {x.productName.slice(0, 15)}...
                    </p>
                    <p>{x.description.slice(0, 25)}</p>
                  </div>
                </Link>
                <div className={style.priceCol}>
                  <p className={style.price}>
                    ${x.price}{" "}
                    <span className={style.floorPrice}>
                      ${x.floorPrice}
                    </span>
                  </p>
                  <button className={style.btn}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      width={24}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          })

          }
        </div>

      </div>

      <Footer />
    </div>
  )
}
