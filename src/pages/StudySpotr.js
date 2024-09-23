import { useState, useEffect, useRef } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import slide1 from "../images/studySpotrImages/Study Spotr 1.png";
import slide2 from "../images/studySpotrImages/Study Spotr 2.png";
import slide3 from "../images/studySpotrImages/Study Spotr 3.png";
import slide4 from "../images/studySpotrImages/Study Spotr 4.png";
import { Footer } from "../components/Footer";
import SectionButton from "../components/UI/SectionButton";
import ProjectHero from "../components/UI/ProjectHero";
import image from "../images/studySpotr.png";
import ProblemSolution from "../components/UI/ProblemSolution";
import ProjectInfo from "../components/UI/ProjectInfo";
import Carousel from "../components/UI/Carousel";
import Loading from "../components/UI/Loading";
import mobile from "../images/studySpotrImages/mobileUse.png";
import wouldUse from "../images/studySpotrImages/wouldUse.png";
import often from "../images/studySpotrImages/oftenUse.png";
import { PieChart } from "@mui/x-charts/PieChart";
import { BiBorderAll } from "react-icons/bi";

export const StudySpotr = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [slide1, slide2, slide3, slide4];
  const [question, setQuestion] = useState(1);

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

  const wouldUse = [
    {
      label: "Yes",
      value: 70.0,
    },
    {
      label: "No",
      value: 30.0,
    },
  ];

  const device = [
    {
      label: "Mobile",
      value: 60.0,
    },
    {
      label: "Desktop",
      value: 40.0,
    },
  ];

  const often = [
    {
      label: "Never",
      value: 30.0,
    },
    {
      label: "Few times a month",
      value: 10.0,
    },
    {
      label: "Daily",
      value: 20.0,
    },
    {
      label: "2-3 times a week",
      value: 40.0,
    },
  ];

  const addQuestion = () => {
    if (question != 3) {
      setQuestion(question + 1);
    }
  };

  const minusQuestion = () => {
    if (question != 1) {
      setQuestion(question - 1);
    }
  };

  const getPieParams = () => {
    const isMobile = window.innerWidth <= 768; // Example breakpoint for mobile
    return {
      height: 300,
      width: 400,
      slotProps: { legend: { hidden: true } },
    };
  };

  const pieParams = getPieParams();

  const valueFormatter = (item) => `${item.value}%`;

  const palette = ["#E55437", "#79963c"];
  const palette2 = ["#776cb2", "#96643C", "#79963c", "#667fb5"];

  return (
    <>
      <div className="lg:px-48 fadeInUpFast px-10 pt-24 lg:pt-20 flex flex-col">
        <ProjectHero
          name="Study Spotr"
          description="A study spot finder where users can find, add, and rate study spots
          near them or anywhere around the world"
          image={image}
          buttonColor="hover:text-orange-500"
          github="https://github.com/harjotsk03/studySpotter"
          website="https://study-spotter-two.vercel.app/"
        />
        <ProblemSolution
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

        <div className="w-full h-max mt-16 text-left">
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

          {/* <div
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
          </div> */}

          <div id="research" className="mt-10 w-full text-left ">
            <h1 className="text-3xl poppins-semibold ">Research</h1>
            <p className="poppins-regular mt-2 ml-auto mr-auto text-lg leading-relaxed">
              Before beginning the design and development stage I did a{" "}
              <span className="poppins-semibold"> short survey </span> where I
              asked 10 of my class mates to fill out with{" "}
              <span className="poppins-semibold"> 3 questions </span>, below you
              can click through and see the results for each question.
            </p>
            <div className="h-max w-full">
              {/* <div className="w-80 h-80 border-2 border-red-500">
                <img
                  src={wouldUse}
                  className="w-full h-full object-cover"
                  alt="Image description"
                />
              </div> */}

              <div className="flex flex-col lg:flex-col mt-6 lg:mt-6 lg:p-10 lg:bg-gray-100 bg-opacity-40 rounded-2xl items-start">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full">
                  <button
                    className={`bg-gray-200 h-max hidden lg:flex lg:hover:bg-black lg:hover:text-white poppins-regular transition duration-300 ease-in-out px-3 py-2 flex flex-row items-center gap-1 ${
                      question === 1 ? "disabled opacity-30" : ""
                    } rounded-lg`}
                    onClick={minusQuestion}
                  >
                    <span className="hidden lg:block">
                      <FiArrowLeft />
                    </span>{" "}
                    Back
                  </button>
                  <div className="flex flex-row justify-between lg:hidden">
                    <button
                      className={`bg-gray-200 h-max lg:hover:bg-black lg:hover:text-white poppins-regular transition duration-300 ease-in-out px-3 py-2 flex flex-row items-center gap-1 ${
                        question === 1 ? "disabled opacity-30" : ""
                      } rounded-lg`}
                      onClick={minusQuestion}
                    >
                      <FiArrowLeft />
                      Back
                    </button>
                    <button
                      className={`bg-gray-200 lg:hover:bg-black lg:hover:text-white poppins-regular transition duration-300 ease-in-out px-3 py-2 flex flex-row items-center gap-1 ${
                        question === 3 ? "disabled opacity-30" : ""
                      } rounded-lg`}
                      onClick={addQuestion}
                    >
                      Next <FiArrowRight />
                    </button>
                  </div>
                  <p className="flex h-24 lg:h-max lg:mt-0 mt-3 poppins-regular text-lg lg:text-xl">
                    {question === 1
                      ? "Would you use an application to help you find study spots that you can rate and see others ratings?"
                      : question === 2
                      ? "How often would you use this application?"
                      : "Would you use the application more on your mobile device or on a laptop?"}
                  </p>
                  <button
                    className={`bg-gray-200 hidden h-max lg:flex lg:hover:bg-black lg:hover:text-white poppins-regular transition duration-300 ease-in-out px-3 py-2 flex flex-row items-center gap-1 ${
                      question === 3 ? "disabled opacity-30" : ""
                    } rounded-lg`}
                    onClick={addQuestion}
                  >
                    Next <FiArrowRight />
                  </button>
                </div>
                {question === 1 ? (
                  <div className="pl-5 mt-5 lg:mt-0 lg:pl-32 ml-auto mr-auto">
                    <div className=" lg:mt-4 -mt-6 rounded-2xl bg-opacity-30 lg:py-2  ">
                      <PieChart
                        colors={palette2}
                        series={[
                          {
                            data: often,
                            highlightScope: {
                              fade: "global",
                              highlight: "item",
                            },
                            faded: {
                              innerRadius: 30,
                              additionalRadius: -30,
                              color: "gray",
                            },
                            valueFormatter,
                          },
                        ]}
                        {...pieParams}
                      />
                    </div>
                  </div>
                ) : question === 2 ? (
                  <div className="pl-5 mt-5 lg:mt-0 lg:pl-32 ml-auto mr-auto">
                    <div className=" lg:mt-4 -mt-6 rounded-2xl bg-opacity-30 lg:py-2  ">
                      <PieChart
                        colors={palette}
                        series={[
                          {
                            data: wouldUse,
                            highlightScope: {
                              fade: "global",
                              highlight: "item",
                            },
                            faded: {
                              innerRadius: 30,
                              additionalRadius: -30,
                              color: "gray",
                            },
                            valueFormatter,
                          },
                        ]}
                        {...pieParams}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="pl-5 mt-5 lg:mt-0 lg:pl-32 ml-auto mr-auto">
                    <div className=" lg:mt-4 -mt-6 rounded-2xl bg-opacity-30 lg:py-2  ">
                      <PieChart
                        colors={palette}
                        series={[
                          {
                            data: device,
                            highlightScope: {
                              fade: "global",
                              highlight: "item",
                            },
                            faded: {
                              innerRadius: 30,
                              additionalRadius: -30,
                              color: "gray",
                            },
                            valueFormatter,
                          },
                        ]}
                        {...pieParams}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full h-32 flex items-center flex-col justify-center ">
            <h3 className="poppins-medium flex flex-col items-center">
              More coming soon
            </h3>
            <Loading />
          </div>
          {/*           
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
        </div>
      </div>
      <Footer />
    </>
  );
};
