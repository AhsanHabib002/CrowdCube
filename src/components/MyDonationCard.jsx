const MyDonationCard = ({ donation }) => {
  const {
    image,
    title,
    type,
    description,
    minimum_donation_amount,
    deadline,
    user_email,
    user_name,
  } = donation;
  

  return (
    <div>
      <div className="flex flex-col max-w-96 shadow-xl p-4 rounded-lg h-[100%]">
        <div>
          <img className="rounded-md object-cover" src={image} alt="" />
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <h3 className="text-[22px] font-medium">{title}</h3>
          
          <p>
            <span className="text-[18px] font-medium">Description:</span>{" "}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyDonationCard;
