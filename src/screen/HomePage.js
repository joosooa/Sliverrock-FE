import React from "react";
import Carousel from "react-material-ui-carousel";
import Profile from "../components/Profile";
import "../styles/HomePage.css";
import Tab from "../components/Tab";

function HomePage() {
  //친구 신청 버튼 클릭시 해당 친구에게 친구 신청 여부를 보내줘야 함
  //function request() {}

  //react material ui carousel 이용해서 옆으로 넘기기
  /*
  let nearUsers = useSelector((state) => state.nearUsers);

  {nearUsers.map((user, i) => {
          return (
            <>
              <div className="profile-box">
                <Profile userIdx={i} nearUser={user} />
              </div>
            </>
          );
        })}
   */
  let item = <Profile />;
  var items = [item, item, item];
  return (
    <>
      <h1 className="title">추천 친구</h1>
      <Carousel>
        {items.map((it) => {
          return it;
        })}
      </Carousel>
      <div className="btn-container">
        <button className="custom-btn btn-11">친구신청</button>
      </div>
      <Tab />
    </>
  );
}

export default HomePage;
