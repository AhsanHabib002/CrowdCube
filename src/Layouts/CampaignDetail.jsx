import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import Footer from "../components/Footer";

const CampaignDetail = () => {
  const detail = useLoaderData();
  const { user } = useContext(AuthContext);
  const formatdeadline = new Date(detail.deadline).toISOString().split("T")[0];
  const currentDate = new Date();
  const deadline = new Date(detail.deadline);

  const handleDonate = () => {
    const deadlineDate = new Date(detail.deadline);
    if (currentDate > deadlineDate) {
      toast.error("Unable to donate. The deadline has passed.");
      return;
    }

    const donationInfo = {
      campaign_id: detail._id,
      image:detail.image,
      title: detail.title,
      type: detail.type,
      description: detail.description,
      minimum_donation_amount: detail.minimum_donation_amount,
      user_email: user.email,
      user_name: user.displayName,
      donated_date: currentDate.toISOString(),
    };
    fetch("http://localhost:5000/donations",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(donationInfo),
    })
    .then((res)=> res.json())
    .then((data)=>{
        if(data.insertedId){
            toast.success("Donated successfully!");
        }
    })
    .catch((error) => {
        console.error("Error donating:", error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      <h2 className="text-3xl font-bold text-center mt-8">{detail.title}</h2>
      <div className="px-2">
        <div className="max-w-[800px] mx-auto p-4 bg-[#FFFFF0] rounded-lg my-8 shadow-2xl ">
          <img
            src={detail.image}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
            alt=""
          />

          <div className="flex flex-col gap-4">
            <div className="badge bg-[#BDE345] p-3">
              <p>
                <span className="font-semibold">Deadline:</span>{" "}
                {formatdeadline}
              </p>
            </div>
            <p>
              <span className="font-semibold">Fund Type:</span> {detail.type}
            </p>
            <p>
              <span className="font-semibold">Description:</span>{" "}
              {detail.description}
            </p>
            <p>
              <span className="font-semibold">Minimum donate amount:</span> $
              {detail.minimum_donation_amount} USD
            </p>
            <p>
              <span className="font-semibold">Person Email:</span> $
              {detail.user_email} USD
            </p>
            <p>
              <span className="font-semibold">Person Email:</span> $
              {detail.user_name} USD
            </p>

            <Link className="relative" data-tooltip-content={
                  currentDate > deadline ? "Deadline is over" : undefined
                }
                data-tooltip-id="userTooltip">
            <Tooltip
                  id="userTooltip"
                  place="bottom"
                  effect="solid"
                  className="text-sm text-gray-700 bg-white border border-gray-300 p-2 rounded-md"
                />
              <button onClick={handleDonate}
                className={`btn w-full ${
                  currentDate > deadline ? "btn-disabled" : "bg-[#BDE345]"
                }`}
                

                
              >
                Donate
              </button>
              
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CampaignDetail;
