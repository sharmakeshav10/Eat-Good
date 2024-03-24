import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, areaName, cloudinaryImageId } =
    resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="w-52 m-4">
      <img
        className="rounded-xl object-cover h-52 w-full"
        alt="image of the restaurant"
        src={CDN_URL + cloudinaryImageId}
      />
      <div>
        <div className="text-lg font-bold">{name}</div>
      </div>

      <div className="text-base font-semibold">
        <span>
          ⭐{avgRating} • {deliveryTime}mins
        </span>
      </div>
      <div className="grid items-center">
        <div className="text-base font-extralight">{cuisines.join(", ")}</div>
        <div className="text-base font-extralight">{areaName}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
