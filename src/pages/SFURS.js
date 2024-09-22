import { useState, useEffect, useRef } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import slide1 from "../images/studySpotrImages/Study Spotr 1.png";
import slide2 from "../images/studySpotrImages/Study Spotr 2.png";
import slide3 from "../images/studySpotrImages/Study Spotr 3.png";
import slide4 from "../images/studySpotrImages/Study Spotr 4.png";
import { Footer } from "../components/Footer";
import SectionButton from "../components/UI/SectionButton";
import ProjectHero from "../components/UI/ProjectHero";
import image from "../images/sfurobotsoccer.png";
import ProblemSolution from "../components/UI/ProblemSolution";
import ProjectInfo from "../components/UI/ProjectInfo";
import Carousel from "../components/UI/Carousel";
import Loading from "../components/UI/Loading";

export const SFURS = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [slide1, slide2, slide3, slide4];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const processRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFixed(false); // Unfix when it's back in view.
        } else {
          setIsFixed(true); // Fix it when it's out of view.
        }
      },
      { threshold: 0.1 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
    };
  }, []);

  const problemText = `Before beginning this project, I had not built a 
  <span class="poppins-semibold">full stack application</span> 
  where both front and back end were to be hosted for real users to be able to use the application.<br><br>
  Furthermore, the question 
  <span class="poppins-semibold">"where should we go study today?"</span> 
  is a common one for all students. Finding places to study that have 
  everything you need as a student can be difficult. Sometimes there is no wifi, or outlets to charge a phone and laptop.<br>
  Other times you need somewhere quiet to study but can never seem to find one.`;

  const solutionText = `Study Spotr gives students study spots near them, and all around the world. It is now as easy as searching a location using the 
  <span class="poppins-semibold">search functionality</span>, or finding a spot using the 
  <span class="poppins-semibold">interactive map</span> or just scrolling through the list of locations and finding one that 
  meets your needs.<br><br> Each spot will tell the user if that location has 
  <span class="poppins-semibold">wifi</span>, 
  <span class="poppins-semibold">outlets</span>, 
  <span class="poppins-semibold">silent spaces</span>, 
  <span class="poppins-semibold">whiteboards</span>, and if 
  <span class="poppins-semibold">ID</span> is required to get in to 
  the study spot. Each spot will also be rated by other users who may have been there to give an accurate rating on the study spot.<br>
  Using the <span class="poppins-semibold">MERN</span> stack along with the 
  <span class="poppins-semibold">Google Maps API</span> I was able to build a usable, 
  <span class="poppins-semibold">scalable</span>, and interactive 
  full stack application that I hope to get 100+ active study spots on within the next few months.`;

  const myRolePoints = ["Designer", "Developer"];
  const toolsPoints = [
    "MERN stack",
    "TailwindCSS",
    "Google Maps API",
    "Vercel & Render",
    "Figma",
  ];
  const timelinePoints = [
    "Ongoing project",
    "Started August 2024",
    "First Release October 2024",
  ];
  const nextStepsPoints = [
    "Add image uploading, use AWS S3 for storing images",
    "Complete authentication and user registration functionality",
    "Finish and tidy up the UI",
  ];

  return (
    <>
      <div className="lg:px-48 fadeInUpFast px-10 pt-24 lg:pt-20 flex flex-col">
        <ProjectHero
          name="SFU Robot Soccer Website"
          description="Robot Soccer club at Simon Fraser University, a design and developed website"
          image={image}
          buttonColor="hover:text-red-500"
          github="https://github.com/SFURobotSoccer/sfurobotsoccerwebsitedashboard"
          website="https://www.sfurobotsoccer.com/"
        />

        <div className="w-full h-32 flex flex-col items-center justify-center ">
          <h3 className="poppins-medium flex flex-col items-center">
            More coming soon
          </h3>
          <Loading />
        </div>

        {/* <ProblemSolution
          problemText={problemText}
          solutionText={solutionText}
        />

        <ProjectInfo
          myRolePoints={myRolePoints}
          toolsPoints={toolsPoints}
          timelinePoints={timelinePoints}
          nextStepsPoints={nextStepsPoints}
        />

        <Carousel
          images={images}
          currentIndex={currentIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
          setCurrentIndex={setCurrentIndex}
        />

        <div className="w-full h-max mt-16">
          <h2 className="poppins-semibold text-4xl leading-tight">
            Design and Development Process
          </h2>
          <p className="poppings-regular text-xl mt-3 w-full leading-relaxed">
            There were 5 main stages to designing and developing this full stack
            application. I did a{" "}
            <span className="poppins-semibold"> small survey</span> in order to
            see if this application was going to be useful, that was my main
            goal out of building my next project,
            <span className="poppins-semibold">
              {" "}
              something people actually need, want, and would use
            </span>
            .
          </p>

          <div
            className={`w-full overflow-scroll noScrollBar bg-white h-max mt-5 lg:mt-0 py-10 z-10 flex lg:flex-row gap-10 justify-between rounded-2xl`}
          >
            <SectionButton name="Research" section="research" number="1" />
            <SectionButton name="Design" section="design" number="2" />
            <SectionButton name="Testing" section="testing" number="3" />
            <SectionButton
              name="Prototyping"
              section="prototyping"
              number="4"
            />
            <SectionButton name="Details" section="details" number="5" />
          </div>

          <div id="research" className="mt-8">
            <h1 className="text-3xl poppins-semibold ">Research</h1>
            <div className="h-max w-full"></div>
          </div>

          <div id="design" className="mt-8">
            <h1 className="text-3xl poppins-semibold ">UI & Software Design</h1>
            <div className="h-max w-full"></div>
          </div>
          <div id="testing" className="mt-8">
            <h1 className="text-3xl poppins-semibold ">Testing Phases</h1>
            <div className="h-max w-full"></div>
          </div>
          <div id="prototyping" className="mt-8">
            <h1 className="text-3xl poppins-semibold ">Prototyping</h1>
            <div className="h-max w-full"></div>
          </div>
          <div id="details" className="mt-8">
            <h1 className="text-3xl poppins-semibold ">Other Details</h1>
            <div className="h-max w-full"></div>
          </div> */}
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
};
