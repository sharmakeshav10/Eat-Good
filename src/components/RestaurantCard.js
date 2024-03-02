import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, areaName, cloudinaryImageId } =
    resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="image of the restaurant"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3>{name}</h3>
      <div className="">
        <span>
          {avgRating}stars - {deliveryTime}mins
        </span>
      </div>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
    </div>
  );
};

export default RestaurantCard;
