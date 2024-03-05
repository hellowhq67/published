"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./style.module.css";
import Rating from "@mui/material/Rating";
import Slider from "@/components/Sections/Slider/Slider";
import ProductSider from "../ProdctSider/ProductSider";
import Navbar from "../Navigations/Navbar";
import NestedMenu from "../Navigations/NestedMenu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import FeCard from "../Sections/FeaturedCollection copy/FeCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Cards from "../Sections/slider3/Cards";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40rem",
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
};
function ProductDetail({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/products/${productId}`
        );
        setProduct(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }
  const userIDs = product ? product.userId : "";
  console.log("user id", userIDs);
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h2 style={{ textAlign: "center", fontWeight: "300" }}>
              REPORT LISTINGS
            </h2>
            <hr />

            <h3 style={{ textAlign: "center", fontWeight: "400" }}>
              Why are you reporting this listing
            </h3>

            <select
              name=""
              id="select"
              style={{ padding: "10px 40px", width: "400px", fontSize: "18px" }}
            >
              <option value="">Selling item</option>
              <option value="">TreadMarkCopy write</option>
              <option value="">Clone product</option>
            </select>
            <div>
              <textarea
                style={{ padding: "10px 40px", width: "400px" }}
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="add comment"
              ></textarea>
            </div>
            <button
              style={{
                padding: "15px 20px",
                background: "black",
                color: "white",
                width: "300px",
              }}
            >
              REPORT LISTINGS
            </button>
          </Box>
        </Fade>
      </Modal>
      <Navbar />
      <div style={{ marginTop: "5rem" }}>
        <NestedMenu />
      </div>
      <div className={styles.wrapper}>
        <ProductSider
          productImage1={product.productImage1}
          productImage2={product.productImage2}
          productImage3={product.productImage3}
          productImage4={product.productImage4}
          productImage5={product.productImage4}
        />

        <div className={styles.details}>
          <span className={styles.vendor}>{product.vendor}</span>
          <p className={styles.designerName}>{product.designers}</p>

          <p>{product.productName}</p>
          <p>
            <span className={styles.size}>SIZE:</span>
            {product.size}
          </p>
          <p>
            <span>Color:</span>
            {product.color}
          </p>
          <p>
            <span>Condition:</span>
            {product.condition}
          </p>
          <h1 className={styles.price}>${product.floorPrice}</h1>
          <span>Shipping: {product.shippings}</span>
          <button className={styles.btn1}>PURCHASE</button>

          <button className={styles.btn2}>Follow</button>
          <div className={style.profileInfo}>
            <div style={{ display: "flex", alignItems: "center" }}></div>
          </div>
          <hr />
          <Link
            style={{ textDecoration: "none", color: "black" }}
            href={`/profile/designer/${product.userId}`}
          >
            <img
              width={50}
              src="https://cdn-icons-png.flaticon.com/128/1999/1999625.png"
              alt=""
            />
            <div
              style={{ fontSize: "18px", fontWeight: "bold", color: "black" }}
            >
              {product.userName}
            </div>
            <span style={{ margin: "10px 0px", color: "black" }}>
              {" "}
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />{" "}
              3reivews
            </span>
            <div style={{ margin: "10px 0px" }}>
              9 Transactions <span>12 items for sell</span>
            </div>
          </Link>
          <h2>Seller FeedBack</h2>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.swiperslide}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                href={`/profile/designer/${product.userId}`}
              >
                <div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    {product.userName}
                  </div>
                  <span style={{ margin: "10px 0px", color: "black" }}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                    {"3reivews "}
                  </span>
                  <div style={{ margin: "10px 0px" }}>
                    <p>
                      Nike Vintage Y2K Nylon Baggy Track Pants Double Swoosh
                    </p>
                  </div>
                </div>
                <img
                  width={100}
                  src="https://media-assets.grailed.com/prd/listing/temp/542cf3edad86493a9600e874434abe0c?w=120&fit=clip&q=40&auto=format"
                  alt=""
                />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperslide}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                href={`/profile/designer/${product.userId}`}
              >
                <div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    {product.userName}
                  </div>
                  <span style={{ margin: "10px 0px", color: "black" }}>
                    {" "}
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                    {"  4reivews"}
                  </span>
                  <div style={{ margin: "10px 0px" }}>
                    <p>{product.productName}</p>
                  </div>
                </div>
                <img
                  width={100}
                  src="https://media-assets.grailed.com/prd/listing/temp/542cf3edad86493a9600e874434abe0c?w=120&fit=clip&q=40&auto=format"
                  alt=""
                />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperslide}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                href={`/profile/designer/${product.userId}`}
              >
                <div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    {product.userName}
                  </div>
                  <span style={{ margin: "10px 0px", color: "black" }}>
                    {" "}
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                    {"  4reivews"}
                  </span>
                  <div style={{ margin: "10px 0px" }}>
                    <p>{product.productName}</p>
                  </div>
                </div>
                <img
                  width={100}
                  src="https://media-assets.grailed.com/prd/listing/temp/542cf3edad86493a9600e874434abe0c?w=120&fit=clip&q=40&auto=format"
                  alt=""
                />
              </Link>
            </SwiperSlide>
          </Swiper>

          <div>
            <h2>Measurements</h2>
            <p>
              Let the seller know youre interested in measurement details Well
              notify you as soon as theyre added
            </p>
            <button className={styles.btn2}>REQUEST MEASUREMENTS</button>
          </div>

          <h2>Description</h2>

          <p>{product.description}</p>
          <div>
            <h2>Tags</h2>
            <p style={{ border: "1px solid black ", padding: "10px 14px" }}>
              # {product.tag.map((tag) => tag.join("#"))}
            </p>
          </div>
          <div className={styles.reportBtns}>
            <button onClick={handleOpen}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                width={20}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
              Report Listing
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                width={20}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Price Comparision
            </button>
          </div>
          <hr />
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <div style={{ display: "flex", marginBottom: "14px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  class="bi bi-lightning-charge"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
                </svg>
                <h2 style={{ fontSize: "19px" }}>
                  Grailed Purchase Protection
                </h2>
              </div>
              <Typography variant="body2" color="text.secondary">
                We want you to feel safe buying and selling on Grailed
                Qualifying orders are covered by our Purchase Protection in the
                rare case something goes wrong
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <h2 style={{ fontSize: "17px", fontWeight: "bold" }}>
                How You are Protected
              </h2>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Your purchase is covered if Grailed finds:
                </Typography>
                <Typography paragraph>
                  The item you purchased materially differs from its description
                  in color condition fabric andor measurement You were sent the
                  wrong item The item's authenticity cannot be verified by u
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
      <div className={styles.sugcol1}>
        <Slider />
      </div>

    
      <Cards />
      <h2 style={{textAlign:"center",margin:"40px 0px"}}>Releted Search</h2>
      <div className={styles.reletedSearch}>
        <p>CK WOOL COAT</p>
        <p>CK WOOL COAT</p>
        <p>'WOOL COAT L</p>
        <p>'WOOL COAT L</p>
        <p>'WOOL COAT L</p>
        <p>'WOOL COAT L</p>
        <p>'WOOL COAT L</p>
        <p>'WOOL COAT L</p>
        <p>'WOOL COAT L</p>
        <p>suprem</p>
      </div>
      <FeCard />
    </>
  );
}

export default ProductDetail;
