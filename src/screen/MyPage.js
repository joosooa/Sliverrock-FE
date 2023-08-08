import React from "react";
import Profile from "../components/Profile";

function MyPage() {
  return (
    <>
      <h1>내 정보</h1>
      <Profile />
      <button className="edit-btn">수정하기</button>
    </>
  );
}

export default MyPage;
