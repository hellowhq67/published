"use client";
import Navbar from "@/components/Navigations/Navbar";
import NestedMenu from "@/components/Navigations/NestedMenu";
import React, { useState, useEffect } from "react";
import { UseAuth } from "@/app/context/AuthContext";
import style from "./style.module.css";
import ProductFlter from "../productFilter/ProductFlter";
import Feedback from "@/components/productFilter/Feedback";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase"; // Assuming you have a firebase configuration file

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const { user  } = UseAuth();
  const [location, setLocation] = useState("");
  const [activeTab, setActiveTab] = useState("listings"); // State to track active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            setLocation(userData.location || ""); // Assuming location is stored as a field in the user document
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
    setLoading(false);
  }, [user]);

  return (
    <div>
      <Navbar />
      <div style={{ margin: "4rem 0px", borderBottom: "1px solid black" }}>
        <NestedMenu />
      </div>
      <div className={style.profileWrapper}>
        <div className={style.profileCol}>
          <div className={style.profileRow}>
          <img
             className={style.proImgae}
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1502403816.1643644406&semt=sph"
              alt=""
            />
            <div className={style.profileFlex}>
              {user ? (
                <div>
                  {user.displayName && <h2>{user.displayName}</h2>}
                  {user.email && <p>Email: {user.email}</p>}
                  {location && <p>Location: {location}</p>}
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
              <p>Followers</p>
            </div>
          </div>
        </div>
        <div className={style.buttonCol}>
          <button className={style.editButton}>
            <Link style={{textDecoration:"none" ,color:"black",padding:"2px"}} href="/profile/edit">EDIT PROFILE</Link>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width={40}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={style.tabButton}>
        <span
          className={activeTab === "listings" ? style.activeTab : ""}
          onClick={() => handleTabChange("listings")}
        >
          Listings
        </span>
        <span
          className={activeTab === "feedback" ? style.activeTab : ""}
          onClick={() => handleTabChange("feedback")}
        >
          Feedback
        </span>
      </div>
      <div className={style.tab}>
        <div className={style.divider}></div>
        <div className={style.profileWrapper2}>
          <span>
            0 <span>Listings</span>
          </span>
          <select className={style.selectFilter}>
            <option value="">Sort By: Default</option>
            <option value="">Sort By: Trending</option>
            <option value="">Sort By: Low Price</option>
            <option value="">Sort By: High Price</option>
            <option value="">Sort By: New</option>
          </select>
        </div>
        <div className={style.tabWrapper}>
          {activeTab === "listings" && <ProductFlter />}
          {activeTab === "feedback" && <Feedback />}
        </div>
      </div>
    </div>
  );
}
