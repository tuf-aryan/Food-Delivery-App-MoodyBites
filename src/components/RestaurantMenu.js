import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestraurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
  // const [resinfo,setResInfo]=useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resInfo = useRestraurantMenu(resId);

  const { name, cuisines, imageId, price } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((el)=>
        el?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center ">
    <div className="w-80 bg-rose-700 text-white m-auto p-4 shadow-lg rounded-lg  mt-4">
      <h1 className="font-black my-4 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(",")}</p>
      </div>
      {category.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
