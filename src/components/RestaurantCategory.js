import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data,showItem,setShowIndex})=>{                      
    
    const handleClick = ()=>{
         setShowIndex();
    } ;
    return (
         <div>
          <div className="w-1/2 mx-auto my-4 shadow-lg bg-white border border-gray-100 p-4 rounded-lg ">
          <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-gray-700 text-lg">{data.title  } ({data.itemCards.length})</span>
            <span>⬇️</span>
         </div>
          {showItem && <ItemList items={data.itemCards}/>}
          </div>
         </div>
    )
};
export default RestaurantCategory;