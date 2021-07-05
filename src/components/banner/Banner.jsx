import "./banner_style.css";
import { Link } from "react-router-dom";
function Banner({ img }) {
  return (
    <div
      className="main-banner"
      style={{
        backgroundImage: `url("https://random.imagecdn.app/1300/400")`,
      }}
    >
      <div className="blurry-banner"></div>
      <div className="banner-info">
        <span className="film-of-the-day">Popular Product</span>
        <div className="banner-movie-info">
          <span className="banner-title-georgian">Lorem Ipsum dolor sit</span>
          <span className="banner-title-english">consectetur adipiscing</span>
          <button className="watch-featured">
            <Link to={"/movie?id=8462"}>Add to cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
