import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import useOnlineStatus from "./utils/useOnlineStatus";

const AppLayout = () => {
  const onlineStatus = useOnlineStatus();
  return onlineStatus === true ? (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  ) : (
    <h1>Looks like you're offline! Please check your internet connection</h1>
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
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
