import React from "react";
import { useSelector } from "react-redux";
import FriendRequestList from "../components/FriendRequestList";
import "../styles/HomePage.css";
import Tab from "../components/Tab";
import MatchingTab from "../components/MatchingTab";

function FriendRequestPage() {
  const friendRequestList = useSelector((state) => state.friendRequestList);

  return (
    <>
      <h1 className="title">{`${friendRequestList.length}명의 실버락 신청이 왔어요`}</h1>
      <div className="profile-box">
        <FriendRequestList friendRequestList={friendRequestList} />
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
