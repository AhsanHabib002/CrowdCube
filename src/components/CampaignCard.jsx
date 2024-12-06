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
    <div>
      <div className="flex flex-col max-w-96 shadow-xl p-4 rounded-lg h-[100%]">
        <div>
          <img className="rounded-md object-cover" src={image} alt="" />
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <h3 className="text-[22px] font-medium">{title}</h3>
          <p className="text-[14px] text-base-400">
            <span className="font-medium">Campaign deadline:</span> {formatdeadline}
          </p>

          <p><span className="text-[18px] font-medium">Description:</span> {description}</p>
        </div>

        <Link to={`/campaing-detail/${campaign._id}`}><button className="btn bg-[#BDE345] mt-[30px]">See More</button></Link>
      </div>
    </div>
  );
};

export default CampaignCard;
