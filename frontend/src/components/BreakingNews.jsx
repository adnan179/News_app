import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const BreakingNews = ({ newsData, loading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const articleRef = useRef(null);

  // Cycle through the articles every 5 seconds
  useEffect(() => {
    if (newsData.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [newsData]);

  // GSAP animation when article changes
  useEffect(() => {
    if (articleRef.current && newsData.length > 0) {
      gsap.fromTo(
        articleRef.current,
        { x: "-75%", opacity: 0 }, // start off-screen to the right
        { x: "0%", opacity: 1, duration: 1 } // animate to on-screen
      );
    }
  }, [currentIndex, newsData]);

  if (loading) {
    return (
      <div className="flex bg-white w-full  justify-center items-center p-4 rounded-[16px] shadow-md">
        <div className="spinner"></div> {/* Add your spinner here */}
      </div>
    );
  }
  // Ensure there are articles before destructuring
  if (newsData.length === 0) {
    return (
      <div className="flex bg-white w-full  justify-center items-center p-4 rounded-[16px] shadow-md">
        <h1>No News Available</h1>
      </div>
    );
  }

  // Get current article details
  const { title, image, url } = newsData[currentIndex];

  return (
    <div className="flex bg-white w-full xl:h-[500px] lg:h-[400px] sm:h-[350px] h-[300px] p-4 rounded-[16px] shadow-md">
      <div
        className="relative flex-1 bg-cover bg-center rounded-[12px]"
        style={{ backgroundImage: `url(${image})` }}
        ref={articleRef}
      >
        {/* Title and Read Article link */}
        <div className="border-none absolute -bottom-1 -left-1 xl:p-4 md:p-3 p-2 bg-white rounded-tr-[10px] xl:w-1/3 md:w-[45%] w-1/2">
          <h2 className="text-black xl:text-lg md:text-[15px] text-[10px] font-bold">
            {title}
          </h2>
          <a
            href={url}
            className="text-black font-medium underline xl:text-lg md:text-[15px] text-[10px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
