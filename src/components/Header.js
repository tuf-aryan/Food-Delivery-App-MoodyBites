import { LOGO_URL } from "../Utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center border border-gray-400 shadow-lg sticky top-0 z-50 bg-white px-4 py-2">
      {/* Logo */}
      <div className="w-24 mb-2 sm:mb-0">
        <img className="logo w-full" src={LOGO_URL} alt="logo" />
      </div>

      {/* Navigation Items */}
      <div className="nav-items w-full sm:w-auto">
        <ul className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-6">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button
              className="login-btn mr-8 rounded w-8 p-4"
              onClick={() =>
                btnName === "Login" ? setbtn("Logout") : setbtn("Login")
              }
            >
              {btnName}
            </button>
          </li>
          <li className="font-bold text-sm sm:text-base text-center">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
