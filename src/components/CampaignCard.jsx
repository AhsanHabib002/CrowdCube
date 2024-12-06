import { Link } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
  const {
    image,
    title,
    type,
    description,
    minimum_donation_amount,
    deadline,
    user_email,
    user_name,
  } = campaign;

  const formatdeadline = new Date(deadline).toISOString().split("T")[0];
  return (
    
      <tr>
        <td className="border p-2">
          <img className="h-[150px] w-full object-cover" src={image} alt="" />
        </td>
        <td className="border p-2">{title}</td>
        <td className="border p-2">{description}</td>
        <td className="border p-2">{formatdeadline}</td>
        <td className="border p-2 ">
          <Link to={`/campaing-detail/${campaign._id}`}>
            <button className="btn bg-[#BDE345] mt-[30px]">See More</button>
          </Link>
        </td>
      </tr>
    
  );
};

export default CampaignCard;
