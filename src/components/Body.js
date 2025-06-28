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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Opps You are Offline! Check your Internet Contection</h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mx-4 md:mx-10">
      <div className="filter flex flex-col md:flex-row md:flex-wrap md:items-center gap-4">
        <div className="search w-full md:w-auto m-2 p-2 flex flex-col md:flex-row">
          <input
            type="text"
            placeholder="search"
            className="search-bar border p-2 w-full md:w-auto border-gray-400 rounded-l-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 w-full md:w-auto bg-rose-700 text-white border border-gray-400 rounded-r-lg"
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

        <div className="search w-full md:w-auto m-2 p-2 flex justify-center md:justify-start items-center">
          <button
            className="px-4 py-2 w-full md:w-auto bg-rose-700 text-white border border-gray-400 rounded-lg"
            onClick={() => {
              const filterList = listOfRestaurant.filter(
                (res) => res?.info?.avgRating > 4.5
              );
              setFilterRes(filterList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="search w-full md:w-auto m-2 p-2 flex flex-col md:flex-row items-center gap-2">
          <label className="border border-gray-400 bg-rose-700 text-white p-2 rounded md:rounded-l-lg w-full md:w-auto text-center md:text-left">
            User Name :
          </label>
          <input
            type="text"
            className="border border-gray-400 p-2 rounded md:rounded-r-lg w-full md:w-auto"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 mx-4 md:ml-8">
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
