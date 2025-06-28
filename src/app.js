import React, { useEffect , useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./Utils/UserContext";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [userName,setUserName]= useState("Aryan");
//  useEffect(()=>{const data = {
//   name:"Aryan",
//  }
// setUserName(data.name)},[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  children:[{
   path:"/",
   element:<Body/>,
  },
{
  path:"/contact",
  element:<Contact/>,
},
{
  path:"/restaurant/:resId",
  element:<RestaurantMenu/>
}, {
  path:"/cart",
  element:<Cart/>,
}
  ],
  errorElement:<Error/>,
},


])
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
