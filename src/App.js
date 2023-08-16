import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screen/HomePage";
import MyPage from "./screen/MyPage";
import FriendRequestPage from "./screen/FriendRequestPage";
import FriendListPage from "./screen/FriendListPage";
import ClubPage from "./screen/ClubPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/ClubPage" element={<ClubPage />} />
        <Route path="/FriendRequestPage" element={<FriendRequestPage />} />
        <Route path="/FriendListPage" element={<FriendListPage />} />
      </Routes>
    </>
  );
}

export default App;
