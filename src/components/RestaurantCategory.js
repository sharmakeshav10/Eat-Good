import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuList from "./MenuList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleAccordionClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleAccordionClick}
        >
          <span className="font-semibold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        {/* accordion body */}
        {showItems && <MenuList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
