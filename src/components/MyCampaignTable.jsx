import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyCampaignTable = ({ campaign }) => {
  const {
    _id,
    image,
    title,
    type,
    description,
    minimum_donation_amount,
    deadline,
    user_email,
    user_name,
  } = campaign;

  const navigate = useNavigate();

  const handleDelet = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://crowd-club-server.vercel.app/campaigns/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your campaign has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
   
      
      <tr>
        <td className="border p-2">{title}</td>
        <td className="border p-2">{description}</td>
        <td className="border p-2">
          {new Date(deadline).toLocaleDateString()}
        </td>
        <td className=" p-2 flex flex-col justify-center items-center gap-2">
          <button
            onClick={() => navigate(`/update-campaign/${_id}`)}
            className="bg-[#BDE345] text-white px-4 py-1 rounded w-full"
          >
            Update
          </button>

          <button
            onClick={() => handleDelet(_id)}
            className="bg-red-500 text-white px-4 py-1 rounded w-full"
          >
            Delete
          </button>
        </td>
      </tr>
  
  );
};

export default MyCampaignTable;
