import React from "react";
import style from "./style.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function ProductFlter({ products }) {
  const calculateDiscountPercentage = (price, floorPrice) => {
    return ((price - floorPrice) / price) * 100;
  };
  return (
    <>
      <div className={style.wrapper2}>
        <span style={{ fontWeight: "bold" }}>{products.length} listings</span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <select className={style.selectFliter}>
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

          <Accordion style={{ border: "none", background: "none" }}>
            <AccordionSummary
              expandIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                </svg>
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{ fontWeight: "bold" }}>Department</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={style.checkbox}>
                <label style={style.label}>
                  <input type="checkbox" name="maneswear" /> Meanswear
                </label>
                <label style={style.label}>
                  <input type="checkbox" name="Womaneswear" /> Womeanswear
                </label>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ border: "none" }}>
            <AccordionSummary
              expandIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                </svg>
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{ fontWeight: "bold" }}>Cetagory</Typography>
            </AccordionSummary>
            <Accordion style={{ border: "none" }} defaultExpanded>
              <AccordionSummary
                expandIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-down"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                  </svg>
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography style={{ fontWeight: "bold" }}>menwear</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/*==================top==========================*/}
                <Accordion style={{ border: "none" }}>
                  <AccordionSummary
                    expandIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-down"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                      </svg>
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography style={{ fontWeight: "bold" }}>top</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={style.checkbox}>
                      <span>
                        <input type="checkbox" name="all tops" value={""} />{" "}
                        <span>All tops</span>
                      </span>
                      <span>
                        <input type="checkbox" name="all tops" value={""} />{" "}
                        <span>All tops</span>
                      </span>
                      <span>
                        <input type="checkbox" name="all tops" value={""} />{" "}
                        <span>All tops</span>
                      </span>
                      <span>
                        <input type="checkbox" name="all tops" value={""} />{" "}
                        <span>All tops</span>
                      </span>
                    </div>
                  </AccordionDetails>
                </Accordion>
                {/*==================topclose==========================*/}
                {/*==================bottom==========================*/}

                <Accordion style={{ border: "none" }}>
                  <AccordionSummary
                    expandIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-down"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                      </svg>
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography style={{ fontWeight: "bold" }}>
                      Bottoms
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={style.checkbox}>
                      <span>
                        <input type="checkbox" name="All bottoms" value={""} />{" "}
                        <span>All bottoms</span>
                      </span>
                      <span>
                        <input type="checkbox" name="Casual Pants" value={""} />{" "}
                        <span>Casual Pants</span>
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          name="Cropped Pants"
                          value={""}
                        />{" "}
                        <span>Cropped Pants</span>
                      </span>
                      <span>
                        <input type="checkbox" name="Denim" value={""} />{" "}
                        <span>Denim</span>
                      </span>
                    </div>
                  </AccordionDetails>
                </Accordion>

                {/*==================footwear==========================*/}

                <Accordion style={{ border: "none" }}>
                  <AccordionSummary
                    expandIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-down"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                      </svg>
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography style={{ fontWeight: "bold" }}>
                      Footwear
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={style.checkbox}>
                      <span>
                        <input
                          type="checkbox"
                          name="All bottoms"
                          value={"All Footwear"}
                        />{" "}
                        <span> All Footwear</span>
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          name="Casual Pants"
                          value={"Boots"}
                        />{" "}
                        <span>Boots</span>
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          name="Cropped Pants"
                          value={"Casual Leather Shoes"}
                        />{" "}
                        <span>Casual Leather Shoes</span>
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          name="Denim"
                          value={"Formal Shoes"}
                        />{" "}
                        <span>Formal Shoes</span>
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          name="Denim"
                          value={"Hi-Top Sneakers"}
                        />{" "}
                        <span>Hi-Top Sneakers</span>
                      </span>
                    </div>
                  </AccordionDetails>
                </Accordion>

                {/*==================footwear==========================*/}
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ border: "none" }}>
              <AccordionSummary
                expandIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-down"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                  </svg>
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography style={{ fontWeight: "bold" }}>
                  Womaneswear
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/*==================top==========================*/}
                <Accordion style={{ border: "none" }}>
                  <AccordionSummary
                    expandIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-down"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                      </svg>
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography style={{ fontWeight: "bold" }}>top</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={style.checkbox}>
                      <span>
                        <input type="checkbox" name="all tops" value={""} />{" "}
                        <span>All tops</span>
                      </span>
                      <span>
                        <input type="checkbox" name="all tops" value={""} />{" "}
                        <span>All tops</span>
                      </span>
                      <span>
                        <input type="checkbox" name="all tops" value={""} />{" "}
                        <span>All tops</span>
                      </span>
                      <span>
                        <input type="checkbox" name="all tops" value={""} />{" "}
                        <span>All tops</span>
                      </span>
                    </div>
                  </AccordionDetails>
                </Accordion>
                {/*==================topclose==========================*/}
                {/*==================bottom==========================*/}

                <Accordion style={{ border: "none" }}>
                  <AccordionSummary
                    expandIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-down"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                      </svg>
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography style={{ fontWeight: "bold" }}>
                      Bottoms
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={style.checkbox}>
                      <span>
                        <input type="checkbox" name="All bottoms" value={""} />{" "}
                        <span>All bottoms</span>
                      </span>

                      <span>
                        <input type="checkbox" name="Casual Pants" value={""} />{" "}
                        <span>Casual Pants</span>
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          name="Cropped Pants"
                          value={""}
                        />{" "}
                        <span>Cropped Pants</span>
                      </span>
                      <span>
                        <input type="checkbox" name="Denim" value={""} />{" "}
                        <span>Denim</span>
                      </span>
                    </div>
                  </AccordionDetails>
                </Accordion>

                {/*==================bottom==========================*/}
                {/*==================footwear==========================*/}
                <Accordion style={{ border: "none" }}>
                  <AccordionSummary
                    expandIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-down"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                      </svg>
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography style={{ fontWeight: "bold" }}>
                      Footwear
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={style.checkbox}>
                      <span>
                        <input type="checkbox" name="All bottoms" value={""} />{" "}
                        <span>All Footwear</span>
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          name="Casual Pants"
                          value={"Boots"}
                        />{" "}
                        <span>Boots</span>
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          name="Cropped Pants"
                          value={"hells"}
                        />{" "}
                        <span> hells</span>
                      </span>
                      <span>
                        <input type="checkbox" name="Denim" value={""} />{" "}
                        <span>Denim</span>
                      </span>
                    </div>
                  </AccordionDetails>
                </Accordion>

                {/*==================footwear==========================*/}
              </AccordionDetails>
            </Accordion>
          </Accordion>

          <Accordion style={{ border: "none" }}>
            <AccordionSummary
              expandIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                </svg>
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{ fontWeight: "bold" }}>Size</Typography>
            </AccordionSummary>
            <Accordion style={{ border: "none" }} defaultExpanded>
              <AccordionSummary
                expandIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-down"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                  </svg>
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography style={{ fontWeight: "bold" }}>menwear</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/*==================top==========================*/}
                <Accordion style={{ border: "none" }} defaultExpanded>
                  <AccordionSummary
                    expandIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-down"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                      </svg>
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography style={{ fontWeight: "bold" }}>top</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={style.checkbox}>
                      <span>
                        <input type="checkbox" value={"XXS/40"} />{" "}
                        <span> XXS/40</span>
                      </span>
                      <span>
                        <input type="checkbox" value={"XS/42"} />{" "}
                        <span> XS/42</span>
                      </span>
                      <span>
                        <input type="checkbox" value={" S/44"} />{" "}
                        <span> S/44-46</span>
                      </span>
                      <span>
                        <input type="checkbox" value={"L/53-54 "} /> L/53-54{" "}
                        <span></span>
                      </span>
                    </div>
                  </AccordionDetails>
                </Accordion>
                {/*==================topclose==========================*/}
                {/*==================bottom==========================*/}

                <Accordion style={{ border: "none" }} defaultExpanded>
                  <AccordionSummary
                    expandIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-down"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                      </svg>
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography style={{ fontWeight: "bold" }}>
                      Bottoms
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={style.checkbox}>
                      <span>
                        <input type="checkbox" name="All bottoms" value={""} />{" "}
                        <span>26</span>
                      </span>
                      <span>
                        <input type="checkbox" name="Casual Pants" value={""} />{" "}
                        <span>27</span>
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          name="Cropped Pants"
                          value={""}
                        />{" "}
                        <span>29</span>
                      </span>
                      <span>
                        <input type="checkbox" name="Denim" value={""} />{" "}
                        <span>30</span>
                      </span>
                    </div>
                  </AccordionDetails>
                </Accordion>

                {/*==================bottom==========================*/}
              </AccordionDetails>
            </Accordion>
          </Accordion>

          <Accordion style={{ border: "none", background: "none" }}>
            <AccordionSummary
              expandIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                </svg>
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{ fontWeight: "bold" }}>Designer</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={style.checkbox}>
                <label style={style.label}>
                  <input type="checkBox" value={"vingtage"} /> Vintage
                </label>
                <label style={style.label}>
                  <input type="checkBox" value={"vingtage"} /> Streetwear
                </label>
                <label style={style.label}>
                  <input type="checkBox" value={"vingtage"} /> Japanese Brand
                </label>
                <label style={style.label}>
                  <input type="checkBox" /> Nike
                </label>
                <label style={style.label}>
                  <input type="checkBox" value={"vingtage"} /> Louis Vutton
                </label>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ border: "none", background: "none" }}>
            <AccordionSummary
              expandIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                </svg>
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{ fontWeight: "bold" }}>price</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="filterSection">
                <input type="text" placeholder="$ min" />
                <input type="text" placeholder="$ max" />
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ border: "none", background: "none" }}>
            <AccordionSummary
              expandIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                </svg>
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{ fontWeight: "bold" }}>Condition</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={style.checkbox}>
                <label style={style.label}>
                  <input type="checkBox" value={"vingtage"} /> Vintage
                </label>
                <label style={style.label}>
                  <input type="checkBox" value={"vingtage"} /> Streetwear
                </label>
                <label style={style.label}>
                  <input type="checkBox" value={"vingtage"} /> Japanese Brand
                </label>
                <label style={style.label}>
                  <input type="checkBox" /> Nike
                </label>
                <label style={style.label}>
                  <input type="checkBox" value={"vingtage"} /> Louis Vutton
                </label>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className={style.productWrapprer}>
          {products.map((x) => {
            return (
              <>
                <div key={x._id} className={style.ProductSildes}>
                  <Link
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "black",
                    }}
                    href={`/listlings/${x._id}`}
                    passHref
                  >
                    <div className={style.imgCol}>
                      <img src={x.productImage1} alt="" />
                      {!x.vendor ? (
                        ""
                      ) : (
                        <span className={style.tags}>{x.vendor}</span>
                      )}
                    </div>
                    <p>1 hour 14 munites ago</p>
                    <hr />
                    <div className={style.descCol}>
                      <p className={style.title}>
                        {x.productName.slice(0, 15)}...
                      </p>
                      <p>{x.description.slice(0, 25)}</p>
                    </div>
                  </Link>
                  <div className={style.priceCol}>
                    <p className={style.price}>
                      <span style={{ color: "red", margin: "0px 2px" }}>
                        {" "}
                        ${x.floorPrice ? x.floorPrice : ""}
                      </span>
                      <span className={style.floorPrice}>${x.price}</span>
                      <span className={style.discount}>
                        {" "}
                        {`${calculateDiscountPercentage(
                          x.price,
                          x.floorPrice
                        ).toFixed(0)}% off`}
                      </span>
                    </p>
                    <button className={style.btn}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        width={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
