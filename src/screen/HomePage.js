import React from "react";
import Profile from "../components/Profile";
import "../styles/HomePage.css";
import Tab from "../components/Tab";

function HomePage() {
  return (
    <>
      <h1 className="title">추천 친구</h1>
      <div className="profile-box">
        <Profile />
      </div>
      <div className="btn-container">
        <button className="custom-btn btn-11">친구신청</button>
      </div>
      <Tab />
    </>
  );
}

export default HomePage;
