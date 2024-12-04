import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "/allcampaing",
        element: <h1>Crowd Club allcampaing layout</h1>
    },
    {
        path: "/campaing-detail",
        element: <h1>Crowd Club campaing-detail layout</h1>
    },
    {
        path: "/add-new-campaign",
        element: <h1>Crowd Club add-new-campaign layout</h1>
    },
    {
        path: "/mycampaign",
        element: <h1>Crowd Club mycampaign layout</h1>
    },
    {
        path: "/mydonations",
        element: <h1>Crowd Club mydonations layout</h1>
    },
    {
        path: "/auth",
        element: <h1>Crowd Club auth layout</h1>
    },
    {
        path: "*",
        element: <h1>404 Error</h1>
    },
])

export default Router;