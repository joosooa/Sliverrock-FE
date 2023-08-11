import React from "react";
import "../styles/friendList.css";
import friendListImg from "../styles/friendList.jpg";

const Club = () => {
  return (
    <div className="image-container">
      <img src={friendListImg} alt="friendListImg" className="friendListImg" />
      <div>
        <h3 className="container">
          <h2 className="container">순자</h2>70년생 여자
        </h3>
        <button className="callButton">전화</button>
      </div>
    </div>
  );
};

export default Club;
