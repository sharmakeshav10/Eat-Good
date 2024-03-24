import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="flex justify-between shadow-md">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} alt="food-app-logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About</Link>
          </li>
          <li className="px-5">Cart</li>
          <li>Sign In</li>
          <li className="px-5">
            <button
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
