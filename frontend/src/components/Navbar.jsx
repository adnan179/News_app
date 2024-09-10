import { languageOptions } from "../data";

const Navbar = ({ onLanguageChange, selectedLang }) => {
  const handleLangChange = (e) => {
    onLanguageChange(e.target.value);
  };
  return (
    <div className="flex flex-row justify-between w-full">
      <div className="bg-white px-4 py-2 rounded-[24px] shadow-md text-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#62CFF4] to-[#39788E] bg-clip-text text-transparent">
          aconews
        </h1>
      </div>
      <select
        className="bg-white px-4 py-2 rounded-[36px] shadow-md outline-none"
        onChange={handleLangChange}
        value={selectedLang}
      >
        {languageOptions.map(({ name, code }) => (
          <option key={code} value={code}>
            {name} {`(${code})`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Navbar;
