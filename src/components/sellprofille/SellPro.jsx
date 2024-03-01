"use client";
import Navbar from "@/components/Navigations/Navbar";
import NestedMenu from "@/components/Navigations/NestedMenu";
import React, { useState, useEffect } from "react";
import { UseAuth } from "@/app/context/AuthContext";
import style from "./style.module.css";
import Link from "next/link";
import axios from "axios";
const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3001/api/products");
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
export default function SellPro({ userID }) {
  const [loading, setLoading] = useState(true);
  const { user } = UseAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await fetchProducts();
      setProducts(allProducts);
      setLoading(false);
    };

    fetchData();
  }, []);

  // Filter products based on userID
  const filteredProducts = products.filter(
    (product) => product.userId === userID
  );
  const handleDeleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/products/${productId}`);
      console.log("Product deleted successfully:", response.data);
      // Update the products state to remove the deleted product
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ margin: "4rem 0px", borderBottom: "1px solid black" }}>
        <NestedMenu />
      </div>
      <div className={style.profileWrapper}>
        <div className={style.profileCol}>
          <div className={style.prfileRow}>
            <img
              className={style.proImgae}
              src={
                "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1502403816.1643644406&semt=sph"
              }
              alt=""
            />
            <div className={style.prfileFlex}>
              {user ? (
                <div>
                  {user.displayName && <h2>{user.displayName}</h2>}
                  {user.email && <p>Email: {user.email}</p>}
                </div>
              ) : (
                <div>Not logged in</div>
              )}
            </div>
          </div>
          <div className={style.profileInfo}>
            <div>
              <p> No feedback yet</p>
            </div>
            <div>
              <span>0</span>
              <p>Transactions</p>
            </div>
            <div>
              <span>0</span>
              <p>Follweres</p>
            </div>
          </div>
        </div>
        <div className={style.buttonCol}>
          <button
            style={{ background: "black", color: "white" }}
            className={style.edits}
          >
            <Link style={{ color: "white" }} href={`/sell/new/`}>
              + NEW LISTINGS
            </Link>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width={40}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={style.listingsWrapper}>
        <div className={style.listingsWrapperCol}>
          <div>
            <ul className={style.profileLink}>
              <li>
                <h4 href="">MY ITEMS</h4>
              </li>
              <li>
                <Link href="/sell">FOR SELL</Link>
              </li>
              <li>
                <Link href="/sell/sold/">SOLD</Link>
              </li>
              <li>
                <Link href="/sell">DRAFTS</Link>
              </li>
            </ul>
            <ul className={style.profileLink}>
              <li>
                <h4>MY PROFILE</h4>
              </li>
              <li>
                <Link href="/feedback">FEEDBACK</Link>
              </li>
              <li>
                <Link href="/vacation-mode">VACATION MODE</Link>
              </li>
              <li>
                <Link href="/payments">PAYMENTS</Link>
              </li>
              <li>
                <Link href="/settings">SETTINGS</Link>
              </li>
              <li>
                <Link href="/help">HELP</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h1>For Sale</h1>
            {loading ? (
              <p>Loading...</p>
            ) : filteredProducts.length === 0 ? (
              <h2>No items for sale</h2>
            ) : (
              <table className={style.productTable}>
                <thead>
                  <tr>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product._id}>
                      <td>
                        <img src={product.productImage1} alt={product.productName} style={{ width: "50px" }} />
                      </td>
                      <td>{product.productName}</td>
                      <td>${product.price}</td>
                      <td>
                        <button onClick={() => handleDeleteProduct(product._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
