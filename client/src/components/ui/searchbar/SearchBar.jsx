import { IoSearch } from "react-icons/io5";

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="flex items-center gap-2 w-full sm:max-w-lg border border-gray-300  rounded-sm px-3 py-2 bg-gray-100 focus-within:border-[#4050FF] transition">
      
      <IoSearch className="text-gray-500 text-lg sm:text-xl" />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full outline-none font-semibold text-sm sm:text-base"
      />
    </div>
  );
};

export default SearchBar;