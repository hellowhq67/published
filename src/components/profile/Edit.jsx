"use client";
import React, { useState } from "react";
import { UseAuth } from "@/app/context/AuthContext";
import style from "./style.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navigations/Navbar";
import NestedMenu from "../Navigations/NestedMenu";
import Link from "next/link";

function Edit() {
  const { user, updateProfile } = UseAuth();
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const handleUpdateProfile = () => {
    if (!displayName || !bio || !phoneNumber || !location) {
      toast.error("Please fill in all fields.");
      return;
    }
    updateProfile(displayName, bio, phoneNumber, location);
    toast.success("Profile updated successfully!");
  };

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div
        style={{
          margin: "4rem 0px",
          borderBottom: "1px solid black",
          width: "100%",
        }}
      >
        <NestedMenu />
      </div>
      <div className={style.profileEditWrappper}>
        <ul className={style.profileLink}>
          <li>
            <Link href=""> MY ACCOUNT</Link>
          </li>
          <li>
            <Link href="/profile/edit" style={{ textDecoration: "underline" }}>
              {" "}
              PROFILE
            </Link>
          </li>
          <li>
            <Link href="">NOTIFICATIONS </Link>
          </li>
          <li>
            <Link href="">DEVICES </Link>
          </li>
          <li>
            <Link href="/about/contact">HELP</Link>
          </li>
        </ul>
        <div className={style.formWrapper}>
          <h1>My account</h1>
          <h2>Edit Profile</h2>
          <div className={style.formFlex}>
           <div>
            <p>Username</p>
           <input
              type="text"
              placeholder="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
           </div>
           <div>
            <p>ADD Phone Number</p>
           <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
           </div>
          </div>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Europe">Europe</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>

          <button onClick={handleUpdateProfile}>Update Profile</button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
