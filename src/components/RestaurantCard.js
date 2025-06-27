import { CDN_URL } from "../Utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className="m-4  p-3 w-52  shadow-xl border border-gray-100 rounded-lg hover:bg-gray-100  flex flex-col justify-between">
    <div>
      <img
        className="rounded-lg h-40 w-52 "
        src={CDN_URL+resData?.info?.cloudinaryImageId}>
      </img>
      <h3 className="font-bold py-2 text-s truncate">{name}</h3>
      <h5 className="truncate text-xs">{cuisines?.join(",")}</h5>
      </div>
      <div className="flex justify-between text-xs m-1 items-center">
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