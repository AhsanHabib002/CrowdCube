import { Link, useNavigate } from "react-router-dom";

const RunCampCard = ({ runcamp }) => {
  const { image, title, description, deadline } = runcamp;
  const formatdeadline = new Date(deadline).toISOString().split("T")[0];
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate(`/campaing-detail/${runcamp._id}`)
  };
  return (
      <div className="flex flex-col max-w-96 shadow-xl p-4 rounded-lg h-[100%] mx-auto">
        <div >
          <img
            className="rounded-md object-cover h-[150px] w-full object-cover"
            src={image}
            alt=""
          />
        </div>
        <div className="mt-2">
          <div class="badge p-3 bg-[#BDE345]">{formatdeadline}</div>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <h3 className="text-[22px] font-medium">{title}</h3>

          <p>
            <span className="text-[18px] font-medium">Description:</span>{" "}
            {description}
          </p>
          
            <button onClick={handleNavigate} className="btn w-full bg-[#BDE345] mt-[30px]">
              See More
            </button>
          
        </div>
      </div>
  );
};

export default RunCampCard;
