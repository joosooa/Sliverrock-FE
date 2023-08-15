import React from "react";
import "../styles/friendList.css";
import friendListImg from "../styles/friendList.jpg";
import { BsTelephoneFill } from "react-icons/bs";
import Carousel from "react-material-ui-carousel";

function FriendList(props) {
  const handleCallButtonClick = () => {
    alert("전화걸기");
  };

  let imgUrl = props.getS3Res.imgUrl;

  return (
    <div>
      <Carousel>
        {props.map((friend, index) => (
          <div key={index} className="image-container">
            <img src={imgUrl} alt="friendListImg" className="friendListImg" />
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
      </Carousel>
    </div>
  );
}

export default FriendList;
