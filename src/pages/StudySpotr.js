import { useState, useEffect, useRef } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { BarChart } from "@mui/x-charts/BarChart";
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
import initialImage from "../images/initialImage.png";
import showOne from "../images/showOne.png";
import showTwo from "../images/showTwo.png";
import showThree from "../images/showThree.png";
import { FaArrowRight } from "react-icons/fa";
import Modal from "../components/StudySpotr/Modal";

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

  const questionData = {
    1: {
      labels: ["Yes", "No"], // Labels for question 1
      data: [7, 3], // Data for question 1
    },
    2: {
      labels: ["Never", "2-3/month", "2-3/week", "Daily"], // Labels for question 2
      data: [3, 1, 2, 4], // Data for question 2
    },
    3: {
      labels: ["Mobile", "Laptop"], // Labels for question 3
      data: [6, 4], // Data for question 3
    },
  };

  // Get the current question's data and labels, or fallback if not found
  const currentQuestion = questionData[question] || {
    labels: [],
    data: [0, 0],
  };

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
          <p className="poppings-regular text-xl mt-3 w-full leading-relaxed tracking-wide">
            The design and development process for this full-stack application
            involved{" "}
            <span className="poppins-semibold">several key stages</span>. I
            started by identifying{" "}
            <span className="poppins-semibold">user needs</span> and gathering
            feedback. Then, I moved on to designing the user interface,
            developing the application, and{" "}
            <span className="poppins-semibold">testing it for usability</span>.
            Each stage helped ensure the final product was functional and met
            the intended goals.
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
          <h1 className="text-3xl poppins-semibold mt-10 ">Research</h1>
          <div
            id="research"
            className="mt-1 w-full text-left flex flex-col lg:flex-row items-start lg:gap-20 gap-4 "
          >
            <p className="poppins-regular w-full lg:w-1/3 mt-2 text-md leading-loose">
              Before beginning the design and development stage I did a{" "}
              <span className="poppins-semibold"> short survey </span> where I
              asked 10 of my class mates to fill out with{" "}
              <span className="poppins-semibold"> 3 questions </span>, click
              through and see the results for each question.<br></br>
              <br></br>
              <span className="poppins-semibold">
                Identifying Competitors:
              </span>{" "}
              I researched various applications already available in the market,
              and to my surprise there was no other application that did what I
              was wanting to do.
              <br></br>
              <br></br>
              <span className="poppins-semibold">
                Mobile vs Desktop Use:
              </span>{" "}
              One of my questions was aimed at understanding whether users would
              be using the application on mobile or on desktop. The reasoning
              for this question was to make sure I develop the app with a strong
              UI for both views.
              <br></br>
              <br></br>
              <span className="poppins-semibold">Use Frequency:</span> The
              question aimed at how often users would use the application
              allowed me to determine if I should impliment features such as
              notifactions, live tracking of how bust a study spot is, and other
              features based on usage.
            </p>
            <div className="h-full overflow-hidden lg:w-2/3 w-full   mt-2">
              <div className="flex flex-col lg:flex-col rounded-2xl items-start  ">
                <div className="flex flex-row lg:flex-row lg:items-start justify-between  lg:gap-10 w-full">
                  <button
                    className={`bg-gray-200 h-max hidden lg:flex text-xs lg:hover:bg-black lg:hover:text-white poppins-regular transition duration-300 ease-in-out px-3 py-2 flex flex-row items-center gap-1 ${
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
                      className={`bg-gray-200 h-max lg:hover:bg-black text-xs lg:hover:text-white poppins-regular transition duration-300 ease-in-out px-3 py-2 flex flex-row items-center gap-1 ${
                        question === 1 ? "disabled opacity-30" : ""
                      } rounded-lg`}
                      onClick={minusQuestion}
                    >
                      <FiArrowLeft />
                    </button>
                    {/* Question text */}
                    <div className="flex h-24 flex lg:hidden lg:h-24 lg:mt-0 poppins-regular text-sm lg:text-sm overflow-hidden w-1/2 justify-center text-center">
                      {question === 1
                        ? "Would you use an application to help you find study spots that you can rate and see others ratings?"
                        : question === 2
                        ? "How often would you use this application?"
                        : "Would you use the application more on your mobile device or on a laptop?"}
                    </div>
                    <button
                      className={`bg-gray-200 lg:hover:bg-black text-xs lg:hover:text-white h-max poppins-regular transition duration-300 ease-in-out px-3 py-2 flex flex-row items-center gap-1 ${
                        question === 3 ? "disabled opacity-30" : ""
                      } rounded-lg`}
                      onClick={addQuestion}
                    >
                      <FiArrowRight />
                    </button>
                  </div>

                  {/* Question text */}
                  <div className="flex h-24 hidden lg:flex lg:h-24 lg:mt-0 poppins-regular text-lg lg:text-sm overflow-hidden w-1/2 justify-center text-center">
                    {question === 1
                      ? "Would you use an application to help you find study spots that you can rate and see others ratings?"
                      : question === 2
                      ? "How often would you use this application?"
                      : "Would you use the application more on your mobile device or on a laptop?"}
                  </div>
                  {/* Next button for larger screens */}
                  <button
                    className={`bg-gray-200 hidden h-max lg:flex text-xs lg:hover:bg-black lg:hover:text-white poppins-regular transition duration-300 ease-in-out px-3 py-2 flex flex-row items-center gap-1 ${
                      question === 3 ? "disabled opacity-30" : ""
                    } rounded-lg`}
                    onClick={addQuestion}
                  >
                    Next <FiArrowRight />
                  </button>
                </div>

                <div className="-mt-4 lg:-mt-10 -ml-7 flex lg:hidden w-screen h-full overflow-hidden">
                  <div className="lg:mt-4 -mt-6 rounded-2xl bg-opacity-30 lg:py-2">
                    <BarChart
                      xAxis={[
                        {
                          scaleType: "band",
                          data: currentQuestion.labels, // Use the dynamic labels
                        },
                      ]}
                      series={[
                        {
                          data: currentQuestion.data, // Use the dynamic data
                        },
                      ]}
                      width={380}
                      colors={["#c795d5"]}
                      height={300}
                    />
                  </div>
                </div>

                <div className="mt-5 lg:-mt-10 ml-24 ml-auto mr-auto hidden lg:flex w-full h-full overflow-hidden">
                  <div className="lg:mt-4 -mt-6 rounded-2xl bg-opacity-30 lg:py-2">
                    <BarChart
                      xAxis={[
                        {
                          scaleType: "band",
                          data: currentQuestion.labels, // Use the dynamic labels
                        },
                      ]}
                      series={[
                        {
                          data: currentQuestion.data, // Use the dynamic data
                        },
                      ]}
                      width={700}
                      colors={["#c795d5"]}
                      height={600}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:mt-20 mt-14">
            <h1 className="text-3xl poppins-semibold ">Software Design</h1>
            <div className="h-max w-full flex items-start flex-col mt-5 gap-10 lg:gap-32 lg:flex-row">
              <div className="w-full lg:w-1/3 flex flex-col gap-1">
                <h2 className="poppins-semibold text-2xl lg:text-xl">
                  Tech Stack
                </h2>
                <p className="poppins-regular text-lg leading-loose">
                  The reason I decided to use the{" "}
                  <span className="poppins-semibold">MERN</span> stack to build
                  this application was for a few reasons. Firstly, I know{" "}
                  <span className="poppins-semibold">React</span>, I know
                  <span className="poppins-semibold"> JavaScript</span>, and I
                  understand how MongoDB works. My goal for this project was not
                  to learn new languages or frameworks, but to{" "}
                  <span className="poppins-semibold">
                    {" "}
                    learn, understand and deploy a full stack application
                  </span>
                  . Furthermore, I felt as though the stack would work well as
                  Google Maps is very easy to integrate into React, and MongoDB
                  will be good for{" "}
                  <span className="poppins-semibold">
                    {" "}
                    storing data as objects
                  </span>{" "}
                  for easy querying and retreival.
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex flex-col gap-1">
                <h2 className="poppins-semibold text-2xl lg:text-xl">
                  Schema Designs
                </h2>
                <p className="poppins-regular text-lg leading-loose">
                  When designing and developing my schemas, for the user object
                  and the study spot object there were a few reasons for why I
                  did what I did. Firstly, with the user, I made{" "}
                  <span className="poppins-semibold">
                    both a name and username required
                  </span>{" "}
                  so that I users can easily be identified. Secondly, when
                  designing the study spot schema, I decided to
                  <span className="poppins-semibold">
                    {" "}
                    store the comments within an array inside the spot object
                  </span>
                  . The reason for this was to make{" "}
                  <span className="poppins-semibold">
                    {" "}
                    retreival of all the data for each spot easy and fast{" "}
                  </span>
                  . Each comment was its own object with the users name, their
                  ID, and a time stamp for easy identification and organization.
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex flex-col gap-1">
                <h2 className="poppins-semibold text-2xl lg:text-xl">
                  Authentication
                </h2>
                <p className="poppins-regular text-lg leading-loose">
                  When deciding how to do the authentication, I did think about
                  using something such as{" "}
                  <span className="poppins-semibold">OAuth </span> or likewise,
                  however, I wanted to attempt{" "}
                  <span className="poppins-semibold">
                    {" "}
                    building a full authentication system{" "}
                  </span>{" "}
                  on my own. Furthermore, I decided to use{" "}
                  <span className="poppins-semibold"> local storage</span> to
                  store user basic info when they log in. The reason being,
                  using cookies at this point is not worth it as the data being
                  stored is not private, things such as names, username, and
                  ratings. I do at some point plan on integrating cookies as I
                  have already{" "}
                  <span className="poppins-semibold"> implimented JWT </span> on
                  the server side.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:mt-28 mt-14">
            <div className="h-max w-full flex items-center flex-col gap-8 lg:gap-32 lg:flex-row">
              <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <h1 className="text-3xl poppins-semibold ">
                  Initial Prototyping
                </h1>
                <p className="poppins-regular text-lg leading-loose">
                  Initially, I created a simple{" "}
                  <span className="poppins-semibold">React</span> application
                  where I learned and figured out how to integrate the{" "}
                  <span className="poppins-semibold">Google Maps API</span>.
                  Taking time to understand how the maps work, their
                  functionalities, the features I can use with the API. After
                  testing and playing around with the maps and some features I
                  started building an{" "}
                  <span className="poppins-semibold">initial UI</span>, where I
                  knew I wanted to have{" "}
                  <span className="poppins-semibold">search functionality</span>
                  , and the ability to add study spots.
                </p>
              </div>
              <div className="lg:w-2/3 overflow-hidden">
                <img
                  className="object-contain w-full h-full"
                  src={initialImage}
                ></img>
              </div>
            </div>
          </div>

          <Modal />

          <div className="lg:mt-28 mt-14">
            <h1 className="text-3xl poppins-semibold ">Conclusion</h1>
            <p className="poppins-regular text-lg mt-3">
              After completing this project I learned lots of things, as well as
              improving lots of my skills and understanding lots about full
              stack applications.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
