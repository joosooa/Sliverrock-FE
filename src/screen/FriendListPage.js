import React from "react";
import { useSelector } from "react-redux";
import FriendList from "../components/FriendList";
import MatchingTab from "../components/MatchingTab";
import Tab from "../components/Tab";
import "../styles/FriendListPage.css";

function FriendListPage() {
  const friendList = useSelector((state) => state.friendList);

  return (
    <div>
      <h1 className="title">{`${friendList.length}명의 실버락이 있어요`}</h1>
      <FriendList friendList={friendList} />
      <MatchingTab />
      <Tab />
    </div>
  );
}

export default FriendListPage;
