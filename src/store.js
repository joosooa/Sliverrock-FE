import { configureStore, createSlice } from "@reduxjs/toolkit";

//로그인 시 제공되는 유저정보 및 토큰
let friendList = createSlice({
  name: "friendList",
  initialState: [
    {
      nickname: "지원",
      birth: "1955",
      gender: "여성",
      introduce: "산책 갈사람",
      getS3Re: {
        imgUrl:
          "https://lsw-s3-bucket.s3.ap-northeast-2.amazonaws.com/9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
        fileName: "9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
      },
    },

    {
      nickname: "근육맨",
      birth: "1960",
      gender: "남성",
      introduce: "3대 500임",
      getS3Re: {
        imgUrl:
          "https://lsw-s3-bucket.s3.ap-northeast-2.amazonaws.com/9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
        fileName: "9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
      },
    },
  ],
  reducers: {
    setFriendList: (state, action) => {
      // 액션 페이로드에서 받은 유저 정보를 상태에 저장
      const { nickname, birth, gender, introduce, getS3Re } = action.payload;
      state.nickname = nickname;
      state.birth = birth;
      state.gender = gender;
      state.introduce = introduce;
      state.getS3Re = getS3Re;
    },
  },
});

export const { setFriendList } = friendList.actions;

export default configureStore({
  reducer: {
    friendList: friendList.reducer,
  },
});
