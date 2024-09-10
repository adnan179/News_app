import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import BreakingNews from "./components/BreakingNews";
import TopPicks from "./components/TopPicks";
import Filters from "./components/Filters";
import CategoryDisplay from "./components/CategoryDisplay";
import NewsGrid from "./components/NewsGrid";
import SearchComponent from "./components/Search";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState("en");
  const [category, setCategory] = useState("general");
  const [visibleNewsCount, setVisibleNewsCount] = useState(4); //pagination count
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  //function to get a random number for category display component
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //to fetch news using lang, category and country
  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      try {
        let response = await axios.get(
          `https://news-app-murex-psi.vercel.app/news/top-headlines?lang=${lang}&category=${category}`
        );
        setNews(response.data.articles);
        console.log(response.data.articles);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };
    getNews();
    // Reset visibleNewsCount when language or category changes
    setVisibleNewsCount(4); // Reset to show only 4 news initially
  }, [lang, category]);

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
  };
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  //function to handle pagination
  const handlePagination = () => {
    setVisibleNewsCount((prevCount) => prevCount + 4);
  };

  //function to get searched articles
  const handleSearch = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        `https://news-app-murex-psi.vercel.app/news/search?query=${searchText}&lang=${lang}&category=${category}`
      );
      setSearchResults(response.data.articles);
      setSearchVisible(true);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  const handleCloseSearch = () => {
    setSearchVisible(false);
    setSearchResults([]);
    setSearchText("");
  };

  const middleIndex = Math.ceil(news.length / 2); // Find the middle index
  const firstHalfData = news.slice(0, middleIndex); // First half of the array
  const secondHalfData = news.slice(middleIndex); // second half of the array

  return (
    <div className="flex flex-col gap-3 w-full min-h-screen bg-[#ECF4FC] p-4">
      {searchVisible ? (
        <SearchComponent
          searchResults={searchResults}
          onClose={handleCloseSearch}
          loading={loading}
        />
      ) : (
        <>
          <div className="flex md:flex-row flex-col gap-2 w-full">
            <div className="flex flex-col gap-3 xl:w-[70%] md:w-[60%] w-full">
              <Navbar
                onLanguageChange={handleLanguageChange}
                selectedLang={lang}
              />
              <div>
                <BreakingNews newsData={firstHalfData} loading={loading} />
              </div>
            </div>
            <div className="flex md:flex-col flex-col-reverse gap-3 xl:w-[30%] md:w-[40%] w-full">
              <div className="flex flex-row items-center w-full">
                <input
                  type="text"
                  placeholder="type something..."
                  className="md:text-lg px-4 py-2 font-medium text-gray-500 outline-none rounded-l-[24px] shadow-md"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                  onClick={handleSearch}
                  className="md:text-lg flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-r-[24px] shadow-md"
                >
                  Search
                </button>
              </div>

              <div>
                <TopPicks newsData={secondHalfData} loading={loading} />
              </div>
            </div>
          </div>
          {/* first section */}
          {/* second section */}
          <div className="flex md:flex-row flex-col-reverse gap-2 w-full">
            <div className="md:w-[60%] w-full">
              <CategoryDisplay
                newsData={news[getRandomNumber(0, news.length)]}
                category={category}
                loading={loading}
              />
            </div>
            <div className="md:w-[40%] w-full">
              <Filters
                selectedCategory={category}
                selectedLang={lang}
                onLanguageChange={handleLanguageChange}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </div>
          {/* second section */}
          {/* third section */}
          <div>
            <NewsGrid
              newsData={news}
              loading={loading}
              visibleNewsCount={visibleNewsCount}
              onViewMore={handlePagination}
            />
          </div>
          {/* third section */}
        </>
      )}
    </div>
  );
};

export default App;
