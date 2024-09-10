import React from "react";

const TopPicks = ({ newsData, loading }) => {
  if (!Array.isArray(newsData)) {
    console.error("Expected an array for newsData");
    return null;
  }
  if (loading) {
    return (
      <div className="flex w-full flex-col gap-3 p-2 rounded-lg shadow-lg bg-white justify-center items-center">
        <div className="spinner"></div>
      </div>
    );
  }
  return (
    <div
      className="flex w-full flex-col gap-3 p-2 rounded-lg shadow-lg bg-white overflow-y-auto scroll-container 
    xl:h-[500px] lg:h-[400px] sm:h-[350px] h-[300px]"
    >
      <h1 className="xl:text-2xl sm:text-lg text-[16px] font-bold">
        Top Picks
      </h1>
      {newsData.map((news, index) => (
        <div
          key={index}
          className="flex flex-row gap-4 bg-[#D9D9D9]/50 rounded-2xl shadow lg:h-24 sm:h-[5rem] h-16 p-2"
        >
          <img
            src={news.image}
            alt="news"
            className="xl:w-20 xl:h-20 w-16 h-16 object-cover rounded-xl"
          />
          <div className="flex flex-col gap-2 justify-between">
            <h2 className="md:text-sm text-[10px] font-bold">{news.title}</h2>
            <a
              href={news.url}
              className="text-black font-medium underline text-[10px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Article
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopPicks;
