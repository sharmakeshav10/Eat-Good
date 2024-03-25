import { CDN_URL } from "../utils/constants";

const MenuList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <>
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12 py-4">
              <div>
                <span className="font-medium">{item.card.info.name}</span>
              </div>
              <div>
                <span>
                  ₹{" "}
                  {item.card.info.defaultPrice / 100 ||
                    item.card.info.price / 100}
                </span>
              </div>

              <p className="text-sm text-gray-400 mt-3">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="rounded-lg bg-black text-white py-2 px-4">
                  Add +
                </button>
              </div>
              <img
                className="rounded-lg"
                src={CDN_URL + item.card.info.imageId}
              />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default MenuList;
