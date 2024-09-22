const ProblemSolution = ({ problemText, solutionText }) => {
  return (
    <div className="flex flex-col mt-20 lg:flex-row gap-8 lg:gap-20 justify-around">
      <div className="flex flex-col gap-3 lg:w-1/2">
        <h2 className="poppins-semibold text-3xl">Problem</h2>
        <p
          className="poppins-regular text-lg mb-1 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: problemText }}
        />
      </div>
      <div className="flex flex-col gap-3 lg:w-1/2">
        <h2 className="poppins-semibold text-3xl">Solution</h2>
        <p
          className="poppins-regular text-lg mb-1 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: solutionText }}
        />
      </div>
    </div>
  );
};

export default ProblemSolution;
