import React from "react";
import "./userprofilecard.css";
import profile_icon from "../assets/Passport.jpg";

const UserProfileCard = () => {
  return (
    <div className="upc">
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="my" />
        <div className="profile-title">Nur Irfan Izzat</div>
        <div className="profile-description">
          I am a self-learn front-end programmer. A person with high motivation,
          preserverenece and quality. In everything I do I will give 100% and if
          I fail in anything I do, I will bounce back stronger with everything
          that I can think of.
        </div>
        <div className="profile-button">
          <a href="mailto:irfanizzat@gmail.com">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
