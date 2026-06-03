import { useState } from "react";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";
import productIcon from "../../../assets/icons/Vector.svg";
import SearchBar from "../../ui/searchbar/SearchBar";

const Navbar = ({ route }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [search, setSearch] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const getTitle = () => {
    if (route.includes("products")) return "Products";
    return "Dashboard";
  };

  const getIcon = () => {
    if (route.includes("products")) return productIcon;
    return null;
  };

  const showSearchBar = true;

  return (
    <div className="w-full border-b border-[#D1D5DB] bg-white dark:bg-gray-900">

      <div className="hidden md:flex h-14 items-center px-4">

   
        <div className="flex items-center gap-2 flex-shrink-0">
          {getIcon() && (
            <img src={getIcon()} className="w-5 h-5" />
          )}

          <h1 className="text-lg font-bold whitespace-nowrap">
            {getTitle()}
          </h1>
        </div>

       
        <div className="flex-1 flex justify-end">
          <div className="w-full max-w-md">
            {showSearchBar && (
              <SearchBar
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Services, Products..."
                compact
              />
            )}
          </div>
        </div>

     
        <div className="flex items-center gap-3 flex-shrink-0">
          <input
            type="file"
            id="profileUpload"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />

          <label
            htmlFor="profileUpload"
            className="flex items-center gap-1 cursor-pointer px-2 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="profile"
                className="w-8 h-8 rounded-full object-cover border"
              />
            ) : (
              <FaUserCircle className="w-8 h-8 text-gray-500" />
            )}

            <FaChevronDown className="text-gray-500 text-xs mt-1" />
          </label>
        </div>
      </div>

     
      <div className="md:hidden">

        <div className="h-14 flex items-center justify-between px-4">

     
          <div className="flex items-center gap-2">
            {getIcon() && (
              <img src={getIcon()} className="w-5 h-5" />
            )}

            <h1 className="text-lg font-bold">
              {getTitle()}
            </h1>
          </div>

      
          <div className="flex items-center gap-3">
            <input
              type="file"
              id="profileUploadMobile"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />

            <label
              htmlFor="profileUploadMobile"
              className="cursor-pointer"
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="profile"
                  className="w-8 h-8 rounded-full object-cover border"
                />
              ) : (
                <FaUserCircle className="w-8 h-8 text-gray-500" />
              )}
            </label>

            <FaChevronDown className="text-gray-500 text-xs mt-1" />
          </div>
        </div>

       
        <div className="px-4 pb-2">
          {showSearchBar && (
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Services, Products..."
            />
          )}
        </div>

      </div>

    </div>
  );
};

export default Navbar;