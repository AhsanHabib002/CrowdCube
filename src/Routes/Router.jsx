import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import AddNewCampaign from "../Layouts/AddNewCampaign";
import AllCampaign from "../Layouts/AllCampaign";
import MyCampaign from "../Layouts/MyCampaign";
import MyDonations from "../Layouts/MyDonations";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import Forget from "../components/Pages/Forget";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/allcampaing",
    element: <AllCampaign></AllCampaign>,
    loader: () => fetch("http://localhost:5000/campaings"),
  },
  {
    path: "/campaing-detail",
    element: <h1>Crowd Club campaing-detail layout</h1>,
  },
  {
    path: "/add-new-campaign",
    element: (
      <PrivateRoute>
        <AddNewCampaign></AddNewCampaign>
      </PrivateRoute>
    ),
  },
  {
    path: "/mycampaign",
    element: (
      <PrivateRoute>
        <MyCampaign></MyCampaign>
      </PrivateRoute>
    ),
  },
  {
    path: "/mydonations",
    element: (
        <PrivateRoute>
            <MyDonations></MyDonations>
        </PrivateRoute>
    ),
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forget",
        element: <Forget></Forget>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 Error</h1>,
  },
]);

export default Router;
