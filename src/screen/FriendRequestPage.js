import React from "react";
import Profile from "../components/Profile";
import "../styles/HomePage.css";
import Tab from "../components/Tab";
import MatchingTab from "../components/MatchingTab";

function FriendRequestPage() {
  return (
    <>
      <h1 className="title">N명의 실버락이 있어요</h1>
      <div className="profile-box">
        <Profile />
      </div>

      <div className="btn-container">
        <button className="custom-btn btn-11">수락</button>
        <button className="custom-btn btn-11">거절</button>
      </div>
      <MatchingTab />
      <Tab />
    </>
  );
}

export default FriendRequestPage;
