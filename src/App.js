import React, { lazy, Suspense, useEffect, useState } from "react"; // this is coming from node_modules
import ReactDOM from "react-dom";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import RestaurantMenu from "./component/RestaurantMenu";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux"
import appStore from './utils/appStore';
import Cart from "./component/Cart";
// import Grocery from "./component/Grocery";

const Grocery = lazy(() => {
  return import("./component/Grocery");
});

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Authication logic
    const data = {
      name: "Ritu Raj",
    };

    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>

      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>

    </Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId", // this part of url is dynamic
        element: <RestaurantMenu />,
      },
       {
        path: "/cart", // this part of url is dynamic
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
