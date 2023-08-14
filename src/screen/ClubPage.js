import React, { useState, useEffect } from "react";
import axios from "axios";

import Club from "../components/Club.js";
import "../styles/ClubPage.css";
import Tab from "../components/Tab.js";

function ClubPage() {
  const [clubName, setClubName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/users:nickName")
      .then((response) => {
        setClubName(response.data.user.name);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching club data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="title">
        {loading ? "Loading..." : `N개의 동호회가 있어요`}
      </h1>
      <div className="club-container">
        <Club clubName={clubName} />
      </div>
      <Tab />
    </div>
  );
}

export default ClubPage;
