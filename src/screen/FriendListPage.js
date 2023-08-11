import React from "react";
import FriendList from "../components/FriendList";
import MatchingTab from "../components/MatchingTab";
import Tab from "../components/Tab";
import "../styles/FriendListPage.css";

function FriendListPage() {
  return (
    <div>
      <h1 className="title">N명의 실버락이 있어요</h1>
      <FriendList />
      <MatchingTab />
      <Tab />
    </div>
  );
}

export default FriendListPage;
