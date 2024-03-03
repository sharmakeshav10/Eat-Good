import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [topRatedResList, setTopRatedResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await response.json();

    setTopRatedResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterTopRatedRes = () => {
    const filteredList = topRatedResList.filter(
      (res) => res.info.avgRating > 4
    );
    setTopRatedResList(filteredList);
    console.log(filteredList);
  };

  return (
    <div className="body">
      <div className="top-rated">
        <button className="top-rated-btn" onClick={filterTopRatedRes}>
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {topRatedResList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
