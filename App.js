import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="app-logo"
          src="https://www.creativefabrica.com/wp-content/uploads/2018/10/Fast-Delivery-food-logo-by-DEEMKA-STUDIO-580x406.jpg"
          alt="food-app-logo"
        />
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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="image of the restaurant"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/03501c33ecb3a3105124441e541e6fe4"
      />

      <h3>McDonald's</h3>
      <div className="">
        <span>4.5 - 20-25mins</span>
      </div>
      <p>Burgers, Beverages</p>
      <p>Shivajinagar</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="res-container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />

      <RestaurantCard />

      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />

      <RestaurantCard />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
