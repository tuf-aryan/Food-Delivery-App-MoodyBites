import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/constants";
import { addItem } from "../Utils/createSlice";

const ItemList = ({items})=>{
        const dispatch = useDispatch();
        const handleCart = (item)=>{
            dispatch(addItem(item));
        }
    return (
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="p-2  m-4 border-b-2 border-gray-200 text-left flex justify-between">
                  
                   <div className="w-9/12">
                    <div className="text-lg font-semibold text-gray-700 ">
                        <span>{item.card.info.name}</span>
                        <span>{" "}-₹{" "}{item.card.info.price?item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                     <div className=" rounded-lg mx-4 w-3/12">
                     <div className="absolute"> <button className="p-2 shadow-lg rounded-sm bg-rose-700 text-white" onClick={()=>handleCart(item)}>Add✚</button></div>
                     <img className="rounded-lg w-44 h-36" src={CDN_URL+item.card.info.imageId}></img>
                    
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;