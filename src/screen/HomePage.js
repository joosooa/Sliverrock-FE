import React from "react";
import Profile from "../components/Profile";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <>
      <h1>추천 친구</h1>
      <Profile />
      <div className="recommend-btn-container">
        <button className="more-btn">더보기</button>
        <button className="request-btn">친구신청</button>
      </div>
    </>
  );
}

export default HomePage;
