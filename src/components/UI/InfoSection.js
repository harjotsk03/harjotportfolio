const InfoSection = ({ title, points }) => {
  return (
    <div className="flex flex-col gap-1 lg:w-1/4">
      <h2 className="poppins-semibold text-xl">{title}</h2>
      {points.map((point, index) => (
        <p key={index} className="poppins-regular text-lg mb-1">
          {point}
        </p>
      ))}
    </div>
  );
};

export default InfoSection;
