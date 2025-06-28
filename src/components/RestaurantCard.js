import { CDN_URL } from "../Utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className=" w-72 h-86 sm:w-56 sm:h-72 m-4 border border-gray-200 shadow-lg  hover:shadow-xl hover:bg-gray-100">
    <div>
      <img
        className="w-72 h-56 sm:w-full sm:h-44 p-4 rounded-lg"
        src={CDN_URL+resData?.info?.cloudinaryImageId}>
      </img>
      <h3 className="font-bold text-gray-700 py-2 text-s mx-3 truncate">{name}</h3>
      <h5 className="truncate mx-3 text-xs">{cuisines?.join(",")}</h5>
      </div>
      <div className="flex justify-between text-xs m-3 items-center">
       <h5 className="border bg-green-600  p-1 rounded-md text-white font-bold mr-1" >{"⭐"}{avgRating}</h5>
       <h5 className=" font-semibold mx-1">{costForTwo}</h5>
       <h5 className=" font-semibold ml-1">{resData?.info?.sla.deliveryTime}Min.</h5>
      </div>
    </div>
  );
};
// export const withPromotedLabel = (RestaurantCard) =>{
//   return ( props )=>{
//     return(
//       <div>
//         <label className="absolute bg-black text-white m-4 p-2 rounded-lg">Promoted</label>
//         <RestaurantCard {...props}/>
//       </div>
//     )
//   }
// }
export default RestaurantCard;