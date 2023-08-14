import { configureStore, createSlice } from "@reduxjs/toolkit";

//친구 목록
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
      const { nickname, birth, gender, introduce, getS3Re } = action.payload;
      state.nickname = nickname;
      state.birth = birth;
      state.gender = gender;
      state.introduce = introduce;
      state.getS3Re = getS3Re;
    },
  },
});

//친구 요청 목록
let friendRequestList = createSlice({
  name: "friendRequestList",
  initialState: [
    {
      gender: "여성",
      nickname: "성원",
      birth: "2000",
      region: "서울시 강서구",
      introduce: "성원 만세",
      getS3Res: {
        imgUrl:
          "https://lsw-s3-bucket.s3.ap-northeast-2.amazonaws.com/9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
        fileName: "9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
      },
    },

    {
      gender: "여성",
      nickname: "지원",
      birth: "1955",
      region: "서울시 마포구",
      introduce: "산책 갈사람",
      getS3Res: {
        imgUrl:
          "https://lsw-s3-bucket.s3.ap-northeast-2.amazonaws.com/9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
        fileName: "9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
      },
    },

    {
      gender: "남성",
      nickname: "근육맨",
      birth: "1960",
      region: "서울시 서초구",
      introduce: "3대 500임",
      getS3Res: {
        imgUrl:
          "https://lsw-s3-bucket.s3.ap-northeast-2.amazonaws.com/9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
        fileName: "9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
      },
    },
  ],
  reducers: {
    setFriendRequestList: (state, action) => {
      // 액션 페이로드에서 받은 유저 정보를 상태에 저장
      const { gender, nickname, birth, region, introduce, getS3Res } =
        action.payload;
      state.gender = gender;
      state.nickname = nickname;
      state.birth = birth;
      state.region = region;
      state.introduce = introduce;
      state.getS3Res = getS3Res;
    },
  },
});

export const { setFriendList } = friendList.actions;
export const { setFriendRequestList } = friendRequestList.actions;

export default configureStore({
  reducer: {
    friendList: friendList.reducer,
    friendRequestList: friendRequestList.reducer,
  },
});
