import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");
  // const [title, setTitle] = useState("");

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

    // setTitle(json?.data?.cards[2]?.card?.card?.title);
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

  const ResCardWithDiscountLabel = withDiscountLabel(RestaurantCard);

  return (
    <div className="body">
      <div>
        <div className="top-rated">
          <button className="top-rated-btn" onClick={filterTopRatedRes}>
            Top Rated
          </button>
        </div>
        <div className="flex items-center justify-center mb-6">
          <input
            className="w-30 py-2 border border-slate-300 rounded-lg"
            type="text"
            placeholder="Search.."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(e.target.value);
            }}
          />
          <div className="ml-1">
            <button
              className="py-2 px-4 rounded-lg bg-black text-white hover:text-black hover:bg-white"
              onClick={searchRestauantHandler}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* <div>{title}</div> */}
        <div className="flex flex-wrap justify-center items-center">
          {filteredListOfRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <ResCardWithDiscountLabel resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
