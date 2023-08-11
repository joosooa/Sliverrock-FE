import "../styles/Profile.css";
import profileImg from "../styles/profile.jpg";

function Profile() {
  return (
    <div className="box-container">
      <div className="profile-box">
        <div className="profile-img-box">
          <img className="profile-img" src={profileImg} alt="profile-img"></img>
        </div>
        <div className="profile-info">
          <h4 className="profile-info-text">이름 </h4>
          <h4 className="profile-info-text">나이 년생</h4>
          <h4 className="profile-info-text">지역 </h4>
          <h4>소개 </h4>
        </div>
      </div>
    </div>
  );
}

export default Profile;
