"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { UploadDropzone } from "@uploadthing/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navigations/Navbar";
import NestedMenu from "../Navigations/NestedMenu";

export default function ContactForm() {
  const [imageUrl, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
  const [listingUrl, setListingUrl] = useState("");
  const [heplTopic, setHelpTopic] = useState("");
  const [reson, setReason] = useState("");
  const [fileUrl, setFileUrl] = useState(""); // State to store the file URL

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (error) => toast.error(error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        email,
        heplTopic,
        reson,
        screenShot: fileUrl, // Using fileUrl instead of imageUrl
        description: listingUrl,
      };

      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Contact created:", data);
        notifySuccess("Form submitted successfully!");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      notifyError("Error submitting form. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "4rem", borderBottom: "1px solid black" }}>
        <NestedMenu />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.col}>
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <p>Listing URL</p>
              <input
                placeholder="Listing URL"
                value={listingUrl}
                onChange={(e) => setListingUrl(e.target.value)}
              />
            </div>
            <div>
              <p>I need help with</p>
              <select
                value={heplTopic}
                onChange={(e) => setHelpTopic(e.target.value)}
              >
                <option value="">Select request reason</option>
                <option value="something_sold">Something I sold</option>
                <option value="something_bought">Something I bought</option>
                <option value="my_account">My account</option>
              </select>
            </div>
            <div>
              <input
                placeholder="Reason"
                value={reson}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>
            <div>
              <h2>Upload Screenshot</h2>
              {!fileUrl && (
                <UploadDropzone
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    const fileUrl = res?.[0]?.url;
                    setFileUrl(fileUrl); // Set the file URL when file is uploaded
                    console.log("File uploaded:", fileUrl);
                  }}
                  onUploadError={(error) => {
                    console.log(error);
                  }}
                />
              )}

              {fileUrl && (
                <div>
                  <img
                    src={fileUrl}
                    className={styles.imgs}
                    alt="Uploaded Image"
                  />
                  <button onClick={() => setFileUrl("")}>Remove Image</button>
                </div>
              )}
            </div>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
