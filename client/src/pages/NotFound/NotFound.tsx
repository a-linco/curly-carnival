import React from "react";
import NotFoundImage from "./jumpscare-horror.gif";
import "./NotFound.css";

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1>404: Not Found</h1>
      <img src={NotFoundImage} alt="Funny Gif" />
    </div>
  );
};

export default NotFound;
