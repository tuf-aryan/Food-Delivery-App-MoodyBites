import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/createSlice";
const Cart = ()=>{
    const cartItem = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart=()=>{
         dispatch(clearCart());
    }
    return (
        <div className="text-center m-4 p-4">
             <h1 className="font-bold text-2xl">Cart</h1>
             <button className="bg-rose-600 text-white m-4 p-4 rounded lg border-none" onClick=
                {
                    handleClearCart
                }
             >Clear-Cart</button>
             {cartItem.length===0 && <h1>Add some Items your Cart will be empty !!</h1>}
             <div className="w-1/2 m-4 p-4 mx-auto">  <ItemList items={cartItem}/></div>
          
        </div>
    )
}
export default Cart;