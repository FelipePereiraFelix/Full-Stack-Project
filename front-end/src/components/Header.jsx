import logoSpotify from "../assets/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="logo do spotify" />
      </Link>
      <Link to="/" className="header__link">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;
