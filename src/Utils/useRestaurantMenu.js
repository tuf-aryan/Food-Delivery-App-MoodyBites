import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestraurantMenu = (resId)=>{
    const [resInfo,setResInfo] = useState(null);
     useEffect(()=>{
       fetchData();
     },[resId]); 
     const fetchData=async ()=>{
         const data = await fetch(MENU_API+resId);
   

         const json = await data.json();
         setResInfo(json.data);
     
     }
    return resInfo;
}
export default useRestraurantMenu;