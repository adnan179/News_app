import React from "react";

const NewsGrid = ({ newsData, loading, visibleNewsCount, onViewMore }) => {
  // Function to shuffle the news items array
  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  // Handle the "View More" button click
  const handleViewMore = () => {
    onViewMore();
  };

  //loading animation
  if (loading) {
    return (
      <div className="flex bg-white w-full  justify-center items-center p-4 rounded-[16px] shadow-md">
        <div className="spinner"></div>
      </div>
    );
  }

  //no news handler
  if (!newsData || newsData.length === 0) {
    return (
      <div className="flex bg-white w-full justify-center items-center p-4 rounded-[16px] shadow-md">
        <h1>No News Available</h1>
      </div>
    );
  }

  // Shuffle the newsData for random display
  const shuffledNews = shuffleArray(newsData);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4">
        {shuffledNews.slice(0, visibleNewsCount).map((news, index) => (
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="flex flex-col gap-3 xl:w-[350px] lg:w-[300px] md:[250px] rounded-lg shadow-lg p-3"
          >
            <img
              src={news.image}
              alt={news.title}
              className="rounded-md w-full md:[200px] object-cover"
            />
            <h2 className="lg:text-lg md:text-sm font-medium">{news.title}</h2>
          </a>
        ))}
      </div>

      {/* Show View More Button only if there are more news to show */}
      {visibleNewsCount < shuffledNews.length && (
        <div className="flex justify-center">
          <button
            onClick={handleViewMore}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsGrid;
