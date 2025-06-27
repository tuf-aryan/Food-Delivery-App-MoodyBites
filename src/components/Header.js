import { LOGO_URL } from "../Utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(loggedInUser);
  return (
    <div className="flex justify-between border border-gray-400  shadow-lg  sticky top-0 z-50 bg-white">
      <div className="w-24">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items items-center">
        <ul className="flex p-8 justify-between ">
          <li className="mx-2">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="mx-4 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-4 font-medium text-lg flex">
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>
          <li className="mx-4 ">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <button
            className="login-btn mx-8 "
            onClick={() => {
              btnName === "Login" ? setbtn("Logout") : setbtn("Login");
            }}
          >
            {btnName}
          </button>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
