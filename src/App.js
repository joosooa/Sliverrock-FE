import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screen/HomePage";
import MyPage from "./screen/MyPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/MyPage" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
