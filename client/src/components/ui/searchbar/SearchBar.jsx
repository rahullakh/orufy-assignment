import { FaSearch } from "react-icons/fa";

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search...",
  compact = false, 
}) => {
  return (
    <div className={`w-full ${compact ? "max-w-md" : ""}`}>

      <div className="
        flex items-center gap-2
        border border-gray-300 dark:border-gray-600
        rounded-md
        bg-[#eeeff2] dark:bg-gray-800
        focus-within:ring-2 focus-within:ring-blue-500
        transition
        px-3
        py-2
        hover:shadow-sm
      ">

       
        <FaSearch className="text-gray-400 text-sm flex-shrink-0" />

    
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full bg-transparent outline-none
            text-sm text-gray-700 dark:text-gray-200
          "
        />
      </div>

    </div>
  );
};

export default SearchBar;