import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import CampaignCard from "../components/CampaignCard";

const AllCampaign = () => {
  const campaigns = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[90rem] mx-auto py-20">
        <h2 className="text-5xl font-semibold text-center">All Campaigns</h2>
        <div className="mt-[90px] grid gap-4 md:grid-cols-3 justify-center">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCampaign;
