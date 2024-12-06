import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import MyDonationCard from "../components/MyDonationCard";

const MyDonations = () => {
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/mydonations?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching donations:", err);
        setLoading(false);
      });
  }, [user.email]);

  if (loading) {
    return <p className="text-center mt-8">Loading donations...</p>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[800px] mx-auto my-[90px]">
        <h2 className="text-3xl font-semibold">My Donations: {donations.length}</h2>

        <div className="mt-[90px] grid gap-4 md:grid-cols-3 justify-center">
            {
               donations.map((donation)=>(<MyDonationCard key={donation._id} donation={donation}></MyDonationCard>)) 
            }
        </div>
      </div>
    </div>
  );
};

export default MyDonations;
