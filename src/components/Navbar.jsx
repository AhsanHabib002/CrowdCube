import { Link, NavLink } from "react-router-dom";
import logo from "../assets/crowdlogo.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const {user} = useContext(AuthContext);
  return (
    <div className="p-[0px] md:p-[30px]">
      <div className="max-w-[120rem] mx-auto ">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-6 shadow"
              >
                <NavLink to="/" className="py-2 font-medium text-[18px]">
                  Home
                </NavLink>
                <NavLink
                  to="/allcampaing"
                  className="py-2 font-medium text-[18px]"
                >
                  All Campaign
                </NavLink>
                <NavLink
                  to="/add-new-campaign"
                  className="py-2 font-medium text-[18px]"
                >
                  Add New Campaign
                </NavLink>
                <NavLink
                  to="/mycampaign"
                  className="py-2 font-medium text-[18px]"
                >
                  My Campaign
                </NavLink>
                <NavLink
                  to="/mydonations"
                  className="py-2 font-medium text-[18px]"
                >
                  My Donations
                </NavLink>
              </ul>
            </div>
            <div className="flex gap-1 justify-start items-end">
              <img src={logo} alt="crowd-club logo" />
              <a className="text-[12px] md:text-xl font-bold">rowd Club</a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex border border-black rounded-[50px] backdrop-blur-sm">
            <ul className="menu menu-horizontal px-1">
              <div className="my-2">
                <NavLink to="/" className="font-medium mx-3">
                  Home
                </NavLink>
                <NavLink to="/allcampaing" className="font-medium mx-3">
                  All Campaign
                </NavLink>
                <NavLink to="/add-new-campaign" className="font-medium mx-3">
                  Add New Campaign
                </NavLink>
                <NavLink to="/mycampaign" className="font-medium mx-3">
                  My Campaign
                </NavLink>
                <NavLink to="/mydonations" className="font-medium mx-3">
                  My Donations
                </NavLink>
              </div>
            </ul>
          </div>
          <div className="navbar-end">
            <Link to="/auth/login">
              <a className="btn bg-[#BDE345] text-white">Log In</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
