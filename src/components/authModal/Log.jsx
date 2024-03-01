"use client";
import React, { useEffect, useState } from "react";
import { UseAuth } from "@/app/context/AuthContext";
import style from "./style.module.css";
import img from "./google.png";
export default function Log() {
  const { user, googleSignIn, logOut } = UseAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      const singIn = await googleSignIn();
      if (singIn.ok) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);
  return (
    <div className={style.AuthCols}>
      {loading ? null : !user ? (
        <div className={style.btnCol}>
          <h2
            style={{
              fontWeight: "bold",
              margin: "20px 0px",
              textAlign: "start",
              fontSize: "2rem",
            }}
          >
          Log in
          </h2>
          <p style={{ textAlign: "start" }}>
            Login on Grailed you will be able to buy sell
            comment and more
          </p>
          <button className={style.btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-apple"
              viewBox="0 0 16 16"
            >
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
            </svg>{" "}
            <span>Continue with Apple</span>
          </button>
          <button className={style.btn1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
            <span>Continue with Facebook</span>
          </button>
          <button onClick={handleSignIn} className={style.btn2}>
            <img width={26} src={img.src} alt="" />
            <span> Continue with Google</span>
          </button>
        </div>
      ) : (
        <div
          style={{
            fontFamily: "sans-serif",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <h1>Welcome back {user.displayName}</h1>
          <p>
            THE PLATFORM FOR PERSONAL STYLE Buy sell discover authenticated
            pieces from the world top brands
          </p>
        </div>
      )}

    </div>
  );
}
