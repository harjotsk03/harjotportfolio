import InfoSection from "./InfoSection";

const ProjectInfo = ({
  myRolePoints,
  toolsPoints,
  timelinePoints,
  nextStepsPoints,
}) => {
  return (
    <div className="w-full h-max mt-16 lg:mt-32 px-0 lg:px-20 lg:py-10 lg:bg-gray-100 flex flex-col lg:flex-row gap-10 justify-between lg:bg-opacity-50 rounded-2xl">
      <InfoSection title="My Role" points={myRolePoints} />
      <InfoSection title="Tools" points={toolsPoints} />
      <InfoSection title="Timeline" points={timelinePoints} />
      <InfoSection title="Next Steps" points={nextStepsPoints} />
    </div>
  );
};

export default ProjectInfo;
