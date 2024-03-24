import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log(resInfo?.cards[0]?.card?.card?.info.name);
  //   const { name } = resInfo?.cards[0]?.card?.card?.info;

  //   const { itemCards } =
  //     resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;

  return (
    <div>
      <div>
        <h3>{resInfo?.cards[0]?.card?.card?.info?.name}</h3>
        <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</p>
        <p>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.itemCards.map(
            (item) => (
              <>
                <li>{item.card.info.name}</li>
                <li>{"Rs. " + item.card.info.price / 100}</li>
              </>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
