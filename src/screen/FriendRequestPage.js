import React, { useEffect } from "react";
import Profile from "../components/Profile";
import "../styles/HomePage.css";
import Tab from "../components/Tab";
import MatchingTab from "../components/MatchingTab";
import { useDispatch, useSelector } from "react-redux";
import axios from "../app/axios";
import { setFriendRequestList } from "../app/store";
import Carousel from "react-material-ui-carousel";

function FriendRequestPage() {
  let friendRequestList = useSelector((state) => state.friendRequestList);
  const dispatch = useDispatch();

  useEffect(() => {
    // 백엔드에서 매칭 친구 목록을 가져오는 비동기 함수
    const fetchFriendRequestList = async () => {
      try {
        const response = await axios.get("/matching");
        dispatch(setFriendRequestList(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchFriendRequestList();
  }, [dispatch]);
  //수락, 거절 onclick함수 작성해야함

  return (
    <>
      <h1 className="title">{`${friendRequestList.length}명의 실버락이 있어요`}</h1>
      <div className="profile-box">
        <Carousel>
          {friendRequestList.map((user) => {
            return (
              <>
                <Profile user={user} />
              </>
            );
          })}
        </Carousel>
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
