import React from "react";
import Profile from "../components/Profile";
import Tab from "../components/Tab";
import "../styles/HomePage.css";

function MyPage() {
  return (
    <>
      <h1 className="title">내 정보</h1>
      <div className="profile-box">
        <Profile />
      </div>
      <div className="btn-container">
        <button className="custom-btn btn-11">수정하기</button>
      </div>
      <Tab />
    </>
  );
}

export default MyPage;
