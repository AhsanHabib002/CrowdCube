import Navbar from "../components/Navbar";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import { useLoaderData } from "react-router-dom";
import RunCampCard from "../components/RunCampCard";

const HomeLayout = () => {
    const runningCampaign = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <div className="relative">
        <div className="carousel w-full h-[100vh] overflow-hidden">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full ">
            <div className="h-full w-full  flex items-center justify-center relative">
              <div className="absolute w-full h-full bg-[#00000073]"></div>
              <img className="h-full w-full object-cover" src={hero1} alt="" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <div className="h-full w-full flex items-center justify-center relative">
              <div className="absolute w-full h-full bg-[#00000073]"></div>
              <img className="" src={hero2} alt="" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <div className="h-full w-full  flex items-center justify-center relative">
              <div className="absolute w-full h-full bg-[#00000073]"></div>
              <img className="" src={hero3} alt="" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-[15%] left-[20%] flex flex-col md:top-[25%] md:left-20">
          <h1 className=" text-[#FBFF62] text-3xl font-bold md:text-[80px] md:leading-[90px]">
            Explore & Enjoy <br />Crowd Club
          </h1>
          <p className="text-white mt-6 max-w-[550px]">Crowd Club is the biggest solution for generating fund. It connect investors with the people who need investment for their business or if someone need help for personal issue. </p>
        </div>
      </div>
      {/* campaigns card */}
      <div className="py-20 max-w-[90rem] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Running Campagins</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                runningCampaign.map((runcamp)=>(<RunCampCard key={runcamp._id} runcamp={runcamp}></RunCampCard>))
            }
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
