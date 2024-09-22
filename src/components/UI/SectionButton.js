import { useEffect, useState } from "react";

const SectionButton = ({ name, section, number }) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, [section]);

  const handleClick = () => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      scrollToSection(sectionElement);
    }
  };

  const scrollToSection = (sectionElement) => {
    const elementPosition =
      sectionElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - 50; // Offset by 100px

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center justify-center lg:w-1/4 gap-4"
    >
      <h2 className="poppins-medium text-xl">{name}</h2>
      <div
        className={`rounded-full text-2xl poppins-medium w-14 h-14 flex items-center justify-center border border-black transition-colors duration-300 ease-in-out ${
          isSectionVisible
            ? "bg-orange-500 text-white border-orange-500"
            : "group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500"
        }`}
      >
        {number}
      </div>
    </button>
  );
};

export default SectionButton;
