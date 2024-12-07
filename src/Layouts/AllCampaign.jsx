import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import CampaignCard from "../components/CampaignCard";
import Footer from "../components/Footer";

const AllCampaign = () => {
  const campaigns = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[90rem] mx-auto py-20">
        <h2 className="text-5xl font-semibold text-center">All Campaigns</h2>
        <div className="mt-[90px]">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border p-2">Campaign Image</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Deadline</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <CampaignCard
                  key={campaign._id}
                  campaign={campaign}
                ></CampaignCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllCampaign;
