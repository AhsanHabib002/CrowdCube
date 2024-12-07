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
import CampaignDetail from "../Layouts/CampaignDetail";
import UpdateCampaign from "../Layouts/UpdateCampaign";
import Error from "../Layouts/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    loader: async () => {
      const response = await fetch(
        "https://crowd-club-server.vercel.app/running-campaigns"
      );
      
      return response.json();
    },
  },
  {
    path: "/allcampaing",
    element: <AllCampaign></AllCampaign>,
    loader: async () => {
      const response = await fetch(
        "https://crowd-club-server.vercel.app/campaings"
      );
      return response.json();
    },
  },
  {
    path: "/campaing-detail/:id",
    element: (
      <PrivateRoute>
        <CampaignDetail></CampaignDetail>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://crowd-club-server.vercel.app/campaings/${params.id}`),
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
    path: "/update-campaign/:id",
    element: (
      <PrivateRoute>
        <UpdateCampaign></UpdateCampaign>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://crowd-club-server.vercel.app/campaings/${params.id}`),
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
    element: <Error></Error>,
  },
]);

export default Router;
