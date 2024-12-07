import Navbar from "../components/Navbar";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import annual from "../assets/annualreport.jpg";
import hero3 from "../assets/hero3.jpg";
import { useLoaderData } from "react-router-dom";
import RunCampCard from "../components/RunCampCard";
import Footer from "../components/Footer";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const HomeLayout = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  const runningCampaign = useLoaderData();
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <Navbar></Navbar>

      <div className="relative">
        <div className="carousel w-full h-[40vh] md:h-[90vh] overflow-hidden">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full h-full">
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
          <Fade direction="up" triggerOnce>
            <h1 className=" text-[#FBFF62] text-3xl font-bold md:text-[80px] md:leading-[90px]">
              Explore & Enjoy <br />
              Crowd Club
            </h1>
          </Fade>
          <p className="text-white mt-6 max-w-[550px]">
            Crowd Club is the biggest solution for generating fund. It connect
            investors with the people who need investment for their business or
            if someone need help for personal issue.{" "}
          </p>
          <div>
            <button
              onClick={toggleDark}
              className="p-4 mt-4 rounded-full bg-gray-800 text-white hover:bg-gray-600 dark:bg-gray-200 dark:text-gray-800"
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
      {/* campaigns card */}
      <div className="py-20 max-w-[90rem] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Running Campagins
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {runningCampaign.map((runcamp) => (
            <RunCampCard key={runcamp._id} runcamp={runcamp}></RunCampCard>
          ))}
        </div>
      </div>
      {/* extra section */}
      <div className="py-20 max-w-[90rem] mx-auto flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our 2024 Annual Report
        </h2>
        <p className="max-w-[600px] text-center">
          2024 was a successful year for Crowd Club. We expanded our membership,
          strengthened our community, and maintained a strong financial
          position. We look forward to continued growth and impact in the coming
          year.
        </p>
      </div>
      <div className="pb-20">
        <img className="h-[750px] w-full object-cover" src={annual} alt="" />
      </div>

      <div className="py-20 max-w-[70rem] mx-auto flex flex-col gap-4 px-2">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Ask Questions
        </h2>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is Crowd Club?
          </div>
          <div className="collapse-content">
            <p>
              Crowd Club is a crowdfunding platform that connects investors with
              individuals and businesses seeking financial support. Whether
              you're looking for funding for a business project or need help for
              a personal cause, Crowd Club helps bring people together to make a
              difference.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How do I start a campaign?
          </div>
          <div className="collapse-content">
            <p>
              To start a campaign, simply sign up on our platform, provide the
              necessary details about your project or cause, set a goal amount,
              and share your story. Once your campaign is live, people can
              donate to your cause directly through the platform.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How can I donate to a campaign?
          </div>
          <div className="collapse-content">
            <p>
              You can donate to a campaign by browsing the "Running Campaigns"
              section of the site. Select a campaign that interests you, click
              on it, and you will be redirected to the donation page where you
              can enter your donation amount and payment information.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can I update my campaign after it’s been published?
          </div>
          <div className="collapse-content">
            <p>
              Yes, you can edit your campaign details, upload images, and update
              your goal during the campaign. However, changes to your funding
              goal or deadlines should be done thoughtfully to avoid confusing
              your supporters.
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
