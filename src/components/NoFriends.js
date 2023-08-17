import React from "react";
import SadImg from "../styles/sad.png";
import "../styles/nofriends.css";

const NoFriends = () => {
  return (
    <div>
      <img src={SadImg} alt="SadImg" className="SadImg" />
    </div>
  );
};

export default NoFriends;
