import RestaurantCard from "./RestaurantCard";

import { useState, useEffect ,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { RES_CARD } from "../Utils/constants";
import UserContext from "../Utils/UserContext";
const Body = () => {
  const [listOfRestaurant, setRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRes, setFilterRes] = useState([]);
  const {setUserName ,loggedInUser}=useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);
  console.log(listOfRestaurant);

  const fetchData = async () => {
    const data = await fetch(
     RES_CARD
    );
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
  if(onlineStatus===false) return <h1>Opps You are Offline! Check your Internet Contection</h1>

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ml-10">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="search"
            className="search-bar border p-1 border-gray-400 rounded-l-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button className="px-4 p-1 bg-rose-700 text-white border border-gray-400 rounded-r-lg"
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

        <div className="search m-2 p-3 flex items-center"> 
        <button
          className="px-4 py-1 bg-rose-700 text-white border border-gray-400 rounded-lg"
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
         <div className="search m-2 p-3 flex items-center">
         <label className="border border-gray-400 bg-rose-700 text-white  p-1 rounded-l-lg">User Name : </label> 
       <input type="text" className="border border-gray-400 p-1 rounded-r-lg" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
        </div>
       
      </div>
      <div className="flex flex-wrap  justify-left gap-10 ml-8">
        {filterRes.map((el) => (
         <Link key={el?.info?.id} to={"/restaurant/"+el?.info?.id}>
         <RestaurantCard  resData={el} /></Link> 
        ))}
      </div>
    </div>
  );
};
export default Body;
