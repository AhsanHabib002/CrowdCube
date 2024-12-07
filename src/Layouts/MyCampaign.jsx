import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import MyCampaignTable from "../components/MyCampaignTable";

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    if (user.email) {
      fetch(`http://localhost:5000/mycampaign?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setCampaigns(data));
    }
  }, [user.email]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[800px] mx-auto my-[90px]">
        <h2 className="text-3xl font-semibold">
          My Campaign:{campaigns.length}{" "}
        </h2>

        <div className="mt-[90px]">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border p-2">Title</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Deadline</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <MyCampaignTable
                  key={campaign._id}
                  campaign={campaign}
                ></MyCampaignTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCampaign;
