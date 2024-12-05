import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import AddNewCampaign from "../Layouts/AddNewCampaign";
import AllCampaign from "../Layouts/AllCampaign";
import MyCampaign from "../Layouts/MyCampaign";
import MyDonations from "../Layouts/MyDonations";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../components/Pages/Login";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "/allcampaing",
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch('http://localhost:5000/campaings')
    },
    {
        path: "/campaing-detail",
        element: <h1>Crowd Club campaing-detail layout</h1>
    },
    {
        path: "/add-new-campaign",
        element: <AddNewCampaign></AddNewCampaign>
    },
    {
        path: "/mycampaign",
        element: <MyCampaign></MyCampaign>
    },
    {
        path: "/mydonations",
        element: <MyDonations></MyDonations>
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path:"/auth/login",
                element: <Login></Login>,
            },
            {
                path:"/auth/register",
                element: <h2>This is Register</h2>
            },
        ]
    },
    {
        path: "*",
        element: <h1>404 Error</h1>
    },
])

export default Router;