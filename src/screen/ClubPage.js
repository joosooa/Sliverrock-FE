import React from "react";
import Club from "../components/Club.js";
import "../styles/ClubPage.css";
import Tab from "../components/Tab.js";

function ClubPage() {
  return (
    <div>
      <h1 className="title">N개의 동호회가 있어요</h1>
      <div className="club-container">
        <Club />
      </div>
      <Tab />
    </div>
  );
}

export default ClubPage;
