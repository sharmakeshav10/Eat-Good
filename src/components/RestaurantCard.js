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

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;

    const { aggregatedDiscountInfoV3 } = resData.info;
    return (
      <div className="flex items-center justify-end">
        <div className="absolute p-2 m-3 text-white font-extrabold text-lg">
          {aggregatedDiscountInfoV3.header +
            " " +
            aggregatedDiscountInfoV3.subHeader}
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
