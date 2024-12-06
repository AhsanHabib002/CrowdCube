import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNewCampaign = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    type: "personal issue",
    description: "",
    minimum_donation_amount: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddCampaign = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const image = form.image.value;
    const type = form.type.value;
    const description = form.description.value;
    const minimum_donation_amount = form.title.value;
    const deadline = form.deadline.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;

    const newCampaign = {title, image, type, description, deadline, minimum_donation_amount, user_email, user_name};
   

    if (
      !formData.image ||
      !formData.title ||
      !formData.description ||
      !formData.minimum_donation_amount ||
      !formData.deadline
    ) {
      toast.error("All fields are required!");
      return;
    }

    fetch('http://localhost:5000/campaings', {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(newCampaign)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            toast.success("Campaign added successfully!");
        }
        
    })


    

    setFormData({
      image: "",
      title: "",
      type: "personal issue",
      description: "",
      minimum_donation_amount: "",
      deadline: "",
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="mb-10">
        <h2 className="text-2xl text-center font-semibold">Add new campaign</h2>
      </div>
      <ToastContainer></ToastContainer>
      <div className="max-w-[640px] mx-auto bg-white shadow-2xl p-5 rounded-md">
        <form onSubmit={handleAddCampaign}>
          <div className="md:flex gap-4 w-full">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Campaign Title</span>
              </label>
              <input
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
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
                value={formData.image}
                onChange={handleChange}
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
                value={formData.type}
                onChange={handleChange}
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
                value={formData.minimum_donation_amount}
                onChange={handleChange}
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
                value={formData.description}
                name="description"
                onChange={handleChange}
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
                value={formData.deadline}
                onChange={handleChange}
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
                value={user?.email || ""}
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
                value={user?.displayName || ""}
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
              value="Add Campaign"
              className="btn bg-[#BDE345] w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCampaign;
