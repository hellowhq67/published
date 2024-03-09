
import Profile from "@/components/profile/Profile";
import React from "react";

export default function page({ params: { id } }) {


  return (
    <>
      <Profile userID={id}/>
    </>
  );
}
