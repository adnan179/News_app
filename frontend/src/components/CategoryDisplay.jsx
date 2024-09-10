import React from "react";

const CategoryDisplay = ({ newsData = {}, category, loading }) => {
  if (loading) {
    return (
      <div className="flex bg-white w-full  justify-center items-center p-4 rounded-[16px] shadow-md">
        <div className="spinner"></div>
      </div>
    );
  }
  if (!newsData || Object.keys(newsData).length === 0) {
    return (
      <div className="flex bg-white w-full justify-center items-center p-4 rounded-[16px] shadow-md">
        <h1>No News Available</h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-3 bg-white w-full p-4 rounded-[16px] shadow-md">
      <h1 className="sm:text-2xl text-xl font-bold capitalize">
        {category} News
      </h1>
      <h2 className="sm:text-lg text-[15px] font-medium">{newsData.title}</h2>
      <a
        href={newsData.url}
        className="text-black font-medium underline xl:text-lg md:text-[15px] text-[12px]"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Article
      </a>
      <img
        src={newsData.image}
        alt="category news"
        className="w-full h-[290px] rounded-[12px] object-fill"
      />
    </div>
  );
};

export default CategoryDisplay;
