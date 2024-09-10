import React from "react";
import { categories, languageOptions } from "../data";

const Filters = ({
  selectedLang,
  selectedCategory,
  onLanguageChange,
  onCategoryChange,
}) => {
  const handleLangChange = (code) => {
    onLanguageChange(code);
  };

  const handleCategoryChange = (category) => {
    onCategoryChange(category);
  };

  return (
    <div className="w-full rounded-[16px] shadow-lg flex flex-col gap-2 bg-gradient-to-br from-[#62CFF4] to-[#39788E] xl:p-6 p-3">
      <h1 className="text-white font-bold xl:text-3xl text-xl">Filters</h1>

      {/* Category Section */}
      <div className="flex flex-col gap-2">
        <h3 className="font-medium text-white/80 xl:text-xl text-sm">
          Category:
        </h3>
        <div className="flex flex-row flex-wrap gap-2 text-white font-medium xl:text-lg text-[12px]">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryChange(category)} // Pass the category value on click
              className={`cursor-pointer px-2 py-1 rounded-lg ${
                category === selectedCategory ? "bg-white text-black" : ""
              }`}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Language Section */}
      <div className="flex flex-col gap-2">
        <h3 className="font-medium text-white/80 xl:text-xl text-sm">
          Language:
        </h3>
        <div className="flex flex-row flex-wrap gap-2 text-white font-medium xl:text-lg text-[12px]">
          {languageOptions.map((language, index) => (
            <div
              key={index}
              onClick={() => handleLangChange(language.code)} // Pass the language code on click
              className={`cursor-pointer px-2 py-1 rounded-lg ${
                language.code === selectedLang ? "bg-white text-black" : ""
              }`}
            >
              {language.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
