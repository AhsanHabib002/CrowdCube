
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";

const UpdateCampaign = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const campaign = useLoaderData();

 

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedCampaign = {
      title: event.target.title.value,
      image: event.target.image.value,
      description: event.target.description.value,
      type: event.target.type.value,
      minimum_donation_amount: event.target.minimum_donation_amount.value,
      deadline: event.target.deadline.value,
    };

    fetch(`http://localhost:5000/campaigns/${campaign._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your campaign has been updated.", "success");
          navigate("/mycampaign");
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="mb-10">
        <h2 className="text-2xl text-center font-semibold">Update campaign</h2>
      </div>
      <div className="max-w-[640px] mx-auto bg-white shadow-2xl p-5 rounded-md">
        <form onSubmit={handleUpdate}>
          <div className="md:flex gap-4 w-full">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Campaign Title</span>
              </label>
              <input
                name="title"
                type="text"
                defaultValue={campaign.title}
                placeholder="Campaign title"
                className="input input-bordered "
                required
              />
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Campaign Image</span>
              </label>
              <input
                name="image"
                type="text"
                defaultValue={campaign.image}
                placeholder="Image url"
                className="input input-bordered "
                required
              />
            </div>
          </div>
          <div className="md:flex gap-4 w-full">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Campaign Type</span>
              </label>
              <select
                name="type"
                defaultValue={campaign.type}
                className="select select-bordered"
              >
                <option value="personal issue">Personal Issue</option>
                <option value="startup">Startup</option>
                <option value="business">Business</option>
                <option value="creative ideas">Creative Ideas</option>
              </select>
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Donation Amount</span>
              </label>
              <input
                name="minimum_donation_amount"
                type="number"
                defaultValue={campaign.minimum_donation_amount}
                placeholder="Donation amout"
                className="input input-bordered "
                required
              />
            </div>
          </div>
          <div className="md:flex gap-4 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                defaultValue={campaign.description}
                name="description"
                placeholder="Enter campaign description"
                className="textarea textarea-lg textarea-bordered w-full"
                required
              ></textarea>
            </div>
          </div>
          <div className="md:flex gap-4 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Campaign Deadline</span>
              </label>
              <input
                type="date"
                name="deadline"
                defaultValue={new Date(campaign.deadline).toISOString().split("T")[0]}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-4 w-full">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                name="user_email"
                type="email"
                value={campaign.user_email}
                placeholder="Email"
                className="input input-bordered "
                required
                readOnly
              />
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                name="user_name"
                type="text"
                value={campaign.user_name}
                placeholder="Your Name"
                className="input input-bordered "
                required
                readOnly
              />
            </div>
          </div>
          <div className="mt-[30px]">
            <input
              type="submit"
              value="Update Campaign"
              className="btn bg-[#BDE345] w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCampaign;
