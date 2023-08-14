import React from "react";
import { useSelector } from "react-redux";
import "../styles/friendList.css";
import friendListImg from "../styles/friendList.jpg";
import { BsTelephoneFill } from "react-icons/bs";

const FriendList = ({ friendList }) => {
  const handleCallButtonClick = () => {
    alert("전화걸기");
  };

  return (
    <div>
      {friendList.map((friend, index) => (
        <div key={index} className="image-container">
          {/* <img
            src={friend.getS3Re.imgUrl}
            alt="friendListImg"
            className="friendListImg"
          /> */}
          <img
            src={friendListImg}
            alt="friendListImg"
            className="friendListImg"
          />
          <div>
            <h3 className="container">
              <h2 className="container">{friend.nickname}</h2>
              {friend.birth}&nbsp;
              {friend.gender}
            </h3>
            <button className="callButton" onClick={handleCallButtonClick}>
              <div className="iconImg">
                <BsTelephoneFill />
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
