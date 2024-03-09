import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

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
          <li>Sign In</li>
          <button
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
