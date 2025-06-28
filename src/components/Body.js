import RestaurantCard from "./RestaurantCard";

import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { RES_CARD } from "../Utils/constants";
import UserContext from "../Utils/UserContext";
const Body = () => {
  const [listOfRestaurant, setRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRes, setFilterRes] = useState([]);
  const { setUserName, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);
  console.log(listOfRestaurant);

  const fetchData = async () => {
    const data = await fetch(RES_CARD);
    const json = await data.json();
    setRes(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRes(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (!listOfRestaurant || !Array.isArray(listOfRestaurant)) {
    return <Shimmer />;
  }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Opps You are Offline! Check your Internet Contection</h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mx-auto sm:w-[100%] w-88">
      <div className="flex flex-col  justify-between items-center m-2 p-4 ">
        <div className="flex">
          <input
            type="text"
            placeholder="search"
            className="w-68 sm:w-96 border border-gray-300 mx-0 h-12 p-2 rounded-l-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="w-28 sm:w-28 bg-rose-700 text-white h-12 rounded-r-lg"
            onClick={() => {
              const filteredRes = listOfRestaurant.filter((el) =>
                el.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRes(filteredRes);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="flex gap-10 flex-wrap  items-center flex-col sm:flex-row sm:justify-center">
        {filterRes.map((el) => (
          <Link key={el?.info?.id} to={"/restaurant/" + el?.info?.id}>
            <RestaurantCard resData={el} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
