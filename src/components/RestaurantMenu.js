import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log(resInfo?.cards[0]?.card?.card?.info.name);
  //   const { name } = resInfo?.cards[0]?.card?.card?.info;

  //   const { itemCards } =
  //     resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;

  // console.log(resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards);
  console.log(resInfo?.cards[0]?.card?.card?.info);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div>
      <div className="w-6/12 mx-auto my-4  p-4">
        <div className="">
          <h3>{resInfo?.cards[0]?.card?.card?.info?.name}</h3>
          <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</p>

          <button className="border border-gray-200 p-2 rounded-md">
            <span>⭐{resInfo?.cards[0]?.card?.card?.info?.avgRating}</span>
            <span>
              {resInfo?.cards[0]?.card?.card?.info?.totalRatingsString}
            </span>
          </button>
        </div>
      </div>

      {categories &&
        categories.map((category) => (
          <RestaurantCategory data={category.card.card} />
        ))}
    </div>
  );
};

export default RestaurantMenu;
