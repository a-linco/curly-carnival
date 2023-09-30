import NotFoundImage from "./jumpscare-horror.gif";
import "./NotFound.style.scss";

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404: Not Found</h1>
      <img src={NotFoundImage} alt="Funny Gif" />
    </div>
  );
}

export default NotFound;
