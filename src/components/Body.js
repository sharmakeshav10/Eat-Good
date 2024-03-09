import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import RestaurantCardShimmer from "./RestaurantCardShimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await response.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterTopRatedRes = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurants(filteredList);
    console.log(filteredList);
  };

  const searchRestauantHandler = () => {
    const searchRestaurantResults = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredListOfRestaurants(searchRestaurantResults);
  };

  return (
    <div className="body">
      <div className="filter-btn-container" style={{ display: "flex" }}>
        <div className="top-rated">
          <button className="top-rated-btn" onClick={filterTopRatedRes}>
            Top Rated
          </button>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="search.."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(e.target.value);
            }}
          />
          <button onClick={searchRestauantHandler}>Search</button>
        </div>
      </div>
      <div className="res-container">
        {filteredListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
