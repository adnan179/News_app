import React from "react";

const SearchComponent = ({ searchResults, onClose, loading }) => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col gap-4 p-6 rounded-lg shadow-lg z-50 overflow-auto">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full"
      >
        X
      </button>
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      ) : searchResults.length === 0 ? (
        <h2>No results found</h2>
      ) : (
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4">
          {searchResults.map((news, index) => (
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
              <h2 className="lg:text-lg md:text-sm font-medium">
                {news.title}
              </h2>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
