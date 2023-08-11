import React from "react";
import "../styles/club.css";
import clubImg from "../styles/club.jpg";

const Club = () => {
  return (
    <div className="image-container">
      <img src={clubImg} alt="clubImg" className="clubImg" />
      <div className="text-overlay">
        <p>산악 동호회</p>
      </div>
      <button className="custom-btn btn-11">문의하기</button>
    </div>
  );
};

export default Club;
