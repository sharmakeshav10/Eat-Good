import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="app-logo" src={LOGO_URL} alt="food-app-logo" />
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Search</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
